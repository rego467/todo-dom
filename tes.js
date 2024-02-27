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

function updateNotes(id, title, description){
  for(let i = 0; i < notes.length; i++){
    const element = notes[i]
    if(element.id === id){
      element.title = title
      element.description = description
    }
  }
}

updateNotes("2234dff", "css update", "lorem update")

console.log(notes, "notes update")