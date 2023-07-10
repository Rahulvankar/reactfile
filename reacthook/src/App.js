import './App.css';
import Parent from './Componet/UseCallback/Parent';
import Usememo from './Componet/UseMemo/Usememo';
// import Classcom from './Componet/Classcom';
import StateTutorial from './Componet/UseState.js/StateTutorial';

function App() {

  return (
    <div className="App">
      {/* <Classcom /> */}
      <StateTutorial/>
      <Usememo/>
      <Parent/>
    </div>
  );
}

export default App;
