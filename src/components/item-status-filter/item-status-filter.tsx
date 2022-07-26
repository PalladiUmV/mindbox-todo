import { IButtons } from "../types/types";
import './item-status-filter.scss'

interface IProps {
  filter: string
  onFilterChange: (name: string) => void
  toDo: number
}

const filterButtons: IButtons[] = [
  { name: 'all', label: 'All' },
  { name: 'active', label: 'Active' },
  { name: 'done', label: 'Completed' }
]

const ItemStatusFilter = ({ filter, onFilterChange, toDo }: IProps) => {

  const buttons = filterButtons.map(({ name, label }: IButtons) => {
    const isActive = name === filter
    const classNames = 'btn ' + (isActive ? 'btn-outline-warning' : 'btn-light')

    return (
      <button key={name}
        type="button"
        onClick={() => onFilterChange(name)}
        className={classNames}>{label}</button>
    );
  });

  return (
    <div className="status-filter">
      <h2>{toDo} items left</h2>
      <div className="buttons">
        {buttons}
      </div>
    </div>

  );
};

export default ItemStatusFilter;
