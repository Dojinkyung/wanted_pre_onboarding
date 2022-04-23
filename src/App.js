
import './App.css';
import Toggle from './components/Toggle';
import Tab from './components/Tab';
import Input from './components/Input';
import Dropdown from './components/Dropdown';
function App() {
  return (
    <div className="App">
      <span>
      <Toggle></Toggle>
      <Tab></Tab>
      </span>
      <span>
      <Input></Input>
      <Dropdown></Dropdown>
      </span>
    </div>
  );
}

export default App;
