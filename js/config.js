var require = {
  baseUrl: 'js',
  paths: {
    mode: '../mode',
    N3: 'lib/n3-browser-slk',
    jquery: 'lib/jquery-3.1.1.min',
    github: 'lib/github',
    underscore: 'lib/underscore-min'
  }, 
  shim: { // see http://requirejs.org/docs/api.html#config-shim
    'N3': {
      exports: 'N3'
    }
  }
};
