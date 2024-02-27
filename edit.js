const search = window.location.search
const url = new URLSearchParams(search)
const id = url.get("id")
let data = JSON.parse(localStorage.getItem("notes"))

const edit = document.querySelector("#edit")
const handleEdits = (id)=>{
  const title = document.querySelector("#title").value
  const description = document.querySelector("#description").value

  for(let i = 0; i < data.length; i++){
    let element = data[i]
    if(element.id === id){
      element.title = title
      element.description = description
    }
  }

  localStorage.setItem("notes", JSON.stringify(data))
  window.location = "main.html"
}
edit.addEventListener("click", ()=>handleEdits(id))