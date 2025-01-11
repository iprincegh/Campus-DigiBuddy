import React, { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import $ from 'jquery';

const Uni = () => {
    useEffect(() => {
        // Load protected sites GeoJSON data
        $.getJSON("/Users/iprincetech/Desktop/buddy 2/src/university_buildings_munster.geojson", function (data) {
            const geoJsonLayer = L.geoJSON(data, {
                onEachFeature: function (feature, layer) {
                    // Bind a popup to each protected site with its name
                    const street = feature.properties['addr:street'] || 'No street info';
                    const postcode = feature.properties['addr:postcode'] || 'No postcode';
                    const name = feature.properties['name'] || 'No name';

                    // Bind popup
                    layer.bindPopup(`
                        <strong>${name}</strong><br>
                        ${street}, ${postcode}
                    `);
                },
            });

            // Add the GeoJSON layer to the map
            geoJsonLayer.addTo(window.map);
        });
    }, []);

    return (
        <MapContainer
            center={[51.9607, 7.6261]}
            zoom={8}
            style={{ width: '100%', height: '100vh' }}
            whenCreated={(mapInstance) => { window.map = mapInstance; }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                maxZoom={25}
                attribution="© OpenStreetMap contributors"
            />
        </MapContainer>
    );
};

export default Uni;