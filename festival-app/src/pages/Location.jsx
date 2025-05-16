import { MapContainer, ImageOverlay, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import mapImage from "/map.png";
import React, { useState } from "react";

const bounds = [
  [0, 0], // top-left corner
  [9747, 5651], // bottom-right corner (adjust to your image's aspect ratio)
];

export default function Location() {
  const [showUser, setShowUser] = useState(false);

  // Simulated user location on the image (center)
  const userImageCoords = [1170, 668];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#eaf6fb] to-[#f7fafc] py-8">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md flex flex-col items-center">
        <h2 className="text-3xl text-[#247BA0] font-bold mb-2 tracking-tight">
          Festival Locatie
        </h2>
        <p className="text-gray-600 mb-4 text-center">
          Bekijk de plattegrond en vind de verschillende stages!
        </p>
        <button
          className="mb-4 px-4 py-2 bg-[#247BA0] text-white rounded-lg shadow"
          onClick={() => setShowUser((prev) => !prev)}
        >
          {showUser ? "Verberg mijn locatie" : "Toon mijn locatie"}
        </button>
        <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg mb-2 border border-gray-200">
          <MapContainer
            crs={L.CRS.Simple}
            bounds={bounds}
            maxBounds={bounds}
            maxBoundsViscosity={1.0}
            style={{ height: "100%", width: "100%" }}
            minZoom={-3}
          >
            <ImageOverlay url={mapImage} bounds={bounds} />
            <Marker position={[7690, 2090]}>
              <Popup>Ponton</Popup>
            </Marker>
            <Marker position={[2900, 3500]}>
              <Popup>The Club</Popup>
            </Marker>
            <Marker position={[4500, 3080]}>
              <Popup>The Lake</Popup>
            </Marker>
            <Marker position={[900, 4700]}>
              <Popup>The Hanggar</Popup>
            </Marker>
            {showUser && (
              <Marker position={userImageCoords}>
                <Popup>Jij bent hier (gesimuleerd)</Popup>
              </Marker>
            )}
          </MapContainer>
        </div>
        <span className="text-xs text-gray-400">Plattegrond © Festival</span>
      </div>
    </div>
  );
}
