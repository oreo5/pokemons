const Poke = {
  search(term) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1000/`)
      .then(response => 
        {return response.json();})
      .then(json => {
        let url
        let itemTotal = 0
        if  (term[1] === 'text')
          {return json.results.filter(item => item.name.includes(term[0]) === true);}

        else {
            return json.results.filter (item => {
                  url = item.url;
                  return fetch(url)
                    .then(response => 
                      { return response.json()}
                    )
                    .then(json => {
                      if (json.types.some (type => type.type.name === term[0]))
                        { console.log(item);
                          console.log(json.types); 
                          itemTotal ++;
                          console.log(`Всего покемонов с типом ${term[0]} : ${itemTotal}`);
                          return true}
                    })
            }) //filter
        } //else
      }) //.then
  } //search
}


export default Poke;