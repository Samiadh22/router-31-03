import Navbar from './components/UI/navbar'
import data from './data'
import Main from './components/Main/main';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Movie from './components/movie/movie'
import Home from './components/home/home'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Switch>
       <Route exact path='/' render={()=> <Main data={data}/>} />
       {/* <Route exact path='/' component={Main} /> */}
        <Route  path='/movie/:id' render={()=> <Movie data={data}/>} />
        <Route  path='/movie' render={()=> <Home data={data}/>} />
     
     </Switch>
      
     
    </div>
  );
}

export default App;
