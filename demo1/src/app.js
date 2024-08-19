const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);
// const reactHeading = React.createElement('h1', null, 'React is very hard!!!');
// const reactSecondHeading = React.createElement('h2', null, 'JS is easier!');
// Create container with all other elements. We can render just one container into root!
// const header = React.createElement('header', {className: 'header'}, reactHeading, reactSecondHeading)

const headerJSX = (
    <header class="header">
        <h1>React is very hard!!!</h1>
        <h2>JS is easier!</h2>
        <p>Python is the easiest</p>
    </header>
);

reactRoot.render(headerJSX);