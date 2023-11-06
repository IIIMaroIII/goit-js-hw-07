const ulRef = document.querySelector("#categories");
const liItemRef = document.querySelectorAll(".item");
//
console.log(`This is the length of #categories: ${ulRef.children.length}`);
//
liItemRef.forEach((el) => {
  console.dir(
    `This is the value of titles: ${el.firstElementChild.textContent}`
  );
  console.log(
    `This is the lengths of subtitles: ${el.lastElementChild.children.length}`
  );
});
