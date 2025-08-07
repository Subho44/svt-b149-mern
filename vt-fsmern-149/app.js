const variable = require('./variable');
const conditional = require('./conditional');
const loops =require('./loops');
const arrays = require('./arrays');
const es6feature = require('./es6features');
console.log("variables:",variable);
console.log("condition:",conditional.checkage(56));
console.log("loops:",loops.loopex());
console.log("players:",arrays.players);
arrays.pdetails();
arrays.alldetails()
console.log("es6 part:",es6feature.x("ardent"));
console.log("es6 part:",es6feature.multi(6,8));