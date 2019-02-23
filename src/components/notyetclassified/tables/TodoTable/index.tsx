import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TodoModel } from '../../../../api';  // TODO import relative from src

type Props = {
    todos: TodoModel[]
    editRow: Function
    deleteTodo: Function
}

const TodoTable: React.FC<Props> = (props:Props) => (
<table>
    <thead>
      <tr>
        <th>id</th>
        <th>headline</th>
        <th>created_at</th>
      </tr>
    </thead>
    <tbody>
      {props.todos.length > 0 ? (
          props.todos.map(todo => (
              <tr>
                <td>{todo.id}</td>
                <td>{todo.headline}</td>
                <td>
                  <button
                    onClick={() => {
                      props.editRow(todo)
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => props.deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
          ))
        ):(
                <tr>
                    <td colSpan={4}>No todos</td>
                </tr>
        )
      }
    </tbody>
  </table>
);

export default TodoTable;
