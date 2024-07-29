import { useEffect, useState } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import { countryCounts, countryData } from "../data/country-data";
import { Objects, Topology } from "topojson-specification";
import { FeatureCollection, Geometry, GeoJsonProperties } from "geojson";

export const Map = () => {
  const [activeCountry, setActiveCountry] = useState<string | null>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateCountryInfo = (countryCode: keyof typeof countryData) => {
    const country = countryData[countryCode];
    if (country) {
      setActiveCountry(countryCode);
      updateUserInfo(countryCode);
    }
  };

  const highlightCountry = (countryCode: string, color: string) => {
    if (countryCode) {
      d3.select(`#country-${countryCode}`).attr("fill", color);
    }
  };

  // const resetCountries = () => {
  //   d3.selectAll("path").attr("fill", "#FFFFFF");
  // };

  const updateUserInfo = (countryCode: string) => {
    console.log(`Updating user info for country: ${countryCode}`);
    // Lógica para atualizar as informações do usuário
  };

  useEffect(() => {
    const width = 600;
    const height = 400;
    const svg = d3
      .select("#map")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "#FFFFFF");
    const g = svg.append("g");
    const projection = d3
      .geoMercator()
      .scale(width / 2.5)
      .translate([width / 2, height / 1.5]);
    const path = d3.geoPath().projection(projection);

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
        .on("mouseover", function (_, d) {
          if (activeCountry !== d.id) {
            highlightCountry(d.id?.toString() || "", "#E6E6FA");
            if (d.properties) {
              console.log(d.id, d.properties.name);
            }
          }
        })
        .on("mouseout", function (_, d) {
          if (activeCountry !== d.id) {
            highlightCountry(d.id?.toString() || "", "#FFFFFF");
            if (d.properties) {
              console.log(d.id, d.properties.name);
            }
          }
        })
        .on("click", function (_, d) {
          const properties = d.properties ?? {};
          const countryCode = Object.keys(countryData).find(
            (key) =>
              countryData[key as keyof typeof countryData].name ===
              properties.name
          );
          if (countryCode) {
            updateCountryInfo(countryCode as keyof typeof countryData);
          }
        });

      Object.keys(countryCounts).forEach((countryCode) => {
        const country = countryData[countryCode as keyof typeof countryData];
        const countryFeature = countries.find(
          (d) => d.properties && d.properties.name === country.name
        );
        if (countryFeature) {
          const centroid = path.centroid(countryFeature);

          g.append("circle")
            .attr("cx", centroid[0])
            .attr("cy", centroid[1])
            .attr("r", 12)
            .attr("fill", "#FF69B4")
            .attr("stroke", "#FFFFFF")
            .attr("stroke-width", 2);

          g.append("text")
            .attr("x", centroid[0])
            .attr("y", centroid[1])
            .attr("dy", "0.35em")
            .attr("text-anchor", "middle")
            .attr("fill", "#FFFFFF")
            .attr("font-size", "12px")
            .attr("font-weight", "bold")
            .text(
              countryCounts[
                countryCode as keyof typeof countryCounts
              ].toString()
            );
        }
      });

      const zoom = d3
        .zoom<SVGSVGElement, unknown>()
        .scaleExtent([1, 8])
        .on("zoom", (_) => {
          g.attr("transform", _.transform);
        });

      svg.call(zoom);
    });
  }, [activeCountry, updateCountryInfo]);

  return (
    <div
      id="map"
      className="flex-1 max-w-[350px] max-h-[350px] bg-white border-2 border-black relative rounded-2xl overflow-hidden"
    />
  );
};
