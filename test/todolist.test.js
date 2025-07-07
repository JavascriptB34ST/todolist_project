const Todo = require('../lib/todo');
const TodoList = require('../lib/todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;
  
  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');
    
    list = new TodoList('Today\'s Todos');
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });
  
  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });
  
  test('calling toArray returns the list in array form', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });
  
  test('calling first returns the first todo item', () => {
    expect(list.first()).toEqual(todo1);
  });
  
  test('calling last returns the last todo item', () => {
    expect(list.last()).toEqual(todo3);
  });
  
  test('calling shift removes and returns the first item', () => {
    expect(list.shift()).toEqual(todo1);
    expect(list.size()).toBe(2);
  });
  
  test('calling shift removes and returns the last item', () => {
    expect(list.pop()).toEqual(todo3);
    expect(list.size()).toBe(2);
  });
  
  test('calling isDone returns true if all items are done, otherwise false', () => {
    expect(list.isDone()).toBeFalsy();
  });
  
  test('calling add without a todo item results in a TypeError', () => {
    expect(() => list.add()).toThrow(TypeError);
    expect(() => list.add(1)).toThrow(TypeError);
    expect(() => list.add('hi')).toThrow(TypeError);
  });
  
  test('itemAt returns the item at a given index', () => {
    expect(list.itemAt(0)).toEqual(todo1);
    expect(list.itemAt(1)).toEqual(todo2);
    expect(() => list.itemAt(5)).toThrow(ReferenceError);
  });
  
  test('markDoneAt returns true if an item is done', () => {
    expect(() => list.markDoneAt(5)).toThrow(ReferenceError);
    
    list.markDoneAt(1);
    expect(todo1.isDone()).toBeFalsy();
    expect(todo2.isDone()).toBeTruthy();
    expect(todo3.isDone()).toBeFalsy();
  });
  
  test('markUndoneAt return true if an item is not done', () => {
    expect(() => list.markUndoneAt(5)).toThrow(ReferenceError);
    
    todo1.markDone();
    expect(todo1.isDone()).toBeTruthy();
    expect(todo2.isDone()).toBeFalsy();
    expect(todo3.isDone()).toBeFalsy();
  });
  
  test('markAllDone should mark all items as done', () => {
    list.markAllDone();
    
    expect(todo1.isDone()).toBeTruthy();
    expect(todo2.isDone()).toBeTruthy();
    expect(todo3.isDone()).toBeTruthy();
  });
  
  test('removeAt removes item from specified index', () => {
    expect(() => list.removeAt(5)).toThrow(ReferenceError);
    expect(list.removeAt(0)).toEqual([todo1]);
    expect(list.size()).toBe(2);
  });
  
  test('toString returns string representation of the list', () => {
    let string = ['---- Today\'s Todos ----', '[ ] Buy milk', '[ ] Clean room',
    '[ ] Go to the gym'].join('\n');
    let string2 = ['---- Today\'s Todos ----', '[ ] Buy milk', '[ ] Clean room',
    '[X] Go to the gym'].join('\n');
    let string3 = ['---- Today\'s Todos ----', '[X] Buy milk', '[X] Clean room',
    '[X] Go to the gym'].join('\n');
    
    expect(list.toString()).toBe(string);
    list.markDoneAt(2);
    expect(list.toString()).toBe(string2);
    expect(list.toString()).toBe(string2);
  });
  
  test('forEach iterates over all todos', () => {
    expect(list.forEach(todo => todo.markDone()));
    
    expect(todo1.isDone()).toBeTruthy();
    expect(todo2.isDone()).toBeTruthy();
    expect(todo3.isDone()).toBeTruthy();
  });
  
  test('filter returns a new list', () => {
    expect(list.filter(todo => todo.markDone()));
    
    expect(todo1.isDone()).toBeTruthy();
    expect(todo2.isDone()).toBeTruthy();
    expect(todo3.isDone()).toBeTruthy();
  });
});