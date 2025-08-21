"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

delete (L.Icon.Default.prototype as any)._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
})

export default function MapComponent() {
  return (
    <MapContainer
      center={[42.0, -78.0]}
      zoom={5}
      scrollWheelZoom={false}
      className="h-full w-full"
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[38.9072, -77.0369]}>
        <Popup>
          <div className="text-center">
            <strong>US Office</strong>
            <br />
            Washington, DC Area
          </div>
        </Popup>
      </Marker>
      <Marker position={[43.6532, -79.3832]}>
        <Popup>
          <div className="text-center">
            <strong>Canada Office</strong>
            <br />
            Toronto, ON Area
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}
