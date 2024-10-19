import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from 'leaflet';
import markerIcon from '../../assets/img/location.png'; // Import your custom marker image

// Define the custom icon
const customIcon = L.icon({
  iconUrl: markerIcon, // Path to your custom marker image
  iconSize: [32, 32], // Size of the icon
  iconAnchor: [16, 32], // Anchor point (half the width, full height)
  popupAnchor: [0, -32], // Point where the popup should open relative to the iconAnchor
});

export default function CollegeFooter() {
  // Coordinates for Hashu Advani Memorial Complex, Chembur, Mumbai
  const position = [19.0451105, 72.8889239];

  return (
    <div className="container">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        
        {/* Address and Map Section */}
        <div className="col mb-3">
          <h5>Location</h5>
          <div style={{ height: "300px", width: "100%" }}>
            <MapContainer center={position} zoom={15} style={{ height: "100%", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position} icon={customIcon}>
      <Popup>Hashu Advani Memorial Complex</Popup>
    </Marker>
            </MapContainer>
          </div>
        </div>

        <div className="col mb-3"></div>

        {/* Useful Links Section */}
        <div className="col mb-3">
          <h5>Useful Links</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                RTI Information
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                NIRF
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                NDL
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                NPTEL Swayam
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Sitemap
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Website Disclaimer Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Related Links Section */}
        <div className="col mb-3">
          <h5>Related Links</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                DTE Maharashtra
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                AICTE Students and Faculty Feedback
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Mandatory Disclosure
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Directory
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Mumbai University
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Government Initiatives
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                AICTE
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="col mb-3">
          <h5>Social Links</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <i className="bi bi-facebook" /> Facebook
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <i className="bi bi-twitter" /> Twitter
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <i className="bi bi-instagram" /> Instagram
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <i className="bi bi-youtube" /> YouTube
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <i className="bi bi-linkedin" /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
