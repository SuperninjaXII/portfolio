window.addEventListener("DOMContentLoaded", () => {
  // Select the existing canvas with the class 'grid'
  const canvas = document.querySelector('.grid');
  const ctx = canvas.getContext('2d');

  // Set the canvas size to match its container or the viewport
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Grid line properties
  const gridSize = 50;  // Distance between each grid line

  // Draw vertical lines (pen-like effect)
  for (let x = 0; x <= canvas.width; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);               // Start at top of the canvas
    ctx.lineTo(x, canvas.height);    // Draw line to the bottom
    ctx.strokeStyle = 'rgba(0, 0, 0, 1)';  // Pen-like color (slightly faded black)
    ctx.lineWidth = 0.5;               // Thin pen-like line
    ctx.stroke();
    ctx.closePath();
  }

  // Draw horizontal lines
  for (let y = 0; y <= canvas.height; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);               // Start at the left of the canvas
    ctx.lineTo(canvas.width, y);    // Draw line to the right
    ctx.strokeStyle = 'rgba(0, 0, 0, 1)';  // Pen-like color (slightly faded black)
    ctx.lineWidth = 0.5;               // Thin pen-like line
    ctx.stroke();
    ctx.closePath();
  }

  // Create a gradient for fading effect (from left to right)
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0); // From left to right
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');  // Fully transparent on the left
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0.3)'); // Slight fade near the center
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');   // Fully opaque white on the right

  // Apply the gradient for the fade effect
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});
