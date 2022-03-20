import React from 'react';
import './App.css';
import Post from './Post';

function App(){
  return(
    <div className="App">
    <div className='app__header'>
      <img 
      className='app__headerImage'
      alt=''
      src='https://assets.turbologo.com/blog/en/2019/09/19084953/instagram-logo-illustration-958x575.png'/>
      <div className='app__loginContainer'>
      <button>SignUp</button>
      <button>LogIn</button>
    </div>
    </div>
    <div className='app__posts'>
    

    </div>
    <center>
    <Post username="vishwash" caption="WOW it works" imageUrl="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"/>
    <Post username="ssds" caption="DOPE" imageUrl="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q="/>
    <Post username="adasdi" caption="This is a fun project" imageUrl="https://wallpaperaccess.com/full/393735.jpg"/>
    </center>
    </div>
  );  
}

export default App;