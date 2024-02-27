let title = document.querySelector("#title")
const ul = document.querySelector("#list")
let send = document.querySelector("#send")


document.addEventListener("DOMContentLoaded", ()=>{
  send.disabled = true
  title.onkeyup = ()=>{
    if(title.value.length > 0){
      send.disabled = false
    }else{
      send.disabled = true
    }
  }
  send.onclick = function(){
    const li = document.createElement("li")
    li.innerHTML = title.value

    ul.append(li)
    title.value = ""
    send.disabled = true
  }
})