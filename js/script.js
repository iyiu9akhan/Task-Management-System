const save_btn = document.querySelector(".save_btn");
const input_box = document.getElementById("input_box");
const content_box = document.getElementsByClassName("content_box")[0];

// const tasks_field = document.getElementsByClassName("tasks_field")[0];

const save_task = () => {
  if (input_box.value == "") {
    input_box.style.borderBottomColor = "#bb2124";
    save_btn.style.color = "#bb2124";
    return;
  }

  input_box.style.borderBottomColor = "#ffffff";
  save_btn.style.color = "#ffffff";

  // tasks_field.classList.add("tasks_field");
  // content_box.appendChild(tasks_field);
  let tasks_field = document.querySelector(".tasks_field");
  if (!tasks_field) {
    tasks_field = document.createElement("div");
    tasks_field.classList.add("tasks_field");
    content_box.appendChild(tasks_field);
  }

  const task_div = document.createElement("div");
  task_div.classList.add("task_box");
  tasks_field.appendChild(task_div);
  console.log(task_div);
  const task_toggle = document.createElement("i");
  task_toggle.classList.add("bi");
  task_toggle.classList.add("bi-toggle-off");
  task_div.appendChild(task_toggle);
  const task = document.createElement("p");
  task.classList.add("task");
  task_div.appendChild(task);
task.innerHTML=input_box.value
input_box.value = "";

  const task_delete = document.createElement("i");
  task_delete.classList.add("bi");
  task_delete.classList.add("bi-trash3");
  task_delete.classList.add("delete_task");
  task_div.appendChild(task_delete);

  
  let btn = document.querySelector(".btn");
  if (!btn) {
    const btn = document.createElement("div");
    btn.classList.add("btn");
    tasks_field.appendChild(btn);
  } 
  else {
    tasks_field.appendChild(btn);
  }
  
  const select_btn = document.createElement("button");
  delete_btn.classList.add("select_all");
  btn.appendChild(select_btn);
  const delete_btn = document.createElement("button");
  delete_btn.classList.add("delete_all");
  btn.appendChild(delete_btn);
  tasks_field.appendChild(task_div);
  

};
