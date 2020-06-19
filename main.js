
console.log('Hello vodai');
console.error('baal')
let value = 33
console.log(value)
value = 30
console.log(value)

// String , Numbers, boolean, null, undefined , symbols } js datatype

const name = 'John'
const age = 30
const isCool = true
const rating = 4.5
const x = null
const y = undefined
let z 
console.log(typeof z)
// numbers -> float, decimal


// concatanation 
console.log(`My name is ${name} and I am ${age}`)
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.substring(0,2).toUpperCase())
console.log(name.split(''))


// arrays
const numbers = new Array(1,2,3,4,5)
console.log(numbers)

const fruits  = ['apple', 'oranges', 'lichis']
console.log(fruits)

const mixed = ['apple', 1 , 5.5 , 'peers' , null]
console.log(mixed)

mixed[2] = undefined
console.log(mixed)

mixed.push('mango')
console.log(mixed)

mixed.unshift(8.9)
console.log(mixed)

console.log(Array.isArray(mixed))

console.log(mixed.indexOf(5.5)) // return -1 if no index found
console.log(mixed.indexOf('mango'))

const person = {

    firstName : 'John',
    lastName : 'Doe',
    hobbies : ['music','basketball'],
    address  : {
        street : '145/1 R.K mission road',
        city : 'Boston',
        state : 'MA'
    }

}

console.log(person)

// destructuring from class , wow!! 

const {firstName, lastName , address : {city}} = person

console.log(city)

// adding property 
person.email = "john@gmail.com"
console.log(person.email)

const todos = [

    {
        id : 1,
        text : "take out trash",
        isCompleted : true
    },

    {
        id : 2,
        text : "dentist appointment",
        isCompleted : true
    },


    {
        id : 3,
        text : "meeting with boss",
        isCompleted : false,
        extraField : 'hahah'
    }

]

console.log(todos)
console.log(todos[1])

// convert js array to JSON

const todoJson = JSON.stringify(todos)
console.log(todoJson)

len = todos.length

for(let i =0; i<len ; i++) {
    console.log(`${todos[i].text} ${todos[i].isCompleted ? 'is completed' : 'is not completed'}`)
}


for (let todo of todos) {
    console.log(todo.id)
}

// map , filter , foreach
console.log('start of higher order func')

todos.forEach(function(todo) {
    console.log(todo.text)
})

const todoText =  todos.map(function(todo) {
    return todo.text
})

console.log(todoText)

todoCompleted = todos.filter(function(todo) {
    return (todo.isCompleted === true)
})

console.log(todoCompleted)


todoCompleted = todos.filter(function(todo) {
    return (todo.isCompleted === true)
}).map(function(todo){
    return todo.id
})

console.log(todoCompleted)

// === match both type and value but == match only value

// oop in ES 5
function Person(firstName, lastName, dob) {
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear()
}

Person.prototype.getFullName = function() {
    return this.firstName + '  ' + this.lastName;
}

const person1 = new Person('John', 'Doe', '6-9-1996')
const person2 = new Person('Mary','Smith', '6-10-1995')

console.log(`${person1.getFullName()} is ${new Date().getFullYear() - person1.getBirthYear()} year old.`)

// oop in es 6

class Person2 {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)
    }

    getBirthYear() {
        return this.dob.getFullYear()
    }

    getFullName() {
        return this.firstName + '  ' + this.lastName;
    }

}

const person3 = new Person2('Adeline','Rosvelt','15-07-1994')
console.log(person3)


// single element selector
// window parent object of the browser
// document is the selector think

const form = document.getElementById('my-form')
console.log(form)

// this retrieve only single element ;
//if  multiple element present there then it will choose the first element
document.querySelector('h1')

// multiple element selector
const items=document.querySelectorAll('.item')

console.log(document.getElementsByClassName('item'))

console.log(document.getElementsByTagName('li'))

// importatnt section
items.forEach((item)=> singleItem = item)
singleItem.remove()

const ul = document.querySelector('.items')
console.log(ul)
ul.firstElementChild.textContent = "changed from main.js"
ul.lastElementChild.innerHTML = '<h2> html changed</h2>'


// document.querySelector('.btn').addEventListener('click',
// (e) => {
//     e.preventDefault()
//     alert('Button Clicked')
//     document.querySelector('.btn').style.background = 'green'
    
//     //document.querySelector('body').classList.add('bg-dark')
// }
// )


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
e.preventDefault();

if(nameInput.value === '' || emailInput.value === '') {
// alert('Please enter all fields');
msg.classList.add('error');
msg.innerHTML = 'Please enter all fields';

// Remove error after 3 seconds
setTimeout(() => msg.remove(), 3000);
} else {
// Create new list item with user
const li = document.createElement('li');

// Add text node with input values
li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

// Add HTML
// li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

// Append to ul
userList.appendChild(li);

// Clear fields
nameInput.value = '';
emailInput.value = '';
}
}