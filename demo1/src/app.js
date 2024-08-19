const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);
const reactHeading = React.createElement('h1', null, 'React is very hard!!!');

reactRoot.render(reactHeading);