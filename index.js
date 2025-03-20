// <!-- -----------------------------------27/02/2025-------------------------------------------------

document.querySelector("form").addEventListener("submit", myTodo);
let todoArr = JSON.parse(localStorage.getItem("todo")) || [];
let favArr = JSON.parse(localStorage.getItem("fav")) || [];
// let todoArr
// if(localStorage.getItem("todo")==null){
//   todoArr = []
// }else{
//   todoArr = JSON.parse(localStorage.getItem("todo"))
// }
displayTable(todoArr);
function myTodo(e) {
  e.preventDefault();
  let taskName = document.querySelector("#task").value;
  let taskPriority = document.querySelector("#priority").value;

  let taskObj = { taskName, taskPriority };
  console.log(taskObj);
  todoArr.push(taskObj);
  localStorage.setItem("todo", JSON.stringify(todoArr));
  //   console.log(taskName, taskPriority);
  displayTable(todoArr);
}
function displayTable(todoArr) {
  document.querySelector("tbody").innerText = "";
  todoArr.forEach((el) => {
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = el.taskName;
    let td2 = document.createElement("td");
    td2.innerText = el.taskPriority;
    if (el.taskPriority == "High") {
      td2.style.backgroundColor = "red";
    } else {
      td2.style.backgroundColor = "green";
    }
    let td3 = document.createElement("button");
    td3.innerText = "Add to Fav";
    td3.addEventListener("click", function () {
      favArr.push(el);
      localStorage.setItem("fav", JSON.stringify(favArr));
    });
    row.append(td1, td2, td3);
    document.querySelector("tbody").append(row);
  });
}
