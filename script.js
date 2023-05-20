window.onload = function () {
  window.scrollTo(0, 0);
  history.replaceState({}, document.title, window.location.pathname);
};

window.onscroll = function () {
  let button = document.getElementById('back-to-top');
  let mobileButton = document.getElementById('btt-media');

  if (window.pageYOffset > 0) {
    button.style.display = 'block';
    if (window.matchMedia('(max-width: 600px)').matches) {
      mobileButton.style.display = 'block';
      button.style.display = 'none';
    }
  } else {
    button.style.display = 'none';
    mobileButton.style.display = 'none';
  }
};

function handleResize() {
  let btn = document.getElementById('btt-media');
  let button = document.getElementById('back-to-top');

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

window.addEventListener('resize', handleResize);

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  history.replaceState({}, document.title, window.location.pathname);
}
