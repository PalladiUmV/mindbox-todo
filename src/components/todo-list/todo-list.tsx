import TodoListItem from '../todo-list-item/todo-list-item';
import { IItems } from '../types/types';

import './todo-list.scss';

interface IProps {
  items: IItems[];
  onToggleImportant: (id: number) => void;
  onToggleDone: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList = ({ items, onToggleImportant, onToggleDone, onDelete }: IProps) => {
  const elements = items.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
          onDelete={() => onDelete(id)} />
      </li>
    );
  });

  return (<ul className="todo-list list-group">{elements}</ul>);
};

export default TodoList;
