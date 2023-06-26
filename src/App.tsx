import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomeScreen from './screen/HomeScreen/HomeScreen';


const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<HomeScreen/>}/>
    </Routes>
   </Router>
  );
}

export default App;
