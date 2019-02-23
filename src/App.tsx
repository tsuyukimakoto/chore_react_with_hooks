import * as React from 'react'
import { render } from 'react-dom'
import TodoTable from './components/notyetclassified/tables/TodoTable'

const App = () => (
<div>
    <h1>Chore TODO</h1>
    <div>
        <div>
            <h2>Add Todo</h2>
        </div>
        <div>
            <h2>View Todos</h2>
            <TodoTable />
        </div>
    </div>
</div>
)

render(
  <App />,
  document.getElementById('app') as HTMLElement
);
