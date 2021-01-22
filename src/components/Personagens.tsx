import React from 'react'
import axios from 'axios'

export default class Personagens extends React.Component {
  state = {
    personagem: [] as any
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: 'https://rickandmortyapi.com/api/character',
    })
      .then(res => {
        const personagem:any = res.data.results;
        this.setState({ personagem })
        console.log(personagem);
      })
  }

  render() {
    return (
      <div>
        <h1>Teste de personagem</h1>
        <ul>
          {this.state.personagem.map((person: any) => <li>{person.name}</li>)}

        </ul>
      </div>
    )
  }
}