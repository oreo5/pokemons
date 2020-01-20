import React from 'react';
import './Pokemon.css';

import Pokemontypes from '../Pokemontypes/Pokemontypes';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      avatar: '',
      pokemontypes: [],
      stat: []
    };
  }

  componentDidMount() {
    return fetch(this.props.url)
          .then(response => {return response.json();})
          .then(json => {
            this.setState({avatar: json.sprites.front_shiny,
                pokemontypes: json.types,
                stat: json.stats[0].stat.name
            });
          })
  }

  render() {
    return (
      <div className="Pokemon">
        <h1>{this.props.pokemon}</h1>
        <div className="image-container">
        <img src={this.state.avatar} alt=''/>
        </div>
        <Pokemontypes types={this.state.pokemontypes} />
        <p>Stat: {this.state.stat}</p>
      </div>
    );
  }
}

export default Pokemon;