import camelCase from './node_modules/lodash/camelCase';


function toDashCase(str) {
    return str.trim().replace(/ +/g, '-');
}


export function defines(arr, prefix='') {
    arr
        .forEach(tag => {
            const prefixedTag = prefix ? toDashCase(`${prefix} ${tag}`) : toDashCase(tag);
            console.log(`importing`);
            const module = import(`./${camelCase(tag)}`);
            window.customElements.define(prefixedTag, module);
        }
    );
}

