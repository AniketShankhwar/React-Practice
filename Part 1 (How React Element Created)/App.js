const heading = React.createElement('h1', {id : 'heading'}, "Hello, React Here !!" );

console.log(heading);     // here heading is object, and we're showing object in console.log

const root = ReactDOM.createRoot(document.getElementById('root'));

// .render renders the object (heading) to the element to display to the browser
root.render(heading);