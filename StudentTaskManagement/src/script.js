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