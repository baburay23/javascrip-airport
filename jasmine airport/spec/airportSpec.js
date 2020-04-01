'use strict';
describe('Airport', function(){
  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    plane = jasmine.createSpy('plane');
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);
// JavaScript scoping rules apply, so variables declared in a describe are available to any it block inside the suite.
});

it ('has no planes by default', function(){
  expect(airport.planes()).toEqual([]);
});

describe('under normal conidtions', function(){
  beforeEach(function(){
    weather.isStormy.and.returnValue(false);
  });
it ('can clear planes for landing', function(){
  airport.clearForLanding(plane);
  expect(airport.planes()).toEqual([plane]);
});

it ('can clear planes to take off'), function(){
  airport.clearForLanding(plane);
  airport.clearForTakeOff(plane);
 expect(airport.planes()).toEqual([]);
  //taking the plane from the array?
 });
});

describe('under stormy conditions', function(){
  beforeEach(function(){
    weather.isStormy.and.returnValue(true);
  });
  it('does not clear planes for landing', function(){
    //spyOn(airport,'isStormy').and.returnValue(true);
  expect(function(){ airport.clearForLanding(plane); }).toThrowError('cannot land');
      });
  it('does not clear planes for takeoff', function(){
      //spyOn(airport,'isStormy').and.returnValue(true);
  expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('cannot takeoff during storm');
   });
 });
});
