import React from 'react';
import './Pokemontypes.css';

class Pokemontypes extends React.Component {
  render() {
    return (
      <div>
        <h3>Type:</h3>
        {this.props.types.map(type => 
          {return (
            <div className="TypesTag">{type.type.name}</div>)
          }
        )}
      </div>
    );
  }
}

export default Pokemontypes;