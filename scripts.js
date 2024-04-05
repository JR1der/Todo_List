function addElement() {
  const taskToAdd = document.getElementById('taskInput').value;

  if (taskToAdd !== '') {
    let ul = document.getElementById('taskList');
    let li = document.createElement('li');

    let taskDiv = document.createElement('div');

    let doneCheckbox = document.createElement('input')
    doneCheckbox.type = 'checkbox';
    doneCheckbox.addEventListener('change', function() {
      if (this.checked) {
        li.classList.add('fadeOut');
        li.addEventListener('transitionend', function() {
          ul.removeChild(li);
        });
      }
    });

    let textSpan = document.createElement('span')
    textSpan.innerHTML = taskToAdd;

    taskDiv.appendChild(doneCheckbox);
    taskDiv.appendChild(textSpan);

    li.appendChild(taskDiv);
    ul.appendChild(li);

    document.getElementById('taskInput').value = '';
  }
}
let textBox = document.getElementById('taskInput');
let button = document.getElementById('taskButton');
textBox.addEventListener('keyup', function(event) {
  if (event.keyCode == 13) {
    button.click();
  }
})