let currentIndex = 0;

function updateSlidePosition() {
    const wrapper = document.getElementById('imageWrapper');
    wrapper.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function prevSlide() {
    const totalSlides = document.querySelectorAll('.swiper-slide').length;
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    updateSlidePosition();
}

function nextSlide() {
    const totalSlides = document.querySelectorAll('.swiper-slide').length;
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    updateSlidePosition();
}


function readMore() {
    const moreInfo = "Our restaurant has been serving delicious meals since 1950. We pride ourselves on quality food and a fresh environment.";
    alert(moreInfo);
}



// Content for About Us Page
const aboutContent = {
    imageUrl: "https://media.istockphoto.com/id/1156130293/photo/group-of-gujarati-snacks-like-jalebi-fafda-thepla-khaman-dhokla-aloo-bhujiya-khandvi-khakra.webp?a=1&b=1&s=612x612&w=0&k=20&c=7SgQryng4KNiZ7h_5dhQVhp4_Vph8U9a1Z9s2JJEfwg=",  // Replace with actual food image
    description: "Welcome to our food haven! At our restaurant, we celebrate flavors from around the world, using only the freshest ingredients to craft mouth-watering dishes. Our chefs are dedicated to providing you with a delightful dining experience that keeps you coming back for more.",
    mission: "Our mission is to bring culinary happiness with every meal, ensuring quality and taste in every bite.",
    vision: "Our vision is to become a beloved destination for food lovers worldwide, promoting love, harmony, and joy through food."
  };
  
  // Load content dynamically using JavaScript
  document.addEventListener("DOMContentLoaded", function () {
    // Populate the content in the HTML elements
    document.getElementById("food-image").src = aboutContent.imageUrl;
    document.getElementById("description").textContent = aboutContent.description;
    document.getElementById("mission").textContent = aboutContent.mission;
    document.getElementById("vision").textContent = aboutContent.vision;
  
    // Simple animation using vanilla JavaScript
    const aboutTitle = document.querySelector(".about-title");
    const aboutImage = document.querySelector(".about-image img");
    const aboutDescription = document.querySelector(".about-description");
  
    // Initial styles for animation
    aboutTitle.style.opacity = 0;
    aboutImage.style.transform = "translateX(-50px)";
    aboutImage.style.opacity = 0;
    aboutDescription.style.opacity = 0;
    
    // Fade-in animation
    setTimeout(() => {
      aboutTitle.style.transition = "opacity 1s";
      aboutTitle.style.opacity = 1;
    }, 100);
    
    setTimeout(() => {
      aboutImage.style.transition = "transform 1s, opacity 1s";
      aboutImage.style.transform = "translateX(0)";
      aboutImage.style.opacity = 1;
    }, 300);
    
    setTimeout(() => {
      aboutDescription.style.transition = "opacity 1s";
      aboutDescription.style.opacity = 1;
    }, 600);
  });
  