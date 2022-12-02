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
  let cost = 0
  
  var flavor = document.getElementById("flavor").value
  var toping = document.getElementById("toping").value

  if (flavor == "ChocolateCreamPie") {
    cost = cost + 7.89
  } else if {
    document.getElementById("answer").innerHTML =
      "You must pay regular priseing"
  }

  // output cost
}
