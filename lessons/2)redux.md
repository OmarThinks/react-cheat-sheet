# 2) Redux:


## 1) Redux Intro:

## What:
- a centerlized way to store data of components
- handle the states of the components  
- you do not have to kepp passing the information from a component to sub components
- Redux will be a central data storage


## How:

1. Create a redux central storage
2. Link the component to the redux
3. Subscribe changes of the components to the redux
4. Decide that you want to take action
5. Dispatch action (With the payload)
6. Pass action to the reducer
7. Reducer updates the central states



## Installations:

<b>

```bash
npm install --save redux
npm install --save react-redux
```

</b>





## 2) Creating a store:



```Js
import {Component} from 'react';
import {createStore} from "redux";

const initState = {
  todos:[],
  posts:[]
}

function myReducer(state = initState,action) {
}

const store = createStore(myReducer);

class App extends Component {
  render = () => {
    return (
      <div className="App">
        Hi!
      </div>
    );
  }
}

export default App;

```























