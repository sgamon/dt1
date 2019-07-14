function toDashCase(str) {
  return str.trim().replace(/ +/g, '-');
}

/**
 * Given an array of custom tagnames, loads each tag class and adds it to
 * global customElements.
 *
 * @param {array} arr of tagnames
 * @param {string} folder path to find custom element classes
 * @param {string} prefix applied to tagnames to create a custom namespace
 */
export function defines(arr, folder = 'components', prefix = '') {
  arr
    .forEach(async tag => {
        const prefixedTag = prefix ? toDashCase(`${prefix} ${tag}`) : toDashCase(tag);
        let module = await import(`./${folder}/${tag}.js`);
        window.customElements.define(prefixedTag, module.default);
      }
    );
}

