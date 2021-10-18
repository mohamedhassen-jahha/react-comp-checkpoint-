import "./App.css";
import Address from "./Component/Profile/Address";
import Discription from "./Component/Profile/Discription";
import FullName from "./Component/Profile/FullName";
import Profilephoto from "./Component/Profile/ProfilePhoto";

function App() {
  return (
    <div className="App">
      <Profilephoto />
      <FullName />
      <Address />
      <Discription />
    </div>
  );
}

export default App;
