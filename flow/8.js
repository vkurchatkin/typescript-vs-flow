/* @flow */

const promise: Promise<string> = new Promise(resolve => {
  resolve(1); // Error
})
