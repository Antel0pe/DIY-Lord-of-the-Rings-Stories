'use client'

import React, { useEffect } from 'react';
import { loadMap } from './map';
import { renderFilters, onFilterChange } from './filters';

const MapPage: React.FC = () => {
  useEffect(() => {
    loadMap();
    renderFilters();
    document.querySelectorAll('#filters input[type=checkbox]').forEach((checkbox) => {
      checkbox.addEventListener('change', onFilterChange);
    });
  }, []);

  return (
    <div>
      <div id="middle-earth-map" className="h-screen w-full" style={{ zIndex: -1, position: 'absolute' }}></div>
      <div className="absolute left-0 top-0 bg-white bg-opacity-50 p-4 rounded-lg shadow-lg flex flex-col">
        <div className="flex flex-wrap z-10000">
          <div className="flex flex-col" id="filters">
            <fieldset id="filters-quests" className="mb-4">
                <legend className="text-lg font-bold">Quests</legend>

                <div className="flex items-center">
                    <input data-category="quests" data-filter="all" id="all-quests" name="all-quests" type="checkbox" className="form-checkbox" />
                    <label htmlFor="all-quests" className="ml-2">All</label>
                </div>

                <div className="flex items-center">
                    <input data-category="quests" data-filter="erebor" id="erebor-quest" name="erebor-quest"
                           type="checkbox" className="form-checkbox" />
                    <label htmlFor="erebor-quest" className="ml-2">Quest for Erebor</label>
                </div>

                <div className="flex items-center">
                    <input data-category="quests" data-filter="ring" id="ring-quest" name="ring-quest"
                           type="checkbox" className="form-checkbox" />
                    <label htmlFor="ring-quest" className="ml-2">Quest of the Ring</label>
                </div>
            </fieldset>

            <fieldset id="filters-places" className="mb-4">
                <legend className="text-lg font-bold">Places</legend>

                <div className="flex items-center">
                    <input data-category="places" data-filter="all" id="all-places" name="all-places" type="checkbox" className="form-checkbox" />
                    <label htmlFor="all-places" className="ml-2">All</label>
                </div>

                <div className="flex items-center">
                    <input data-category="places" data-filter="human" id="human-places" name="human-places" type="checkbox" className="form-checkbox" />
                    <label htmlFor="human-places" className="ml-2">Humans</label>
                </div>

                <div className="flex items-center">
                    <input data-category="places" data-filter="elven" id="elven-places" name="elven-places" type="checkbox" className="form-checkbox" />
                    <label htmlFor="elven-places" className="ml-2">Elves</label>
                </div>

                <div className="flex items-center">
                    <input data-category="places" data-filter="dwarven" id="dwarven-places" name="dwarven-places"
                           type="checkbox" className="form-checkbox" />
                    <label htmlFor="dwarven-places" className="ml-2">Dwarves</label>
                </div>

                <div className="flex items-center">
                    <input data-category="places" data-filter="hobbit" id="hobbit-places" name="hobbit-places"
                           type="checkbox" className="form-checkbox" />
                    <label htmlFor="hobbit-places" className="ml-2">Hobbits</label>
                </div>

                <div className="flex items-center">
                    <input data-category="places" data-filter="dark" id="dark-places" name="dark-places" type="checkbox" className="form-checkbox" />
                    <label htmlFor="dark-places" className="ml-2">Evil</label>
                </div>
            </fieldset>

            <fieldset id="filters-events" className="mb-4">
                <legend className="text-lg font-bold">Events</legend>

                <div className="flex items-center">
                    <input data-category="events" data-filter="all" id="all-events" name="all-events" type="checkbox" className="form-checkbox" />
                    <label htmlFor="all-events" className="ml-2">All</label>
                </div>

                <div className="flex items-center">
                    <input data-category="events" data-filter="battle" id="battle-events" name="battle-events"
                           type="checkbox" className="form-checkbox" />
                    <label htmlFor="battle-events" className="ml-2">Battles</label>
                </div>

                <div className="flex items-center">
                    <input data-category="events" data-filter="death" id="death-events" name="death-events"
                           type="checkbox" className="form-checkbox" />
                    <label htmlFor="death-events" className="ml-2">Deaths</label>
                </div>

                <div className="flex items-center">
                    <input data-category="events" data-filter="encounter" id="encounter-events" name="encounter-events"
                           type="checkbox" className="form-checkbox" />
                    <label htmlFor="encounter-events" className="ml-2">Encounters</label>
                </div>
            </fieldset>

            <fieldset id="filters-paths" className="mb-4">
                <legend className="text-lg font-bold">Paths</legend>

                <div className="flex items-center">
                    <input data-category="paths" data-filter="all" id="all-paths" name="all-paths" type="checkbox" className="form-checkbox" />
                    <label htmlFor="all-paths" className="ml-2">All</label>
                </div>

                <div className="flex items-center">
                    <input data-category="paths" data-filter="thorin" id="thorin-path" name="thorin-path"
                           type="checkbox" className="form-checkbox" />
                    <label htmlFor="thorin-path" className="ml-2">Thorin and Company</label>
                </div>

                <div className="flex items-center">
                    <input data-category="paths" data-filter="frodo_sam" id="frodo_sam-path" name="frodo_sam-path"
                           type="checkbox" className="form-checkbox" />
                    <label htmlFor="frodo_sam-path" className="ml-2">Frodo & Sam</label>
                </div>

                <div className="flex items-center">
                    <input data-category="paths" data-filter="merry_pippin" id="merry_pippin-path" name="merry_pippin-path"
                           type="checkbox" className="form-checkbox" />
                    <label htmlFor="merry_pippin-path" className="ml-2">Merry & Pippin</label>
                </div>

                <div className="flex items-center">
                    <input data-category="paths" data-filter="legolas_gimli" id="legolas_gimli-path"
                           name="legolas_gimli-path"
                           type="checkbox" className="form-checkbox" />
                    <label htmlFor="legolas_gimli-path" className="ml-2">Gimli & Legolas</label>
                </div>

                <div className="flex items-center">
                    <input data-category="paths" data-filter="boromir" id="boromir-path" name="boromir-path"
                           type="checkbox" className="form-checkbox" />
                    <label htmlFor="boromir-path" className="ml-2">Boromir</label>
                </div>

                <div className="flex items-center">
                    <input data-category="paths" data-filter="aragorn" id="aragorn-path" name="aragorn-path"
                           type="checkbox" className="form-checkbox" />
                    <label htmlFor="aragorn-path" className="ml-2">Aragorn</label>
                </div>

                <div className="flex items-center">
                    <input data-category="paths" data-filter="gandalf_grey" id="gandalf_grey-path" name="gandalf_grey-path"
                           type="checkbox" className="form-checkbox" />
                    <label htmlFor="gandalf_grey-path" className="ml-2">Gandalf the Grey</label>
                </div>

                <div className="flex items-center">
                    <input data-category="paths" data-filter="gandalf_white" id="gandalf_white-path"
                           name="gandalf_white-path"
                           type="checkbox" className="form-checkbox" />
                    <label htmlFor="gandalf_white-path" className="ml-2">Gandalf the White</label>
                </div>
            </fieldset>
          </div>
        </div>
      </div>
        <footer className="absolute bottom-0 w-full bg-gray-800 text-white p-4">
            <p id="credits">Credits to Emil Johansson, creator of <a href="http://lotrproject.com"
                                                                        rel="noopener noreferrer" target="_blank" className="text-blue-500 hover:text-blue-700">lotrproject.com</a>,
                for creating the map used in this website.</p>
            Credits to <a href="https://yohannbethoule.com" rel="noopener noreferrer" target="_blank" className="text-blue-500 hover:text-blue-700">Yohann
            Bethoule</a> for the site data and base code. <a href="https://www.buymeacoffee.com/yohannbethoule" rel="noopener noreferrer" target="_blank" className="text-blue-500 hover:text-blue-700">Buy him a coffee.</a>
        </footer>
    </div>
  );
};

export default MapPage;