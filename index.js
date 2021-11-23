const names = ['Em', 'Emilia', 'Betti'];

const button = document.getElementById('chooser');
const selectionContainer = document.getElementById('selection');
const result = document.querySelector('.hidden');
const box = document.querySelector('.box');

button.addEventListener('click', () => {
  const name = names[Math.floor(Math.random() * names.length)];
  selectionContainer.innerHTML = name;
  result.classList.remove('hidden');
  box.classList.add('hidden');
});
