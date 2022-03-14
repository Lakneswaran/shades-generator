import './App.css';
import {useEffect, useState} from "react";
import ChromeColor from '@uiw/react-color-chrome';
import values from 'values.js';
import {CopyToClipboard } from 'react-copy-to-clipboard';


function App() {
  const [color, setColor] = useState('#ccc')
  return (
   <>
    <div className='wrapper'>
      <h1 class="text-center ... heading">SHADES GENERATOR ({color})</h1>
      <div className='color-picker'>
        <ChromeColor color={color}/>
      </div>
      
    </div>
   </>
  );
}

export default App;
