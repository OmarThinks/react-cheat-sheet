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


</b>








# 2) Accessing Context using Context Type:




## 2-A) Accessing using contextType:


<b>


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




This climbs up the component tree, to find the first time 
there is a provider for this context

`components/navbar.js`

```js
import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class NavBar extends Component {
    static contextType = ThemeContext;
    render() {
        console.log(this.context);
        const {isLightTheme, light, dark}=this.context;
        const theme = isLightTheme ? light : dark;
        return ( 
          <nav style={{background:theme.bg, color: theme.syntax}}>
              <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Login</li>
                <li>Logout</li>
              </ul>
          </nav>
         );
    }
}
 
export default NavBar;
```





## 2-B) Accessing using ContextConsumer:

`components/main.js`

```js
import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Main extends Component {
    static contextType = ThemeContext;
    render() { 
        return ( 
        
        <ThemeContext.Consumer>{(context)=>{
        console.log(context);
      
        const {isLightTheme, light, dark}=context;
        const theme = isLightTheme ? light : dark;
            return(
        <main style={{background:theme.ui, color: theme.syntax}}>
            <ul>
                <li style={{background:theme.bg}}>First element</li>
                <li style={{background:theme.bg}}>Second element</li>
                <li style={{background:theme.bg}}>Third element</li>
            </ul>

        </main> 
            );
        }}
        </ThemeContext.Consumer>
        );
    }
}
 
export default Main;
```



























</b>












