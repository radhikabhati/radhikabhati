
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Art from "./Art";
import Landing from "./Landing";
import Tech from "./Tech";
import Resume from "./Resume";



export default function App() {

  return (
    <>
      <header>
        <Header/>
      </header>
      <div>
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<App />}/>
          <Route  index element={<Landing />} />
          <Route path="/art" element={<Art />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/contact" element={<Art />} />
         
       
      </Routes>
    </BrowserRouter>

    
      </div>

    </>
   
  );
}

