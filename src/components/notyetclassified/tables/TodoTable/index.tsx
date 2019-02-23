import * as React from 'react';
import * as ReactDOM from 'react-dom';

const TodoTable: React.FC = () => (
<table>
    <thead>
      <tr>
        <th>id</th>
        <th>headline</th>
        <th>created_at</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>id</td>
        <td>headline</td>
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
);

export default TodoTable;
