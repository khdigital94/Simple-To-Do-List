const toDoContainer = document.querySelector(".task-container");
const toDoFilter = document.getElementsByClassName("to-do-filter");

const popup = document.querySelector(".popup");
const popupOverlay = document.querySelector(".popup-overlay");
const popupButton = document.querySelector(".popup-button");
const newTaskButton = document.querySelector(".newtask-button");

let toDos = [
  {
    name: "Aufräumen",
    category: "Persönlich",
    status: "Offen",
    dateCreated: "",
  },
  {
    name: "Programmieren lernen",
    category: "Persönlich",
    status: "Offen",
    dateCreated: "",
  },
  {
    name: "Abendessen kochen",
    category: "Persönlich",
    status: "Abgeschlossen",
    dateCreated: "",
  },
  {
    name: "Neue Kampagne erstellen",
    category: "Arbeit",
    status: "Abgeschlossen",
    dateCreated: "",
  },
];

function showToDos(toDos) {
  toDoContainer.innerHTML = "";

  toDos.forEach((task) => {
    toDoContainer.innerHTML += `
        <div class="single-task bg-slate-100 rounded py-3 px-4 flex gap-4">
            <div class="task-left w-4/5">
                <h2 class="text-xl text-bold">${task.name}</h2>
                <p>${task.category}</p>
            </div>
            <div class="task-right w-1/6 flex justify-center align-center">
                <input type="checkbox" class="rounded-full" />
                <label for="checkbox" class="w-10 h-10 bg-slate-500"></label>
            </div>
        </div>
        `;
  });
}

// To Do Filter
let filteredToDos = [];
for (let filter of toDoFilter) {
  let currentFilter = filter.textContent;

  filter.addEventListener("click", () => {
    filteredToDos = [];

    if (currentFilter === "Alle") {
      showToDos(toDos);
    } else {
      toDos.forEach((task) => {
        if (task.status === currentFilter) {
          filteredToDos.push(task);
        }

        showToDos(filteredToDos);
      });
    }
  });
}

// Popup Functionality
popupButton.addEventListener("click", () => {
  popup.style.display = "block";
});

popupOverlay.addEventListener("click", () => {
  popup.style.display = "none";
});

function addNewTask() {
  const newTaskName = document.querySelector(".popup input");
  const newTaskCategory = document.querySelector(".popup select");
  let newTask = {
    name: newTaskName.value,
    category: newTaskCategory.value,
  };

  newTaskName.value = "";
  newTaskCategory.value = "Persönlich";

  popup.style.display = "none";

  toDos.push(newTask);
  showToDos(toDos);
}

newTaskButton.addEventListener("click", () => {
  event.preventDefault();
  addNewTask();
});

// Begrüßung nach Tageszeit
function greetings() {
  const currentTime = new Date();
  let message;

  if (currentTime < 12) {
    message = "Guten Morgen, Kevin";
  } else if (currentTime < 18) {
    message = "Guten Tag, Kevin";
  } else {
    message = "Guten Abend, Kevin";
  }

  document.querySelector(".greetings").textContent = message;
}

greetings();
showToDos(toDos);
