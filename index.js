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
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'delete';
        // create a div to hold the above elements
        let container = document.createElement('div')
        container.className = 'todo-item';
        container.appendChild(checkbox);
        container.appendChild(text);
        container.appendChild(deleteButton);
        
        return container
    }

    updateDOMElement () {
        
    }
}


// class ToDoList {
//     constructor () {
//         this.items = [];
//         this.elements = document.querySelector('#todo-list ul');
//     }

//     addElement (title, textContent) {

//     }

//     removeElement (id) {
//         this.items.forEach( (element, index) => {
//             if (element.)
//         } )
//     }
// }


let todo = new ToDoItem('Homework', 'complete the lab from tuesday.');
let todo2 = new ToDoItem('Workout', 'got to the gym and exercide in the evening.')

let todoContainer = document.querySelector('#todo-list ul');
console.log(todoContainer)

let todoDom = todo.createDOMElement()
let todoDom2 = todo2.createDOMElement()

todoContainer.appendChild(todoDom)
todoContainer.appendChild(todoDom2)
