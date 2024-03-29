function firstUncompletedNote(notes) 
{
  /*let a;
  for(let i in notes)
  {
    a=notes[i].todos.find(todo => todo.done == false);
    if(a)
    {
      return notes[i];
    }
  }
*/
return notes.find(note=>(note.todos.find(todo=>(todo.done===false))));

}
  
  const notes = [
    {
      id: 1,
      description: 'Workout program',
      todos: [
        {
          id: 1,
          name: 'Push ups - 10 x 3',
          done: true
        },
        {
          id: 2,
          name: 'Abdominals - 20 x 3',
          done: true
        },
        {
          id: 3,
          name: 'Tapis Roulant - 15min',
          done: true
        }
      ]
    },
    {
      id: 2,
      description: 'Front-end Roadmap',
      todos: [
        {
          id: 1,
          name: 'Learn HTML',
          done: true
        },
        {
          id: 2,
          name: 'Learn CSS',
          done: false
        },
        {
          id: 3,
          name: 'Learn JavaScript',
          done: true
        },
        {
          id: 4,
          name: 'Learn Angular',
          done: false
        }
      ]
    },
    {
      id: 3,
      description: 'My Movies Library',
      todos: [
        {
          id: 1,
          name: 'La città incantata',
          done: true
        },
        {
          id: 2,
          name: 'Avatar',
          done: true
        },
        {
          id: 3,
          name: 'Titanic',
          done: false
        }
      ]
    }
  ]
console.log("All notes: ")
notes.forEach(note => {
    console.log(note);
    note.todos.forEach(todo=>{
        console.log(todo);
    })
    console.log("");
    
});
const noteInProgress = firstUncompletedNote(notes);
console.log('First note in progress: ', noteInProgress);
noteInProgress.todos.forEach(i=> console.log(i));

//console.log(notes[2].todos[2].done);
