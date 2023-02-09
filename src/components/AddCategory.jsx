import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        // console.log(target.value);
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        // onCategories(cat => [inputValue, ...cat]); Es una forma por status
        setInputValue('');
        onNewCategory(inputValue.trim()); //No usamos los Status y es más entendible

    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder='Buscar gifs'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

