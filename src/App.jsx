import React, {useState} from 'react';
import Targets from './components/Targets';
import './components/Header.css'

const App = ()=> {
  

  const [ active,setActive ] = useState( null )
  const [ scroll,setScroll ] = useState(true)
  

    
  React.useEffect(()=>{
    let hash = 0;
    window.addEventListener('scroll',(e)=>{
      if( (hash + 50)< window.scrollY ){
        setScroll(false)
        return hash = window.scrollY
      }
      if( (hash - 100 )> window.scrollY ){
        setScroll(true);
        return hash = window.scrollY
      }
    });
  },[])
  return (
    <div className='App'>
      <header className={ scroll ? 'header-section' : 'header-section header-section-active' }>
        <div className='Header'>
          <button onClick={ ()=> !active ? setActive( true ) : setActive( null ) } className={ `hamburger hamburger--collapse ${ active  ? 'is-active' : '' }` } type='button'>
            <span className='hamburger-box'>
            <span className='hamburger-inner'></span>
            </span>
          </button>
          <h1 className='header-logo'>Tecnologia Manizales</h1>
        </div>
        <div className='header-list'>
          <ul className={ `header-list__ul ${ active ? '' : 'header-lis__ul-is-active' }` }>
            <li>Inicio</li>
            <li>Productos</li>
            <li>Conocenos</li>
          </ul>
        </div>


      </header>
      <Targets />
    </div>
  );
}

export default App;
