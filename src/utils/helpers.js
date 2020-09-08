export const calcTime = time => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
}


export const convertMoney = money => {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  });

  return formatter.format(money);
}


export const calcVote = (score, arr1, arr2) => {
  const vote = Math.round(score/2);
  const reminder = 5 - vote;

  for( let i = 0; i < vote; i++){
    arr1.push("1");
  }

  for( let j = 0; j < reminder; j++){
    arr2.push("1");
  }

}
