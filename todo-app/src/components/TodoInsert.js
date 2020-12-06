import React, {useState , useCallback} from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
  const [value , setValue] = useState('');

  const onChage = useCallback(e => {
    setValue(e.target.value);
  }, []);
  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 입력하세요"
      value={value}
      onChange={onChage}
      />
      <button type="submit">
        <MdAdd/>
      </button>
    </form>
  )
}

export default TodoInsert;