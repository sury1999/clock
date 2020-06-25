document.addEventListener('DOMContentLoaded', () => {

setInterval(setClock,1000)
setInterval(setClock2,1000)

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock()
{
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation (secondHand, secondsRatio);
  setRotation (minuteHand, minutesRatio);
  setRotation (hourHand, hoursRatio);
}

function setRotation(element,rotationRatio)
{
  element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();

const hourHand2 = document.querySelector('[data-hour2-hand2]');
const minuteHand2 = document.querySelector('[data-minute2-hand2]');
const secondHand2 = document.querySelector('[data-second2-hand2]');

function setClock2()
{
  const currentDate2 = new Date();
  const secondsRatio2 = currentDate2.getSeconds() / 60;
  const minutesRatio2 = (secondsRatio2 + currentDate2.getMinutes()) / 60;
  const hoursRatio2 = (minutesRatio2 + currentDate2.getHours()) / 12;
  setRotation2 (hourHand2, hoursRatio2);
  setRotation2 (minuteHand2, minutesRatio2);
  setRotation2 (secondHand2, secondsRatio2);

  //trying to colour individual seconds green
  var seconds = new Date().getSeconds();
  var y = seconds;
  document.getElementsByClassName('minutes')[seconds].className = "color-green";
  // = "<span style = 'color: red;'>y</span>";
  console.log(document.getElementsByClassName('minutes')[y].innerHTML);

}

function setRotation2(element,rotationRatio2)
{
  element.style.setProperty('--rot', rotationRatio2 * 360);
}



setClock2();


})
