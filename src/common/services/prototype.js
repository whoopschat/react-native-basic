'use strict';

const applyPrototype = () => {

  // =======================================
  //  Array
  // =======================================

  Array.prototype.removeAt = function (dx) {
    if (isNaN(dx) || dx > this.length) {
      return false;
    }
    this.splice(dx, 1);
    return true;
  };


  // =======================================
  //  String
  // =======================================

  String.prototype.toInt = function () {
    let str = this;
    return parseInt(str) || 0
  };

  String.prototype.replaceAll = function (s1, s2) {
    let str = this;
    while (str.indexOf(s1) >= 0) {
      str = str.replace(s1, s2);
    }
    return str;
  }

};

applyPrototype();

