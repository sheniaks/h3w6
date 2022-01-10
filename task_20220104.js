//TASK 1
function calculatePaintCans(L, W, H) {
    if (L > 0 && L < 1000 && W > 0 && W < 1000 && H > 0 && H < 1000) {
      console.log(`The square is ${L * W * H} metres.`);
      console.log(`${Math.ceil(((L + W) * H) * 2  / 16)} cans required.`);
    } else
      console.log(
        "L,W,H should be in range from 0 to 1000. Please check function params."
      );
  }
//   calculatePaintCans(1, 1, 1);
//   calculatePaintCans(3, 3, 16);
//   calculatePaintCans(0, 3, 16);

//TASK 2
function airToGold(A1, A2, A3, B1, B2, B3){    
    if (A1 > 0 && A1 < 100 && A2 > 0 && A2 < 100 && A3 > 0 && A3 < 100 && B1 > 0 && B1 < 100 && B2 > 0 && B2 < 100 && B3 > 0 && B3 < 100) {
        let arr1 = [A1, A2, A3];
        arr1.sort(function(a, b) { return b - a; });
        let arr2 = [B1, B2, B3];
        arr2.sort(function(a, b) { return b - a; });
        console.log(`${arr1[0]*arr2[0]+arr1[1]*arr2[1]+arr1[2]*arr2[2]} rubles total profit.`)}
        else console.log(
            "A1, A2, A3, B1, B2, B3 should be in range from 0 to 100. Please check function params."
          );
}
// airToGold(0, 2, 1, 6, 5, 7)
// airToGold(3, 2, 1, 6, 5, 7)
// airToGold(1, 2, 10, 10, 5, 1)

//TASK 3
function correctTicketNumber(N) {
    const nulls = ['000000', '00000', '0000', '000', '00', '0', ''];
    return `${ nulls[String(N).length] }${ N }`;
}
function luckyTicket(N) {
  let ourTicket = correctTicketNumber(N);
  let sumFirstThree =
    Number(ourTicket[0]) + Number(ourTicket[1]) + Number(ourTicket[2]);
  let sumLastThree =
    Number(ourTicket[3]) + Number(ourTicket[4]) + Number(ourTicket[5]);
  if (N > 0 && N < 10 ** 6) {
    if (sumFirstThree == sumLastThree) {
      console.log(`${ourTicket} - YES`);
    } else console.log(`${ourTicket} - NO`);
  } else console.log(`Ticket number is incorrect`);
}
// luckyTicket(1);
// luckyTicket(8224);
// luckyTicket(111111);
// luckyTicket(134404);