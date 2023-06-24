let tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const task = {
      text: taskText,
      deadline: null,
      priority: 'low',
    };
    tasks.push(task);
    renderTasks();
    taskInput.value = '';
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function updateTaskDeadline(index, deadline) {
  tasks[index].deadline = deadline;
  renderTasks();
}

function updateTaskPriority(index, priority) {
  tasks[index].priority = priority;
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      ${task.text}
      <span class="task-label ${task.priority}">${task.priority}</span>
      <input type="date" onchange="updateTaskDeadline(${index}, this.value)">
      <select onchange="updateTaskPriority(${index}, this.value)">
        <option value="low" ${task.priority === 'low' ? 'selected' : ''}>Low</option>
        <option value="medium" ${task.priority === 'medium' ? 'selected' : ''}>Medium</option>
        <option value="high" ${task.priority === 'high' ? 'selected' : ''}>High</option>
      </select>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(listItem);
  });
}
