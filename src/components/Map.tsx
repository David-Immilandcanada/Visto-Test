import { useEffect } from 'react';
import L from 'leaflet';

interface MapProps {
    lat: number;
    lng: number;
}

const Map = ({ lat, lng }: MapProps) => {
    useEffect(() => {
        const map = L.map('map').setView([lat, lng], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        L.marker([lat, lng]).addTo(map);
    }, [lat, lng]);

    return <div id="map" style={{ height: '300px', width: '100%' }}></div>;
};

export default Map;
