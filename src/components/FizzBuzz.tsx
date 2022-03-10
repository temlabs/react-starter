import { useState } from "react";

interface numberProps {
  currentNumber: number;
}

export default function FizzBuzz(): JSX.Element {
  const [currentValue, setValue] = useState<number>(0);
  const numberObj: numberProps = { currentNumber: currentValue };
  function nextButtonHandler() {
    setValue((previousValue) => previousValue + 1);
  }

  return (
    <div>
      <h1>Fizz Buzz!</h1>
      <p>
        The current number is:{" "}
        <FizzOrBuzz currentNumber={numberObj.currentNumber} />
      </p>
      <button onClick={nextButtonHandler}>Next</button>
    </div>
  );
}

function FizzOrBuzz({ currentNumber }: numberProps): JSX.Element {
  if (currentNumber === 0) {
    return <span>0</span>;
  } else if (currentNumber % 5 === 0 && currentNumber % 3 === 0) {
    return <span className="fizzbuzz">fizzbuzz</span>;
  } else if (currentNumber % 3 === 0) {
    return <span className="fizz">fizz</span>;
  } else if (currentNumber % 5 === 0) {
    return <span className="buzz">buzz</span>;
  } else {
    return <span>{currentNumber}</span>;
  }
}
