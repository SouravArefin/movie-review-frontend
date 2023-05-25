import React from 'react';

const Selector = ({ name, value, label, onChange,options } ) => {
    return (
        <select
        className="border-2 bg-white dark:bg-primary dark:border-dark-subtle border-light-subtle dark:focus:border-white focus:border-primary p-1 pr-10 outline-none transition rounded bg-transparent text-light-subtle dark:text-dark-subtle dark:focus:text-white focus:text-primary"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      >
            <option value="">{label}</option>
            {
                options.map(opt => {
                    return <option key={opt.title } value={opt.value}>{opt.title}</option>
                })
            }
      </select>
    );
};

export default Selector;