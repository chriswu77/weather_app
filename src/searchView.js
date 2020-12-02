/* eslint-disable no-undef */
export const getInput = () => {
  return document.querySelector('#search-form').value;
};

export const clearForm = () => {
  document.querySelector('#search-form').value = '';
};
