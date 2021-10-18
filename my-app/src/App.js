import React from 'react';
import {Step1} from './Components/Step1';
import {Step2} from './Components/Step2';
import {Step3} from './Components/Step3';
import {Step4} from './Components/Step4';
import {Result} from './Components/Result';
import {useData} from './Context/DataContext';

function App() {
  const  [state]  = useData();
  const Form = () => {
    switch (state.step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      case 5:
        return <Result />;
      default:
        return <Step1 />;
    }
  };
  return (
    <div>
      <Form />
    </div>
  );
};

export default App;
