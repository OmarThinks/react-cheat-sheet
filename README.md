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






## 2) Components:
React is all about Components.
- Create a directory called `components`
- Inside of it create a file called `product.js`


Inside this file put this code:

<b>

```javascript
import React, {Component} from "react"

class Product extends Component {
    render() {
        return(
            <div>
            <p>Name is: Labtop</p>
            <p>Price is: $50</p>
            <p>In Stock is: True</p>
            </div>
        )
    }
}
```

</b>
