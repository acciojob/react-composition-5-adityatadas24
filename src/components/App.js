
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [tab1, setTab1] = useState("Tab 1");
    const [tabA, setTabA] = useState("Tab A");
  return (
    <div>
        {/* Do not remove the main div */}
     <ul>
        <li onClick={()=>setTab1("Tab 1")}>Tab 1</li>
        <li onClick={()=>setTab1("Tab 2")}>Tab 2</li>
        <li onClick={()=>setTab1("Tab 3")}>Tab 3</li>
      </ul>
      <p>Content for {tab1}</p>

    <ul>
        <li onClick={()=>setTabA("Tab A")}>Tab A</li>
        <li onClick={()=>setTabA("Tab B")}>Tab B</li>
        <li onClick={()=>setTabA("Tab C")}>Tab C</li>
      </ul>
      <p>Content for {tabA}</p>
    </div>
  )
}

export default App
