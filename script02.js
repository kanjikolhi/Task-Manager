// Elements select کریں
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add Task Function
addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Delete Button 
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');

        // Delete Task Functionality
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        // Task Complete کرنے کے لیے Click Event
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';  // ان پٹ فیلڈ کو خالی کریں
    } else {
        alert('Please enter a task!');
    }
});
