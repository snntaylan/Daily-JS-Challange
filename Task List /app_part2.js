// Define UI variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Load all event listeners
loadEventListeners();



// Load all event listeners
function loadEventListeners() {
	
	// Add task event
	form.addEventListener('submit', addTask);
	
	// Remove task event 
	taskList.addEventListener('click', removeTask);

	// Clear task event
	clearBtn.addEventListener('click', clearTasks);
}

// Add Task
	function addTask(e) {
		if(taskInput.value === ''){
			alert('Add a task');

		}

		// Create li element
		const li = document.createElement('li');
		
		// Add class
		li.className = 'collection-item';
		
		// Create text node and append to li
		li.appendChild(document.createTextNode(taskInput.value));
		
		// Create new link element
		const link = document.createElement('a');

		//Add class
		link.className = 'delete-item secondary-content';
		// Add icon html
		link.innerHTML = '<i class="fa fa-remove"></li>';

		// Append the link to li
		li.appendChild(link);

		// Append li to ul
		taskList.appendChild(li)

		// Clear input
		taskInput.value = '';

		//console.log(li);


		e.preventDefault();
	}

	// Part_2 Delete and filter task

	// remove Task

	function removeTask(e){ // e-> taking event parameter
		if(e.target.parentElement.classList.contains('delete-item')){
			// console.log(e.target);
			if(confirm('Are you Sure?')){
			e.target.parentElement.parentElement.remove();
		}
	} 
}

// Clear Task

function clearTasks(){ // clear all tasks such as default version -> no task
	// taskList.innerHTML = '';

	// Faster (https://coderwall.com/p/nygghw/don-t-use-innerhtml-to-empty-dom-elements)
	while (taskList.firstChild){
		taskList.removeChild(taskList.firstChild);
	} 
}



