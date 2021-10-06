var count = 3;

var timer = setInterval(() => {
  if (count > 0) {
    console.log(count);
    count--;
  } else {
    console.log('Blast off!');
    clearInterval(timer);
  }
}, 1000);
