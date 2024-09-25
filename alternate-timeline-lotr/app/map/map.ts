import mapImage from "../assets/map.webp";
import {renderFilters} from "./filters";
import L from 'leaflet'; // Ensure to import Leaflet

export let map: L.Map, pathsLayer: L.LayerGroup, cluster: L.MarkerClusterGroup;

export const loadMap = async () => {
    map = L.map('middle-earth-map', {
        crs: L.CRS.Simple,
        minZoom: getMinZoomFromDevice(),
        maxZoom: 2
    });

    const bounds = L.latLngBounds([0, 0], [5000, 4334]);
    L.imageOverlay('../assets/map.webp', bounds).addEventListener('load', () => {
        renderFilters();
    }).addTo(map);

    map.fitBounds(bounds);

    cluster = L.markerClusterGroup({
        maxClusterRadius: 20
    });
    map.addLayer(cluster);

    pathsLayer = L.layerGroup([]);
    map.addLayer(pathsLayer);
}

export const getMinZoomFromDevice = () => {
    if (window.innerWidth < 768) {
        return -4;
    } else {
        return -2;
    }
}
