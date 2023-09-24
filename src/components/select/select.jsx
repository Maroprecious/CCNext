import React, { useState } from 'react';
import Select from 'react-select';
import styles from './select.module.css'




export const DropDownSelect = ({ placeholder, onSelect, onChange, options, formatOptionLabel, noOptionsMessage, customStyles}) => {
  const [value, setValue] = useState("")
  return (
    <div className="App">
      <Select
        placeholder={placeholder}
        className='custom'
        onInputChange={(e) => {
          onChange(e)
          setValue(e)
        }}
        options={options}
        styles={customStyles}
        maxMenuHeight={'23rem'}
        onChange={(e) => onSelect(e)}
        formatOptionLabel={formatOptionLabel}
        noOptionsMessage={noOptionsMessage}
      />
    </div>
  );
}