import React from 'react';
// import './SearchBar.css';


class SearchTypes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      typesNames: [],
      term: ''
    };
  }


  componentDidMount() {
      return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1000/`)
      .then(response => 
        {return response.json();})
      .then(json => {
          let url;
          json.results.map(result => {
              url = result.url;
              return fetch(url)
                .then(response => 
                  {return response.json();}
                )
                .then(json => {
                  json.types.map(type => {
                    let kpo = type.type.name;
                    let plo = this.state.typesNames;
                    if ( plo.indexOf(kpo) === -1 ) {
                      plo = [...plo, kpo];
                      this.setState({typesNames:plo});
                    }
                  });
                });
          })
      })
  }



  render() {
        return (
            <select name="type" onChange={this.props.handleTermChange}> <option>Type</option> {this.state.typesNames.map((typesName, idx) => <option key={idx}>{typesName}</option>)}</select>
        );
    }
}
  
  export default SearchTypes;