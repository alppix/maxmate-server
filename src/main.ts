console.log('Hello World!');

// Hot module replacement.
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log('Dispose module. '));
}
