"console"; "integratedTerminal";
function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    let result = {
        status: "",
        change: []
      }
    result.change = cid; 

    // Here is your change, ma'am.
    let cashInDrawer = cid
      .map(a => a[1])
      .reduce((a, b) => (a + b), 0);
      cashInDrawer = Math.round(cashInDrawer*100)/100;
    console.log(cashInDrawer);
    console.log(change);
    if (change > cashInDrawer) {
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
        return result;
      }else if(change == cashInDrawer) {
        result.status = "CLOSED";
        return result;
      }
      let testArr= cid;
      testArr = testArr.reverse();
      console.log(cid);
      let moneyLeft = testArr.map(a => (a[1]));
      console.log(moneyLeft);
      testArr.map(a =>(a[1]=0));
      console.log(testArr);  
      let testArr2 = [];
      let moneyArr = [100, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];
      console.log(moneyLeft);
      for(let index = 0; index < 9;){
        if(moneyArr[index] > change) {
          index++;
        }
        while(moneyArr[index] <= change) {             
          testArr[index][1] += moneyArr[index];
          moneyLeft[index] -= moneyArr[index];
          moneyLeft[index] = Math.round(moneyLeft[index]*100)/100;
          change -= moneyArr[index];
          change = Math.round(change*100)/100;
          if (moneyLeft[index] <= 0){
           index++;
          }
        }
        index++;
      }
      change = Math.round(change*100)/100;
      change = Math.round(change*100)/100;
      
      
      //console.log(change);
      if (change > 0) {
        console.log("ITS ME");
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
        return result;
      }
      testArr2 = testArr.filter(a => (a[1]!=0));
      console.log(testArr2);
      result.status = "OPEN";
      result.change = testArr2;
      return result;  
}
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));