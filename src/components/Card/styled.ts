import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1920px;

  article{
    display: flex;

    width: 35rem;
    height: 15rem;
    background: rgb(60, 62, 68);
    margin: 1rem;
   
  }
`;

const Name = styled.section`
  padding-top: 0.75rem;
  height: 5rem;
  width: 10rem;
h2{
    font-size: 1.5rem;
    font-weight: bold;

    width: 18rem;
    margin: 5px;
  }

  p{
    margin: 5px;
  }
`;


const Location = styled.section`
  padding-top: 0.75rem;
  height: 5rem;
  width: 10rem;
  span{
    color: rgb(255 255 255 / 70%);
    line-height: 
    
    rem;
  }
  p{
    width: 18rem;
    font-size: 1.2rem;
  }
`;


const Img = styled.img`
  width: 15rem;
  margin-right: 1rem;
`;

export {
  Card, Name, Img, Location,
}