import React from 'react';
import './SearchBar.css';

import SearchTypes from '../SearchTypes/SearchTypes';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: []
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }


  handleTermChange(event) {
    this.setState({term: [event.target.value, event.target.type]});
  }

  handleSearch(event) {
    this.props.searchPoke(this.state.term);
  }


  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBarGray">
          <div className="SearchBar-fields">
            <input placeholder="Введите имя покемона (полностью или часть)" onChange={this.handleTermChange} />
          </div>
          <SearchTypes handleTermChange={this.handleTermChange} searchPoke={this.searchPoke}/>
          <div className="SearchBar-submit">
            <button onClick={this.handleSearch}>Искать</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
