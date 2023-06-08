const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
   // Get references to the card elements
   const cards = document.getElementsByClassName('card');

   // Add click event listener to each card
   for (let i = 0; i < cards.length; i++) {
       const card = cards[i];
       card.addEventListener('click', function() {
           const linkedinLink = card.querySelector('a').href;
           window.open(linkedinLink, '_blank');
       });
   }
   
   document.body.style.paddingBottom = document.querySelector('.footer').offsetHeight + 'px';

   const wrapper1 = document.querySelector(".wrapper1");
const carousel1 = document.querySelector(".carousel1");
const firstCardWidth1 = carousel1.querySelector(".card1").offsetWidth;
const arrowBtns1 = document.querySelectorAll(".wrapper1 i");
const carouselChildrens1 = [...carousel1.children];

let isDragging1 = false, isAutoPlay1 = true, startX1, startScrollLeft1, timeoutId1;

// Get the number of cards that can fit in the carousel at once
let cardPerView1 = Math.round(carousel1.offsetWidth / firstCardWidth1);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens1.slice(-cardPerView1).reverse().forEach(card => {
    carousel1.insertAdjacentHTML("afterbegin1", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens1.slice(0, cardPerView1).forEach(card => {
    carousel1.insertAdjacentHTML("beforeend1", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel1.classList.add("no-transition1");
carousel1.scrollLeft = carousel1.offsetWidth;
carousel1.classList.remove("no-transition1");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns1.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel1.scrollLeft += btn.id == "left1" ? -firstCardWidth1 : firstCardWidth1;
    });
});

const dragStart1 = (e) => {
    isDragging1 = true;
    carousel1.classList.add("dragging1");
    // Records the initial cursor and scroll position of the carousel
    startX1 = e.pageX;
    startScrollLeft1 = carousel1.scrollLeft;
}

const dragging1 = (e) => {
    if(!isDragging1) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel1.scrollLeft = startScrollLeft1 - (e.pageX - startX1);
}

const dragStop1 = () => {
    isDragging1 = false;
    carousel1.classList.remove("dragging1");
}

const infiniteScroll1 = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel1.scrollLeft === 0) {
        carousel1.classList.add("no-transition1");
        carousel1.scrollLeft = carousel1.scrollWidth - (2 * carousel1.offsetWidth);
        carousel1.classList.remove("no-transition1");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel1.scrollLeft) === carousel1.scrollWidth - carousel1.offsetWidth) {
        carousel1.classList.add("no-transition1");
        carousel1.scrollLeft = carousel.offsetWidth;
        carousel1.classList.remove("no-transition1");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId1);
    if(!wrapper1.matches(":hover")) autoPlay();
}

const autoPlay1 = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId1 = setTimeout(() => carousel1.scrollLeft += firstCardWidth1, 2500);
}
autoPlay1();

carousel1.addEventListener("mousedown1", dragStart1);
carousel1.addEventListener("mousemove1", dragging1);
document.addEventListener("mouseup1", dragStop1);
carousel1.addEventListener("scroll1", infiniteScroll1);
wrapper1.addEventListener("mouseenter1", () => clearTimeout(timeoutId1));
wrapper1.addEventListener("mouseleave1", autoPlay1);
   // Get references to the card elements
   const cards1 = document.getElementsByClassName('card1');

   // Add click event listener to each card
   for (let i = 0; i < cards1.length; i++) {
       const card1 = cards1[i];
       card1.addEventListener('click', function() {
           const linkedinLink = card1.querySelector('a').href;
           window.open(linkedinLink, '_blank');
       });
   }
   