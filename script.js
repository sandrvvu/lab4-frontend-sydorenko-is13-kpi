function changeColors(element) {
  const randomBackgroundColor =
    "#" + (Math.random().toString(16) + "000000").slice(2, 8);
  const randomTextColor =
    "#" + (Math.random().toString(16) + "000000").slice(2, 8);

  element.style.backgroundColor = randomBackgroundColor;
  element.style.color = randomTextColor;
}

// Event handler for the first element
const element = document.getElementById("author-info");
element.style.cursor = "pointer";
element.addEventListener("click", function () {
  changeColors(element);
});

// Event handler for the next element
const nextElement = document.querySelector("#hobbies");
nextElement.style.cursor = "pointer";
nextElement.addEventListener("click", function () {
  changeColors(nextElement);
});

const image = document.querySelector('#city-img');

function addImage() {
  image.style.display = "block";
}

function increaseImageSize() {
  image.width += 50;
}

function decreaseImageSize() {
  if (image.width > 50) {
    image.width -= 50;
  }
}

function deleteImage() {
  image.style.display = "none";
}