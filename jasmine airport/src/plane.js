'use strict';
class Plane {
constructor(){
  this.__location;
}

land(airport){
  airport.clearForLanding(this)
  this.__location = airport;
};
takeOff() {
 this.__location.clearForTakeOff()
 //always put () at the end of a function
 //.clearForTakeOff we are calling the spy with this method
 //dont know whats going on here
}
};
//plane asking airport if its ok to land
