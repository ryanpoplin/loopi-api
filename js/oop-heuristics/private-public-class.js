(function() {

  'use strict';

  var ClassBlueprint = function(x, y, z) {
    // public
    this.x = x;
    this.y = y;
    // private
    var z = z;
    // public
    this.additionSum = function() {
      return additionCalc();
    };
    // private
    var additionCalc = function() {
      return x + y + z;
    };
  };

  // remember that JS requires the 'new' keyword to create a type of instance of a class blueprint...
  var classBlueprint = new ClassBlueprint(20, 6, -1);
  console.log(classBlueprint.x, classBlueprint.y, classBlueprint.additionSum());
  // error handling for calling a private prop. or meth. of a class?
  // console.log(classBlueprint.additionCalc());

  var JSBase = function() {
    this.speak = function(message) {
      console.log(message);
    };
    this.shout = function(sound) {
      console.log("JSBase");
      console.log(sound);
    };
  };

  var JSDerived = function(JSBase) {
    var jsBase = new JSBase();
    this.speak = function(message) {
      jsBase.speak(message);
    };
    this.shout = function(sound) {
      console.log("JSDerived");
      console.log(sound);
    };
  };

  var jsBase = new JSBase();
  var jsDerived = new JSDerived(JSBase);

  jsBase.speak("JSBase Class");
  jsDerived.speak("JSDerived Class");

  jsDerived.shout("AHHH!");

}());
