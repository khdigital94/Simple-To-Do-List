const ToDoContainer = document.querySelector(".task-container");

let toDos = [
  {
    name: "Aufräumen",
    category: "Personal",
    status: "offen",
    dateCreated: "",
  },
  {
    name: "Programmieren lernen",
    category: "Personal",
    status: "offen",
    dateCreated: "",
  },
];

function showToDos() {
  ToDoContainer.innerHTML = "";

  toDos.forEach((task) => {
    ToDoContainer.innerHTML += `
        <div class="single-task bg-slate-100 rounded p-2 flex gap-4">
            <div class="task-left flex content-center align-center">
                <input type="checkbox" />
            </div>
            <div class="task-right">
                <h2 class="text-xl text-bold">${task.name}</h2>
                <p>${task.category}</p>
            </div>
        </div>
        `;
  });
}

showToDos();
