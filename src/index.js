/* eslint-disable no-undef */
import Search from './Search';
import updateUI from './view';

const state = {};

// use units: metric = Celcius, Imperial = "farenheit"
const controlSearch = async () => {
  const query = 'los angeles';

  if (query) {
    state.search = new Search('los angeles');

    try {
      await state.search.getResults();
      console.log(state.search);
      updateUI(state.search);
    } catch (err) {
      console.log(err);
    }
  }
};

window.addEventListener('click', controlSearch);
