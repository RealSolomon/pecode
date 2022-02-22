import React, { useState } from 'react';
import { useStyles } from './styles';

const Form = ({ addWatchItem }) => {
  const classes = useStyles();

  const [inputValue, setInputValue] = useState('');

  const handleInput = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() !== '') {
      addWatchItem({
        title: inputValue,
        id: +new Date(),
        completed: false,
      });

      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={classes.newTodo}
        placeholder="What you need to watch?"
        onChange={handleInput}
        value={inputValue}
      />
    </form>
  );
};

export default Form;
