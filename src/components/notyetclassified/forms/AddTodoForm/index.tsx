import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TodoModel } from '../../../../api';  // TODO import relative from src

type Props = {
    addTodo: (todo: TodoModel) => void;
}

const AddTodoForm: React.FC<Props> = props => {
  const initialFormState: TodoModel = { id: null, headline: '', content: '' }
  const [ todo, setTodo ] = React.useState(initialFormState)

  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    const {name, value} = (event.target)

    setTodo({ ...todo, [name]: value })

  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!todo.headline || !todo.content) return

        props.addTodo(todo)
        setTodo(initialFormState)
      }}
    >
      <label>Headline</label>
      <input type="text" name="headline" value={todo.headline} onChange={handleInputChange} />
      <label>Content</label>
      <textarea name="content" onChange={handleInputChange} value={todo.content} />
      <button>Add new todo</button>
    </form>
  )
}

export default AddTodoForm;
