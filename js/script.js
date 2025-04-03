// Copyright (c) 2025 Mr. Angelo Garcia All rights reserved
//
// Created by: Angelo Garcia
// Created on: march 2025
// This file contains the JS functions for index.html
// Function to calculate the volume of the cylinder
function calculateVolume() {
    // Get the values of the input fields
    var radius = parseFloat(document.getElementById('radius').value);
    var height = parseFloat(document.getElementById('height').value);

    // Validate inputs to ensure they're numbers and not empty
    if (isNaN(radius) || radius <= 0) {
        alert("Please enter a valid positive number for the radius.");
        return; // Stop the calculation if input is invalid
    }
    if (isNaN(height) || height <= 0) {
        alert("Please enter a valid positive number for the height.");
        return; // Stop the calculation if input is invalid
    }

    // Formula for the volume of a cylinder: V = π * r² * h
    var volume = Math.PI * Math.pow(radius, 2) * height;

    // Round the result to 2 decimal places
    volume = volume.toFixed(2);

    // Display the result in the page
    document.getElementById('volume-result').innerHTML = `Volume = ${volume} cubic units`;
}
