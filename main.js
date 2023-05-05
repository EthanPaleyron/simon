const content = document.getElementById('content');

const firstItem = content.children[0];
const secondItem = content.children[1];
const thridItem = content.children[2];
const lastItem = content.children[3];

firstItem.classList.add("active");

setTimeout(() => {
  firstItem.classList.remove("active")
}, 1000)