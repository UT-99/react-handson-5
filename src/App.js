
import './App.css';
import './newStyles.css'
import HigherOrderComponent from './components/HigherOrderComponent';

function App() {
  return (
    <>
      <h1 className='align'> Pure Component and Higher Order Component </h1>
      <div className='align'>
       This is pure component demo .
        <HigherOrderComponent />
      </div>

     
      <div  className='align'>
        
        This is higher order component demo. 
      </div>
    </>
  );
}

export default App;
