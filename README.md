# React-Training
React for complete beginners
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

## Demo 2:
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

## Demo 3:
- Copy the contents of demo2 and paste it in demo3  
- Get a free template (or use your own)  
- copy all css, images, script and other assets into public dir  
- The css imports will be in the head of index.html, not in main.jsx  
- The scripts will be also in index.html - after the footer, but inside the body  
- Create components for each section of the page: header, info, main, footer...  
- Import all components into main.jsx  


