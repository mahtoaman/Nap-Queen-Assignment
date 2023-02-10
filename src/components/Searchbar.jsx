import React, { useState, useCallback } from 'react';

const Searchbar = ({ handleFormSubmit }) => {
  const [term, setTerm] = useState('');

  const handleChange = useCallback(event => {
    setTerm(event.target.value);
  }, []);

  const handleSubmit = useCallback(event => {
    event.preventDefault();
    handleFormSubmit(term);
  }, [handleFormSubmit, term]);

  return <div className="search-bar ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="field">
          <input onChange={handleChange} name="video-search" type="text" placeholder="Search Video" />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </div>;
};

export default Searchbar;