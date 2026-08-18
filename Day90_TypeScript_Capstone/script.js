"use strict";
const titleInput = document.querySelector('#title');
const categoryInput = document.querySelector('#category');
const priorityInput = document.querySelector('#priority');
const statusInput = document.querySelector('#status');
const dateInput = document.querySelector('#date');
const priorityFilter = document.querySelector('#priority-filter');
const statusFilter = document.querySelector('#status-filter');
const searchInput = document.querySelector('#searchInput');
const taskCount = document.querySelector('#task-count');
const taskList = document.querySelector('#task-list');
const taskForm = document.querySelector('#task-form');
let currentStatusFilter = 'all';
let currentPriorityFilter = 'all';
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function loadTasks() {
    const data = localStorage.getItem('tasks');
    if (!data) {
        return null;
    }
    try {
        return JSON.parse(data);
    }
    catch {
        return null;
    }
}
const defaultTasks = [
    {
        id: 1,
        title: 'coding',
        category: 'work',
        priority: 'high',
        status: 'todo',
        dueDate: '2026-08-17',
    },
    {
        id: 2,
        title: 'dinner',
        category: 'Food',
        priority: 'low',
        status: 'todo',
        dueDate: '2026-08-17',
    },
    {
        id: 3,
        title: 'running',
        category: 'exercise',
        priority: 'medium',
        status: 'done',
        dueDate: '2026-08-16',
    },
];
const tasks = loadTasks() ?? defaultTasks;
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (titleInput.value.trim() === '' || categoryInput.value.trim() === '' || dateInput.value.trim() === '') {
        alert('資料有誤');
        return;
    }
    const task = {
        id: Date.now(),
        title: titleInput.value.trim(),
        category: categoryInput.value.trim(),
        priority: priorityInput.value,
        status: statusInput.value,
        dueDate: dateInput.value,
    };
    tasks.push(task);
    saveTasks();
    renderTask();
    taskForm.reset();
});
function renderTask() {
    taskList.replaceChildren();
    const filteredTasks = getFilteredTasks();
    renderTaskCount(filteredTasks);
    filteredTasks.forEach((item) => {
        const taskItem = document.createElement('div');
        const title = document.createElement('h3');
        title.textContent = `title: ${item.title}`;
        const category = document.createElement('p');
        category.textContent = `category: ${item.category}`;
        const priority = document.createElement('P');
        priority.textContent = `priority: ${item.priority}`;
        const status = document.createElement('p');
        status.textContent = `status: ${item.status}`;
        const date = document.createElement('p');
        date.textContent = `date: ${item.dueDate}`;
        const deleBtn = document.createElement('button');
        deleBtn.textContent = '刪除';
        const doneBtn = document.createElement('button');
        doneBtn.textContent = '完成';
        deleBtn.addEventListener('click', () => {
            const index = tasks.findIndex((task) => task.id === item.id);
            if (index !== -1) {
                tasks.splice(index, 1);
                saveTasks();
                renderTask();
            }
        });
        doneBtn.addEventListener('click', () => {
            const index = tasks.findIndex((task) => task.id === item.id);
            if (index !== -1) {
                tasks[index].status = 'done';
                saveTasks();
                renderTask();
            }
        });
        taskItem.appendChild(title);
        taskItem.appendChild(category);
        taskItem.appendChild(priority);
        taskItem.appendChild(status);
        taskItem.appendChild(date);
        taskItem.appendChild(doneBtn);
        taskItem.appendChild(deleBtn);
        taskList.appendChild(taskItem);
    });
}
statusFilter.addEventListener('change', () => {
    currentStatusFilter = statusFilter.value;
    renderTask();
});
priorityFilter.addEventListener('change', () => {
    currentPriorityFilter = priorityFilter.value;
    renderTask();
});
searchInput.addEventListener('input', () => {
    renderTask();
});
function getFilteredTasks() {
    return tasks.filter((task) => {
        const matchStatus = currentStatusFilter === 'all' || task.status === currentStatusFilter;
        //如果currentStatusFilter = all 的話，所有task.status都通過,反之則讓task.suatus=currentStatusFilter通過
        const matchPriority = currentPriorityFilter === 'all' || task.priority === currentPriorityFilter;
        //如果currentPriorityFilter = all 的話，所有task.priority都通過,反之則讓task.priority=currentPriorityFilter通過
        const keyword = searchInput.value.trim().toLowerCase();
        const matchSearch = keyword === '' || task.title.toLowerCase().includes(keyword) || task.category.toLowerCase().includes(keyword);
        return matchStatus && matchPriority && matchSearch;
        // true  → filter 保留這筆 task
        // false → filter 排除這筆 task
    });
}
function renderTaskCount(filteredTasks) {
    if (filteredTasks.length === 0) {
        taskCount.textContent = '目前沒有任務';
        return;
    }
    taskCount.textContent = `目前:${filteredTasks.length}個任務`;
}
renderTask();
