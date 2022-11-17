import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Homepage from "./pages/Homepage";
import TravelHistory from "./pages/TravelHistory";
import CreditBalance from "./pages/CreditBalance";
import Qrcode from "./pages/Qrcode";
import BusLocation from "./pages/BusLocation";
import Logout from "./components/Logout";
import AddLocation from "./pages/AddLocation";
import Feedback from "./pages/Feedback";
import ViewShedule from "./pages/ViewShedule";
import ViewFeedback from "./pages/ViewFeedback";

//Assigning route paths to created pages

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Login/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/homepage" element={<Homepage/>} />
          <Route path="/travhist" element={<TravelHistory/>} />
          <Route path="/credbal" element={<CreditBalance/>} />
          <Route path="/qr" element={<Qrcode/>} />
          <Route path="/busloc" element={<BusLocation/>} />
          <Route path="/addlo" element={<AddLocation/>} />
          <Route path="/feed" element={<Feedback/>} />
          <Route path="/viewshedule" element={<ViewShedule/>} />
          <Route path="/viewfeedback" element={<ViewFeedback/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
