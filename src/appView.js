/* eslint-disable no-undef */
import moment from 'moment';

const updateLocation = (city, country) => {
  document.querySelector(
    '#location'
  ).textContent = `Weather Today in ${city}, ${country}`;
};

const updateTime = () => {
  const time = moment().format('LT');
  document.querySelector('#time').textContent = `as of ${time}.`;
};

const updateTemp = (temp, option) => {
  const unit = option === 'imperial' ? 'F' : 'C';
  document.querySelector('#degrees').textContent = `${temp}°${unit}`;
};

const updateIcon = (url) => {
  document.querySelector('#pic').setAttribute('src', url);
};

const updateDescription = (desc, temp) => {
  document.querySelector(
    '#description'
  ).textContent = `${desc}. Feels like ${temp}°.`;
};

const updateHumidity = (humidity) => {
  document
    .querySelector('#humidity')
    .querySelector('.right-detail').textContent = humidity;
};

const updateHighLow = (high, low) => {
  document
    .querySelector('#high-low')
    .querySelector('.right-detail').textContent = `${high}°/${low}°`;
};

const updateWind = (speed, deg, option) => {
  const unit = option === 'imperial' ? 'mph' : 'm/s';

  document.querySelector('.arrow').style.transform = `rotate(${deg}deg)`;
  document.querySelector(
    '.arrow'
  ).nextElementSibling.textContent = `${speed} ${unit}`;
};

const updateCloudiness = (cloudiness) => {
  document
    .querySelector('#cloudiness')
    .querySelector('.right-detail').textContent = cloudiness;
};

const setUnit = (option) => {
  document.querySelector('#farenheit-btn').classList.remove('active');
  document.querySelector('#celcius-btn').classList.remove('active');

  if (option === 'imperial') {
    document.querySelector('#farenheit-btn').classList.add('active');
  } else {
    document.querySelector('#celcius-btn').classList.add('active');
  }
};

const updateUI = (data) => {
  updateLocation(data.city, data.country);
  updateTime();
  updateTemp(data.temp, data.option);
  updateIcon(data.iconId);
  updateDescription(data.description, data.feelsLike);
  updateHumidity(data.humidity);
  updateHighLow(data.tempMax, data.tempMin);
  updateWind(data.windSpeed, data.windDeg, data.option);
  updateCloudiness(data.cloudiness);
  setUnit(data.option);
};

export default updateUI;
