const send = document.querySelector(".send")
let storageData = JSON.parse(localStorage.getItem("notes") || '[]')

const ids = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "d", "c", "e", "j", "h"]
const id = ()=>{
  let result =""
  for(let i = 0; i< ids.length; i++){
    const randoms = Math.floor(Math.random() * ids.length)
    result += ids[randoms]
  }
  return result
}


function createData(){
  const title = document.querySelector("#title").value
  const description = document.querySelector("#description").value
  
  const newNotes = {
    title,
    description,
    id: id()
  }
  storageData.push(newNotes)
  localStorage.setItem("notes", JSON.stringify(storageData))
  window.location ="main.html"
}


document.addEventListener("DOMContentLoaded", ()=>{
  send.addEventListener("click", createData)
})