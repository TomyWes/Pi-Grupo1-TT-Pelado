const loader = document.querySelector('.loader');

loader.classList.remove('hidden');

setTimeout(() => {
  loader.classList.add('hidden');
}, 3000); 

