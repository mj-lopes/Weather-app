import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Lupa from "../../asserts/lupa.svg";
import { fetchCityData } from "../../store/todayPrevision";

export const Search = () => {
  const [formIsOpen, setformIsOpen] = useState(false);
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  function handleForm(e) {
    e.preventDefault();
    dispatch(fetchCityData(city));
  }

  return (
    <Container>
      <SearchBtn />
      <FormContainer>
        <form onSubmit={handleForm}>
          <Input
            placeholder={"Digite o nome da cidade"}
            value={city}
            onChange={({ target }) => setCity(target.value)}
          />
          <BtnForm>Buscar</BtnForm>
        </form>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 42px;
  height: 42px;

  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;

  border: none;
  border-radius: 6px;

  background: radial-gradient(
      100% 100% at 0% 0%,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)),
    linear-gradient(
      275.77deg,
      rgba(242, 251, 255, 0) 0%,
      rgba(242, 251, 255, 0.12) 100%
    );
  backdrop-filter: blur(20px);
`;

const SearchBtn = styled.button`
  width: 42px;
  height: 42px;
  background: url(${Lupa}) no-repeat center;

  cursor: pointer;
  border: none;
`;

const FormContainer = styled.div`
  position: absolute;
  right: 0;
  border-radius: 4px;
  background: radial-gradient(
      100% 100% at 0% 0%,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)),
    linear-gradient(
      275.77deg,
      rgba(242, 251, 255, 0) 0%,
      rgba(242, 251, 255, 0.12) 100%
    );
  backdrop-filter: blur(20px);
`;

const Input = styled.input`
  width: 250px;
  height: 2rem;
  margin: 1rem;
  padding: 8px;

  border: none;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);

  color: #252525;
  font-size: 1.125rem;
  outline: none;
  transition: 0.3s;
  font-family: "manrope", Arial, Helvetica, sans-serif;

  &:focus {
    border-color: #ffc700;
    box-shadow: 0 0 7px 1px #ffc700;
    transition: 0.3s;
  }
`;

const BtnForm = styled.button`
  background: #ffc700;
  border: none;
  border-radius: 4px;
  padding: 10px 16px;
  margin: 1rem;
  margin-top: 0;

  cursor: pointer;

  color: #403200;
  font-size: 1.125em;

  transition: 0.3s;

  :hover {
    transition: 0.3s;
    color: #403200;
    background: #e6b400;
  }
`;
