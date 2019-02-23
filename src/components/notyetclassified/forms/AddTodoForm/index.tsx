import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TodoModel } from '../../../../api';  // TODO import relative from src

type Props = {
    addTodo: (todo: TodoModel) => void;
}

const AddTodoForm: React.FC = props => (
<form>
      <label>Headline</label>
      <input type="text" name="headline" value="" />
      <label>Content</label>
      <textarea name="content" value="" />
      <button>Add new todo</button>
    </form>
);

export default AddTodoForm;
