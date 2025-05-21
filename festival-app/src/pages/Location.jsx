import {
  MapContainer,
  ImageOverlay,
  Marker,
  Popup,
  Circle,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import mapImage from "/map.png";
import React, { useState, useEffect, useRef } from "react";

const entranceIcon = new L.Icon({
  iconUrl: "/marker_entrance_exit.svg", // path to your SVG
  iconSize: [70, 70], // size of the icon
  iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
  popupAnchor: [0, 0], // point from which the popup should open relative to the iconAnchor
  className: "",
});

const barIcon = new L.Icon({
  iconUrl: "/marker_bar.svg", // path to your SVG
  iconSize: [30, 30], // size of the icon
  iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
  popupAnchor: [0, 0], // point from which the popup should open relative to the iconAnchor
  className: "",
});

const firstAidIcon = new L.Icon({
  iconUrl: "/marker_first_aid.svg", // path to your SVG
  iconSize: [30, 30], // size of the icon
  iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
  popupAnchor: [0, 0], // point from which the popup should open relative to the iconAnchor
  className: "",
});

const foodIcon = new L.Icon({
  iconUrl: "/marker_food.svg", // path to your SVG
  iconSize: [30, 30], // size of the icon
  iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
  popupAnchor: [0, 0], // point from which the popup should open relative to the iconAnchor
  className: "",
});

const iceCreamIcon = new L.Icon({
  iconUrl: "/marker_ice_cream.svg", // path to your SVG
  iconSize: [30, 30], // size of the icon
  iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
  popupAnchor: [0, 0], // point from which the popup should open relative to the iconAnchor
  className: "",
});

const lockerIcon = new L.Icon({
  iconUrl: "/marker_locker.svg", // path to your SVG
  iconSize: [30, 30], // size of the icon
  iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
  popupAnchor: [0, 0], // point from which the popup should open relative to the iconAnchor
  className: "",
});

const merchIcon = new L.Icon({
  iconUrl: "/marker_merchandise.svg", // path to your SVG
  iconSize: [30, 30], // size of the icon
  iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
  popupAnchor: [0, 0], // point from which the popup should open relative to the iconAnchor
  className: "",
});

const toiletIcon = new L.Icon({
  iconUrl: "/marker_toilet.svg", // path to your SVG
  iconSize: [30, 30], // size of the icon
  iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
  popupAnchor: [0, 0], // point from which the popup should open relative to the iconAnchor
  className: "",
});

const bounds = [
  [0, 0], // top-left corner
  [9747, 5651], // bottom-right corner
];

export default function Location() {
  const [userLocation, setUserLocation] = useState(null);
  const watchIdRef = useRef(null);

  // Simulated user location on the image (center)
  const userImageCoords = [1170, 668];

  useEffect(() => {
    if (navigator.geolocation) {
      watchIdRef.current = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting user location:", error);
        },
        { enableHighAccuracy: true }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
    return () => {
      if (watchIdRef.current !== null) {
        navigator.geolocation.clearWatch(watchIdRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b dark:bg-none from-[#eaf6fb] to-[#f7fafc] dark:bg-black py-8">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md flex flex-col items-center dark:bg-neutral-900 ">
        <h2 className="text-3xl text-[#247BA0] font-bold mb-2 tracking-tight dark:text-white">
          Festival Locatie
        </h2>
        <p className="text-gray-600 mb-4 text-center dark:text-white">
          Bekijk de plattegrond en vind de verschillende stages!
        </p>

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
            <Marker position={[3000, 800]} icon={entranceIcon}>
              <Popup>Entrance/Exit</Popup>
            </Marker>
            <Marker position={[7200, 1000]} icon={lockerIcon}>
              <Popup>Lockers</Popup>
            </Marker>
            <Marker position={[6690, 1090]} icon={lockerIcon}>
              <Popup>Lockers</Popup>
            </Marker>
            <Marker position={[8050, 1090]} icon={merchIcon}>
              <Popup>Merch</Popup>
            </Marker>
            <Marker position={[6530, 3300]} icon={merchIcon}>
              <Popup>Merch</Popup>
            </Marker>
            <Marker position={[3200, 3600]} icon={merchIcon}>
              <Popup>Merch</Popup>
            </Marker>
            <Marker position={[8450, 1600]} icon={barIcon}>
              <Popup>Bar</Popup>
            </Marker>
            <Marker position={[4400, 3440]} icon={barIcon}>
              <Popup>Bar</Popup>
            </Marker>
            <Marker position={[2670, 4000]} icon={barIcon}>
              <Popup>Bar</Popup>
            </Marker>
            <Marker position={[1740, 4050]} icon={barIcon}>
              <Popup>Bar</Popup>
            </Marker>
            <Marker position={[8900, 1300]} icon={toiletIcon}>
              <Popup>WC</Popup>
            </Marker>
            <Marker position={[4900, 4100]} icon={toiletIcon}>
              <Popup>WC</Popup>
            </Marker>
            <Marker position={[540, 4250]} icon={toiletIcon}>
              <Popup>WC</Popup>
            </Marker>
            <Marker position={[7100, 1900]} icon={iceCreamIcon}>
              <Popup>Icecream</Popup>
            </Marker>
            <Marker position={[6000, 3350]} icon={iceCreamIcon}>
              <Popup>Icecream</Popup>
            </Marker>
            <Marker position={[3800, 3800]} icon={iceCreamIcon}>
              <Popup>Icecream</Popup>
            </Marker>
            <Marker position={[1440, 4750]} icon={iceCreamIcon}>
              <Popup>Icecream</Popup>
            </Marker>
            <Marker position={[8400, 2600]} icon={foodIcon}>
              <Popup>Food</Popup>
            </Marker>
            <Marker position={[6200, 3200]} icon={foodIcon}>
              <Popup>Food</Popup>
            </Marker>
            <Marker position={[7900, 3890]} icon={firstAidIcon}>
              <Popup>EHBO</Popup>
            </Marker>
            <Marker position={[2900, 3500]}>
              <Popup>The Club</Popup>
            </Marker>
            <Marker position={[4500, 3080]}>
              <Popup>The Lake</Popup>
            </Marker>
            <Marker position={[7690, 2090]}>
              <Popup>Ponton</Popup>
            </Marker>
            {userLocation && (
              <>
                <Circle
                  center={userImageCoords}
                  radius={200}
                  pathOptions={{
                    color: "#247BA0",
                    fillColor: "#247BA0",
                    fillOpacity: 0.3,
                  }}
                />
                <Marker position={userImageCoords}>
                  <Popup>
                    Jij bent hier!
                    <br />
                    Latitude: {userLocation.latitude} <br />
                    Longitude: {userLocation.longitude}
                  </Popup>
                </Marker>
              </>
            )}
          </MapContainer>
        </div>
        <span className="text-xs text-gray-400 dark:text-white">
          Plattegrond © Festival
        </span>
      </div>
    </div>
  );
}
