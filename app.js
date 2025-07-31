const inputValue = document.getElementById("get-input");
const btnSubmit = document.getElementById("submit-btn");
const outputBox = document.getElementById("outputs");
let outputInput = document.querySelector(".output-input");

function getValue() {
  let inputText = inputValue.value;

  if (inputValue) {
    let outputWrap = document.createElement("div");
    outputWrap.classList.add("output-wrap");
    outputBox.appendChild(outputWrap);

    let taskInput = document.createElement("input");
    outputWrap.appendChild(taskInput);
    taskInput.setAttribute("readonly", "readonly");
    taskInput.value = inputText;

    let editBTN = document.createElement("button");
    editBTN.classList.add("ed-btn");
    editBTN.innerText = "Edit";
    outputWrap.appendChild(editBTN);

    let delBTN = document.createElement("button");
    delBTN.classList.add("del-btn");
    delBTN.innerText = "Delete";
    outputWrap.appendChild(delBTN);

    inputValue.value = "";

    // Edit Btn Function

    editBTN.addEventListener("click", () => {
      if (editBTN.innerText === "Edit") {
        editBTN.innerText = "update";
        taskInput.removeAttribute("readonly");
      } else {
        editBTN.innerText = "Edit";
        taskInput.setAttribute("readonly", "readonly");
      }
    });

    // Delete Btn Function

    delBTN.addEventListener("click", (e) => {
      let deltheBox = e.target.parentElement;
      deltheBox.remove();
    });
  }
}
