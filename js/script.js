const save_btn = document.querySelector(".save_btn");
const input_box = document.getElementById("input_box");
const content_box = document.getElementsByClassName("content_box")[0];
//{ pick input value
const save_task = () => {
  if (input_box.value == "") {
    input_box.style.borderBottomColor = "#bb2124";
    save_btn.style.color = "#bb2124";
    input_box.classList.add("placeholder");
    return;
  }
  //pick input value }
  //{ blank input alert css
  input_box.classList.remove("placeholder");
  input_box.style.borderBottomColor = "#ffffff";
  save_btn.style.color = "#ffffff";
  //blank input alert css }
  //{ create task field div
  let tasks_field = document.querySelector(".tasks_field");
  if (!tasks_field) {
    tasks_field = document.createElement("div");
    tasks_field.classList.add("tasks_field");
    content_box.appendChild(tasks_field);
  }
  //create task field div }
  //{create task box div
  const task_box = document.createElement("div");
  task_box.classList.add("task_box");
  tasks_field.appendChild(task_box);
  //create task box div }
  const task_toggle = document.createElement("i");
  task_toggle.classList.add("bi", "bi-toggle-off");
  task_box.appendChild(task_toggle);

  const task = document.createElement("p");
  task.classList.add("task");
  task_box.appendChild(task);
  task.innerHTML = input_box.value;
  input_box.value = "";

  const task_delete = document.createElement("i");
  task_delete.classList.add("bi", "bi-trash3", "delete_task");
  //   task_delete.classList.add("bi-trash3");
  //   task_delete.classList.add("delete_task");
  task_box.appendChild(task_delete);

  // const delete_task = document.querySelectorAll("delete_task")

  task_delete.addEventListener("click", () => {
    task_box.remove();
    delete_btn_div(); // if task box == 1 , btn_div will remove {function call}
  });

  let task_boxes = document.querySelectorAll(".task_box");
  let btn = document.querySelector(".btn");
  if (task_boxes.length === 2 && !btn) {
    var btn_div = document.createElement("div");
    btn_div.classList.add("btn");
    tasks_field.appendChild(btn_div);

    var select_btn = document.createElement("button");
    select_btn.classList.add("select_all");
    btn_div.appendChild(select_btn);

    var delete_btn = document.createElement("button");
    delete_btn.classList.add("delete_all");
    btn_div.appendChild(delete_btn);
  } else {
    tasks_field.appendChild(btn);
  }

  const select_icon = document.createElement("i");
  select_icon.classList.add("bi", "bi-check-all");
  select_btn.appendChild(select_icon);
  const select_btn_text = document.createElement("h6");
  select_btn_text.innerHTML = "select all";
  select_btn.appendChild(select_btn_text);

  const delete_icon = document.createElement("i");
  delete_icon.classList.add("bi", "bi-trash-fill");
  delete_btn.appendChild(delete_icon);
  const delete_btn_text = document.createElement("h6");
  //   delete_icon.classList.add("bi", "bi-trash-fill");
  delete_btn_text.innerHTML = "delete all";
  delete_btn.appendChild(delete_btn_text);
};

// if task box == 1 , btn_div will remove {function assign}
const delete_btn_div = () => {
  let task_boxes = document.querySelectorAll(".task_box");
  let btn = document.querySelector(".btn");
  if (task_boxes.length === 1) {
    if (btn) {
      btn.remove();
    }
  }
};

// const delete_task= ()=>{
//     task_box.classList.remove("task_box");

// }
// const delete_task = document.querySelectorAll("delete_task")

// tasks_field.appendChild(task_div);
