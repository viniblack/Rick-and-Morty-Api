import React, { Component } from 'react'
import { Card, Name, Img, Location } from './styled'
import axios from 'axios'
// import Personagens from '../Personagens'


export default class Cards extends Component {
  state = {
    test: [] as any,
    personagem: [] as any,
  }

  componentDidMount() {
    const test: any = [];
    for (let id = 1; id <= 2; id++) { // são 34 paginas mas estou trabalhando com 2 para facilitar a vida
      axios({
        method: 'GET',
        url: `https://rickandmortyapi.com/api/character?page=${id}`,
      })
        .then(res => {
          const personagem: any = res.data.results;
          console.log(test);
          Array.prototype.push.apply(test, personagem);
          console.log(test);
          this.setState({ test });

        })
    }
  }

  render() {
    return (
      <Card>
        {this.state.test.map((person: any) =>
          <article key={person.id}>
            <Img src={person.image} alt="" />
            <div>
              <Name>
                <h2>{person.name}</h2>
                <p>{person.status} - {person.species}</p>
              </Name>
              <Location>
                <span>Last known location:</span>
                <p>{person.location.name}</p>
              </Location>
            </div>
          </article>
        )}
      </Card>
    )
  }
}