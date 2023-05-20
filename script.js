window.onload = function () {
  window.scrollTo(0, 0);
  history.replaceState({}, document.title, window.location.pathname);
};

window.onscroll = function () {
  let button = document.getElementById('back-to-top'); // WebPage(pc or laptop) button
  let mobileButton = document.getElementById('btt-media'); // mobile button

  if (window.pageYOffset > 0) {
    button.style.display = 'block';
    // if the button is equal to or less then 600 px then the mobile button is showing and the webpage button is hiding
    if (window.matchMedia('(max-width: 600px)').matches) {
      mobileButton.style.display = 'block';
      button.style.display = 'none';
    }
  } else {
    button.style.display = 'none';
    mobileButton.style.display = 'none';
  }
};

// this is ofc the function that changes the buttons from small to big or big to small
function handleResize() {
  let btn = document.getElementById('btt-media');
  let button = document.getElementById('back-to-top');

  // i know its hard to read but if it works it works
  if (
    window.pageYOffset > 0 &&
    window.matchMedia('(max-width: 600px)').matches
  ) {
    btn.style.display = 'block';
    button.style.display = 'none';
  } else if (
    window.pageYOffset > 0 &&
    window.matchMedia('(min-width: 601px)').matches
  ) {
    btn.style.display = 'none';
    button.style.display = 'block';
  } else {
    btn.style.display = 'none';
    button.style.display = 'none';
  }
}

// adding an event listener to the window, in this case it is the handleResize function
window.addEventListener('resize', handleResize);

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  history.replaceState({}, document.title, window.location.pathname);
}
