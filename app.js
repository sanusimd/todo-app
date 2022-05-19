const form = document.querySelector("#addForm");
const itemList = document.getElementById("items");
// const delItem = document.querySelector(".delete");
// console.log(delItem);

// add event listener for addtask
form.addEventListener("submit", addTask);

// added event listener for remove item
itemList.addEventListener("click", deleteItem);

// function for add task
function addTask(e) {
  e.preventDefault();

  //   Get the Value from the input text
  const text = document.querySelector("#item").value;

  // create element li
  const li = document.createElement("li");

  // Add className Li
  li.className = "list-group-item";

  //   Add Text Node
  const liText = li.appendChild(document.createTextNode(text));

  //   Append li to parent element
  itemList.appendChild(li);

  //   create Button element
  const button = document.createElement("button");

  //    Add ClassName Button
  button.className = "btn btn-danger  delete";

  //   Add text node
  button.appendChild(document.createTextNode("del"));

  //   Append li  element and delBtn
  li.appendChild(button);

  //   reset Form
  form.reset();
}

// Delete Item Function
function deleteItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      const li = e.target.parentElement;
      console.log(li);
      itemList.removeChild(li);
    }
    console.log("thatme");
  }
}
