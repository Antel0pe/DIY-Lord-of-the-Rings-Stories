import pathsData from "./paths.json";
import { pathsLayer } from "./map";
import L from 'leaflet'; // Import Leaflet to use its methods
import { renderMarkersByName, renderMarkersFromFilters } from "./markers";

interface PathData {
    id: string;
    name: string;
    startDate: string;
    endDate: string;
    distance: string;
    color: string;
    timelinesPoints: string[]
    path: number[][];
}

export const renderPathsFromFilters = (filters: { paths: string[] }) => {
    pathsLayer.clearLayers();
    for (const p of pathsData as PathData[]) {
        if (filters.paths.includes(p.id)) {
            const latLongs = p.path.map(l => L.latLng([4825 - l[1], l[0]-200]));
            const line = L.polyline(latLongs, { color: p.color, weight: 4 });
            line.bindTooltip(pathTooltip(p), {
                sticky: true,
                className: "path-tooltip"
            }).addTo(pathsLayer);

            // Invisible wider line for easier interaction
            const interactionLine = L.polyline(latLongs, { color: 'transparent', weight: 40 });
            interactionLine.bindTooltip(pathTooltip(p), {
                sticky: true,
                className: "path-tooltip",
            }).addTo(pathsLayer);

            console.log(p.timelinesPoints)
            renderMarkersByName(p.timelinesPoints);
        }
    }
}

const pathTooltip = (path: PathData) => (
    `
        <div class="path-name">${path.name}</div> 
        <div class="path-date">[ ${path.startDate} - <br/> ${path.endDate} ]</div>
        <div class="path-distance">${path.distance}</div> 
    `
);
