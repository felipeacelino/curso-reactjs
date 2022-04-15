const generateKey = (text, key) => text.trim().replace(/\W/g, '').toLowerCase() + key;

const Utils = {
  generateKey
};

export default Utils;