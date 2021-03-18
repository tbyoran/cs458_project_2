import Constants from './constants';

const testProps = (id) => {
  return {
    id,
    testID: id,
    accessibilityLabel: id
  };
}

export {
  Constants,
  testProps,
}