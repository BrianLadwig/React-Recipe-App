import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { FilterContextProvider } from "./contexts/FilterContext";
// import { UserContextProvider } from "./contexts/UserContext.js";

ReactDom.render(
  <BrowserRouter>
    <FilterContextProvider>
      {/* <UserContextProvider> */}
        <App />
      {/* </UserContextProvider> */}
    </FilterContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
