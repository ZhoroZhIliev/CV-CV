
const divs = document.querySelectorAll('div');
divs.forEach(div => {
  div.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'rgba(185, 183, 145, 0.8)';
  });
  div.addEventListener('mouseout', function() {
    this.style.backgroundColor = 'rgba(185, 183, 145, 0.662)';
  });
});
