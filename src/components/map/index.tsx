import { useEffect, useState } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import { countryData } from "../../data/country-data";
import { Objects, Topology } from "topojson-specification";
import { FeatureCollection, Geometry, GeoJsonProperties } from "geojson";
import { useCountry } from "../../context/country-context";
import { Country } from "../../interfaces";
import { getPastelColor } from "../../lib/utils";

export const Map = () => {
  const { setSelectedCountry } = useCountry();
  const [activeCountry, setActiveCountry] = useState<string | null>(null);

  const updateCountryInfo = (countryCode: keyof typeof countryData) => {
    const country = countryData[countryCode];
    if (country) {
      setActiveCountry(countryCode);
      updateUserInfo(countryCode);
      updateURLWithCountryCode(countryCode);
    }
  };

  const highlightCountry = (countryCode: string, color: string) => {
    d3.select(`#country-${countryCode}`).attr("fill", color);
  };

  const onSelectCountry = (country: Country) => {
    if (activeCountry === country.code) {
      setActiveCountry(null);
      highlightCountry(country.code as string, "#FFFFFF");
    } else {
      if (activeCountry) {
        highlightCountry(activeCountry, "#FFFFFF");
      }
      const color = getPastelColor();
      highlightCountry(country.code as string, color);
      setActiveCountry(country.code as string);
      setSelectedCountry(country);
      updateCountryInfo(country.code as keyof typeof countryData);
    }
    updateURLWithCountryCode(country.code as string);
  };

  const updateUserInfo = (countryCode: string) => {
    console.log(`Updating user info for country: ${countryCode}`);
  };

  const updateURLWithCountryCode = (countryCode: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set("country", countryCode);
    window.history.pushState({ country: countryCode }, "", url);
  };

  useEffect(() => {
    const width = 700;
    const height = 400;
    const svg = d3
      .select("#map")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "#E3F2FD");
    const g = svg.append("g");
    const projection = d3
      .geoMercator()
      .scale(width / 2.5)
      .translate([width / 2, height / 1.5]);
    const path = d3.geoPath().projection(projection);

    const tooltip = d3.select("#map").append("div").attr("class", "tooltip");
    tooltip
      .style("position", "fixed")
      .style("background", "rgba(255, 255, 255, 0.3)")
      .style("backdrop-filter", "blur(5px)")
      .style("padding", "5px")
      .style("border", "2px solid #000")
      .style("border-radius", "5px")
      .style("font-size", "14px")
      .style("font-weight", "bold")
      .style("opacity", 0);

    d3.json<Topology<Objects<GeoJsonProperties>>>(
      "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
    ).then((world) => {
      if (!world) {
        return;
      }

      const countries = (
        topojson.feature(world, world.objects.countries) as FeatureCollection<
          Geometry,
          GeoJsonProperties
        >
      ).features;

      g.selectAll("path")
        .data(countries)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", "#FFFFFF")
        .attr("stroke", "#000000")
        .attr("stroke-width", "1.5")
        .attr("id", (d) => `country-${d.id}`)
        .on("mouseover", function (event, d) {
          if (activeCountry !== d.id) {
            highlightCountry(d.id?.toString() || "", "#E6E6FA");
            if (d.properties) {
              tooltip
                .style("opacity", 1)
                .html(d.properties.name)
                .style("left", event.pageX + 10 + "px")
                .style("top", event.pageY - 28 + "px");
            }
          }
        })
        .on("mousemove", function (event) {
          tooltip
            .style("left", event.pageX + 10 + "px")
            .style("top", event.pageY - 28 + "px");
        })
        .on("mouseout", function (_, d) {
          if (activeCountry !== d.id) {
            highlightCountry(d.id?.toString() || "", "#FFFFFF");
          }
          tooltip.style("opacity", 0);
        })
        .on("click", function (event, d) {
          const countryCode = d.id?.toString() || "";
          onSelectCountry({
            name: d.properties?.name || "",
            x: event.pageX,
            y: event.pageY,
            code: countryCode,
          });
        });

      const zoom = d3
        .zoom<SVGSVGElement, unknown>()
        .scaleExtent([1, 8])
        .on("zoom", (_) => {
          g.attr("transform", _.transform);
        });

      svg.call(zoom);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCountry]);

  return (
    <div
      id="map"
      className="flex-1 max-w-auto max-h-[350px] bg-white border-2 border-black relative rounded-2xl overflow-hidden"
    />
  );
};
