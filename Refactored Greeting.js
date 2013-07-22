var Person = function Person (name) {
	this.name = name;
	this.greet = function greet (yourName) {
		return "Hello " + yourName + ", my name is " + this.name;
	}
}
