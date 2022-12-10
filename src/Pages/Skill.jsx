import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Progress from "../Component/Progress";
const Skill = () => {
  return (
    <div>
      <h1 className='text-center font-bold text-3xl uppercase p-3 mb-3'>
        My{" "}
        <span style={{ color: "green", fontWeight: "bold" }}>
          <Typewriter
            words={["Skill"]}
            loop={1}
            cursor
            cursorStyle='_'
            typeSpeed={110}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <div className='grid md:grid-cols-2'>
        <div className='uppercase sm:ml-12'>
          <h1>HTML</h1>
          <Progress done='95'></Progress>
          <h1>CSS</h1>
          <Progress done='95'></Progress>
          <h1>JavaScript</h1>
          <Progress done='80'></Progress>
          <h1>React</h1>
          <Progress done='75'></Progress>
        </div>
        <div className='uppercase sm:ml-12'>
          <h1>Mongo DB</h1>
          <Progress done='75'></Progress>
          <h1>Express Js</h1>
          <Progress done='75'></Progress>
          <h1>Node Js</h1>
          <Progress done='80'></Progress>
        </div>
      </div>
    </div>
  );
};

export default Skill;
