
// 데이터들 받음
// moneydata
import moneyData from "../../data/user/moneyData.js";
// word
import word from "../../data/word/word.js";
import showAllUserMoney from "./showAllUserMoney.js";

// 받은 값에 따라 각자 다른 기능 수행
const paymentTypeToFunc = (paymentType) => {
    
    // 1번이면 moneyData에서 money_50000 1감소
    if (paymentType === "1") {
      console.log("50000원 지불");
      moneyData[0].count -=1
    }
    // 2번이면 moneyData에서 money_10000 1감소
    else if (paymentType === "2") {
      console.log("10000원 지불");
      moneyData[1].count -=1
    }
    // 3번이면 moneyData에서 money_5000 1감소
    else if (paymentType === "3") {
      console.log("5000원 지불");
      moneyData[2].count -=1
    }
    // 4번이면 moneyData에서 money_1000 1감소
    else if (paymentType === "4") {
      console.log("1000원 지불");
      moneyData[3].count -=1
    }
    // 5번이면 moneyData에서 money_500 1감소
    else if (paymentType === "5") {
      console.log("500원 지불");
      moneyData[4].count -=1
    }
    // 6번이면 moneyData에서 money_100 1감소
    else if (paymentType === "6") {
      console.log("100원 지불");
      moneyData[5].count -=1
    }
    // 7번이면 처음으로 되돌아 감
    else if (paymentType === "7") {
      getMoney(word.mainWord);
    } else {
      console.log("제대로 된 값을 입력하세요");
    }

    // 유저의 전체 현금 데이터 보여줌
    showAllUserMoney()

}

export default paymentTypeToFunc