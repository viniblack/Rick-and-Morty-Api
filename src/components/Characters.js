import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default class Characters extends React.Component {
  state = {
    character: undefined,
    episode: undefined,
    loading: false,

  }

  render() {
    let character = this.state.character;

    if (this.state.loading) {

      return (
        <Row className='d-flex justify-content-center' >
          {
            character.map((character) => {
              return (
                <Col sm={5} className='character__card d-flex m-3 rounded'>
                  <Row>
                    <Col sm={5} className='p-0'>
                      <img className='w-100 rounded-start' src={character.image} alt={character.name} />
                    </Col>
                    <Col className='my-2'>
                      <h1 className='character__card-name fs-2 fw-bold m-0'>{character.name}</h1>
                      <span className='fw-bolder'>{character.status} - {character.species}</span>

                      <div className='character__card__info mt-3'>
                        <div>
                          <span className='fw-bolder'>Última localização conhecida:</span> <br />
                          <p>{character.location.name}</p>
                        </div>
                        <div>
                          <span className='fw-bolder'>Visto pela primeira vez em:</span>

                          <p className='bg-danger'>Ver como entrar no link do episodio e pegar o nome dele</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              )
            })
          }
        </Row>
      );
    } else {
      return (<div>Carregando...</div>)
    }
  }

  async componentDidMount() {
    const urlCharacter = "https://rickandmortyapi.com/api/character";
    const response = await fetch(urlCharacter);
    const data = await response.json();
    this.setState({
      character: data.results,
      loading: true,
    })


  }
}