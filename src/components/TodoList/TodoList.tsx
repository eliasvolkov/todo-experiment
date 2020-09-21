import React from 'react';
import { ITodoItem } from '../../types';
import { ListGroup } from 'reactstrap';
import TodoItem from '../TodoItem/TodoItem';

interface ITodoListProps {
    todos: ITodoItem[];
    onDelete: () => void;
    onComplete: () => void;
}

const TodoList = ({ todos, onDelete, onComplete }: ITodoListProps) => {
    return (
        <ListGroup>
            {todos.map((item) => (
                <TodoItem
                    {...item}
                    key={item.id}
                    onComplete={onComplete}
                    onDelete={onDelete}
                />
            ))}
        </ListGroup>
    );
};

export default TodoList;
