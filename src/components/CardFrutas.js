import React from "react";
import styled from "styled-components";

export default function CardFruta({ fruta, comprar }) {
  return (
    <CardContainer>
      <Image src={fruta.url} alt={fruta.name} />
      <p>{fruta.name}</p>
      <p>R${fruta.price}</p>
      <button onClick={() => comprar(fruta.id)}>Comprar</button>
    </CardContainer>
  );
}
const Image = styled.img`
  width: 80%;
`;
const CardContainer = styled.section`
  width: 150px;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
`;
