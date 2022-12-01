// Copyright (c) 2020 Chloe Havel All rights reserved
//
// Created by: Chloe Havel
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-unit-5-04/sw.js", {
    scope: "/ICS2O-unit-5-04/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  var day = document.getElementById("day").value
  var age = document.getElementById("age").value

  if (day == "Tuesday" || day == "Thursday" || (age > 12 && age < 21)) {
    document.getElementById("answer").innerHTML =
      "You are eligible for a student priseing"
  } else {
    document.getElementById("answer").innerHTML =
      "You must pay regular priseing"
  }
}
