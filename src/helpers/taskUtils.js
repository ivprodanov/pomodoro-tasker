export const saveTaskToStorage = (newTask) => {
  let tasks = JSON.parse(localStorage.getItem('tasks') || "[]");
  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};