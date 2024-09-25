// import { renderMarkersFromFilters } from "./markers";
import { renderPathsFromFilters } from "./paths";
import { renderMarkersFromFilters } from "./markers";



export interface Filters {
    places: string[];
    events: string[];
    quests: string[];
    paths: string[];
    'map-layers': string[];
}

const getFilters = (): Filters => {
    const filters: Filters = {
        'places': [] as string[],
        'events': [] as string[],
        'quests': [] as string[],
        'paths': [] as string[],
        'map-layers': [] as string[],
    };
    document.querySelectorAll('#filters fieldset').forEach((category: Element) => {
        (category.querySelectorAll('input[type=checkbox]:checked') as NodeListOf<HTMLInputElement>).forEach((filter: HTMLInputElement) => {
            if (filter.dataset.category && filter.dataset.filter) {
                filters[filter.dataset.category as keyof Filters].push(filter.dataset.filter);
            }
        });
    });
    
    return filters;
}

export const onFilterChange = (e: Event) => {
    const element = e.target as HTMLInputElement;
    if (element.dataset.filter === 'all') {
        document.querySelectorAll(`#filters-${element.dataset.category} input[type=checkbox]:not([data-filter=all])`).forEach((el: Element) => {
            if (element.checked) {
                (el as HTMLInputElement).checked = true;
                (el as HTMLInputElement).disabled = true;
            } else {
                (el as HTMLInputElement).checked = false;
                (el as HTMLInputElement).disabled = false;
            }
        });
    }
    renderFilters();
}

export const renderFilters = () => {
    const filters = getFilters();
    renderMarkersFromFilters([...filters.places, ...filters.events, ...filters.quests]);
    renderPathsFromFilters(filters);
}
