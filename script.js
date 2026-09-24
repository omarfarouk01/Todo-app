function addTask() {
    const input = document.getElementById("taskInput");
    const list = document.getElementById("taskList");

    if (input.value === "") {
        return;
    }

    const item = document.createElement("li");
    const taskText = document.createElement("span");

    taskText.textContent = input.value;

    const doneButton = document.createElement("button");
    doneButton.textContent = "Done";

    doneButton.onclick = function () {
        taskText.classList.toggle("completed");
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.onclick = function () {
        item.remove();
    };

    item.appendChild(taskText);
    item.appendChild(doneButton);
    item.appendChild(deleteButton);

    list.appendChild(item);

    input.value = "";
}