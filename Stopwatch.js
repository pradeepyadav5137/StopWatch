const start = document.querySelector("button:first-of-type")
const stop = document.querySelector("button:nth-of-type(2)")
const pause = document.querySelector("button:nth-of-type(3)")

const spans = document.querySelectorAll("span")

let sec, mint, hour;

start.onclick = function () {
  start.disabled = true
  stop.disabled = false
  pause.disabled = false

  //Type casting(type conversion)

  sec = setInterval(() => {
    spans[2].innerHTML = appendZero(Number(spans[2].innerHTML) + 1);



    function appendZero(Zero) {
      if (spans[2].innerHTML < 9)
        return "0" + Zero;
      if (spans[2].innerHTML >= 59) {
        return "00";

      }
      else
        return Zero
    }

  }, 1000)

  mint = setInterval(() => {
    spans[1].innerHTML = appendZero(Number(spans[1].innerHTML) + 1);



    function appendZero(Zero) {
      if (spans[1].innerHTML < 9)
        return "0" + Zero;
      if (spans[1].innerHTML >= 59) {
        return "00";

      }
      else
        return Zero
    }

  }, 60000)

  hour = setInterval(() => {
    spans[0].innerHTML = appendZero(Number(spans[0].innerHTML) + 1);



    function appendZero(Zero) {
      if (spans[0].innerHTML < 9)
        return "0" + Zero;
      if (spans[0].innerHTML >= 59) {
        return "00";

      }
      else
        return Zero
    }

  }, 3600000)

}

stop.onclick = function () {
  start.disabled = false
  stop.disabled = true
  pause.disabled = false


  clearInterval(sec);
  clearInterval(mint);
  clearInterval(hour);

}
  









// pause.onclick = function () {
//   start.disabled = false
//   stop.disabled = false
//   pause.disabled = false  
// }








// return  clearInterval(min);
//   return clearInterval(hour);







  

