import React, { ChangeEventHandler, FC, useState } from 'react';
import './item-add-form.scss';

interface IProps {
  onItemAdded: (label: string) => void;
}

const ItemAddForm: FC<IProps> = ({ onItemAdded }) => {

  const [label, setLabel] = useState('')


  const onLabelChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setLabel(e.target.value)
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLabel('')
    const cb = onItemAdded;
    cb(label)
  };
  return (
    <form
      onSubmit={onSubmit}>
      <input type="text"
        className="control"
        value={label}
        onChange={onLabelChange}
        placeholder="What needs to be done?" />

    </form>
  );
}

export default ItemAddForm;