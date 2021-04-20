// #interview question - 

// function (exports, module, require, __filename__, __dirname) {

    // let g = 1; // scoping for this wrapping function, not global at all
    // console.log(arguments);
    exports.a = 42; // bcoz exports available as args
    // exports is an alias for module.exports
    module.exports.b = 37;

    // exports = () => {}  // not ok

    module.exports = () => {}

    // return module.exports;
// } (module.exports, )

