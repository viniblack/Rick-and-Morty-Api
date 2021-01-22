import styled from 'styled-components';

const Card = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 25rem 25rem 25rem;
`;

const Section = styled.section`
padding-left: 1rem;
`;

const Wrap = styled.article`
  background: rgb(60, 62, 68);
  margin: 1rem;
  display: flex;

`;

const Name = styled.h2`
  font-size: 1.5rem;
  color: white;
  margin: 5px;
`;

const Text = styled.span`
  color: white;
  margin: 5px;
`;

const Img = styled.img`
  width: 10rem;
`;

export {
  Card, Wrap, Name, Text, Img, Section,
}