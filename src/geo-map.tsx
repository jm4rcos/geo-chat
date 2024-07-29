import React, { useState } from "react";
import "./App.css";
import * as d3 from "d3";
import * as topojson from "topojson-client";

const countryData = {
  USA: {
    name: "United States",
    population: "331 million",
    climate: "Varied",
    capital: "Washington, D.C.",
  },
  CAN: {
    name: "Canada",
    population: "38 million",
    climate: "Mostly continental",
    capital: "Ottawa",
  },
  GBR: {
    name: "United Kingdom",
    population: "67 million",
    climate: "Temperate",
    capital: "London",
  },
  AUS: {
    name: "Australia",
    population: "25 million",
    climate: "Mostly arid to semi-arid",
    capital: "Canberra",
  },
};

const countryCounts = {
  USA: 1,
  CAN: 1,
  GBR: 1,
  AUS: 1,
};

const colorMap = {
  USA: "#FFE4E1",
  CAN: "#E0FFFF",
  GBR: "#98FB98",
  AUS: "#FFA07A",
};

const GeoMap: React.FC = () => {
  const [activeCountry, setActiveCountry] = useState<string | null>(null);

  const updateCountryInfo = (countryCode: string) => {
    const country = countryData[countryCode];
    if (country) {
      // Atualize a informação do país conforme necessário
    }
  };

  const highlightCountry = (countryCode: string, color: string) => {
    // Função para destacar o país no mapa
  };

  const resetCountries = () => {
    // Função para redefinir as cores dos países
  };

  const updateUserInfo = (countryCode: string) => {
    // Atualize as informações do usuário conforme necessário
  };

  // Carregue e exiba o mapa mundial usando D3.js
  React.useEffect(() => {
    const width = 800;
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

    d3.json(
      "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
    ).then((world) => {
      g.selectAll("path")
        .data(topojson.feature(world, world.objects.countries).features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", "#FFFFFF")
        .attr("stroke", "#000000")
        .attr("stroke-width", "1")
        .attr("id", (d: any) => `country-${d.id}`)
        .on("mouseover", function (event, d) {
          if (activeCountry !== d.id) {
            d3.select(this).attr("fill", "#E6E6FA");
          }
        })
        .on("mouseout", function (event, d) {
          if (activeCountry !== d.id) {
            d3.select(this).attr("fill", "#FFFFFF");
          }
        })
        .on("click", function (event, d) {
          const countryCode = Object.keys(countryData).find(
            (key) => countryData[key].name === d.properties.name
          );
          if (countryCode) {
            updateCountryInfo(countryCode);
          }
        });

      Object.keys(countryCounts).forEach((countryCode) => {
        const country = countryData[countryCode];
        const centroid = path.centroid(
          topojson
            .feature(world, world.objects.countries)
            .features.find((d) => d.properties.name === country.name)
        );

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
          .text(countryCounts[countryCode]);
      });

      const zoom = d3
        .zoom()
        .scaleExtent([1, 8])
        .on("zoom", (event) => {
          g.attr("transform", event.transform);
        });

      svg.call(zoom);
    });
  }, [activeCountry]);

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="panel p-4 bg-white border-4 border-black overflow-y-auto shadow-lg">
        <div className="search-container flex items-center bg-gray-200 border-2 border-black rounded-lg p-2 mb-4">
          <span className="search-icon mr-2">🔍</span>
          <input
            className="flex-grow bg-transparent border-none outline-none text-sm"
            type="text"
            placeholder="Search..."
          />
          <span className="add-icon bg-yellow-300 rounded-full w-6 h-6 flex items-center justify-center font-bold cursor-pointer ml-2">
            +
          </span>
        </div>
        <div className="chat-item flex items-center p-2 border-b border-gray-200 cursor-pointer transition-all hover:bg-pink-100">
          <div className="chat-avatar w-10 h-10 rounded-full bg-gray-300 mr-2 flex items-center justify-center font-bold overflow-hidden">
            <img src="https://i.imgur.com/6Wkqg4H.png" alt="Sepideh avatar" />
          </div>
          <div className="chat-info flex-grow">
            <div className="chat-name font-bold mb-1">Sepideh</div>
            <div className="chat-message text-sm text-gray-600">
              Just finished her challenge for today!
            </div>
            <div className="chat-stars text-sm text-yellow-500">
              ⭐ 50 Stars
            </div>
          </div>
          <div className="chat-options cursor-pointer">⋮</div>
        </div>
        {/* Repita para outros chat-items */}
      </div>
      <div className="panel p-4 bg-white border-4 border-black overflow-y-auto shadow-lg">
        <h1 className="text-pink-500">ChatterBox Global Connections</h1>
        <div id="main-content" className="flex gap-4">
          <div
            id="map"
            className="flex-1 h-80 bg-white border-4 border-black relative overflow-hidden"
          ></div>
          <div
            id="dashboard"
            className="flex-1 bg-white border-4 border-black p-4 overflow-y-auto"
          >
            <h2 className="text-pink-500">Global Activity Dashboard</h2>
            <div id="activity-stats"></div>
          </div>
        </div>
        <div
          id="conversation"
          className="mt-4 bg-white border-4 border-black p-4 h-72 overflow-y-auto flex flex-col"
        >
          <button
            id="expand-button"
            className="bg-yellow-300 border-2 border-black rounded-lg py-2 px-4 font-bold cursor-pointer mb-2"
          >
            Expand Conversation
          </button>
          <h2 className="text-pink-500">Conversation</h2>
          <div className="message received bg-blue-100 p-2 rounded-lg mb-2 self-start">
            <strong>Sepideh:</strong> Hey everyone! I just finished today's
            design challenge. It was tough but so rewarding!
          </div>
          <div className="message sent bg-gray-100 p-2 rounded-lg mb-2 self-end">
            <strong>You:</strong> That's awesome, Sepideh! What was the
            challenge about?
          </div>
          <div className="message received bg-blue-100 p-2 rounded-lg mb-2 self-start">
            <strong>Sepideh:</strong> It was about creating an intuitive UI for
            a smart home app. I tried to make it accessible for all ages.
          </div>
          <div className="message received bg-blue-100 p-2 rounded-lg mb-2 self-start">
            <strong>Emily:</strong> Sounds interesting! I'm working on a new app
            design too. Maybe we can exchange some ideas?
          </div>
          <div className="message sent bg-gray-100 p-2 rounded-lg mb-2 self-end">
            <strong>You:</strong> Great idea! Collaboration always leads to
            better results. What's your app about, Emily?
          </div>
          <div className="message received bg-blue-100 p-2 rounded-lg mb-2 self-start">
            <strong>Emily:</strong> It's a sustainable living app, helping
            people reduce their carbon footprint. I'd love some input on the
            user flow!
          </div>
          <div id="message-input-container" className="flex mt-2">
            <input
              id="message-input"
              className="flex-grow p-2 border-2 border-black rounded-lg text-sm outline-none"
              type="text"
              placeholder="Type your message..."
            />
            <button
              id="send-button"
              className="bg-yellow-300 border-2 border-black rounded-lg py-2 px-4 font-bold cursor-pointer ml-2"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="panel p-4 bg-white border-4 border-black overflow-y-auto shadow-lg">
        <h2 className="text-pink-500">Current Country</h2>
        <div className="country-info">
          {activeCountry && countryData[activeCountry] ? (
            <div>
              <h3 className="text-xl font-bold">
                {countryData[activeCountry].name}
              </h3>
              <p>Population: {countryData[activeCountry].population}</p>
              <p>Climate: {countryData[activeCountry].climate}</p>
              <p>Capital: {countryData[activeCountry].capital}</p>
            </div>
          ) : (
            <p>Select a country to see its information.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeoMap;
