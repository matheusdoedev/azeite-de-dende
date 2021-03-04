export const onClientEntry = () => {
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};
