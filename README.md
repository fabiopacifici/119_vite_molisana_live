# Steps

- 1. setup json-server
- 2. setup the global state

## 1. Setup json server

Documentazione: <https://github.com/typicode/json-server/tree/v0>

### Install json server and setup the package.json script

The installation is global, meaning that you only need to install it once.accordion

```bash
npm install -g json-server@0.17.4 
```

### Edit the package.json file

```json

"scripts": {
    // ..dont remove the other scripts, just add this one below
    "serve": "json-server --watch ./src/db.json",
    // ..dont remove the other scripts, just add this one above
  },

```

The json server will serve the file that it finds in the specified path `./src/db.json`

### add your data to the json file

Create the `db.json` (if it does not exists) file inside the `src/` folder.
Place inside the file all your products as json object

```json

{

  "products": [
    {
      // your product object
      "key" : "value"
    },
        {
      // your product object
    }
  ]

}


```

### Run the json server in the background

open a new terminal window and start the json server using the script that we defined inside
the package.json file

```bash
# inside your project folder run the following

# start the vite server
npm run dev

# in a different terminal
npm run serve

```

Both commands will lock your terminal so to get access to it again you need to press `CTRL+C`

## Setup the global state

Documentazione:<https://vuejs.org/guide/scaling-up/state-management.html>
Create a new javascript file inside the `src` folder called `state.js`

```bash
cd src
touch state.js

```

Add the reactive function inside the newly created file

```js
// 1. Import the reactive function from vue
import { reactive } from 'vue';

// 2. export a constant where you call the reactive function 
// inside the reactive function you need to pass a plain js object literal.

// Global state here
export const state = reactive ({
  // State (your  data)
  message: 'This is a test',
  
  // Actions that change the state (your methods)
 myMethod(){

 },
 myOtherMethod(){

 }

})

```

Inside the reactive obj you can add properties and methods as you normally would in a component.
But remember that both methods and properties in a global state are shared between multiple components
if needed.

## How to use your global state

The global state needs to be imported inside the component that wants to access its state and actions (data and methods)

Inside the component where you want the data, for instance:

`./src/components/AppMain.js`

```js
// 👇 Import your state use a relative path
import { state } from '../state.js'

export default {
  name: 'AppMain',
  // all properties of the options object as usual
  
  data() {
    return {
    // 👇 Add the state to your instance data
      state
     
    }
  },


  mounted() {
    /* 👇 You can call the state as is */
    console.log(state);

    /* Or use the this.state */
    console.log(this.state);
  }

}


```

Now when the state is imported and passed to data you can use it also inside the template like so:

```js
// Your template section of the component
<template> 
  {/* All your component template */}
    <p>{{state.message}}</p>

</template>
```
