import React from "react";
import styled from "styled-components";

import dayFormater from "../../util/dayFormater";
import monthFormater from "../../util/monthFormater";

import Highest from "../../asserts/highest.svg";
import Lowest from "../../asserts/lowest.svg";

export const Day = ({ dados }) => {
  const datePrevision = new Date(dados.dt * 1000);

  function getDayofWeek() {
    const today = new Date().getDate();
    const day = datePrevision.getDate();

    if (day === today) {
      return "Hoje";
    } else if (today + 1 === day) {
      return "Amanhã";
    } else {
      return dayFormater(datePrevision.getDay());
    }
  }

  const dateDetails = {
    dayWeek: getDayofWeek(),
    dayMonth: datePrevision.getDate(),
    month: monthFormater(datePrevision.getMonth()),
  };

  return (
    <Container>
      <DayOFWeekContainer>
        <p>
          {dateDetails.dayWeek}, {dateDetails.dayMonth} {dateDetails.month}
        </p>
      </DayOFWeekContainer>
      <PrevisionContainer>
        <Temperature>
          <div>
            {Math.round((dados.temp.max + dados.temp.min) / 2)}
            <sup>°c</sup>
          </div>
          <MinMaxTempContainer>
            <p>{Math.round(dados.temp.max)}°c</p>
            <p>{Math.round(dados.temp.min)}°c</p>
          </MinMaxTempContainer>
        </Temperature>
        <Weather>
          <img
            src={`/asserts/svgs/${dados.weather[0].icon.substring(0, 2)}.svg`}
            alt="condição do tempo"
          />
          <p>{dados.weather[0].description}</p>
        </Weather>
      </PrevisionContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 190px;
  margin: 0 1rem;

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

  border-radius: 6px;
`;

const DayOFWeekContainer = styled.div`
  background: linear-gradient(
    270.05deg,
    #f0ad43 19.23%,
    rgba(240, 173, 67, 0.409688) 50.22%,
    rgba(240, 173, 67, 0) 86.67%
  );
  border-radius: 0px 10px 0px 0px;
  padding: 0.5rem 1rem;
  text-align: right;
`;

const PrevisionContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const Temperature = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 3rem;

  & sup {
    font-size: 2rem;
    vertical-align: super;
    color: #f2d16f;
  }
`;

const MinMaxTempContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
  font-size: 1rem;

  & p::before {
    content: "";
    margin-right: 4px;
    display: inline-block;
    width: 16px;
    height: 12px;
    background: url(${Highest}) no-repeat;
  }

  & p:last-of-type::before {
    background: url(${Lowest}) no-repeat;
  }
`;

const Weather = styled.div`
  max-width: 80px;
  text-align: center;

  & p {
    margin-top: 8px;
    text-transform: capitalize;
  }
`;
