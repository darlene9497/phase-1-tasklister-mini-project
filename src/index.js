document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const submit = document.querySelector('form');
  const inputValue = document.querySelector('#new-task-description');
  const ul = document.querySelector('#tasks');

  function addTask(){
    const li = document.createElement('li');
    li.textContent = inputValue.value;
    ul.appendChild(li);

    function removeTask(){
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'x';
      li.append(removeBtn);
      removeBtn.addEventListener('click',(e)=>{
        e.target.parentNode.remove();
      }) 
    }

    function selectPriority(){
      const dropdown = document.createElement('select');
      dropdown.innerHTML = '<option value="high" id="green">high</option> <option value="medium" id="yellow">medium</option> <option value="low" id="red">low</option> '


    }

    selectPriority();
    removeTask();
  }



  submit.addEventListener('submit',function(e){
    e.preventDefault();
    addTask();
  })

});
