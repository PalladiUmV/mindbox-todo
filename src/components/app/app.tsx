import { useState } from 'react';
import AppHeader from '../app-header/app-header';
import ItemAddForm from '../item-add-form';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import { IItems, IState } from '../types/types';
import './app.scss';

const App = () => {

  const [maxId, setMaxId] = useState(100)

  const [list, setList] = useState<IState>({
    items: [
      { id: 1, label: 'Тестовое задание', important: false, done: false },
      { id: 2, label: 'Прекрасный код', important: true, done: false },
      { id: 3, label: 'Покрытие тестами', important: false, done: false }
    ],
    filter: 'all',
    search: ''
  })


  const onItemAdded = (label: string) => {
    const item = createItem(label);
    setList({ ...list, items: [...list.items, item] });
  };

  const toggleProperty = (arr: IItems[], id: number, propName: 'important' | 'done'): IItems[] => {
    const idx = arr.findIndex((item) => item.id === id);
    const oldItem = arr[idx];
    const value = !oldItem[propName];

    const item = { ...arr[idx], [propName]: value };
    return [
      ...arr.slice(0, idx),
      item,
      ...arr.slice(idx + 1)
    ];
  };

  const onToggleDone = (id: number) => {
    console.log(id)
    const items = toggleProperty(list.items, id, 'done')
    setList({ ...list, items: items })
  };

  const onToggleImportant = (id: number) => {
    const items = toggleProperty(list.items, id, 'important');
    setList({ ...list, items: items })
  };

  const onDelete = (id: number) => {
    const idx = list.items.findIndex((item) => item.id === id);
    const items = [
      ...list.items.slice(0, idx),
      ...list.items.slice(idx + 1)
    ];
    setList({ ...list, items })
  };

  const onFilterChange = (filter: string) => {
    setList({ ...list, filter: filter });
  };

  const createItem = (label: string): IItems => {
    setMaxId(prev => prev + 1)
    return {
      id: maxId,
      label,
      important: false,
      done: false
    };
  }

  const filterItems = (items: IItems[], filter: string): IItems[] | IItems[] => {
    if (filter === 'all') {
      return items;
    } else if (filter === 'active') {
      return items.filter((item) => (!item.done));
    }
    return items.filter((item) => item.done);
  }

  const searchItems = (items: IItems[], search: string): IItems[] => {
    if (search.length === 0) {
      return items;
    }

    return items.filter((item: IItems) => {
      return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }

  const { items, filter, search } = list;
  const doneCount = items.filter((item) => item.done).length;
  const toDoCount = items.length - doneCount;
  const visibleItems = searchItems(filterItems(items, filter), search);

  return (
    <div className="todo-app">

      <AppHeader />

      <ItemAddForm
        onItemAdded={onItemAdded} />

      <TodoList
        items={visibleItems}
        onToggleImportant={onToggleImportant}
        onToggleDone={onToggleDone}
        onDelete={onDelete} />

      <div>
        <ItemStatusFilter
          filter={filter}
          onFilterChange={onFilterChange}
          toDo={toDoCount} />
      </div>

    </div>
  )
};

export default App;
