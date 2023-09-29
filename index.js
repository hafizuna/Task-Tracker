const addTodo = document.getElementById('addBtn');
const inputEl = document.getElementById('input')
const todosContainer = document.getElementById('todos');
const pendingContainer = document.getElementById('pending');
const message = document.getElementById('message');

// On Enter key
inputEl.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    if(checkInput(inputEl.value)){
      addToNewTasks();
      addToPending();
    } else{
      message.textContent="Please write something first";
      message.style.color='red';
      setTimeout(() => {
        message.textContent="";
      }, 3000);
    }
  }
});

addTodo.addEventListener('click', () => {
  if(checkInput(inputEl.value)){
    addToNewTasks();
    addToPending();
  } else{
    message.textContent="Please write something first";
    message.style.color='red';
    setTimeout(() => {
      message.textContent="";
    }, 3000);
  }
})

function addToNewTasks(){
  const div = document.createElement('div');
  const p = document.createElement('p');
  const i1 = document.createElement('i');
  const i2 = document.createElement('i');
  i1.className ='fa-solid fa-square-check'
  i2.className ='fa-solid fa-trash'
  p.textContent=inputEl.value;
  div.className='single-todo';
  div.append(p);
  div.append(i1);
  div.append(i2);
  todosContainer.prepend(div);
}

function addToPending(){
  const div = document.createElement('div');
  const p = document.createElement('p');
  const i1 = document.createElement('i');
  const i2 = document.createElement('i');
  i1.className ='fa-solid fa-square-check'
  i2.className ='fa-solid fa-trash'
  p.textContent=inputEl.value;
  div.className='single-todo';
  div.append(p);
  div.append(i1);
  div.append(i2);
  pendingContainer.prepend(div);
  inputEl.value = '';
}

function checkInput(input){
  if(input!==''){
    return true;
  } else{
    return false;
  }
}