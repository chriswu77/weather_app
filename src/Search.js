/* eslint-disable no-alert */
/* eslint-disable no-undef */
import regeneratorRuntime from 'regenerator-runtime';

export default class Search {
  constructor(cityName, option = 'imperial') {
    this.cityName = cityName;
    this.option = option;
  }

  parseData(jsonData) {
    this.temp = this.roundToWholeNum(jsonData.main.temp);
    this.feelsLike = this.roundToWholeNum(jsonData.main.feels_like);
    this.tempMin = this.roundToWholeNum(jsonData.main.temp_min);
    this.tempMax = this.roundToWholeNum(jsonData.main.temp_max);
    this.humidity = this.setPercentage(jsonData.main.humidity);
    this.description = this.capitalizeFirstLetter(
      jsonData.weather[0].description
    );
    this.iconId = this.getImgURL(jsonData.weather[0].icon);
    this.windSpeed = this.roundToWholeNum(jsonData.wind.speed);
    this.windDeg = jsonData.wind.deg;
    this.cloudiness = this.setPercentage(jsonData.clouds.all);
    this.city = jsonData.name;
    this.country = jsonData.sys.country;
  }

  roundToWholeNum(num) {
    return Math.round(num);
  }

  setPercentage(num) {
    if (num === 1) {
      return '100%';
    }
    if (num === 0) {
      return '0%';
    }
    return `${num}%`;
  }

  capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  getImgURL(iconId) {
    return `http://openweathermap.org/img/wn/${iconId}@2x.png`;
  }

  async getResults() {
    const key = 'e6cbc5ee156d425e407a2fa455be867e';

    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${key}&units=${this.option}`,
        { mode: 'cors' }
      );
      const json = await response.json();
      this.parseData(json);
    } catch (error) {
      alert('Invalid city');
    }
  }
}
