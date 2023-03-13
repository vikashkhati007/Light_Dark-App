import React, { useContext, useState} from "react";
import ReactDOM from "react-dom";

const NumberContext = React.createContext();

// eslint-disable-next-line
function App() {

  const [theme, setTheme] = useState("light");
  const value = {
    title: "Title",
    dark: "Dark Mode",
    light: "Light Mode"
    
  }
  
  let docBody = document.body;
  function change(){
    theme === "light"? setTheme("dark"): setTheme("light");
    if (theme === "light") {
      docBody.classList.remove("body-white");
      docBody.classList.add("body-dark");
    }
    else{
      docBody.classList.remove("body-dark");
      docBody.classList.add("body-white");
    }

    
  }
 
  return (
    <NumberContext.Provider value={{theme , value, change}}>
      <Display />
    </NumberContext.Provider>
  )
}

function Display() {
  const a = useContext(NumberContext);
  return (
    <div>
      <button onClick={a.change} className = {a.theme === "light"? "dark-btn dark-body": "light-btn light-body"}>
        {a.theme}
      </button>
      <h1> {a.theme === "light"?a.value.light:a.value.dark} </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id lobortis justo, ac rhoncus elit. Vestibulum viverra augue et euismod mollis. Suspendisse sed varius lacus, nec sodales tortor. Donec eu est cursus, finibus libero sed, eleifend ligula. Vestibulum at elementum augue, id pulvinar nulla. Integer malesuada pharetra dui. Nunc in consectetur urna. Maecenas vestibulum, augue quis fringilla feugiat, velit dui posuere mi, sit amet auctor velit tellus ac eros. Phasellus ligula purus, molestie eget orci nec, rhoncus lobortis elit. Mauris eget condimentum felis, at porttitor ante.
      </p>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));