// selected all html id
const getHour = document.getElementById("hours");
const getMinuets = document.getElementById("minuets");
const getSecond = document.getElementById("second");

// window onload
window.onload = function () {
  mainFun();
};
// mainFun function
function mainFun() {
  function setTimeFun() {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }

    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    getHour.innerHTML = `${h} :`;
    getMinuets.innerHTML = `${m} :`;
    getSecond.innerHTML = `${s} `;
  }
  setInterval(() => {
    setTimeFun();
  }, 1000);
}
