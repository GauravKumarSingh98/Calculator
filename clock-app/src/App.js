import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from './components/AppName';
import AppHeading from './components/AppHeading';
import AppContent from './components/AppContent';

function App() {
  return (
    <div className="App bg-dark text-white">
      <AppName />
      <AppHeading />
      <AppContent />
    </div>
  );
}

export default App;
