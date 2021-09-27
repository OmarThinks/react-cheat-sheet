# 4) Context and Hooks:



# 1) Creating a Context Provider:

<b>

`contexts/ThemeContext.js`

```js
import React, {createContext, Component} from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = { 
        isLightTheme:true,
        light:{syntax: "#555", ui: "#ddd", bg:"#eee"},
        dark:{syntax: "#ddd", ui: "#333", bg:"#555"},
     }
    render() { 
        return ( 
        <ThemeContext.Provider value={{...this.state}}>
            {this.props.children}
        </ThemeContext.Provider> );
    }
}
 
export default ThemeContextProvider;
```


`App.js`

```js
import './App.css';
import { Component } from 'react';
import Main from './components/main';
import NavBar from './components/navbar';

import ThemeContextProvider from './contexts/ThemeContext';

class App extends Component {
  state = {  }
  render() { 
      return(
        <div id="root_div">
          <ThemeContextProvider>
            <NavBar></NavBar>
            <Main></Main>
          </ThemeContextProvider>
        </div>        
     );
  }
}

export default App;
```




</b>

