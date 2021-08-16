const Block = require('./block');

const fooBlock = Block.mineblock(Block.genesis(), 'foo');
console.log(fooBlock.toString());
