window.onload = function () {
  window.scrollTo(0, 0); // scrolls to the top of the page if the page is refreshed
  history.replaceState({}, document.title, window.location.pathname); // setting the default link instead of the latest thing that has been clicked on in the nav bar. ex: /#projects -> /
};

window.onscroll = function () {
  var button = document.getElementById('back-to-top');
  if (window.pageYOffset > 0) {
    button.style.display = 'block'; // button is showing
  } else {
    button.style.display = 'none'; // button is gone
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' }); // again scrolling to the top with a smooth transition ofc
  history.replaceState({}, document.title, window.location.pathname); // again resetting the link for /#... to /
}
