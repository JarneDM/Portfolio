window.onload = function () {
  window.scrollTo(0, 0);
  history.replaceState({}, document.title, window.location.pathname);
};
