import restaurantImage from "./restaurant-img.jpg";

const renderRestaurantContent = (parentElementID) => {
  const parentContainer = document.getElementById(parentElementID);

  const imgContainer = document.createElement("div");
  const coverImage = document.createElement("img");
  const title = document.createElement("h1");
  const article = document.createElement("p");

  imgContainer.classList.add("img-container");
  parentContainer.appendChild(imgContainer);

  coverImage.src = restaurantImage;
  imgContainer.appendChild(coverImage);
  // return coverImage;

  title.textContent =
    "Experience Exquisite Dining at The Golden Spoon -- Now Open";
  parentContainer.appendChild(title);

  article.textContent = ` the bustling culinary landscape of
        Depok, a new star has emerged, promising to delight palates and create
        unforgettable dining experiences. The Golden Spoon, located at Jl. Raya
        Margonda No. 123, Depok, is proud to open its doors and invite you to
        discover a world of exquisite Modern Indonesian flavors. Step into The
        Golden Spoon and you'll immediately be enveloped in an atmosphere that
        is warm, elegant, and subtly infused with traditional Indonesian
        aesthetics. Our vision was to create more than just a place to eat; we
        wanted to build a space where friends and families can gather,
        celebrating special moments or simply enjoying a memorable meal
        together, making every visit a special occasion. At the heart of The
        Golden Spoon is our passion for Modern Indonesian cuisine. Our menu,
        meticulously crafted by our talented culinary team, showcases a blend of
        timeless Indonesian recipes reimagined with contemporary culinary
        techniques and international influences. Each dish is a testament to our
        commitment to quality, flavor, and presentation. While every item on our
        menu is designed to impress, some early favorites include our succulent
        "Rendang Croquettes" with a spicy green chili dip, our vibrant "Nasi
        Campur Deluxe" featuring an array of perfectly balanced flavors, and our
        delicate "Pandan Panna Cotta" for a sweet finish. We source only the
        freshest local spices, premium meats, and crisp vegetables to ensure a
        dining experience that is both delicious and responsible. Beyond the
        incredible food, The Golden Spoon offers a thoughtfully curated
        selection of Indonesian artisanal teas and refreshing mocktails that
        complement our dishes beautifully. We believe that dining should be an
        immersive experience, engaging all your senses. Whether you're looking
        for a casual yet refined lunch, a celebratory dinner, or a unique
        culinary adventure, The Golden Spoon is ready to welcome you. Come and
        experience the difference that passion, quality, and an unforgettable
        atmosphere can make. The Golden Spoon is open Tuesday to Sunday from
        11:00 AM to 10:00 PM. For reservations or more information, please visit
        our website at www.thegoldenspoon.com or call us at (021) 123-4567.
        Follow us on Instagram and Facebook @TheGoldenSpoonDepok for updates and
        special offers!`;

  parentContainer.appendChild(article);
};

export { renderRestaurantContent as createRestaurantPage };
