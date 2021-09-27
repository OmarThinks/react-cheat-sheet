# 4) Context and Hooks:



# 1) Creating a Context Provider:



```js
import React, {createContext} from 'react';

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

        </ThemeContext.Provider> );
    }
}
 
export default ThemeContextProvider;
```




