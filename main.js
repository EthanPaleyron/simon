const content = document.getElementById('content');
const play = document.getElementById('play');


play.addEventListener('click', () => {
  const firstItem = content.children[0];

  firstItem.classList.add("active");

  setTimeout(() => {
    firstItem.classList.remove("active");
  }, 400);
});