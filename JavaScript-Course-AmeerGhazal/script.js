'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button Scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current Scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'Height/Width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  section1.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//Building a Tabbed Component

// use event delegation: attach event handler to common parent
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab'); // finds the closest parent with the class name.

  // Guard clause: nothing clicked (clicking outside)
  if (!clicked) return;
  // we could also say that if (true) { do the code }, but above is simpler.

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active')); // removes the current
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate Content Area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Lesson 195: Passing Arguments to Event Handlers

// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    // instead of moving up manually, we can search for a parent that matches the query
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Js expects an actual function. We can do better by using the bind method.
nav.addEventListener('mouseover', handleHover.bind(0.5)); // this is set to 0.5 or 1 based on the argument

// passing "argument" into handler
nav.addEventListener('mouseout', handleHover.bind(1));

/* 
// Lesson 196 Implementing a Sticky Navigatin: The Scroll Event
old way!
const initalCoords = section1.getBoundingClientRect();
window.addEventListener('scroll', function () {
  if (window.scrollY > initalCoords.top) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});

*/

// Lesson 197: A Better Way: The Intersection Observer API

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const obsCallBack = function (entires, observer) {
//   entires.forEach(entry => console.log(entry));
// };

// const observer = new IntersectionObserver(obsCallBack, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries; // (same as entry[0])
  console.log(entry);
  // when the header is not intersecting the viewport, we want to add the sticky class.
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);
