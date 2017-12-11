# ng-country-selector

AngularJS directive to countries as options for the select element.

### Installation

You can install the directive using [Bower](http://bower.io):

`$ bower install ng-country-selector`


Then you have to include it in your HTML:

`<script src="bower_components/ng-country-selector/dist/ng-country-selector.min.js"></script>`

And inject the module ng-country-seleor as a dependency of your application:

`angular.module('myApp', ['ng-country-selector']);`


### Usage
The directive is intended to be used as an element with an ngModel attribute which is required for this to work.

`<ng-country-selector ng-model="country"></ng-country-selector>`

The default value to which ngModel is bound is it's two-letter country code

### CONTACT
- gidkom <yoroumah@gmail.com>


### License
MIT
