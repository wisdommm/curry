function uncurry(f) {
    return function(x) {
        return function g(x, y) {
            if (y === void 0)
                return x;
            else
                return g.bind(this, f(x, y));
        }.bind(this, x);
    };
}

function addNum(x, y) {
    return x + y;
}

var add = uncurry(addNum); 
