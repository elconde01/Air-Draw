const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth * 0.9;
canvas.height = window.innerHeight * 0.7;

let drawing = false;

function startDraw(e) {
  drawing = true;
  draw(e);
}

function endDraw() {
  drawing = false;
  ctx.beginPath();
}

function draw(e) {
  if (!drawing) return;

  const x = e.clientX || e.touches[0].clientX;
  const y = e.clientY || e.touches[0].clientY;

  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#000';

  ctx.lineTo(x - canvas.offsetLeft, y - canvas.offsetTop);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x - canvas.offsetLeft, y - canvas.offsetTop);
}

canvas.addEventListener('mousedown', startDraw);
canvas.addEventListener('mouseup', endDraw);
canvas.addEventListener('mousemove', draw);

canvas.addEventListener('touchstart', startDraw);
canvas.addEventListener('touchend', endDraw);
canvas.addEventListener('touchmove', draw);