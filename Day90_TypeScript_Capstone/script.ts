const titleInput = document.querySelector('#title') as HTMLInputElement;
const categoryInput = document.querySelector('#category') as HTMLInputElement;
const priorityInput = document.querySelector('#priority') as HTMLSelectElement;
const statusInput = document.querySelector('#status') as HTMLSelectElement;
const dateInput = document.querySelector('#date') as HTMLInputElement;
const priorityFilter = document.querySelector('#priority-filter') as HTMLSelectElement;
const statusFilter = document.querySelector('#status-filter') as HTMLSelectElement;
const searchInput = document.querySelector('#searchInput') as HTMLInputElement;
const taskCount = document.querySelector('#task-count') as HTMLParagraphElement;
const taskList = document.querySelector('#task-list') as HTMLDivElement;
const taskForm = document.querySelector('#task-form') as HTMLFormElement;

type Priority = 'low' | 'medium' | 'high';
type Status = 'todo' | 'doing' | 'done';

type StatusFilter = Status | 'all';
type PriorityFilter = Priority | 'all';

let currentStatusFilter: StatusFilter = 'all';
let currentPriorityFilter: PriorityFilter = 'all';

function saveTasks(): void {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks(): Task[] | null {
  const data = localStorage.getItem('tasks');

  if (!data) {
    return null;
  }

  try {
    return JSON.parse(data) as Task[];
  } catch {
    return null;
  }
}

interface Task {
  id: number;
  title: string;
  category: string;
  priority: Priority;
  status: Status;
  dueDate: string;
}

const defaultTasks: Task[] = [
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

const tasks: Task[] = loadTasks() ?? defaultTasks;

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (titleInput.value.trim() === '' || categoryInput.value.trim() === '' || dateInput.value.trim() === '') {
    alert('資料有誤');
    return;
  }

  const task: Task = {
    id: Date.now(),
    title: titleInput.value.trim(),
    category: categoryInput.value.trim(),
    priority: priorityInput.value as Priority,
    status: statusInput.value as Status,
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
  currentStatusFilter = statusFilter.value as StatusFilter;

  renderTask();
});

priorityFilter.addEventListener('change', () => {
  currentPriorityFilter = priorityFilter.value as Priority;

  renderTask();
});

searchInput.addEventListener('input', () => {
  renderTask();
});

function getFilteredTasks(): Task[] {
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

function renderTaskCount(filteredTasks: Task[]): void {
  if (filteredTasks.length === 0) {
    taskCount.textContent = '目前沒有任務';
    return;
  }

  taskCount.textContent = `目前:${filteredTasks.length}個任務`;
}

renderTask();
