import Header from './components/header';
import Profile from './components/profile/profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Profile/>
      </main>
    </div>
  );
}

export default App;
