const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const logo = document.getElementById('logo');

const navToggle = () => {
  btn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');

  if (menu.classList.contains('flex')) {
    logo.setAttribute('src', './images/logo-bookmark-footer.svg');
  } else {
    logo.setAttribute('src', './images/logo-bookmark.svg');
  }
};

const onTabClick = (e) => {
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      'border-softRed',
      'border-b-4',
      'md:border-b-0'
    );
  });

  panels.forEach((panel) => {
    panel.classList.add('hidden');
  });

  e.target.classList.add('border-softRed', 'border-b-4');

  const panelClass = e.target.getAttribute('data-target');
  const selectedPanel = document.querySelector(`.${panelClass}`);
  selectedPanel.classList.remove('hidden');
};

btn.addEventListener('click', navToggle);

tabs.forEach((tab) => {
  tab.addEventListener('click', onTabClick);
});
