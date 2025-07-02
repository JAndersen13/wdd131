const currentyear = document.querySelector("#currentyear");  // matches HTML id
const today = new Date();

currentyear.innerHTML = `${today.getFullYear()}`;

const lastModified = document.querySelector("#lastmodified");  // lowercase

lastModified.innerHTML = document.lastModified;


