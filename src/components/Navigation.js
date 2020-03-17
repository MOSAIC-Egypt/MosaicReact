import {Navigation} from 'react-native-navigation';
import { Component } from 'react';
var screens = [];


    var push = function(componentId, screenName) {
        if (screenName === screens[screens.length - 1])
        {
           return;
        }
        screens.push(screenName);
        Navigation.push(componentId, {
         component: {
           name: screenName,
         }});
};

    var pop = () => {
        screens.pop();
        Navigation.pop();
     };

exports.push = push;
exports.pop = pop;

