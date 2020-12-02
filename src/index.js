/* eslint-disable no-alert */
/* eslint-disable no-undef */
import Search from './Search';
import updateUI from './appView';
import * as searchView from './searchView';

const state = {
  current: 'Los Angeles',
  unit: 'imperial',
};

const updateData = (type, searchData) => {
  updateUI(searchData);
  searchView.clearForm();

  if (type === 'search') {
    state.unit = searchData.option;
    state.current = searchData.city;
  } else {
    state.unit = searchData.option;
  }
};

const controlSearch = async () => {
  const query = searchView.getInput();

  if (query) {
    state.search = new Search(query, state.unit);
    try {
      await state.search.getResults();
      if (state.search.temp !== undefined) {
        updateData('search', state.search);
      }
    } catch (err) {
      console.log(err);
    }
  }
};

const controlToggle = async () => {
  state.search = new Search(state.current, state.unit);

  try {
    await state.search.getResults();
    updateData('toggle', state.search);
  } catch (err) {
    console.log(err);
  }
};

document.querySelector('#search-bar').addEventListener('submit', (e) => {
  e.preventDefault();
  controlSearch();
});

const toggleUnit = (unit) => {
  if (state.unit === 'imperial' && unit !== 'F') {
    state.unit = 'metric';
    controlToggle();
  } else if (state.unit === 'metric' && unit !== 'C') {
    state.unit = 'imperial';
    controlToggle();
  }
};

document.querySelector('#farenheit-btn').addEventListener('click', () => {
  toggleUnit('F');
});

document.querySelector('#celcius-btn').addEventListener('click', () => {
  toggleUnit('C');
});

window.addEventListener('load', controlToggle);
