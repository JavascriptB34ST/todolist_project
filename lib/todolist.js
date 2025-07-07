const Todo = require('./todo');

class TodoList {
  constructor (title) {
    this.title = title;
    this.todos = [];
  }
  
  add (todo) {
    if (todo instanceof Todo) {
      this.todos.push(todo);
    } else throw new TypeError('can only add Todo objects');
  }
  
  size () {
    return this.todos.length;
  }
  
  first () {
    return this.todos[0];
  }
  
  last () {
    return this.todos[this.size() - 1];
  }
  
  itemAt (position) {
    this.#validateIndex(position);
    return this.todos[position];
  }
  
  markDoneAt (position) {
    this.itemAt(position).markDone();
  }
  
  markUndoneAt (position) {
    this.itemAt(position).markUndone();
  }
  
  isDone () {
    for (let todo of this.todos) {
      if (!todo.isDone()) return false;
    }
    return true;
  }
  
  shift () {
    return this.todos.shift();
  }
  
  pop () {
    return this.todos.pop();
  }
  
  removeAt (position) {
    return this.todos.splice(this.itemAt(position), 1);
  }
  
  toString () {
    let displayArray = ['---- Today\'s Todos ----'];
    this.todos.forEach(todo => displayArray.push(todo.toString()));
    let displayString = displayArray.join('\n');
    return displayString;
  }
  
  forEach (callback) {
    function forEach (arr, callback, context) {
      for (let idx = 0; idx < arr.length; idx++) {
        if (context) callback.call(context, arr[idx]);
        else callback(arr[idx], idx, arr);
      }
    }
    
    forEach(this.todos, callback);
  }
  
  filter (callback) {
    let newList = new TodoList(this.title);
    
    this.forEach(todo => {
      if (callback(todo)) {
        newList.add(todo);
      }
    });
    
    return newList;
  }
  
  findByTitle (title) {
    let filteredTodos = this.filter(todo => {
      return todo.title === title;
    });
    
    let firstTodo = filteredTodos.first();
    return firstTodo;
  }
  
  allDone () {
    return this.filter(todo => todo.isDone());
  }
  
  allNotDone () {
    return this.filter(todo => !todo.isDone());
  }
  
  markDone (title) {
    if (this.findByTitle(title)) this.findByTitle(title).markDone();
  }
  
  markAllDone () {
    this.forEach(todo => todo.markDone());
  }
  
  markAllUndone () {
    this.forEach(todo => todo.markUndone());
  }
  
  toArray () {
    return [...this.todos];
  }
  
  #validateIndex (position) {
    if (!this.todos.hasOwnProperty(position)) {
      throw new ReferenceError(`invalid index: ${position}`);
    }
  }
}

module.exports = TodoList;