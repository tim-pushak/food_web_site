"use strict";


window.addEventListener('DOMContentLoaded', function() {
    import _ from 'lodash';

    const tabs = require('../../js/modules/tabs'),
          calc = require('../../js/modules/calc'),
          cards = require('../../js/modules/cards'),
          modal = require('../../js/modules/modal'),
          slider = require('../../js/modules/slider'),
          timer = require('../../js/modules/timer');

    tabs();
    calc();
    cards();
    modal();
    slider();
    timer();
});