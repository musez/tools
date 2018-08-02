// 
function startAnimation(){}
function stopAnimation(){}

// 
var Anim = function(){};
Anim.prototype.start=function(){}
Anim.prototype.stop= function(){}

var myAnim=new Ainm();
myAnim.start();
myAnim.stop();

// 
var Anim = function(){};
Anim.prototype={
	start:function(){},
	stop:function(){}
}

// 
Function.prototype.method = function(name,fn){
	this.prototype[name]=fn;
}

var Aaim=function(){};
Anim.method('start',function(){});
Anim.method('stop',function(){});

// 
Function.prototype.method=function(name,fn){
	this.prototype[name]=fn;
	return this;
}
var Aaim=function(){};
Anim.
method('start',function(){}).
method('stop',function(){});

// 
// 
(function(){
	var foo = 10;
	var bar =2;
	alert(foo*bar)
})();

// 
(function(foo,bar){
	alert(foo*bar);
})(10,2);

// 
var baz = (function(foo,bar){
	return foo*bar;
})(10,2);

// 
var bar;
(function(){
	var foo=10;
	var bar = 2;
	baz = function(){
		return foo*bar;
	}
})();

baz();

// 
// 
function dispalyError(message){
	dispalyError.numTimesExecuted++;
	alert(message);
}
dispalyError.numTimesExecuted=0;

// 
function Person(name,age){
	this.name = name;
	this.age = age;
}
Person.prototype={
	getName:function(){
		return this.name;
	},
	getAge:function(){
		return this.age;
	}
}