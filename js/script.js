// Copyright (c) 2022 Chloe Havel All rights reserved
//
// Created by: Chloe Havel
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/assinment-ICS2O-4/sw.js", {
    scope: "/assinment-ICS2O-4/",
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
  } else if (flavor == "ApplePie") {
    cost = cost + 8.19
  } else if (flavor == "CherryPie") {
    cost = cost + 8.5
  } else if (flavor == "PumpkinPie") {
    cost = cost + 5.94
  } else {
    // nothing should be here!
  }
  if (toping == "Whippedcream") {
    cost = cost + 1.8
  } else if (toping == "StrawBarry") {
    cost = cost + 1.8
  } else if (toping == "RainbowSprinkles") {
    cost = cost + 0.99
  } else {
    // nothing should be here!
  }

  document.getElementById("answer").innerHTML =
    "The pie that you want is $" + cost.toFixed(2)

  // output cost
}
