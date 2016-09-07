const ThriftClient = require('../../thrift-client');

let server = ThriftClient.start(require('./config'));

server.register('test', ctx => {
  let [ item = {} ] = ctx.list1;
  if (item.a === 999) {
    let message = JSON.stringify(ctx);
    throw { 'exception': { name: 'ERROR_999', message } };
  }
  return ctx;
});

server.register('bin', ctx => ctx.data);

server.register('bignumber', ctx => ctx.data);

server.register('void_call', ctx => {});

server.register('required_a', ctx => {});

server.register('arr', ctx => {});

server.register('response_a', ctx => {
  return { b: 2 };
});
