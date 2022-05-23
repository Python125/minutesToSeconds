function Convert(num) {
  s = Math.floor(num * 60);
  h = num % 60;
  return(s + " seconds").toString();

}

Convert(60);
