function checkCashRegister(price, cash, cid) {
  let obj;
  let change = cash - price;
  let maxChange = cid.reduce((sum, i) => (sum += i[1]), 0).toFixed(2);

  if (maxChange < change)
    obj = {
      status: "INSUFFICIENT_FUNDS",
      change: [],
    };

  if (maxChange == change)
    obj = {
      status: "CLOSED",
      change: cid,
    };

  if (maxChange > change) {
    let newChange = [];
    let aux = 0;

    if (change >= 100 && cid[8 - aux][1] > 0) {
      let qt = cid[8 - aux][1];
      let needed = Math.floor(change / 100) * 100;
      if (qt > needed) qt = needed;
      newChange.push(["ONE HUNDRED", qt]);
      change -= qt;
    }
    aux++;
    if (change >= 20 && cid[8 - aux][1] > 0) {
      let qt = cid[8 - aux][1];
      let needed = Math.floor(change / 20) * 20;
      if (qt > needed) qt = needed;
      newChange.push(["TWENTY", qt]);
      change -= qt;
    }
    aux++;
    if (change >= 10 && cid[8 - aux][1] > 0) {
      let qt = cid[8 - aux][1];
      let needed = Math.floor(change / 10) * 10;
      if (qt > needed) qt = needed;
      newChange.push(["TEN", qt]);
      change -= qt;
    }
    aux++;
    if (change >= 5 && cid[8 - aux][1] > 0) {
      let qt = cid[8 - aux][1];
      let needed = Math.floor(change / 5) * 5;
      if (qt > needed) qt = needed;
      newChange.push(["FIVE", qt]);
      change -= qt;
    }
    aux++;
    if (change >= 1 && cid[8 - aux][1] > 0) {
      let qt = cid[8 - aux][1];
      let needed = Math.floor(change / 1) * 1;
      if (qt > needed) qt = needed;
      newChange.push(["ONE", qt]);
      change -= qt;
    }
    aux++;
    if (change >= 0.25 && cid[8 - aux][1] > 0) {
      let qt = cid[8 - aux][1];
      let needed = Math.floor(change / 0.25) * 0.25;
      if (qt > needed) qt = needed;
      newChange.push(["QUARTER", qt]);
      change -= qt;
    }
    aux++;
    if (change >= 0.1 && cid[8 - aux][1] > 0) {
      let qt = cid[8 - aux][1];
      let needed = Math.floor(change / 0.1) * 0.1;
      if (qt > needed) qt = needed;
      newChange.push(["DIME", qt]);
      change -= qt;
    }
    aux++;
    if (change >= 0.05 && cid[8 - aux][1] > 0) {
      let qt = cid[8 - aux][1];
      let needed = Math.floor(change / 0.05) * 0.05;
      if (qt > needed) qt = needed;
      newChange.push(["NICKEL", qt]);
      change -= qt;
    }
    aux++;
    if (change >= 0.01 && cid[8 - aux][1] > 0) {
      let qt = cid[8 - aux][1];
      let needed = parseFloat(change.toFixed(2));
      if (qt > needed) qt = needed;
      newChange.push(["PENNY", qt]);
      change -= qt;
    }

    if (change > 0) {
      obj = {
        status: "INSUFFICIENT_FUNDS",
        change: [],
      };
    } else {
      obj = {
        status: "OPEN",
        change: newChange,
      };
    }
  }

  return obj;
}
