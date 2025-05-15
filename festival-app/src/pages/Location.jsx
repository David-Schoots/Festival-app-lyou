import { MapContainer, ImageOverlay, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import mapImage from "/map.png";

const bounds = [
  [0, 0], // top-left corner
  [2340, 1336], // bottom-right corner (adjust to your image's aspect ratio)
];

export default function Location() {
  return (
    <div className="ml-8 flex flex-col items-center justify-center mb-5">
      <h2 className="text-4xl text-[#247BA0] font-bold mt-12 mb-8">Location</h2>
      <div className="w-full max-w-xs h-[600px] rounded-lg overflow-hidden shadow-lg mb-8">
        <MapContainer
          crs={L.CRS.Simple}  
          bounds={bounds}
          maxBounds={bounds}
          maxBoundsViscosity={1.0}
          style={{ height: "100%", width: "100%" }}
          minZoom={-2}
        >
          <ImageOverlay url={mapImage} bounds={bounds} />
          {/* Example marker: */}
          <Marker position={[1850, 480]}>
            <Popup>Ponton</Popup>
          </Marker>
          <Marker position={[1060, 710]}>
            <Popup>The Lake</Popup>
          </Marker>
          <Marker position={[700, 800]}>
            <Popup>The Club</Popup>
          </Marker>
          <Marker position={[200, 1100]}>
            <Popup>The Hanggar</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
