import React from 'react';
import { ListGroupItem, Button } from 'reactstrap';
import cn from 'classnames';
import './TodoItem.scss';

interface ITodoItemProps {
    title: string;
    onComplete: () => void;
    onDelete: () => void;
    isCompleted?: boolean;
}

const TodoItem = ({
    title,
    onComplete,
    onDelete,
    isCompleted = false,
}: ITodoItemProps) => {
    return (
        <ListGroupItem>
            <div className="todo-item">
                <strong
                    className={cn('todo-item__title', {
                        ['todo-item__title--completed']: isCompleted,
                    })}
                >
                    {title}
                </strong>
                <div className="todo-item__buttons">
                    <Button color="success" onClick={onComplete}>
                        complete
                    </Button>
                    <Button color="danger" onClick={onDelete}>
                        delete
                    </Button>
                </div>
            </div>
        </ListGroupItem>
    );
};

export default TodoItem;
