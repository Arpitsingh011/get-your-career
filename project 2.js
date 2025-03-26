
document.addEventListener('DOMContentLoaded', function () {
const follower = document.getElementById('mouse-follower');

  document.addEventListener('mousemove', function (e) {
    const x = e.clientX;
    const y = e.clientY;

    follower.style.left = x + 'px';
    follower.style.top = y + 'px';
  });
});
