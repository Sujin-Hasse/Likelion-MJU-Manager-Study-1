//할일을 입력하고, 이걸받아서 ul 목록에 보여주기(CR)
const toDoForm = document.querySelector(".toDoListInputBox");
const toDoInput = toDoForm.querySelector("input");
const toDos = document.querySelector(".toDoListItem");

function paintToDo(toDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerHTML = toDo;
  li.appendChild(span);
  toDos.appendChild(li);
}

function createToDo(event) {
  event.preventDefault();
  const toDo = toDoInput.value;
  paintToDo(toDo);
  toDoInput.value = "";
}

function init() {
  toDoForm.addEventListener("submit", createToDo);
}
init();