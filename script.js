const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
Notification.requestPermission();
list.onload = loadToDoItems()
function newTodoInput() {
  if (document.getElementById("toDoInput")) {
  } else{
    var licreated = document.createElement('li');
    let lihtml = ['<li class="toDoLI" id="toDoInput">','</li>'];
    list.appendChild(licreated);
    licreated.outerHTML = lihtml[0]+'<input id="newItemTitleInput" placeholder="Title"><br><textarea id="newItemContentInput" placeholder="Note Content"></textarea><br><button onclick="newTodo()">Save</button>'+lihtml[1]
  }
  document.getElementById("newItemTitleInput").focus()
}
function newTodo() {
  let lihtml = ['<li class="toDoLI">','</li>'];
  var licreated = document.createElement('li');
  let uprobj = {
    // id: Object(localStorage.getItem("todoItems")).length,
    title: document.getElementById("newItemTitleInput").value,
    content: document.getElementById("newItemContentInput").value
  }
  let uprobjstring = JSON.stringify(uprobj);
  console.log(uprobjstring);
  function ifItemsExist(){
    let tdi = localStorage.getItem("todoItems")
    if (tdi != null && tdi != "RESET" ) {
      localStorage.setItem("todoItems",(localStorage.getItem("todoItems")+";/;/;"+uprobjstring))
     } else{
       localStorage.setItem("todoItems",uprobjstring)
       
     }
  }
  ifItemsExist()
  list.appendChild(licreated);
  licreated.outerHTML = lihtml[0]+"<h3>"+uprobj.title+"</h3>"+uprobj.content+lihtml[1];
  itemCountSpan.innerText = Array(localStorage.getItem("todoItems").split(';/;/;'))[0].length;
  document.getElementById("toDoInput").outerHTML = ""
}
function savetodols() {
  
}
function loadToDoItems() {
 let items = Array(localStorage.getItem("todoItems").split(';/;/;'))
 console.log(items)

 for (let index = 0; index < items[0].length; index++) {
   const element = items[0][index];
   let lihtml = ['<li class="toDoLI"','>','</li>'];
  var licreated = document.createElement('li');
  list.appendChild(licreated);
   let parsedelement = JSON.parse(element)


  licreated.outerHTML = lihtml[0]+'id="li_'+index+'"'+'onclick="editspecificItem('+index+')"'+lihtml[1]+"<h3>"+parsedelement.title+"</h3>"+parsedelement.content+lihtml[2];
 }
 itemCountSpan.innerText = Array(localStorage.getItem("todoItems").split(';/;/;'))[0].length;
}
function reloadToDoItems() {
  list.innerHTML = ""
  itemCountSpan.innerHTML = "0"
  loadToDoItems()
}
function deleteToDoItems() {
  localStorage.setItem("todoItems","RESET")
  reloadToDoItems()
}