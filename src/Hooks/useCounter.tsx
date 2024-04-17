import { useState } from 'react'

// Custom hook for counter functionality

export const useCounter = () => {
  const [count, setCount] = useState<number>(0);
  const minCount = -100;
  const maxCount = 100;
  // const Pl10 = 10;
  // const MM10 = -10;
  
  
  // Function to increment count
  const isEven = (num: number): boolean => {
    return num % 2 === 0;
  }


  const increment = (): void => {

    if (count < maxCount){
    setCount(count + 1);
  }
  };
  const decrease = (): void => {
    if (count > minCount){
    setCount(count - 1);
    }
  };

  const SetMax =(): void => {
    setCount(maxCount);
    
  };

  const SetMin =(): void => {
    setCount(minCount);
  };

  const SetP10 =(): void => {
    setCount(count + 10);
  };
  const SetM10 =(): void => {
    setCount(count - 10);
  };

  const reset = (): void => {
    setCount(0);
    
  }

  // Returns count and increment function
  return {count, isEven, increment, decrease, reset, SetMin, SetMax, SetP10, SetM10};
};


