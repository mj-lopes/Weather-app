import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";
import Lupa from "../../asserts/lupa.svg";
import { fetchCityData } from "../../store/todayPrevision";

export const Search = () => {
  const [formIsOpen, setformIsOpen] = useState(false);
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const formRef = useRef();

  function handleForm(e) {
    e.preventDefault();
    if (city) dispatch(fetchCityData(city));
  }

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (formIsOpen && !e.composedPath().includes(formRef.current)) {
        setformIsOpen(false);
      }
    });

    return () => {
      window.removeEventListener("click", () => {
        if (formIsOpen) {
          setformIsOpen(false);
        }
      });
    };
  }, [formIsOpen]);

  function showForm() {
    return formIsOpen ? (
      <FormContainer onSubmit={handleForm} role={"search"}>
        <Input
          type={"search"}
          placeholder={"Digite o nome da cidade"}
          value={city}
          onChange={({ target }) => setCity(target.value)}
        />
        <BtnForm>Buscar</BtnForm>
      </FormContainer>
    ) : (
      ""
    );
  }

  return (
    <Container ref={formRef}>
      <SearchBtn onClick={() => setformIsOpen(!formIsOpen)} />
      {showForm()}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 16px;
  right: 16px;
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

  box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 700px) {
    align-self: flex-end;
    flex-grow: 0;
    position: relative;
    right: 16px;
    margin-bottom: 1rem;
  }
`;

const SearchBtn = styled.button`
  align-self: flex-end;
  width: 42px;
  height: 42px;
  background: url(${Lupa}) no-repeat center;
  text-align: right;
  cursor: pointer;
  border: none;
`;

const animation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const FormContainer = styled.form`
  display: flex;
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

  animation: ${animation} 0.3s forwards;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  width: 250px;
  padding: 10px;

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
  padding: 6px 16px;

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
