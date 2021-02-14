# react-cheat-sheet
I am exploring react

## 1) Creating the react app:

<b>

```bash
npx create-react-app <application name>
cd <application name>
npm start
```

</b>


Here we will create an app called **`sample-app`**

```bash
npm install -g create-react-app
npx create-react-app sample-app
cd sample-app
npm start
```






## 2) Hello, World!:



<b>

`index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

</b>






<b>

`index.js`
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

</b>





Inside this file put this code:

<b>

`app.js`
```javascript
import {React,  Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Hello, World!</p>
      </div>
    );
  }
}

export default App;
```

</b>
