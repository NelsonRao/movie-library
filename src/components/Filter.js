import React from 'react';

export default function Filter({ filter, onFilter }) {
  let submit = (e) => {
    e.preventDefault();
    onFilter(e.target.elements[0].value);
  };

  return (
    <form onSubmit={submit}>
      <div className="field">
        <p className="control has-icons-left">
          <input className="input" type="text" placeholder="Search" />
          <span className="icon is-small is-left">
            <i className="fas fa-search"></i>
          </span>
        </p>
      </div>
    </form>
  );
}
