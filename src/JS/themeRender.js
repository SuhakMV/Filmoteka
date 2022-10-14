export { theme };

const themeRender = document.querySelector('#theme-day');
const themeRenderFooter = document.querySelector('.footer');
themeRender.addEventListener('click', onChengeTheme);
function onChengeTheme() {
  document.body.classList.toggle('darkTheme');
  themeRenderFooter.classList.toggle('darkTheme');
}
