var x = "1";document.writeln(x);//statements 语句//disruptive statements  break return throwif (2 <= 1) document.writeln("<");else document.writeln(" > "); if(null) document.writeln("hello world"); else document.writeln("hello null");if(0) document.writeln("hello world");else document.writeln("hello 0 ");if("") document.writeln("hello world");else document.writeln("hello \"\"");if(undefined) document.writeln("hello world");else document.writeln("hello undefined");if(NaN) document.writeln("hello world");else document.writeln("hello NaN");switch (2){    case 1 :document.writeln("case : 1");break;    case true :document.writeln("case : true");break;    default: document.writeln("default value");}var i  =0;while (i<10){    document.write("i = "+i+"  ");    i++;}document.writeln("");//for statementsfor(var j = 0;j<10;j++){    document.write("j = "+j+"  ");}document.writeln("");// TODO: for in 语句var count  = 0 ;do {    document.writeln("hello");    count++;}while (count<2);try {    document.writeln("world");}catch (count){    document.writeln("this is an error----- ")}//var stooge  = {    "first_name":"Jerome",    "last_name":"Howard",    age :14,    address:{        country:"China",        city:"HangZhou",    }};stooge["first_name"];document.writeln(stooge["first_name"]);stooge["first_name"] =  "chengchen";document.writeln(stooge["first_name"]);var newdata = stooge.address.city1 || "none city";document.writeln(newdata);stooge["mid_name"] = "Ethan";stooge.mid_name = "Giraffe Tree";document.writeln(stooge["mid_name"]);var x = stooge;document.writeln("");document.writeln(x.mid_name);x.mid_name = "small treeeeeee";document.writeln(x.mid_name);document.writeln(stooge.mid_name);//原型，每个对象都连接到一个原型对象，继承属性//TODOif(typeof Object.beget !== 'function'){    Object.create  = function(o){        var F  = function(){};        F.prototype = o;        return new F();    };}var ano = Object.create(stooge);// 找属性值得过程，成为委托stooge.teacher = "chengchen";document.writeln(ano.teacher);//反射document.writeln(typeof ano.age+" "+typeof(ano.teacher));document.writeln(typeof(ano.toString));document.writeln(typeof(null));ano.school  = "university";document.writeln(ano.hasOwnProperty('school'));//属性出现的顺序不一定var name;ano.father = "gesus";for(name in ano){    if(typeof ano[name]!=='function'){        document.writeln(name+" : "+ano[name]);    }}var order ;var properties =[    'sofa',    'desk',    'laptop',    'kindle']for(order in properties){    document.write(properties[order]+"  ");}document.writeln("");for(i = 0;i<properties.length;i++){    document.write(properties[i]+" ");}document.writeln("");var myObject = {    value :1,    //当一个函数被保存为对象的一个属性时，我们称它为一个方法    addOne :function (x) {        this.value += typeof x ==='number'?x :1;        document.writeln(this.value);    },    addValue: function (x) {            }};myObject.addOne();