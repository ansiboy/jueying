namespace pdesigner {
    let element = document.createElement('style');
    element.type = 'text/css';
    element.innerHTML = `
        .control-selected {
            border: solid 1px #337ab7!important
        }
    `;
    document.head.appendChild(element);
}