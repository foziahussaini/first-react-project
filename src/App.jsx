import { useState } from 'react'
import './App.css';
import Header from "./component/Header";
import Footer from "./component/footer";
import RegisterForm from './component/registerForm';

function Button(){
  const [submit, setSubmit]= useState();
  return(
      <button type='submit' className='submitBtn' onClick={(e)=> setSubmit(true)}>Submit</button>
  );
}

function App() {
  return (
    <>
    <div className="app">
      <Header/>
      <div className="form">
        <RegisterForm/>
        <Button/>
      </div>
      <Footer/>
    </div>
     
    </> 
  )
}

export default App
