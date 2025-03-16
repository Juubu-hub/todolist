const input = document.querySelector("input");
const button = document.querySelector(".input button");
const container = document.querySelector(".container");
const card = document.querySelector(".card");
const checks = document.querySelector(".checks");

button.addEventListener("click", () => {
  if (input.value === "") {
    alert("Please enter a task");
    return;
  }
  const taskContainer = document.createElement("div");
  card.append(taskContainer);
  taskContainer.classList.add("taskContainer");

  const innerDiv = document.createElement("div");
  taskContainer.prepend(innerDiv);
  const checks = document.createElement("div");
  checks.classList.add("checks");
  innerDiv.prepend(checks);
  const taskName = document.createElement("h5");
  taskName.append(input.value);
  innerDiv.append(taskName);

  const taskButtonConatiner = document.createElement("div");
  taskButtonConatiner.classList.add("task");
  const taskButton = document.createElement("button");
  taskButton.innerText = "❌";
  taskButtonConatiner.append(taskButton);
  taskContainer.append(taskButtonConatiner);
  input.value = "";
  saveTasks();
});

card.addEventListener("click", (e) => {
  const checks = e.target;
  console.dir(e.target);

  if (e.target.classList.contains("checks")) {
    e.target.classList.toggle("checkToggle");
    e.target.nextElementSibling.classList.toggle("taskNameToggle");

  } else if (e.target.parentElement.classList.contains("task")) {
    console.log("working");

    const buttonparent = e.target.parentElement;

    const taskContainer = buttonparent.parentElement;
    console.log("task container", taskContainer);

    taskContainer.remove();
    saveTasks();
  }
});

function saveTasks() {
    localStorage.setItem("cardContent", card.innerHTML);
}
saveTasks();
const content=localStorage.getItem('cardContent')
console.log(content);