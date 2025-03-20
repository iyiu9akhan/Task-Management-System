const save_btn = document.querySelector(".save_btn");
const input_box = document.getElementById("input_box");
const tasks_field = document.getElementsByClassName("tasks_field")[0];

const save_task = () => {
  if (input_box.value == "") {
    input_box.style.borderBottomColor = "#bb2124";
    save_btn.style.color = "#bb2124";
  } else {
    input_box.style.borderBottomColor = "#ffffff";
    save_btn.style.color = "#ffffff";
    const task_div = document.createElement("div");
    task_div.classList.add("task_box");
    tasks_field.appendChild(task_div);
    console.log(task_div);
    const task_toggle = document.createElement("i")
    task_toggle.classList.add("bi")
    task_toggle.classList.add("bi-toggle-off")
    task_div.appendChild(task_toggle)
    const task = document.createElement("p")
    task.classList.add("task")
    task_div.appendChild(task)
    const task_delete = document.createElement("i")
    task_delete.classList.add("bi")
    task_delete.classList.add("bi-trash3")
    task_delete.classList.add("delete_task")
    task_div.appendChild(task_delete)
    
    task.innerHTML = input_box.value;
  }
};
