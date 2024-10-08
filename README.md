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

## Demo 6: Effect Hooks
- Install Vite (follow the steps from demo 2)  
- Copy the contents of dir blueprint to dir demo 4. This will create some normal web page structure. 
- Import and add useEffect in Main
- Create dependency array like so:  

```
const [count, setCount] = useState(0);
const [isManualUpdate, setIsManualUpdate] = useState(false);
...
useEffect(() => {  
        if (!isManualUpdate) {
            setTimeout(() => setCount(count => count + 1), 1000);
        } else {
            setIsManualUpdate(false);
        }        
    }, [count])
    
```
Here `[count]` is a dependency array. This means that the code in useEffect will be generally executed only if mount, update or unmount of count has happened. 
- useEffect is a hook. This means that if there is a change in count, it hooks the code inside it to the app.
- CSS modules
  - Naming: `ComponentName.module.css`
  - Location: `.../appName/public/css`
  - Import: `import styles from ../public/css/ComponentName.module.css`
  - Use: `{styles.className}` in the element you want to add this style
  - Class name syntax: Camel case, because JS uses Camel case
- Requests
  - Create StarWars component and insert it into main.jsx
  - In starwars.jsx use useState and useEffect to fetch the data
  - In useState the initial state is [] to store the data
  - Stop the timeout component

  ## User List important notes
- Show contents on click using React in 4 steps:
    1. The button better be in the same component
    2. In table.jsx create :
    ```
    function createUserClickHandler() {
        setShowCreateForm(true);
    }
    ```
    3. In table.jsx create useState flag: const [showCreateForm, setShowCreateForm] = useState(false);
    4. Create conditional statement for showing content:
    ```
    {(showCreateForm) ? <CreateForm /> : null}
    ```
- Hide content on click in 4 steps
    1. Create function to set the state to false :
    ```
    function hideCreateUserForm() {
        setShowCreateForm(false);
    }
    ```
    2. Add prop to the component:
    ```
    {(showCreateForm) ? <CreateForm hideCreateUserForm={hideCreateUserForm} /> : null}
    ```
    3. Use the prop in the form:
    ```
    export default function CreateForm({hideCreateUserForm}) ...
    ```
    4. Add the prop to the event click handler:
    ```
    onClick={hideCreateUserForm}
    ```

## Demo 7: Forms

