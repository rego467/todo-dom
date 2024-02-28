const params = window.location.search
const url = new URLSearchParams(params)
const ids = url.get("ids")

let data = JSON.parse(localStorage.getItem("notes"))
const main = document.querySelector("main")

const callbackById =(id,arr,callback)=>{
  let found = false
  for(let i = 0; i < arr.length; i++){
    const element = arr[i]

    if(element.id === id){
      found = true
      callback(element)
    }
  }

  if(!found){
    callback(null)
  }

}

const handleDeletes = (id)=>{
  let finds = data.findIndex(item => item.id === ids) 
  if(finds !== id){
    data.splice(finds, 1)
    localStorage.setItem("notes", JSON.stringify(data))
    window.location ="main.html"
  }else{
    console.log("gagal menghapus data")
  }
}

const handleEdit = (id)=>{
  console.log(id, "edit")
  let edit = new URLSearchParams(`id=${id}`)
  window.location = `edit.html?${edit}`
}

callbackById(ids, data, ({title, description, id})=>{
  const div = document.createElement("div")
  div.classList.add("detail")
  const h2 = document.createElement("h2")
  h2.innerHTML = title

  const paragraf = document.createElement("p")
  paragraf.innerHTML = description
  
  const buttonDel = document.createElement("button")
  buttonDel.innerHTML ="delete"
  buttonDel.addEventListener("click", ()=>handleDeletes(id))

  const buttonEdit = document.createElement('button')
  buttonEdit.innerHTML ="edit"
  buttonEdit.addEventListener("click", ()=>handleEdit(id))

  div.append(buttonEdit)
  div.append(buttonDel)
  div.append(h2)
  div.append(paragraf)
  main.append(div)

})
