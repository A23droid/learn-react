function customRender(reactElement, container) {
    /* M1: Less Efficient
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement);
    */

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if (prop === 'children') continue;

        domElement.setAttribute(prop, reactElement.props[prop])
        // Use [prop], not .prop because in [], prop = variable, 
        // but in .prop, prop is treated as a string
    }

    container.appendChild(domElement);
    console.log(domElement);
    
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)