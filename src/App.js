import Home from './Home';
import Navbar from './components/Navbar';
import Post from './components/Post';
import {Datas} from './components/Datas'
import Profile from './components/profilepage/Profile';
import Edit from './components/profilepage/Editprofile';     
// import { upload } from '@testing-library/user-event/dist/upload';
function App() {
  return (
    <div className="App">
      <Navbar/>
      {Datas.map((p => (
      <Post key= {p.id} post={p} />

     ) ))}
      <Home/> 
       <Profile/>
      {/* <Edit/> */}


        </div>
  );
}

export default App;
