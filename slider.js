const slider = document.getElementById('colorRange');

// Function to convert slider value to hex color
function valueToHex(value) {
    const percentage = value / 100;
    const colors = [
        { stop: 0, color: [255, 0, 0] }, // Red
        { stop: 0.05, color: [255, 99, 71] }, // Tomato Red
        { stop: 0.1, color: [255, 165, 0] }, // Orange
        { stop: 0.15, color: [255, 223, 0] }, // Yellow
        { stop: 0.2, color: [154, 205, 50] }, // Yellow-green (olive)
        { stop: 0.3, color: [144, 238, 144] }, // Light green
        { stop: 0.4, color: [0, 255, 255] }, // Cyan
        { stop: 0.5, color: [70, 130, 180] }, // Steel blue
        { stop: 0.6, color: [123, 104, 238] }, // Medium slate blue
        { stop: 0.7, color: [186, 85, 211] }, // Medium orchid (soft purple)
        { stop: 0.8, color: [255, 182, 193] }, // Light pink
        { stop: 0.9, color: [255, 240, 245] }, // Lavender blush (very soft pink)
        { stop: 1, color: [238, 130, 238] }, // Violet
    ];

    // You can use this colors array to create a dynamic gradient, updating the CSS as needed.

    for (let i = 0; i < colors.length - 1; i++) {
    if (percentage >= colors[i].stop && percentage <= colors[i + 1].stop) {
        const ratio =
        (percentage - colors[i].stop) /
        (colors[i + 1].stop - colors[i].stop);
        const r = Math.round(
        colors[i].color[0] +
            ratio * (colors[i + 1].color[0] - colors[i].color[0])
        );
        const g = Math.round(
        colors[i].color[1] +
            ratio * (colors[i + 1].color[1] - colors[i].color[1])
        );
        const b = Math.round(
        colors[i].color[2] +
            ratio * (colors[i + 1].color[2] - colors[i].color[2])
        );
        return `#${((1 << 24) + (r << 16) + (g << 8) + b)
        .toString(16)
        .slice(1)}`;
    }
    }
    return '#000000'; // Fallback color
}

// Update thumb border and log hex color on input change
slider.addEventListener('input', (e) => {
    const value = e.target.value;
    const hexColor = valueToHex(value);
    console.log('Selected Hex Color:', hexColor);
    
    // Get all elements with the class name 'hello'
    const elements = document.querySelectorAll('.image-tile');

    // Loop through each element and change its background color to red
    elements.forEach(element => {
        element.style.backgroundColor = hexColor;
    });
    // Update the custom property to change the border color of the thumb
    e.target.style.setProperty('--thumb-border-color', hexColor);
});