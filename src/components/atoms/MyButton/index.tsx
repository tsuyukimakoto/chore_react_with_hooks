import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface MyButtonProps {
    name?: string;
    message?: string;
}

const MyButton: React.FC<MyButtonProps> = ({ name, message }) => (
  <button name="{name}">{message}</button>
);

export default MyButton;
