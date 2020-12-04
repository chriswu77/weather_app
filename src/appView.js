/* eslint-disable no-undef */
import moment from 'moment';

const setActiveUnit = (option, button) => {
  if (
    (option === 'imperial' && button === 'F') ||
    (option === 'metric' && button === 'C')
  ) {
    return 'active';
  }
  return '';
};

const setWindUnit = (option) => {
  return option === 'imperial' ? 'mph' : 'm/s';
};

const renderContent = (data) => {
  const markup = `
  <div id="header">
    <div id="location">Weather Today in ${data.city}, ${data.country}</div>
    <div id="time">as of ${moment().format('LT')}</div>
  </div>
  <div id="main-display">
    <div id="temp">
        <div id="degrees">${data.temp}°${
    data.option === 'imperial' ? 'F' : 'C'
  }</div>
        <img id="pic" src=${data.iconId}>
    </div>
    <p id="description">${data.description}. Feels like ${data.feelsLike}°.</p>
  </div>
  <div id="detail-container">
    <div id="left">
        <div class="left-lines" id="humidity">
            <div class="left-detail">
                <img class="icons" src="icons/noun_humidity_3604868.svg">
                <p class="detail-text">Humidity</p>
            </div>
            <div class="right-detail">${data.humidity}</div>
        </div>
        <div class="left-lines" id="high-low">
            <div class="left-detail">
                <img class="icons" src="icons/noun_Temperature_980877.svg">
                <p class="detail-text">High / Low</p>
            </div>
            <div class="right-detail">${data.tempMax}°/${data.tempMin}°</div>
        </div>
    </div>
    <div id="right">
        <div class="right-lines" id="wind">
            <div class="left-detail">
                <img class="icons" src="icons/noun_Wind_43264.svg">
                <p class="detail-text">Wind</p>
            </div>
            <div class="right-detail">
                <img class="icons arrow" style="transform:rotate(${
                  data.windDeg
                }deg);" src="icons/noun_Arrow_1757541.svg">
                <div class="detail-text">${data.windSpeed} ${setWindUnit(
    data.option
  )}</div>
            </div>
        </div>
        <div class="right-lines" id="cloudiness">
            <div class="left-detail">
                <img class="icons" src="icons/noun_Cloud_2678497.svg">
                <p class="detail-text">Cloudiness</p>
            </div>
            <div class="right-detail">${data.cloudiness}</div>
        </div>
    </div>
  </div>
  <div id="btn-container">
    <div id="farenheit-btn" class="btns ${setActiveUnit(
      data.option,
      'F'
    )}">°F</div>
    <div id="celcius-btn" class="btns ${setActiveUnit(
      data.option,
      'C'
    )}">°C</div>
  </div>
  `;

  document.querySelector('#main-content').innerHTML = markup;
  document.querySelector('#main-container').style.padding =
    '50px 30px 35px 30px';
};

export default renderContent;
