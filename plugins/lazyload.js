import LazyLoad from 'vanilla-lazyload/dist/lazyload.min';

window.LazyLoad = LazyLoad;
window.LazyLoadInstance = new window.LazyLoad({
  elements_selector: '.lazy',
});
