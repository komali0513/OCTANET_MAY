var deadlineInput = document.getElementById("deadlineInput");
    var today = new Date().toISOString().split('T')[0];
    deadlineInput.max = today;
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value;
    var deadline = deadlineInput.value;
    if (taskText === '') {
        alert("Please enter a task!");
        return;
    }
    if (deadline === '') {
        alert("Please enter Deadline!");
        return;
    }
    var li = document.createElement("li");
    var taskSpan = document.createElement("span");
    taskSpan.textContent = "Task: "+taskText + " , ";
    var deadlineSpan = document.createElement("span");
    deadlineSpan.textContent = "Deadline: " + deadline;
    deadlineSpan.className = "deadline";
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "X";
    deleteBtn.onclick = function() {
         li.remove();
    };
    li.appendChild(taskSpan);
    li.appendChild(deadlineSpan);
    li.appendChild(deleteBtn);   
    taskList.appendChild(li);
    taskInput.value = "";
}