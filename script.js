let counter = 0;
const arrayWords = ["Fire", "Unbelievable", "Mind blowing", "Wow", "So useless", "Love it", "INSANE", "Oh my god", "so very great", "I want it"];
const button = document.getElementById("useless_button");
const motherDiv = document.getElementById("empty_div");

function color() {
  return Math.floor(Math.random() * 255);
}

function action() {
  counter += 1;
  const newDiv = document.createElement("div");
  const value = `w${counter}`;
  newDiv.setAttribute("id", value);
  newDiv.setAttribute("class", "word_div");
  newDiv.innerHTML = arrayWords[(Math.floor(Math.random() * arrayWords.length))];
  newDiv.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
  newDiv.style.right = `${Math.floor(Math.random() * window.innerWidth)}px`;
  newDiv.style.transform = `rotate(${Math.floor(Math.random() * 20)}deg)`;
  newDiv.style.color = `rgb(${color()},${color()},${color()})`;
  motherDiv.appendChild(newDiv);
}

button.addEventListener("click", action, false);
