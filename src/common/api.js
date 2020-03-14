export function getValue(value, index) {
  if (Array.isArray(value)) {
    return value[index];
  }
  return value;
}

const indexMap = {
  small: 0,
  medium: 1,
  large: 2,
};

export function createStyle(valueArray, that) {
  const styleObj = {};
  valueArray.forEach((value) => {
    Object.keys(indexMap).forEach((i) => {
      const str = `--${i}-${value}`;
      styleObj[str] = getValue(that[value], indexMap[i]);
    });
  });
  return styleObj;
}
