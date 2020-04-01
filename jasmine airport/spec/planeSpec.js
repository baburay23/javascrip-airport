'use strict';
describe('Plane',function(){
var plane;
var airport;
beforeEach(function(){
plane = new Plane();
airport = jasmine.createSpyObj('airport',['clearForLanding','clearForTakeOff']);
//can put both spies together
});
it('can land a plane at an airport', function (){
  plane.land(airport);
  expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
});

it('can be instructed to take off-unit test', function(){
  plane.land(airport)
  plane.takeOff();
  expect(airport.clearForTakeOff).toHaveBeenCalled();
 });
});
