

import * as express from 'express';

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

function f(sn: string | null): string {
    return sn || "default";
}
console.log(f(null));


interface iBroken{
 str_a:String,
 fn_b(a:String):String,
 arr_b():String
    
}
interface iBroken_A{
 str_a:String
}


class Broken implements iBroken_A{
    private str_a:String;
    private _fullName:String;
    
    
    constructor(){};    
    
    public get fullName(): String {
        return this._fullName;
    };
    
    public set fullName(newName:String): String {
        this._fullName = newName;
    };
    
    
       
}



function broken(name: String | null): iBroken {
    
  
    
  let _postfix:iBroken = {
                    str_a:  'a',
                    fn_b:   function(name:String):any{
                                
                                return name!.charAt(0) + '.  the anything';
                            },
                    arr_b: () => {let arr_test: String[] = ['a', 'b']; return arr_test.join();}
                  };
  _postfix.fn_b(name);
  return _postfix;
}

console.log(broken('sammy').str_a);
console.log(broken('sammy').fn_b('feng'));
console.log(broken('sammy').arr_b());


type Container<T> = { value: T };

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | Container<String>;
function getName(n: NameOrResolver): Name {
    if (typeof n === "string") {
        return n;
        
    }
    else {
       return n.value = 'abc';
    }
}

console.log(getName('Hi world'));
console.log(getName({value:'test'}));

type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}

let Big_Banyan:Tree<String> = 
{value:"2",left:<Tree<String>>{},right:<Tree<String>>{}};
console.log(Big_Banyan);


type LinkedList<T> = T & { next: LinkedList<T>};

interface Person {
    name: string;
}

var people: LinkedList<Person>;
var s = people.name;
var s = people.next.name;
var s = people.next.next.name;
var s = people.next.next.next.name;



