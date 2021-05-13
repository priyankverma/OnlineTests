import React, { useState, useEffect } from "react";
import { Progress } from "antd";
import { Wrapper, B1, B2, Div1 } from "./progressBarStyles";
import usePersistedState from "../customhooks/usePersistedState";
const CircularBar = (props) => {
  const {
    title,
    progressPercent,
    bottomText,
    width,
    countDownTimeInSeconds,
    timeOver,
    transferVal,
  } = props;
  const [timePercent, setTimePercent] = usePersistedState("timerVal", 100);

  // const [timePercent, setTimePercent] = useState(100);
  const [timeDuration, setTimeDuration] = useState(countDownTimeInSeconds - 1);
  let countDown = null;
  useEffect(() => {
    title === "Time Left" && executeTimer();
    return () => {
      transferVal && transferVal(timeDuration);
      clearTimeout(countDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeDuration, transferVal]);

  const executeTimer = () => {
    setTimeout(() => {
      if (timeDuration > 0) {
        countDown = setTimeDuration(timeDuration - 1);
        setTimePercent((timeDuration / 120) * 100);
      } else {
        clearTimeout(countDown);
        alert("Time is UP");
        timeOver();
      }
    }, 1000);
  };

  let minutes = Math.floor(timeDuration / 60);
  let seconds = timeDuration - minutes * 60;

  if (title === "Time Left") {
    // renders the timer(countdown)
    return (
      <Wrapper>
        <Div1>
          <B1>{title}</B1>

          <Progress
            type="circle"
            strokeColor={{
              "0%": "#108ee9",
              "100%": "#87d068",
            }}
            width={width}
            percent={timePercent}
            showInfo={false}
            format={(percent) => `${percent} Days`}
          />
          <B2>
            {(minutes < 10 ? "0" + minutes : minutes) +
              ":" +
              (seconds < 10 ? "0" + seconds : seconds)}
          </B2>
        </Div1>
      </Wrapper>
    );
  } // renders the question completion progress
  else
    return (
      <Wrapper>
        <Div1>
          <B1>{title}</B1>

          <Progress
            type="circle"
            strokeColor={{
              "0%": "#108ee9",
              "100%": "#87d068",
            }}
            width={width}
            percent={progressPercent}
            showInfo={false}
          />
          <B2>{bottomText}</B2>
        </Div1>
      </Wrapper>
    );
};

export default CircularBar;
