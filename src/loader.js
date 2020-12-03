/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
const hideContent = () => {
  document.querySelector('#main-content').style.visibility = 'hidden';
};

const unhideContent = () => {
  document.querySelector('#main-content').style.visibility = 'visible';
};

export const renderLoader = () => {
  hideContent();
    
  const loader = `
    <div class="loader-container">
        <div class="loader"></div>
    </div>
    `;
  document.querySelector('#main-container').insertAdjacentHTML('beforeend', loader);
};

export const removeLoader = () => {
  const loader = document.querySelector('.loader-container');
  if (loader) loader.parentElement.removeChild(loader);

  unhideContent();
};
