import { useState } from 'react'
import Header from "./component/Header";
import Footer from "./component/footer";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="app">
       <Header/>
       <Footer/>
    </div>
     
    </> 
  )
}

export default App
