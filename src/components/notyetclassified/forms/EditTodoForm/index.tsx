import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TodoModel } from '../../../../api';  // TODO import relative from src

type Props = {
    editing: boolean
    setEditing: Function
    currentTodo: TodoModel
    updateTodo: Function
}

const EditTodoForm: React.FC<Props> = props => {
  const [ todo, setTodo ] = React.useState(props.currentTodo)

  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    const {name, value} = (event.target)

    setTodo({ ...todo, [name]: value })

  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        props.updateTodo(todo.id, todo)
      }}
    >
      <label>Headline</label>
      <input type="text" name="headline" value={todo.headline} onChange={handleInputChange} />
      <label>Content</label>
      <textarea name="content" onChange={handleInputChange} value={todo.content} />
      <button>Update todo</button>
    </form>
  )
}

export default EditTodoForm;
