import "./styles.css";
import {createRestaurantPage} from "./homePageModule.js"
import {renderContactPage} from "./contactModule.js";

const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const aboutBtn = document.querySelector("#aboutBtn");

const parentContainer = document.querySelector("#content")

document.addEventListener("DOMContentLoaded", ()=>{
  createRestaurantPage("content");
})

aboutBtn.addEventListener("click", ()=>{

  parentContainer.innerHTML = ""
  renderContactPage("content");
})
homeBtn.addEventListener("click", ()=>{

  parentContainer.innerHTML = ""
  createRestaurantPage("content");
})