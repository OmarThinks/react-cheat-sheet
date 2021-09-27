# 3-a) Context:



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







# 3) Updating Context:



<b>

`contexts/ThemeContext.js`
```js
import {createContext, Component} from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = { 
        isLightTheme:true,
        light:{syntax: "#555", ui: "#ddd", bg:"#eee"},
        dark:{syntax: "#ddd", ui: "#333", bg:"#555"},
    };

    toggleTheme=()=>{
        this.setState({isLightTheme:!this.state.isLightTheme});
    }

    render() { 
        return ( 
        <ThemeContext.Provider value={
            {...this.state, toggleTheme:this.toggleTheme}}>
            {this.props.children}
        </ThemeContext.Provider> );
    }
}
 
export default ThemeContextProvider;
```







`components/ToggleTheme.js`

```js
import { Component, Fragment } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends Component {
    static contextType = ThemeContext;

    render() {
        console.log(this.context);
        const {toggleTheme}=this.context;
        
        return <button onClick={toggleTheme}>Toogle the Theme</button>;
    }
}
 
export default ThemeToggle;
```



</b>










# 4) Using Several Contexts:



## 4-A) Creating a new Context (Nothing new here):

<b>

`contexts/AuthContext.js`

```js
import {createContext, Component} from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = { 
        isAuthenticated:false,
    };

    toggleAuth=()=>{
        this.setState({isLightTheme:!this.state.isAuthenticated});
    }

    render() { 
        return ( 
        <AuthContext.Provider value={
            {...this.state, toggleAuth:this.toggleAuth}}>
            {this.props.children}
        </AuthContext.Provider> );
    }
}
 
export default AuthContextProvider;
```







## 4-B) Using Several Contexts:

`App.js`

```js
import './App.css';
import { Component } from 'react';
import Main from './components/main';
import NavBar from './components/navbar';

import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import  AuthContextProvider  from './contexts/AuthContext';

class App extends Component {
  state = {  }
  render() { 
      return(
        <div id="root_div">
          <ThemeContextProvider>
            <AuthContextProvider>
              <NavBar></NavBar>
              <Main></Main>
              <ThemeToggle/>
            </AuthContextProvider>
          </ThemeContextProvider>
        </div>        
     );
  }
}

export default App;
```

</b>







## 4-C) Consuming Several Contexts:


<b>


`components/main.js`

```js
import React, { Component, Fragment } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

class Main extends Component {
    static contextType = ThemeContext;
    render() { 
        return ( 
        <AuthContext.Consumer>{(authContext)=>{
            return (
        <ThemeContext.Consumer>{(themeContext)=>{
        console.log(themeContext);
      
        const {isLightTheme, light, dark}=themeContext;
        const theme = isLightTheme ? light : dark;
            return(
        
        <main 
            style={{background:theme.ui, color: theme.syntax}}
            onClick={authContext.toggleAuth}
        >
        {authContext.isAuthenticated?"The user is Authentiated":"The user is not Authenticated"}
            <ul>
                <li style={{background:theme.bg}}>First element</li>
                <li style={{background:theme.bg}}>Second element</li>
                <li style={{background:theme.bg}}>Third element</li>
            </ul>
        </main> );}}
        </ThemeContext.Consumer>);}}
        </AuthContext.Consumer>);
    }
}
 
export default Main;
```

</b>




