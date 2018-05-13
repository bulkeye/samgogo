"use strict";
exports.__esModule = true;
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.

 



class App {
  public __express: any ;

  constructor () {
    this.__express = express()
    this.mountRoutes()
  }

  private mountRoutes(): void {
    const router = express.Router()
    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      })
    })
    this.__express.use('/', router)
  }
}

function f(sn: string | null): string {
    if (sn == null) {
        return "default";
    }
    else {
        return sn;
    }
}
let app = new App().__express;
const port = process.env.PORT || 3000
app.listen(port, (err:String) => {
  if (err) {
    return console.log(err)
  }
  return console.log(`server is listening on ${port}`)
});

async function a(){
 console.log(f(null));
await console.log('a');
}
 */
function f(sn) {
    return sn || "default";
}
console.log(f(null));
var Broken = /** @class */ (function () {
    function Broken() {
    }
    ;
    Object.defineProperty(Broken.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            this._fullName = newName;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return Broken;
}());
function broken(name) {
    var _postfix = {
        str_a: 'a',
        fn_b: function (name) {
            return name.charAt(0) + '.  the anything';
        },
        arr_b: function () { var arr_test = ['a', 'b']; return arr_test.join(); }
    };
    _postfix.fn_b(name);
    return _postfix;
}
console.log(broken('sammy').str_a);
console.log(broken('sammy').fn_b('feng'));
console.log(broken('sammy').arr_b());
function getName(n) {
    if (typeof n === "string") {
        return n;
    }
    else {
        return n.value = 'abc';
    }
}
console.log(getName('Hi world'));
console.log(getName({ value: 'test' }));
var Big_Banyan = { value: "2", left: {}, right: {} };
console.log(Big_Banyan);
var people;
var s = people.name;
var s = people.next.name;
var s = people.next.next.name;
var s = people.next.next.next.name;
