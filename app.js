document.addEventListener('DOMContentLoaded', () => {

  const secondHand = document.querySelector('.secondHand')
function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds/60)*360);

}
setInterval(setDate, 1000);





})
