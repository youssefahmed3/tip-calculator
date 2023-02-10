import React from 'react';
import Btn from './components/Btn/Btn';
import InputBox from './components/inputBox/inputBox';
import ResetBtn from './components/resetBtn/resetBtn';
import ResultCard from './components/resultCard/resultCard';
import IconDollar from './images/iconDollar';
import IconPerson from './images/iconPerson';
import Logo from './images/logo';
import {useState} from 'react';
import './styles/style.scss';
import CustominputTip from './components/customInputTip/CustomInputTip';

/* 
Tip Amount = Bill * 0.tip
tip per person = tip / number of person
total = tip per person + bill
*/

function App() {
  const [bill, setBill] = useState('')
  const [people, setPeople] = useState('')
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [customTip, setCustomTip] = useState('');

  let tipArray: number[] = [5, 10, 15, 25, 50];
  
  /* Method that will calculate the tip */
  function tipCalculator(tip:number) {
    let tipPercentage:number = (tip/100);
    let tipAmountRes = parseFloat(bill) * tipPercentage;
    setTipAmount((prev) => prev = tipAmountRes);

    let billPerPerson:number = parseFloat(bill) / parseFloat(people);
    let totalRes = tipAmount + billPerPerson;
    setTotal((prev) => prev = totalRes);


    console.log(`tipAmount = ${tipAmount}`)
    console.log(`total = ${total}`)


  }
  /* Array of buttons mapped componenets */
  let btns:any = tipArray.map((tip) => {
    return <Btn tipValue={tip} handleClick={() => tipCalculator(tip)}/>
  })

  return (
    <div className="main-container">
      <Logo />
      <div className="box-container">
        <div className="calculation-side">
            <InputBox prefix={<IconDollar />} title={"Bill"} getValue={(e) => setBill(e.target.value)}/>
            
            <p className='text'>Select Tip %</p>
            <div className="tip-btns">
                {btns}
                <CustominputTip calVal={(e) =>{
                   setCustomTip(e.target.value)
                   tipCalculator(parseFloat(customTip))
                }} />
            </div>

            <InputBox prefix={<IconPerson />} title={"Number of People"} getValue={(e) => setPeople(e.target.value)}/>
        </div>

        <div className="result-side">
          <div className='top-container'>
            <ResultCard cardName='Tip Amount' tip={tipAmount}/>
            <ResultCard cardName='Total' tip={total}/>
          </div>

          <ResetBtn buttonName='RESET' resetEvent={() => {
            setTipAmount((prev) => prev = 0)
            setTotal((prev) => prev = 0) 
          }}/>
        </div>
      </div>
    </div>
  );
}

export default App;
