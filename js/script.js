const save_btn = document.querySelector(".save_btn");
const input_box = document.getElementById("input_box");
const content_box = document.getElementsByClassName("content_box")[0];
// {push value with enter key
input_box.addEventListener("keydown", (push) => {
	// console.log(push.key);

	if (push.key == "Enter") {
		save_task();
	}
});
// push value with enter key }
//{ pick input value
const save_task = () => {
	if (input_box.value == "") {
		input_box.style.borderBottomColor = "#bb2124";
		save_btn.style.color = "#bb2124";
		input_box.classList.add("placeholder");
		return;
	}
	let warning = document.querySelector(".warning");

	if (warning) {
		warning.remove();
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
	var task_toggle = document.createElement("i");
	task_toggle.classList.add("bi", "bi-toggle-off");
	task_box.appendChild(task_toggle);


//  {  toggle on/off class changing
	task_toggle.addEventListener("click", () => {
		task_toggle.style.transition =
			"opacity 0.3s ease-in-out, transform 0.3s ease-in-out";
		task_toggle.style.opacity = "0";
		task_toggle.style.transform = "scale(0.8)";
		setTimeout(() => {
			if (task_toggle.classList.contains("bi-toggle-off")) {
				task_toggle.classList.replace("bi-toggle-off", "bi-toggle-on");
        task.classList.add("cross_line")
				//   task_toggle.classList.add("checked");
			} else {
				task_toggle.classList.replace("bi-toggle-on", "bi-toggle-off");
        task.classList.remove("cross_line")
				//   task_toggle.classList.remove("checked");
			}
			task_toggle.style.opacity = "1";
			task_toggle.style.transform = "scale(1)";
		}, 100);
	});
// toggle on/off class changing } 


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

    if(task_boxes.length==1){
      tasks_field.remove()
    }else {
      task_box.remove();
      delete_btn_div();
    }
		// if task box == 1 , btn_div will remove / also task_field will be cleared {function call}
	});

	let task_boxes = document.querySelectorAll(".task_box");
	//   let task_boxes = document.querySelectorAll(".task_box");
	let btn = document.querySelector(".btn");
	if (task_boxes.length === 2 && !btn) {
		var btn_div = document.createElement("div");
		btn_div.classList.add("btn");
		tasks_field.appendChild(btn_div);

		var select_btn = document.createElement("button");
		select_btn.classList.add("select_all");
		btn_div.appendChild(select_btn);


		select_btn.addEventListener("click", () => {
      let unchecked_btn = document.querySelectorAll(
        ".bi-toggle-off, .bi-toggle-on",
			);
			//  { toggle btn off/on condition
			Array.from(unchecked_btn).map((task_box) => {
        let task = task_box.querySelector(".task")
				if (task_box.classList.contains("bi-toggle-off")) {
					task_box.classList.replace("bi-toggle-off", "bi-toggle-on");
    task.classList.add("cross_line")

				} else if (task_box.classList.contains("bi-toggle-on")) {
					task_box.classList.replace("bi-toggle-on", "bi-toggle-off");
    task.classList.remove("cross_line")

				} 
        // else {
				// 	task_box.classList.replace("bi-toggle-on", "bi-toggle-on");
				// }
			});
			// toggle btn Off/on condition }

			// if (task_toggle.classList.contains("bi-toggle-off")) {
			//     task_toggle.classList.replace("bi-toggle-off", "bi-toggle-on");
			//     //   task_toggle.classList.add("checked");
			//   }

			//   else {
			//     task_toggle.classList.replace("bi-toggle-on", "bi-toggle-off");
			//     //   task_toggle.classList.remove("checked");
			//   }
		});

		var delete_btn = document.createElement("button");
		delete_btn.classList.add("delete_all");
		btn_div.appendChild(delete_btn);
	} else {
		tasks_field.appendChild(btn);
	}

	//   { delete_all btn with validation
	delete_btn.addEventListener("click", () => {
		let checked_tasks = document.querySelectorAll(".bi-toggle-on");
		let warning = document.querySelector(".warning");
		let success = document.querySelector(".success");

		// { if alert msg also exist , this will remove that
		// let exist_alrt = document.querySelector(".warning , .success")
		if (success) {
			success.remove();
		}
		// else if(success){
		//   success.remove()
		// }
		// if alert msg also exist , this will remove that }

		// { if task box == 1 , btn_div will remove { if function call}
		if (checked_tasks.length > 0) {
			Array.from(checked_tasks).map((task) => {
				task.parentElement.remove();
				delete_btn_div();
				// if task box == 1 , btn_div will remove { if function call} }
			});
			if (warning) {
				warning.remove();
			}
			let header = document.querySelector(".header");
			let success = document.querySelector(".success");
			if (!success) {
				let success = document.createElement("h2");
				success.classList.add("success");
				header.appendChild(success);
				success.innerHTML = "deleted";

				// { alert msg will be cleared after 3s
				setTimeout(() => {
					success.remove();
				}, 3000);
				// alert msg will be cleared after 3s }

				//  { if input " " , dlt any task {dlt_btn} = input alert cleared
				input_box.style.borderBottomColor = "#ffffff";
				save_btn.style.color = "#ffffff";
				input_box.classList.remove("placeholder");
				//  if input " " , dlt any task {dlt_btn} = input alert cleared }
			}
		} else {
			if (!warning) {
				//   if (success) {
				//       success.remove();
				//     }
				let header = document.querySelector(".header");
				let warning = document.createElement("h2");
				warning.classList.add("warning");
				header.appendChild(warning);
				warning.innerHTML = "select task !";

				// {alert msg will be cleared after 3s
				setTimeout(() => {
					warning.remove();
				}, 3000);
				// alert msg will be cleared after 3s }
			}
		}
	});
	// delete all btn with validation }

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

