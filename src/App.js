import './App.css';
import {useEffect, useState} from "react";
import ChromeColor from '@uiw/react-color-chrome';
import {CopyToClipboard } from 'react-copy-to-clipboard';
import Values from 'values.js';


function App() {
  const [color, setColor] = useState('#ccc');
  const [shades, setShades] = useState([]);
  const onChange = (color) => {
    setColor(color.hex);
    const colorValues = new Values(color.hex);
    const newColors = colorValues.all(10);
    newColors.pop();
    setShades(newColors)

  }
  return (
   <>
    <div className='wrapper'>
      <h1 className="text-center ... heading">SHADES GENERATOR ({color})</h1>
      <div className='color-picker'>
        <ChromeColor color={color} onChange={onChange}/>
      </div>
        <div className="shades">
          <ul className='shades-list'>
            {
               shades.map(shade =>{
                 return ( <CopyToClipboard text={'#' + shade.hex}>
                 <li style={{ backgroundColor: '#'+shade.hex }}>#{shade.hex}</li>
                 </CopyToClipboard>)
               })
            }
          </ul>
        </div>
      
      
    </div>
   </>
  );
}

export default App;
