'use strict';

describe('Feature test', function() {
var plane;
var airport;

beforeEach(function() {
  plane = new Plane();
  airport = new Airport();
});

describe('under normal conidtions', function(){
  beforeEach(function(){
    spyOn(Math, 'random').and.returnValue(0);
  });

  it('tells plane to land at the airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);

  });

  it('it can be instructed to take off', function(){
  plane.land(airport)
  //following the pattern of our code
  //first we tell the plane to land at the airport
  plane.takeOff(airport)
  //then we tell it to take off.FOLLOW THE PATTERN
  expect(airport.planes()).not.toContain(plane);

  });
});

describe('under stormy conditions', function(){
 it ('blocks takeoff when stormy', function(){
   plane.land(airport)
   spyOn(airport,'isStormy').and.returnValue(true);
   expect(function(){ plane.takeOff();}).toThrowError('cannot takeoff during storm')
   expect(airport.planes()).toContain(plane);
 });
it ('block landing when stormy', function(){
  plane.land(airport)
  plane.takeOff(airport)
  spyOn(airport,'isStormy').and.returnValue(true);
  expect(function(){ plane.land(airport);}).toThrowError('cannot land')
  expect(airport.planes()).toEqual([]);
  });
 });
});
