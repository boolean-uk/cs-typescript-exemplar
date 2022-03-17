import { Todo, TodoType } from './Todo'

interface StateProps {
  completedTodos: Array<TodoType>
  toggleTodoCompletion: (target: TodoType) => void
  removeTodo: (target: TodoType) => void
}

export const CompletedTodoList = (props: StateProps) => {

  const {completedTodos, toggleTodoCompletion, removeTodo} = props

  return (
    <section className="completed-list-section">
      <h2 className="title">COMPLETED</h2>
      <ul className="completed-list">
        {completedTodos.map((todo: TodoType, index: number) => (
          <Todo
            key={index}
            todo={todo}
            toggleTodoCompletion={toggleTodoCompletion}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </section>
  )
}
