import Header from './components/header';
import Profile from './components/profile/profile';
import './custom.css';

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
