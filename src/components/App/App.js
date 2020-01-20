import React from 'react';
import './App.css';
import PokemonList from '../PokemonList/PokemonList';
import SearchBar from '../SearchBar/SearchBar';
import Poke from '../../util/Poke';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      pokeNumbers: '20',
      helpers: '0'
    };

    this.searchPoke = this.searchPoke.bind(this);
    this.changePokeNumbers = this.changePokeNumbers.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  componentDidMount() {
    return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20/`)
          .then(response => {return response.json();})
          .then(json => {console.log(json);
            this.setState({pokemons: json.results});
          })
  }

  
  searchPoke(term) {
    Poke.search(term).then(results => {
      this.setState({pokemons: results});
      if (this.state.pokemons.length === 0) alert('нет покемона с таким значением');
    });
  }

  changePokeNumbers(event) {
    this.setState({pokeNumbers: event.target.innerHTML});
    return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=`+event.target.innerHTML+`/`)
      .then(response => {return response.json();})
      .then(json => {
              this.setState({pokemons: json.results});
              this.setState({helpers: '0'});
      })
  }

  nextPage() {
    let help = this.state.pokeNumbers;
    let helper = this.state.helpers;
    help = Number.parseInt(help);
    helper = Number.parseInt(helper);

    if (helper === '0') 
      {return this.setState({helpers: helper});}
    else {helper = helper + help;}

    return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${help}&offset=${helper}/`)
      .then(response => {return response.json();})
      .then(json => {
            this.setState({pokemons: json.results});
            this.setState({helpers: helper});
      });
  }


  render() {
    return (
      <div className="App">
        <h1>Покемоны</h1>
        <SearchBar searchPoke={this.searchPoke} searchPokeType={this.searchPokeType} />
        <div>
          <p>Показывать на странице по:&nbsp;  
            <button onClick={this.changePokeNumbers}>10</button>
            <button onClick={this.changePokeNumbers}>20</button>
            <button onClick={this.changePokeNumbers}>50</button>
            &nbsp; покемонов</p>
        </div>
        <div>
          <p>Посмотреть следующих {this.state.pokeNumbers}
          &nbsp;покемонов <button onClick={this.nextPage}>>></button></p>
        </div>
        <PokemonList pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
