import React from "react";
import './styles/main.css'
import { H1 } from './components/h1'
import { H2 } from './components/h2'
import { H3 } from './components/h3'
import { H4 } from './components/h4'
import { H5 } from './components/h5'
import { H6 } from './components/h6'
import Input from './components/input'
import Check from './components/check'
import Radio from './components/radio'
import { P } from './components/p'
import { Span } from './components/span'

function App() {
    return (
      <div className="App">
        <H1 />
        <H2 />
        <H3 />
        <H4 />
        <H5 />
        <H6 />
        <Input />
        <Check />
        <Radio />
        <P />
        <Span />
      </div>
    );
  }
  
  export default App