import Header from "./components/Header";
import Main from './components/Main'
import Footer from "./components/Footer";
import './App.css'
// import { FilterContext } from "./contexts/FilterContext";
// import { useState } from "react";

export default function App(){
    // const [cat, setCat] = useState({breakfast:false,meal:false,snack:false});

    // const contextValue = { cat, setCat };

    return(
        <div className="App">
            
            {/* <FilterContext.Provider value={contextValue}> */}
            <Header/>
            <Main/>
            <Footer/>
            {/* </FilterContext.Provider> */}
        </div>
    )
}