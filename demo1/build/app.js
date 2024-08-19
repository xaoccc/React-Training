var root = document.getElementById('root');
var reactRoot = ReactDOM.createRoot(root);
// const reactHeading = React.createElement('h1', null, 'React is very hard!!!');
// const reactSecondHeading = React.createElement('h2', null, 'JS is easier!');
// Create container with all other elements. We can render just one container into root!
// const header = React.createElement('header', {className: 'header'}, reactHeading, reactSecondHeading)

var headerJSX = React.createElement(
    "header",
    { "class": "header" },
    React.createElement(
        "h1",
        null,
        "React is very hard!!!"
    ),
    React.createElement(
        "h2",
        null,
        "JS is easier!"
    ),
    React.createElement(
        "p",
        null,
        "Python is the easiest"
    )
);

reactRoot.render(headerJSX);