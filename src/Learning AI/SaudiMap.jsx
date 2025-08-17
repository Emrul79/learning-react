// src/components/MapComponent.jsx
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// Fix Leaflet marker icon issue in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function MapComponent() {
  // Detect dark mode globally (Tailwind class on <html>)
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Office locations
  const offices = [
    {
      id: 1,
      name: "Riyadh Office",
      position: [24.7136, 46.6753],
      description: "Manpower support available here.",
    },
    {
      id: 2,
      name: "Jeddah Office",
      position: [21.4858, 39.1925],
      description: "Providing recruitment services.",
    },
    {
      id: 3,
      name: "Bahrain Office",
      position: [26.0667, 50.5577],
      description: "Regional office for GCC support.",
    },
  ];

  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
      <MapContainer
        center={[23.8859, 45.0792]} // Center of Saudi Arabia
        zoom={6}
        className="h-full w-full"
      >
        {/* Dynamically switch light/dark tiles */}
        <TileLayer
          url={
            isDark
              ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          }
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>'
          subdomains="abcd"
          maxZoom={20}
        />

        {/* Markers + always-open popups */}
        {offices.map((office) => (
          <Marker key={office.id} position={office.position}>
            <Popup autoOpen autoClose={false} closeOnClick={false}>
              <h3 className="font-semibold">{office.name}</h3>
              <p>{office.description}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
