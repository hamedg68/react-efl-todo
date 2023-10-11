import { AddTodo } from "./components/add-todo";
import { useObservable } from "@ngneat/react-rxjs";
import {
  addTodo,
  deleteTodo,
  visibleTodos$,
  updateTodoCompleted,
  updateTodosFilter,
} from "./components/todos.repository";
import { TodoItem } from "./components/todo";
import { Filters } from "./components/filters";

function Todos() {
  const [todos] = useObservable(visibleTodos$);

  return (
    <div>
      <Filters onChange={updateTodosFilter} />

      <AddTodo onAdd={addTodo} />

      <section className="mt-3">
        {todos.map((todo) => (
          <TodoItem
            {...todo}
            key={todo.id}
            onClick={updateTodoCompleted}
            onDelete={deleteTodo}
          />
        ))}
      </section>
    </div>
  );
}

export default Todos;
