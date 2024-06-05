import './App.css';
import TopBar from './components/topbar/TopBar';
import LeftBar from './components/leftbar/LeftBar';
import RightBar from './components/rightbar/RightBar';
import CenterBar from './components/centerbar/CenterBar';

function App() {
  return (
    <>
   <TopBar/>
   
   <div className='homecontainer'> 
   <LeftBar/>
   <CenterBar/>  
   <RightBar/>
   </div>
   
   </>
  );
}

export default App;
