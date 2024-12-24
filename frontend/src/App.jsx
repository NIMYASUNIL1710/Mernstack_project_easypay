import { BrowserRouter, Route, Routes} from "react-router-dom"
import { useState } from "react"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Dashboard from "./pages/Dashboard"
import SendMoney from "./pages/SendMoney"


function App() {
const [isLogged,setIsLogged] = useState(false);
  const LOginHandle =(val)=>{
setIsLogged(val);
  }

  return (   
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup/>}/>
         
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/send" element={<SendMoney/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
