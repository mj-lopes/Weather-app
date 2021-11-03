import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const Today = () => {
  const TodaysWeatherPrevision = useSelector(
    (state) => state.todayPrevision.data,
  );

  if (!TodaysWeatherPrevision) return null;

  const now = new Date();
  function dayFormat(day) {
    switch (day) {
      case 0:
        return "Dom";
      case 1:
        return "Seg";
      case 2:
        return "Ter";
      case 3:
        return "Qua";
      case 4:
        return "Qui";
      case 5:
        return "Sex";
      case 6:
        return "Sab";
      default:
        return day;
    }
  }

  function monthFormat(month) {
    switch (month) {
      case 0:
        return "Jan";
      case 1:
        return "Fev";
      case 2:
        return "Mar";
      case 3:
        return "Abr";
      case 4:
        return "Mai";
      case 5:
        return "Jun";
      case 6:
        return "Jul";
      case 7:
        return "Ago";
      case 8:
        return "Set";
      case 9:
        return "Out";
      case 10:
        return "Nov";
      case 11:
        return "Dez";
      default:
        return month;
    }
  }
  const todayDayInfo = {
    dayWeek: dayFormat(now.getDay()),
    dayMonth: now.getDate(),
    month: monthFormat(now.getMonth()),
  };
  return (
    <PrevisionToday>
      <DateToday>
        <Title>Hoje</Title>
        <Day>
          {todayDayInfo.dayWeek}, {todayDayInfo.dayMonth} {todayDayInfo.month}
        </Day>
      </DateToday>

      <MainTemp>
        <div>
          <p>
            {Math.round(TodaysWeatherPrevision.main.temp)}
            <sup>°c</sup>
          </p>
          <img
            src={`/asserts/svgs/${TodaysWeatherPrevision?.weather[0].icon.substring(
              0,
              2,
            )}.svg`}
            alt="condição do tempo"
          />
        </div>
      </MainTemp>

      <Location>
        <p>
          {TodaysWeatherPrevision.name} / {TodaysWeatherPrevision.sys.country}
        </p>
      </Location>
    </PrevisionToday>
  );
};

const PrevisionToday = styled.div`
  max-width: 70vw;
  min-height: 20vh;
  margin: auto;

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

const DateToday = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

  font-size: 8rem;
  text-align: center;

  & div {
    display: flex;
  }
  & p {
    padding-top: 30px;
  }

  & p sup {
    font-size: 4rem;
    vertical-align: super;
    color: #f2d16f;
  }

  & img {
    margin-left: 32px;
    align-self: flex-start;
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
