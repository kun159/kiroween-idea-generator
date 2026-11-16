const ideas = [
  "A ghost that writes one-line compliments.",
  "A pumpkin-themed focus timer.",
  "A tiny generator for spooky character names.",
  "A checklist for surviving a haunted house.",
  "A friendly monster mood tracker.",
];

const idea = document.querySelector("#idea");
const button = document.querySelector("#generate");

button.addEventListener("click", () => {
  idea.textContent = ideas[Math.floor(Math.random() * ideas.length)];
});
