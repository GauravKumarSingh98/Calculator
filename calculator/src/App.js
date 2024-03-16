// import logo from './logo.svg';
import styles from'./App.css';
import"bootstrap/dist/css/bootstrap.min.css"
import AppHeadings from './components/AppHeadings';
import AppOuterDesign from './components/AppOuterDesign';
import { useState } from 'react';
import Display from './components/Display';

function App() {
const [calVal, setCalVal] = useState("")
const onButtonClick = (buttonText) => {
  if(buttonText === "AC") {
    setCalVal("");
  } else if(buttonText === "=") {
    const result = eval(calVal);
    setCalVal(result);
  } else {
    const newDisplayValue = calVal + buttonText;
    setCalVal(newDisplayValue);
  }
};

  return (
    <>
    <center>
      <AppHeadings />
      <Display displayValue={calVal} />
      <AppOuterDesign onButtonClick={onButtonClick}/>
    </center>
    </>
  );
}

export default App;
