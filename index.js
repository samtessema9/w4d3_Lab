// Create ToDoItem class
class ToDoItem {
    static id = 1;
    constructor (title, textContent, element = null ) {
        this.id = ToDoItem.id;
        ToDoItem.id++;
        this.title = title;
        this.textContent = textContent;
        this.element = element;
        this.isCompleted = false;
        this.isRendered = false;
    }

    createDOMElement () {
        // create a checkbox
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.id = this.id.toString();
        // create a p tag to hold the title
        let text = document.createElement('p');
        text.textContent = this.title;
        // create a delete button
        let deleteButton = document.createElement('img');
        deleteButton.src = './trash.webp';
        deleteButton.on
        // create a div to hold the above elements
        let container = document.createElement('div')
        container.className = 'todo-item';
        container.appendChild(checkbox);
        container.appendChild(text);
        container.appendChild(deleteButton);
        
        return container
    }

    updateDOMElement (updatesObject) {
        for (let key of Object.keys(updatesObject)) {
            this[key] = updatesObject[key];
        }
    }
}


/*
Create a class called "TodoList" with the following properties and methods:
items: an array of TodoItem objects
element: a reference to the DOM element for the list
add(text): a method that adds a new TodoItem object to the list with the given text
remove(id): a method that removes the TodoItem object with the given id from the list
update(id, updates): a method that updates the TodoItem object with the given id with the given properties
*/

class ToDoList {
    constructor () {
        this.items = [];
        this.element = document.querySelector('#todo-list ul');
    }

    addElement (title, textContent) {
        this.items.push(new ToDoItem(title, textContent));
    }

    removeElement (id) {
        this.items.forEach( (item, index) => {
            if (item.id === id) {
                this.items.splice(index, 1);
            }
        })
    }

    update (id, updates) {
        this.items.forEach( (item, index) => {
            if (item.id === id) {
                item.update(updates);
            }
        })
    }

    render () {
        for (let item of this.items) {
            if (!item.isRendered) {
                this.element.appendChild(item.createDOMElement());
                item.isRendered = true;
            }
        }
    }

}


// Initialize a new instance of the TodoList class and store it in a variable.
const todoList = new ToDoList();

// Add an event listener to the form submit button that calls the add() method on the TodoList instance with the value of the text input.
document.querySelector('input[type="submit"]').addEventListener('click', (event) => {
    event.preventDefault();
    todoList.addElement(
        document.querySelector('input[id="title"]').value,
        document.querySelector('input[id="description"]').value
    );
    todoList.render();
    document.querySelector('input[id="title"]').value = '';
    document.querySelector('input[id="description"]').value = '';

    const deleteButtons = document.querySelectorAll('img');

    // Add an event listener to the delete button on each TodoItem that calls the remove() method on the TodoList instance with the id of the clicked item.
    for (let button of deleteButtons) {
        button.addEventListener('click', (event) => {
            event.target.parentNode.style = "display:none";
        })
    }
})


// Add an event listener to the delete button on each TodoItem that calls the remove() method on the TodoList instance with the id of the clicked item.


// Add an event listener to the checkbox on each TodoItem that calls the update() method on the TodoList instance with the id of the clicked item and sets the isCompleted property to the opposite of its current value.

// Implement the createDOMElement() and updateDOMElement() methods on the TodoItem class to create and update the DOM element for each item.

// Implement the add(), remove(), and update() methods on the TodoList class to add, remove, and update items in the list.

// Test the application by adding and deleting items from the TODO list.

// let todo = new ToDoItem('Homework', 'complete the lab from tuesday.');
// let todo2 = new ToDoItem('Workout', 'got to the gym and exercide in the evening.')

// let todoContainer = document.querySelector('#todo-list ul');
// console.log(todoContainer)

// let todoDom = todo.createDOMElement()
// let todoDom2 = todo2.createDOMElement()

// todoContainer.appendChild(todoDom)
// todoContainer.appendChild(todoDom2)
