import "antd/dist/antd.css";
import Login from "./components/AdminLogin";
import AdminRegistration from "./components/AdminRegistration";
import Payment from "./components/Payment";
import PaymentDate from "./components/PaymentDate";
import PaymentSummary from "./components/PaymentSummary";
import PaymentTable from "./components/PaymentTable";

import RegistrationForm from "./components/Register";

function App() {
  return (
    <div className="App">
      <AdminRegistration/>
      
    </div>
  );
}

export default App;
