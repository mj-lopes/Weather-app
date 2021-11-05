import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import dayFormater from "../../util/dayFormater";
import monthFormater from "../../util/monthFormater";

import Drop from "../../asserts/humidite.svg";
import WindSpeed from "../../asserts/wind-speed.svg";
import WindDirection from "../../asserts/wind-direction.svg";
import Highest from "../../asserts/highest.svg";
import Lowest from "../../asserts/lowest.svg";

export const Today = () => {
  const TodaysWeatherPrevision = useSelector(
    (state) => state.todayPrevision.data,
  );

  if (!TodaysWeatherPrevision) return null;

  const now = new Date();

  const todayDayInfo = {
    dayWeek: dayFormater(now.getDay()),
    dayMonth: now.getDate(),
    month: monthFormater(now.getMonth()),
  };

  return (
    <Container>
      <DateToday>
        <Title>Agora</Title>
        <Day>
          {todayDayInfo.dayWeek}, {todayDayInfo.dayMonth} {todayDayInfo.month}
        </Day>
      </DateToday>

      <MainTemp>
        <p>
          {Math.round(TodaysWeatherPrevision.main.temp)}
          <sup>°c</sup>
        </p>

        <ConditionAndMaxMin>
          <Condition>
            <img
              src={`/asserts/svgs/${TodaysWeatherPrevision?.weather[0].icon.substring(
                0,
                2,
              )}.svg`}
              alt="condição do tempo"
            />
            <p>{TodaysWeatherPrevision?.weather[0].description}</p>
          </Condition>
          <MinMaxTempContainer>
            <p>
              <img src={Lowest} alt="" />
              {Math.round(TodaysWeatherPrevision.main.temp_min)} °c
            </p>
            <p>
              <img src={Highest} alt="" />
              {Math.round(TodaysWeatherPrevision.main.temp_max)} °c
            </p>
          </MinMaxTempContainer>
        </ConditionAndMaxMin>
      </MainTemp>

      <ExtraInfo>
        <Humidity>{TodaysWeatherPrevision.main.humidity}%</Humidity>
        <Wind>
          {Math.round(TodaysWeatherPrevision.wind.speed)} KM/h
          <img
            src={WindDirection}
            alt="Direção do vento"
            style={{
              transform: `rotate(${TodaysWeatherPrevision.wind.deg}deg)`,
              width: "14px",
              marginLeft: "8px",
            }}
          />
        </Wind>
      </ExtraInfo>

      <Location>
        <p>
          {TodaysWeatherPrevision.name} / {TodaysWeatherPrevision.sys.country}
        </p>
      </Location>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 70vw;
  margin: auto;
  margin-top: 1rem;

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

  @media screen and (max-width: 700px) {
    max-width: 90vw;
  }
`;

const DateToday = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: right;
`;

const Title = styled.span`
  display: block;
  font-size: 2.5rem;
  padding: 1rem;
  font-weight: bold;
`;

const Day = styled.p`
  padding: 1rem;
  font-size: 1.5rem;
`;

const MainTemp = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  text-align: center;

  & div {
    display: flex;
  }
  & > p {
    font-size: 8rem;
    align-self: center;
    padding-bottom: 3rem;
  }
  & p sup {
    font-size: 4rem;
    vertical-align: super;
    color: #f2d16f;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    margin-bottom: 0;

    & > p {
      padding: 1rem 0;
    }
  }
`;

const ConditionAndMaxMin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 32px;

  @media screen and (max-width: 600px) {
    margin-left: 0;
  }
`;

const Condition = styled.div`
  flex-direction: column;
  text-transform: capitalize;
  margin-bottom: 1rem;
  max-width: 200px;

  & p {
    margin-top: 8px;
    font-size: 2rem;
  }

  @media screen and (max-width: 600px) {
    max-width: 150px;
    margin: 1rem auto;
  }
`;

const MinMaxTempContainer = styled.div`
  justify-content: center;
  align-items: center;
  & p {
    margin-right: 8px;
    font-size: 1.5rem;
    img {
      margin: 0 4px;
    }
  }
`;

const ExtraInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  text-align: left;
  font-size: 1rem;

  @media screen and (max-width: 600px) {
    position: static;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
  }
`;

const extraInfoItem = styled.p`
  display: flex;
  align-items: center;
  padding-top: 8px;

  &::before {
    content: "";
    display: inline-block;
    margin-right: 8px;
  }
`;

const Humidity = styled(extraInfoItem)`
  &::before {
    width: 17px;
    height: 24px;
    background: url(${Drop}) no-repeat;
  }
`;

const Wind = styled(extraInfoItem)`
  &::before {
    width: 24px;
    height: 20px;
    background: url(${WindSpeed}) no-repeat;
  }
`;

const Location = styled.div`
  background: linear-gradient(
    270.05deg,
    #f0ad43 19.23%,
    rgba(240, 173, 67, 0.409688) 47.22%,
    rgba(240, 173, 67, 0) 86.67%
  );
  border-radius: 0px 0px 10px 10px;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  text-align: right;
  font-size: 2rem;
`;
