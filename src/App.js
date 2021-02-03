import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";
import carddata from "./components/carddata";



function App() {
  return (
    <div>
      {carddata.map( item =>
  
    <Card 
    key = {item.id}
    imagename={item.imagename}
    title={item.title}
    />
)}
    </div>
  );
}

export default App;
