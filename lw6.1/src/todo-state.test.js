import { todos, addTodo, toggleCompleteTodo } from './todo-state.js';

describe('todo-state', () => {
  beforeEach(() => {
    todos.length = 0;
  });

  it('Should addTodo add element', () => {
    addTodo({ id: 1, text: 'My task', completed: false });
    expect(todos).toBeTruthy();
    expect(todos.length).toBe(1);
    expect(todos[0]).toEqual({ id: 1, text: 'My task', completed: false });
  });

  it('Should toggle task to complete/uncomplete', () => {
    addTodo({ id: 1, text: 'My task', completed: false });
    toggleCompleteTodo(1, true);
    expect(todos[0]).toEqual({ id: 1, text: 'My task', completed: true });
    toggleCompleteTodo(1, false);
    expect(todos[0]).toEqual({ id: 1, text: 'My task', completed: false });
  });
});