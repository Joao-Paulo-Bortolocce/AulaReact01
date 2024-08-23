import Data from './meusComponentes/Data.js';

function App() {
  return (
    <div className="App">
      <Data texto="Data e Hora atuais Brasil: " timeZone="-3.00"/>
      <Data texto="Data e Hora atuais Londres: " timeZone="+1.00"/>
      <Data texto="Data e Hora atuais Nova York: " timeZone="-4.00"/>
    </div>
  );
}

export default App;
