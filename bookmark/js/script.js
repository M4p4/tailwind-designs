const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

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

tabs.forEach((tab) => {
  tab.addEventListener('click', onTabClick);
});
