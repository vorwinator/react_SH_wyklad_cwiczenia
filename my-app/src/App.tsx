import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';


const App=()=> {
  const[liczba,zmiana]=useState(0);
  const dekrementacja=()=>{
    zmiana(liczba-1);
  }
  const inkrementacja=()=>{
    zmiana(liczba+1);
  }
  const reset=()=>{
    zmiana(0);
  }
  return (
    <div className="App">
      <Button changeNumber={dekrementacja} nazwa="dekrementacja"/>
      <Button changeNumber={inkrementacja} nazwa="inkrementacja"/>
      <Button changeNumber={reset} nazwa="reset"/>
      {liczba}
      {liczba>10 && liczba<16 && (<div>Liczba większa od 10</div>)}
      {liczba>15 && (<div>Liczba przekroczyła 15</div>)}
      {liczba<-10 && (<div>Liczba mniejsza od -10</div>)}
    </div>
  );
}

export default App;
