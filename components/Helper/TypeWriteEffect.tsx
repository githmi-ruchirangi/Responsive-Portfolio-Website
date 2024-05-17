import React from "react";
import { TypeAnimation } from 'react-type-animation';

const TypeWriteEffect = () => {

    return (
        <TypeAnimation
        sequence={[
          'a React Developer',
          1000, 
          'a Next JS Developer',
          1000,
          'a Java Developer',
          1000,
          'a designer',
          1000
        ]}
        wrapper="span"
        speed={50}
       className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] text-white font-bold"
        repeat={Infinity}
      />
    )
};
export default TypeWriteEffect;