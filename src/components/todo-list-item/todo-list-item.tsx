import './todo-list-item.scss';

interface IProps {
  important: boolean
  done: boolean
  label: string
  onToggleImportant: () => void
  onToggleDone: () => void
  onDelete: () => void
}

const TodoListItem = ({ important, done,
  label, onToggleImportant, onToggleDone, onDelete }: IProps) => {
  let classNames = 'todo-list-item';
  if (important) {
    classNames += ' important';
  }

  if (done) {
    classNames += ' done';
  }


  return (
    <span className={classNames}>

      {done ?
        <i className="fa fa-check-circle-o" aria-hidden="true"> </i>
        :
        <i className="fa fa-circle-thin" aria-hidden="true"></i>
      }
      <span
        className="todo-list-item-label"
        onClick={onToggleDone}>{label}</span>

      <button type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onToggleImportant}>
        <i className="fa fa-exclamation"></i>
      </button>

      <button type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDelete}>
        <i className="fa fa-trash-o"></i>
      </button>
    </span>
  );
};

export default TodoListItem;
