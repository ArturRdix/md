lightGallery(document.getElementById('lightgallery'));
lightGallery(document.getElementById('lightgallery_two'));
lightGallery(document.getElementById('lightgallery_three'));
lightGallery(document.getElementById('lightgallery_four'));
AOS.init();

document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    item.classList.toggle('active');
  });
});

    const container = document.querySelector('#slider');

let isDown = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
  isDown = true;
  container.style.cursor = 'grabbing';
  container.style.scrollBehavior = 'auto'; // отключаем smooth scroll во время drag
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
  isDown = false;
  container.style.cursor = 'grab';
});

container.addEventListener('mouseup', () => {
  isDown = false;
  container.style.cursor = 'grab';
  container.style.scrollBehavior = 'smooth'; // возвращаем smooth scroll
});

container.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 2; // множитель для скорости прокрутки
  container.scrollLeft = scrollLeft - walk;
});
