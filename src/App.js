
import './App.css';
import GitHubCard from './GitHubCard/GitHubCard';
import ColorButton from './colorButton/colorButton';

function App() {
  return (
    <div className="App">
      <h1>Hello World!!!</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <GitHubCard />
      </div>
      <ColorButton />
    </div>
  );
}

export default App;
