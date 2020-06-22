onmessage = function(e) {
  this.console.log("Received: "+e.data+" From: "+e.source);
  let lihtml = ['<li class="toDoLI">','</li>'];
  let parseddata = {
    content: e.data
  }
  this.localStorage.setItem("todoItems", (this.localStorage.getItem("todoItems")+parseddata))

  licreated.outerHTML = lihtml[0]+e.data+lihtml[1];
  
  this.localStorage.setItem("todoItems")
  this.console.log("done")
}