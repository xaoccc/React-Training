# React-Training
React for complete beginners. Prerequisites: You must already know HTML, CSS and JavaScript at least on a beginner level. React is learned only through practice!
## Demo 1:
- Create index.html
- Create dir src
- In dir src create app.js
- Link app.js to index.html:  
`<script type="module" src="src/app.js"></script>`  
- For creating react app do not use create-react-app. Instead use vite
- Open this tutorial https://legacy.reactjs.org/docs/add-react-to-a-website.html  
- In head import the libraries react and react-dom (we can also install them using npm and import them in app.js):   
`    <script src="https://unpkg.com/react@18.3.1/umd/react.development.js" crossorigin></script>`  
    `<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" crossorigin></script>`  
- Create root in index.html:  
`<div id="root"></div>`  
We can create many small apps in the same page, using the id for each app: #root, #another-app, #som-widget, etc...
 - Add root to JS
 - Create ReactDOM root:  
 `const reactRoot = ReactDOM.createRoot(root)`  
 - Add element to the ract root
 - Render the content:  
 `reactRoot.render(reactHeading)`  
 - Create headerJSX and add its contents. Hide/comment the other code, except the first 2 lines and the render. At this point we need a tool
 which can translate the JSX syntax for the browser to understand. We call this tool preprocessor.   
 - In this case our preprocessor would be babel. Let's install it:   
 create package.json:   
 `npm init -y`  
 install babel:  
 `npm install babel-cli@6 babel-preset-react-app@3`  
 - Edit package.json scripts:  
 delete test  
add "build": "npx babel --watch src --out-dir build --presets react-app/prod"  
- run the newly added command:  
`npm run build`  
- Now we can write html in our app.js and babel will translate it to React code in the build dir. Then index.html will display it properly.  

## Demo 2: Components
- Here we use Vite. Vite installs all necessary for a React app.
- Install Vite:  
`npm create vite .`  - create app in the same dir  
`npm create vite subDir`  - create app in a new subDir  
- Choose React, variant JavaScript
- `npm i`  
- `npm run dev`  
- Now React + Vite page is running :) 
- How it works: index.html -> main.jsx -> App.jsx
- Modify...
- Create dir components  
- Create dir styles  
- Create the components main.jsx, header.jsx and footr.jsx
- Use App.css for CSS. Put App.css in styles dir
- export vs export default:  https://medium.com/@heshramsis/understanding-the-difference-between-export-default-and-export-with-named-exports-in-javascript-f0569c221a3  

## Demo 3: Components
- Copy the contents of demo2 and paste it in demo3  
- Get a free template (or use your own)  
- copy all css, images, script and other assets into public dir  
- The css imports will be in the head of index.html, not in main.jsx  
- The scripts will be also in index.html - after the footer, but inside the body  
- Create components for each section of the page: header, info, main, footer...  
- Import all components into main.jsx  

## Demo 4: Props
- Install Vite (follow the steps from demo 2)  
- Copy the contents of dir blueprint to dir demo 4. This will create some normal web page structure. 
- Create an export list with movies(each movie is an object) in a file moviesdata.jsx  
- Create a movies list component: movielist.jsx  
- Import both moviesdata.jsx and movielist.jsx to main.jsx
- Declare props in the Movies component in main.jsx
- One of the props is moviesdata!
- Pass these props as an argument to function MovieList()
- Create a component Movie
- Import Movie component to movielist.jsx
- In each imported (i) component declare this data={props.movies[i]}. Props comes from MovieList(props), movies comes from the property movies={moviesdata} in main.jsx. Moviesdata is our list with movies.
 - Movie component also uses props argument and for each move we display this: props.data.movieParameter. movieParameter can be any key available in moviesdata[i] object. 

 ## Demo 5: States and Events
- Install Vite (follow the steps from demo 2)  
- Copy the contents of dir blueprint to dir demo 4. This will create some normal web page structure. 
- Create Timer component and add it to main.jsx in dir components
- Import useState in Timer
- Create setTimeout with setTime function 
- Create Counter component
- Import and add Counter to main.jsx 
- The way we add event handlers is similar to inline HTML: `<element onEvent={ functionName }...` We do not call the function!
- Create 3 functions in counter.jsx: increaseCount, decreaseCount, resetCount. Each of them will use useState to update the count value
- Each function which uses the current state will execute as follows setValue(currentValue => currentValue change (we can add, divide, concat, etc...)). The syntax currentValue => currentValue change is the proper way to do this.
- If we do not care about the old value (resetCount), we use the value we want to set: setValue(Value we want)

 

