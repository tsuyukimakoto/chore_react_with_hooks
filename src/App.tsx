import * as React from 'react'
import { render } from 'react-dom'

import { TodoModel } from './api'
import TodoTable from './components/notyetclassified/tables/TodoTable'
import AddTodoForm from './components/notyetclassified/forms/AddTodoForm'

const App = () => {

    const todoData: TodoModel[] = [
        {id: 'a1', headline: 'headline1', content: 'this is content1', created_at: '2019-02-23 11:00'},
        {id: 'a2', headline: 'headline2', content: 'this is content2', created_at: '2019-02-23 12:00'},
        {id: 'a3', headline: 'headline3', content: 'this is content3', created_at: '2019-02-23 13:00'},
        {id: 'a4', headline: 'headline4', content: 'this is content4', created_at: '2019-02-23 14:00'},
    ];

    const [ todos, setTodos ] = React.useState<TodoModel[]>(todoData);

    const addTodo = (todo: TodoModel) => {
        todo.id = 'a' + (todos.length + 1)
        setTodos([...todos, todo])
    }

    const deleteTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }


    return (
        <div>
            <h1>Chore TODO</h1>
            <div>
                <div>
                    <h2>Add Todo</h2>
                    <AddTodoForm addTodo={addTodo} />
                </div>
                <div>
                    <h2>View Todos</h2>
                    <TodoTable todos={todos} deleteTodo={deleteTodo} />
                </div>
            </div>
        </div>
    )
}

render(
  <App />,
  document.getElementById('app') as HTMLElement
);
