/* <div id="Parent">
        
        <div id="child1">
            <h1>How Are you</h1>
            <h1>Hello</h1>
        </div>

        <div id="child2">
            <h1>How Are you</h1>
            <h1>Hello</h1>        
        </div>
    </div> 
*/



// Making upper html using React 

const parent = React.createElement('div', {id : "Parent"},         // Creating parent div with id 'Parent'
    [ 

      React.createElement('div',{id : "Child1"},                    // Creating child1 div with id 'Child1'
       [ React.createElement('h1', {}, "How are you"),              // First h1 tag inside Child1
         React.createElement('h1', {}, "Hello") ]                   // Second h1 tag inside Child1
      ),

      React.createElement('div',{id : "Child2"},                    // Creating child2 div with id 'Child2'
       [ React.createElement('h1', {}, "How are you"),              // First h1 tag inside Child2
         React.createElement('h1', {}, "Hello") ]                   // Second h1 tag inside Child2
      )

    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"))   /* Creating root using div with id 'root' which is already 
                                                                       created in html document like this   <div id="root"></div> */

root.render(parent);                                                // Rendering the parent element into root

//  React Element(Object) => HTML (Browswer Understands)