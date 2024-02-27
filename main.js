let main = document.querySelector("main")
const listData = document.querySelector(".listData")

let data = JSON.parse(localStorage.getItem("notes"))
let loading = document.getElementById("loading")

const callbackData = (arr, callback)=>{
  if(!Array.isArray(arr)){
    console.error("data harus berupa array")
    return;
  }
  for(let i = 0; i < arr.length; i++){
    const element = arr[i]
    callback(element)
  }
}

function tampilanList(){
  callbackData(data, ({title, id})=>{
    const div = document.createElement("div")
    div.classList.add("list")

    const divChild = document.createElement("div")
    divChild.classList.add("divChild")

    const h1 = document.createElement("h1")
    h1.classList.add("listHeading")
    h1.innerHTML = title

    let button = document.createElement("button")
    button.classList.add("button")
    button.innerHTML = "detail"

    button?.addEventListener("click",()=>tes(id))

    divChild.append(h1)
    divChild.append(button)
    div.append(divChild)
    listData.append(div)
  })
}


function tes(id){
  const url = new URLSearchParams(`ids=${id}`)
  
  window.location = `detail.html?${url}`
}

function handleCreateNote(){
   window.location="create.html"
}

const create = document.querySelector("#create") 
create?.addEventListener("click", handleCreateNote)

document.addEventListener("DOMContentLoaded", ()=>{
  let dataKosong = document.createElement("h2")
  console.log(data.length, "data") 
  setTimeout(()=>{
    loading.style.display ="none"
    main.style.display = "block"
    if(data.length === 0){
      dataKosong.classList.add("dataKosong")
      dataKosong.innerHTML ="data tidak ada"
      main.append(dataKosong)
    }else{
      dataKosong.classList.remove("dataKosong")
      tampilanList()
    }
  },1000)
})



