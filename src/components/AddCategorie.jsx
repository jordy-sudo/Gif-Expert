import React, { useState } from 'react'

export const AddCategorie = ({onNewCategorie}) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({target})=>{
        setInputValue(target.value);
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim().length <= 1)return;
        onNewCategorie(inputValue.trim());
        setInputValue('');  
    }
     return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder='Buscar GIfts'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
