import React, { createContext, useState } from 'react'
import './App.css';

import Lower from './Lower';

export const Pass =createContext();
function App() {
  const [content,Setcontent] =useState("") 
  const [btnchange,Setbtnchange]=useState("Dark")
   const [colors,Setcolors]=useState(
    {
      color:'black',
      backgroundColor:'white'

  }
   )
    const [change,Setchange] =useState({
        color:'black',
        backgroundColor:'white'

    })
    
  return (
    <div className="App">
      <Pass.Provider value={btnchange} >
      <Lower
       change={change}
       Setchange={Setchange} 
       btnchange={btnchange}
      Setbtnchange={Setbtnchange}
      content={content}
      Setcontent={Setcontent}
      colors={colors}
      Setcolors={Setcolors}
      />
      </Pass.Provider>
    </div>
  );
}
export default App;
