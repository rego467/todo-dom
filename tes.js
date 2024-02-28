const notes = [
  {
    title: 'javascript',
    description: 'lorem',
    id:"1234dff"
  },
  {
    title: 'css',
    description: 'lorem',
    id:"2234dff"
  }
]

const deleteById = (id)=>{
  // let result;
  // for(let i = 0; i < notes.length; i++){
  //   const element = notes[i]
  //   let ids = element.id === id
  //   console.log(ids, "ids")
  //   if(ids){
  //     result = notes.splice(ids,1)
  //   }else{
  //     console.log("id tidak ada")
  //   }
  // }
  let find = notes.findIndex(item=> item.id === id)
  if(find !== -1){
    notes.splice(find, 1)
    return notes[find]
  }else{
    console.log("id tidak ada")
    return null
  }

}

deleteById("1234dff")

console.log(notes, "notes now")