import restaurantImage from "./restaurant-img.jpg";

const renderContactPage = (parentElementID) => {
  const parentContainer = document.getElementById(parentElementID);
  parentContainer.classList.add("main-content");

  const pageSection = document.createElement("section");
  pageSection.classList.add("intro-section");
  parentContainer.appendChild(pageSection);

  const pageTitle = document.createElement("h2");
  pageTitle.textContent = "Contact Us";
  pageSection.appendChild(pageTitle);

  const outerDiv = document.createElement("div");
  outerDiv.classList.add("intro-grid");
  pageSection.appendChild(outerDiv);

  
  
  const img = document.createElement("img");
  img.src = restaurantImage;
  outerDiv.appendChild(img)
  
  const pDiv = document.createElement("div");
  outerDiv.appendChild(pDiv);
  const p = document.createElement("p");
  p.textContent = `  Welcome to our restaurant! We are a passionate to delivering high-quality 
  food and exceptional service. Our mission has always been to provide cheap food for everybody .`;
  pDiv.appendChild(p);

};

export { renderContactPage };
