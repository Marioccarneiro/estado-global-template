import React from "react";
import styled from "styled-components";

export default function CardCarrinho({ produto, remover }) {
  return (
    <CardContainer>
      <Image src={produto.url} />
      <p>{produto.nome}</p>
      <p>
        Qtd <b>{produto.amount}</b>
      </p>
      <p>R${produto.price}</p>
      <DeleteButton onClick={() => remover(produto.id)}>x</DeleteButton>
    </CardContainer>
  );
}
const Image = styled.img`
  width: 30%;
`;
const DeleteButton = styled.button`
  background-color: tomato;
  border: none;
`;
const CardContainer = styled.section`
  width: 300px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  padding: 10px;
`;
