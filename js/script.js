const input_box = document.getElementById("input_box");
const save_btn=document.querySelector(".save_btn")

const save_task = () => {
  if (input_box.value == "") {
    input_box.style.borderBottomColor = "#bb2124";
    save_btn.style.color="#bb2124"
  } else {
    console.log(input_box.value);
    input_box.style.borderBottomColor = "#ffffff";
    save_btn.style.color="#ffffff"
  }
};
