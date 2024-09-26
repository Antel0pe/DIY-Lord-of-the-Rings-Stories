import markersData from "./markers.json";
import {
    battleIcon,
    darkIcon,
    deathIcon,
    dwarfIcon,
    elfIcon,
    encounterIcon,
    hobbitIcon,
    humanIcon
} from "./mapIcons";
import { map, cluster } from "./map";
import { Filters } from "./filters";
import L, { marker } from "leaflet";
import 'leaflet.markercluster';


interface MarkerData {
    title: string;
    sindarinTitle?: string;
    date?: string;
    description?: string;
    infoLink?: string;
    altTimeline?: boolean
    tags: {
        events?: string[];
        places?: string[];
    };
    x: number;
    y: number;
}

export const createInfoDialog = (data: MarkerData): string => {
    let info = ``;
    if (data.title) {
        info += `<h1 class="title">${data.title}`;
        if (data.sindarinTitle) {
            info += ` (${data.sindarinTitle})`
        }
        info += `</h1>`;
    }
    if (data.date) {
        info += `<h2 class="date">[${data.date}]</h2>`;
    }
    if (data.description) {
        info += `<p class="description">${data.description}</p>`;
    }
    if (data.infoLink) {
        info += `<span class="info-link-container"><a class="info-link" href="${data.infoLink}" target="_blank">Learn more on Tolkien Gateway</a></span>`;
    }

    if (data.altTimeline){
        info += `<input type="text" id="altTimelineSearchBar" placeholder="What if..."><button id="altTimelineButton">Enter</button>`;
    }
    return info;
}

export const renderMarkersFromFilters = (filters: String[]) => {
    if (cluster) {
        cluster.clearLayers();
    }
    let isRendered = false;
    let markers = [];

    for (const m of markersData) {
        isRendered = false;
        const flattenedTags: Array<String> = Object.values(m.tags).flat();
        isRendered = filters.some(filter => flattenedTags.includes(filter));
        if (isRendered) {
            markers.push(createMarker(map, m));
        }

    }
    cluster.addLayers(markers)
}

export const renderMarkersByName = (names: String[]) =>{
    if (cluster) {
        cluster.clearLayers();
    }

    let markers = [];
    for (const m of markersData) {
        if (names.includes(m.title)) {
            let altTimeline = {
                ...m,
                altTimeline: true
            }
            markers.push(createMarker(map, altTimeline));
        }
    }
    cluster.addLayers(markers);
}

const createMarker = (map: L.Map, data: MarkerData): L.Marker => {
    const sol = L.latLng([4334 - data.y, data.x]);
    let markerOptions: { title: string; alt: string; icon?: any } = {
        title: data.title,
        alt: data.title,
    }
    if (data.tags?.events?.includes('battle')) {
        markerOptions.icon = battleIcon;
    } else if (data.tags?.events?.includes('death')) {
        markerOptions.icon = deathIcon;
    } else if (data.tags?.events?.includes('encounter')) {
        markerOptions.icon = encounterIcon;
    } else if (data.tags?.places?.includes('dwarven')) {
        markerOptions.icon = dwarfIcon;
    } else if (data.tags?.places?.includes('elven')) {
        markerOptions.icon = elfIcon;
    } else if (data.tags?.places?.includes('human')) {
        markerOptions.icon = humanIcon;
    } else if (data.tags?.places?.includes('dark')) {
        markerOptions.icon = darkIcon;
    } else if (data.tags?.places?.includes('hobbit')) {
        markerOptions.icon = hobbitIcon;
    }
    return L.marker(sol, markerOptions).bindPopup(createInfoDialog(data));
}