### Uncontrolled Forms
- Their input values are in the DOM
- We have no power over the state
- No recommended for React
### Controlled Forms
- Input value is kept in the state, therefore we can control it
- There are custom handlers for change/sumbmit events
- Using controlled forms:
    - In every input add attribute onChange={inputNameChangeHandler}
    - Create function inputNameChangeHandler for every input
    - In React the value="" is defaultValue="" and value in controlled forms is always getting the data from React value={}
    - create state handler for each input field: [value, setValue] = useState('')
    - onBlur={} - used for input validation
    - There are at least 3 ways to submit without reloading the whole page:
        1. Attach an onClick on the button and button is type button:
        ```
        <button type="button" onClick={submitHandler}>Register</button>
        ```
        submitHandler has no preventDefault inside!  
        ```
        function submitHandler() {
            ...
        }
        ```

        2. Button is of type submit (default for forms) 
        ```
        <button onClick={submitHandler}>Register</button>
        ```
        submitHandler has preventDefault inside! 
        ```
        function submitHandler(e) {
            e.preventDefault()
            ...
        }
        ```
        3. Attach onSubmit to the form:
        ```
        <form onSubmit={submitHandler}>...
        ```
        Again, submitHandler has preventDefault inside! 
        ```
        function submitHandler(e) {
            e.preventDefault()
            ...
        }
    - For 1 or 2 input fields above approach is OK (ControlledForm.jsx)
    - For more inputs we should use another approach - input data pipe (ControllerForm.Pipe.jsx)
        1. Create 
        ```
        const initialState = {
            username: 'username',
            password: 'password',
            age: 'age'
        }
        ```
        2. Create form state:
        ```
        const [formValue, setFormValue] = useState(initialState);
        ```
        3. Update the jsx code of the inputs like so:
        ```
        <input value={formValue.username}...
        ...
        <input value={formValue.password}...
        ```
        4. Replace all the input change handlers with just one:
        ```
        function valueChangeHandler(e) {
            setFormValue(state => ({
                ...state,
                [e.target.name]: e.target.value
            }));
        } 
        ```
        5. Update reset handler:
        ```
        function resetHandler() {
            setFormValue(initialState);
        }
        ```
        6. Summary:
        We have an initial state storage, form state, value change handler and reset handler for better working with form data.


### UseRef

- We use useRef to use an element from another component for :
    - Remote submit
    - Data storage
    - Accessing DOM Elements
- Usage :
    On the remote component:
    ```
    const formRef = useRef();
    
    return (
        <>
        <ControlledFormPipe formRef={formRef}  />
        <button type="button" onClick={() => formRef.current.submit()}>Submit</button>
        </>
    )
    ```
    On the main component we call it like a prop and add it to the element lik a ref:
    ```
    <form ref={formRef}...
    ```

## Demo 8: Routes
- Routes in SPA are used for:
    - URL-Based Navigation
    - Component Mapping
    - Handling Dynamic Content
    - Maintaining Browser History
    - Better User Experience
- Install react-router-dom: `npm install react-router-dom`
- In main.jsx in the crs dir import React Browser Router:
```
...
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <Main />
    <Footer />
  </BrowserRouter>
)
```
- In main.jsx in the components dir add all the routes:
```
import { Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import About from "../components/About"
import Customers from "../components/Customers"
import News from "../components/News"
import Contacts from "../components/Contacts"

export default function Main() {
    return (
        <main>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contacts />} />
            </Routes>

        </main>
    )
}
```
- Still, the app in not SPA. Here is how to solve it:
- Go to header.jsx
- Import Link:
```
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <nav>
                <div className="logo">Logo</div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/customers">Customers</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/contact">Contacts</Link></li>
                </ul>                
            </nav>
        </header>
    )
}
```
- Use React Bootstrap for some easy CSS: `npm install react-bootstrap`
- Create CharacteListItem.jsx for the display of each character
- Create CharacterList.jsx for getting data from API and display it there using the usual steps:
    - Create state to store all characters data
    - Make a GET request to the API and get the data and store it into the state
    - Usung map, display the data for each character, using CharacteListItem and pass a parameter id, we need it for next routing
- Create CharacterDetails to display the details for each character, using GET request to the API
- Import these in CharacterDetails.jsx:
```
import { useParams, useLocation, useNavigate } from 'react-router-dom';
```
- We take the id parameter fom the url, adding one more route to main.jsx:
```
<Route path={`/characters/:id`} element={<CharacterDetails />} />
```
- That way the Button (as Link) in CharacterListItem will direct us to the correct contents:
```
<Button as={Link} to={`/characters/${id}`} variant="primary">Details</Button>
```
- So, we have the id in these places:
    1. In CharacterListItem as parameter
    2. Then the id goes to the Button (as Link) 
    3. Then the id goes in the url
    4. Then CharactersDetails gets the id from the url and uses is to make a GET request to the API

## Demo 9: Hooks
- This demo is using React Bootstrap, so install them: `npm install react-bootstrap bootstrap`
- Create Form inside a Modal
- In the form input add onChang Handler, name and value:
```
<Form.Control type="text" name="text"  value={formValues.name} onChange={onChangeHandler} placeholder="Enter ToDo" />
```
- Create dir hooks in the main dir of the demo
- In hooks dir create the custom hooks useForm.js :
```
export function useForm(initialValues) {
    const [formValues, setFormValues] = useState(initialValues)

    function onChangeHandler(e) {
        setFormValues(state => ({...state, [e.target.name]: e.target.value }))
    };

    return {formValues, onChangeHandler}
}
```
- In addToDo.jsx call the hook useForm:
```
const {formValues, onChangeHandler} = useForm ({text: ''})
```
### Context
- Context is a powerful tool in React for functionality access across the React tree
- Create a button in todoItem.jsx:
```
<Button variant="dark" onClick={() => DeleteToDo(todo._id)}>X</Button> 
```
- We'll create function DeleteToDo() accessible across the app, using Context:
    - In the main dir create dir `contexts`
    - In context dir create file `TodoContext.js`
    - In contextToDo.js import React Context and create the context (a function TodoContext, which can be used across our app):
    ```
    import { createContext } from "react";

    export const TodoContext = createContext();
    ```
    - Set where should the context be used. 
    - We'll use it in main.jsx. Import the context:
    ```
    import { TodoContext } from '../contexts/todoContext';
    ```
    - Wrap the context provider around the component :
    ```
    <TodoContext.Provider>
    ...component code here...
    </TodoContext.Provider>
    ```
    - Import useContext whereever we need this context. In our case we need it in todoItem.jsx:
    ```
    import { useContext } from 'react';
    ```
    - Import also the context itself. In todoItem.jsx:
    ```
    import { TodoContext } from '../contexts/todoContext';
    ```
    - Now in our component ToDoItem we have access to the context :
    ```
    const todoContextValue = useContext(TodoContext);
    ```
    or in our case:
    ```
    const { DeleteToDo } = useContext(TodoContext);
    ```
    - In main.jsx:
    ```
        function DeleteToDo(todoId) {
            fetch(`${baseUrl}/${todoId}`, { method: 'DELETE'})
            .then(() => setTodos(state => state.filter((x) => x._id !== todoId)))
            .catch((error) => console.log(error));
    }

    const contextValue = {
        DeleteToDo
    };
    ...
    export default function ToDoItem({todo}) {
        const { DeleteToDo } = useContext(TodoContext);
    ...
    ```
    Here we use the context to pass the DeleteToDo function from the main.jsx to todoItem.jsx not through the props, but through the context. This way we can skip several levels of prop drilling. 


React Context:
- prevents props drilling
- is not a hook and should not be used as a hook

## Games Play - Auhentication and Authorization
- Create a custom hook to handle login form. In hooks dir create useForm hook:
```
import { useState } from "react"

export default function useForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues);
    function onChange(e) {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    function onSubmit(e) {
        e.preventDefault();
        submitHandler(values);
    }

    return { values, onChange, onSubmit }
}
```
- In App.js monitor the state for the auth. This auth state will be monitored across the app and a submit handler :
```
const [auth, setAuth] = useState({});
function loginSubmitHandler(values) {
        ...
    }
```




