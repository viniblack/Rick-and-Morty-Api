import React, { Component } from 'react'
import { Card, Wrap, Name, Text, Img, Section } from './styled'
import axios from 'axios'
// import Personagens from '../Personagens'


export default class Cards extends Component {
  state = {
    test: [] as any,
    personagem: [] as any,
  }

  componentDidMount() {
    const test: any = [];
    for (let id = 1; id <= 34; id++) {
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
          // console.log(personagem);
        })
    }
  }

  render() {
    return (
      <Card>
        {this.state.test.map((person: any) =>
          <Wrap key={person.id}>

            <Img src={person.image} alt="" />

            <Section>
              <Name>{person.name}</Name>
              <Text>{person.status} - {person.species}</Text>
            </Section>
          </Wrap>
        )}
      </Card>
    )
  }
}