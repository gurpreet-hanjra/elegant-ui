import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
}

const ShinyButtonStyled = styled.button`
    background-color: silver;
`;

const ShinyButton = ({ title }: Props) =>
  <ShinyButtonStyled>{title}</ShinyButtonStyled>;

// const ShinyButton = () => <ShinyButtonStyled>Shiny</ShinyButtonStyled>;

export default ShinyButton;
