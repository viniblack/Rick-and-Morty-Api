import React, { Component } from 'react'
import { Card, Wrap, Name, Text, Img, Section } from './styled'
import axios from 'axios'


export default class Cards extends Component {
  state = {
    personagem: [] as any
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: 'https://rickandmortyapi.com/api/character',
    })
      .then(res => {
        const personagem: any = res.data.results;
        this.setState({ personagem })
        console.log(personagem);
      })
  }

  render() {
    return (
      <Card >
        {this.state.personagem.map((person: any) =>
          <Wrap>
       
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