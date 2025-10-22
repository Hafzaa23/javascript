const form = document.getElementById("todo_form");
const input = document.getElementById("todo_input");
const list = document.getElementById("todo-list");
const filterButtons = document.querySelectorAll(".filters button");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos(filter = "all") {
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    if (
      (filter === "Completed" && !todo.completed) ||
      (filter === "Incompleted" && todo.completed)
    ) {
      return; // skip haddii aysan ku habboonayn filter-ka
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = todo.text;
    if (todo.completed) span.classList.add("completed");
    span.addEventListener("click", () => toggleCompleted(index));

    const delBtn = document.createElement("button");
    delBtn.textContent = "🗑";
    delBtn.classList.add("delete-botn");
    delBtn.addEventListener("click", () => deleteTodo(index));

    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
  });

  // keydi isbeddel kasta
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo(e) {
  e.preventDefault();
  const text = input.value.trim();
  if (text !== "") {
    todos.push({ text, completed: false });
    input.value = "";
    renderTodos();
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function toggleCompleted(index) {
  todos[index].completed = !todos[index].completed;
  renderTodos();
}

form.addEventListener("submit", addTodo);

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    renderTodos(filter);
  });
});

// marka la furo page-ka
renderTodos();
