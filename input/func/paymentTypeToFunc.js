// 데이터들 받음
// word
import word from "../../data/word/word.js";
// 사용자의 현금을 모두 보여줌
import showAllUserMoney from "./showAllUserMoney.js";
// 사용자와 자판기의 현금 교환
import moneyToVending from "./moneyToVending.js";
// getMoney불러옴
import getMoney from "../getMoney/getMoney.js";

// 받은 값에 따라 각자 다른 기능 수행
const paymentTypeToFunc = async (paymentType) => {
  // 1번이면 moneyData에서 money_50000 1감소
  if (paymentType === "1") {
    console.log("50000원 지불");
    // 값 교환
    moneyToVending(0);
    // moneyData[0].count -= 1;
    // //   자판기가 받을 돈 증가
    // vendingMoney[0].count +=1

    // 유저의 전체 현금 데이터 보여줌
    showAllUserMoney();
  }
  // 2번이면 moneyData에서 money_10000 1감소
  else if (paymentType === "2") {
    console.log("10000원 지불");
    // moneyData[1].count -= 1;
    // 값 교환
    moneyToVending(1);

    // 유저의 전체 현금 데이터 보여줌
    showAllUserMoney();
  }
  // 3번이면 moneyData에서 money_5000 1감소
  else if (paymentType === "3") {
    console.log("5000원 지불");
    // moneyData[2].count -= 1;
    // 값 교환
    moneyToVending(2);

    // 유저의 전체 현금 데이터 보여줌
    showAllUserMoney();
  }
  // 4번이면 moneyData에서 money_1000 1감소
  else if (paymentType === "4") {
    console.log("1000원 지불");
    // moneyData[3].count -= 1;
    // 값 교환
    moneyToVending(3);

    // 유저의 전체 현금 데이터 보여줌
    showAllUserMoney();
  }
  // 5번이면 moneyData에서 money_500 1감소
  else if (paymentType === "5") {
    console.log("500원 지불");
    // moneyData[4].count -= 1;
    // 값 교환
    moneyToVending(4);

    // 유저의 전체 현금 데이터 보여줌
    showAllUserMoney();
  }
  // 6번이면 moneyData에서 money_100 1감소
  else if (paymentType === "6") {
    console.log("100원 지불");
    // moneyData[5].count -= 1;
    // 값 교환
    moneyToVending(5);

    // 유저의 전체 현금 데이터 보여줌
    showAllUserMoney();
  }
  // 7번이면 처음으로 되돌아 감
  else if (paymentType === "7") {
    await getMoney(word.mainWord);
  } else {
    // 그 외는 다시 입력하라면서 재귀
    await paymentTypeToFunc(word.billPaymentWord);
  }
};

export default paymentTypeToFunc;
