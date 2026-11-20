function addTask() {

    let taskInput = document.getElementById("taskInput");

    let task = taskInput.value.trim();

    if (task === "") {

        alert("Please enter a task!");

        return;
    }

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");

    li.textContent = task;

    taskList.appendChild(li);

    taskInput.value = "";

}
function searchTasks() {

    let searchInput = document
        .getElementById("searchInput")
        .value.toLowerCase();

    let taskList = document.getElementById("taskList");

    let tasks = taskList.getElementsByTagName("li");

    for (let i = 0; i < tasks.length; i++) {

        let task = tasks[i].textContent.toLowerCase();

        if (task.includes(searchInput)) {

            tasks[i].style.display = "";

        } else {

            tasks[i].style.display = "none";

        }

    }

}