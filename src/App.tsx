import * as React from 'react'
import { render } from 'react-dom'

import { TodoModel } from './api'
import TodoTable from './components/notyetclassified/tables/TodoTable'
import AddTodoForm from './components/notyetclassified/forms/AddTodoForm'
import EditTodoForm from './components/notyetclassified/forms/EditTodoForm'

const App = () => {

    const todoData: TodoModel[] = [
        {id: 'a1', headline: 'headline1', content: 'this is content1', created_at: '2019-02-23 11:00'},
        {id: 'a2', headline: 'headline2', content: 'this is content2', created_at: '2019-02-23 12:00'},
        {id: 'a3', headline: 'headline3', content: 'this is content3', created_at: '2019-02-23 13:00'},
        {id: 'a4', headline: 'headline4', content: 'this is content4', created_at: '2019-02-23 14:00'},
    ];
    const initialFormState:TodoModel = { id: null, headline: '', content: '' }

    const [ todos, setTodos ] = React.useState<TodoModel[]>(todoData);
    const [ editing, setEditing ] = React.useState(false)
    const [ currentTodo, setCurrentTodo ] = React.useState(initialFormState)

    const addTodo = (todo: TodoModel) => {
        todo.id = 'a' + (todos.length + 1)
        setTodos([...todos, todo])
    }

    const deleteTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const updateTodo = (id:string, updatedTodo:TodoModel) => {
        setEditing(false)
        setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)))
    }

    const editRow = (todo:TodoModel) => {
        setEditing(true)
        setCurrentTodo({ id: todo.id, headline: todo.headline, content: todo.content })
    }

    return (
        <div>
            <h1>Chore TODO</h1>
            <div>
            {editing ?
                (
                    <div>
                        <h2>Edit Todo</h2>
                        <EditTodoForm
                            editing={editing}
                            setEditing={setEditing}
                            currentTodo={currentTodo}
                            updateTodo={updateTodo}
                        />
                    </div>
                ) : (
                    <div>
                        <h2>Add Todo</h2>
                        <AddTodoForm addTodo={addTodo} />
                    </div>
                )
            }
                <div>
                    <h2>View Todos</h2>
                    <TodoTable
                        todos={todos}
                        editRow={editRow}
                        deleteTodo={deleteTodo}
                    />
                </div>
            </div>
        </div>
    )
}

render(
  <App />,
  document.getElementById('app') as HTMLElement
);
