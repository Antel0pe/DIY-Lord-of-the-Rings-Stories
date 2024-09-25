import * as L from 'leaflet';

const iconSize: [number, number] = [30, 30];
const iconAnchor: [number, number] = [15, 30];
const popupAnchor: [number, number] = [3, -27];

export const battleIcon = L.icon({
    iconUrl: '/icons/swords.svg',

    iconSize: iconSize, // size of the icon
    iconAnchor: iconAnchor, // point of the icon which will correspond to marker's location
    popupAnchor: popupAnchor, // point from which the popup should open relative to the iconAnchor
});

export const deathIcon = L.icon({
    iconUrl: '/icons/coffin.svg',
    iconSize: iconSize,
    iconAnchor: iconAnchor,
    popupAnchor: popupAnchor
});

export const encounterIcon = L.icon({
    iconUrl: '/icons/eye.svg',

    iconSize: iconSize,
    iconAnchor: iconAnchor,
    popupAnchor: popupAnchor
});

export const hobbitIcon = L.icon({
    iconUrl: '/icons/hobbit.svg',

    iconSize: iconSize,
    iconAnchor: iconAnchor,
    popupAnchor: popupAnchor
});

export const dwarfIcon = L.icon({
    iconUrl: '/icons/dwarf.svg',

    iconSize: iconSize,
    iconAnchor: iconAnchor,
    popupAnchor: popupAnchor
});

export const elfIcon = L.icon({
    iconUrl: '/icons/elf.svg',

    iconSize: iconSize,
    iconAnchor: iconAnchor,
    popupAnchor: popupAnchor
});

export const humanIcon = L.icon({
    iconUrl: '/icons/castle.svg',

    iconSize: iconSize,
    iconAnchor: iconAnchor,
    popupAnchor: popupAnchor
});

export const darkIcon = L.icon({
    iconUrl: '/icons/evil.svg',

    iconSize: iconSize,
    iconAnchor: iconAnchor,
    popupAnchor: popupAnchor
});