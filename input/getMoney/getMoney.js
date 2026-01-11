// 1. 돈 또는 카드를 입력받는다.
//     1. 돈의 경우, 동전은 100원, 500원 단위로 받고 지폐는 1000원, 5000원, 10000원, 50000원을 받음
//     2. 돈이 입력될 시, 일정량 이상의 돈을 받으면 잔돈을 거슬러준다.
//     3. 카드가 입력되면 물건을 선택한 후 그 값에 따라 현금을 지불한다.
//     4. 돈 또는 카드의 금액이 부족하면, 돈은 받은 금액을 환불하고, 카드는 취소된다.

// 입력 관련 함수
import inputDetail from "../inputDetail/inputDetail.js";
// word 내용 import
import word from "../../data/word/word.js";
// payment의 종류에 따라 기능 수행
import paymentTypeToFunc from "../func/paymentTypeToFunc.js";
// 자판기 관련 데이터
import vendingData from "../../data/vending/vendingData.js";
import vendingChoice from "../choice/vendingChoice.js";

// 3. 지폐를 입력 받았을 시, 500원 동전으로 반환도 가능하도록 설정

// getMoney 설정
// 카드 혹은 지폐를 받도록 함
// inputDetail을 받기 위해 비동기로
const getMoney = async (payment) => {
  // 만약에 카드 계산시
  if (payment === "1") {
    console.log("카드계산");
  }
  // 현금 계산시
  else if (payment === "2") {
    // 지불할 현금 종류 결정
    const paymentType = await inputDetail(word.billPaymentWord);
    // 1번이면 moneyData에서 money_50000 1감소
    // 2번이면 moneyData에서 money_10000 1감소
    // 3번이면 moneyData에서 money_5000 1감소
    // 4번이면 moneyData에서 money_1000 1감소
    // 5번이면 moneyData에서 money_500 1감소
    // 6번이면 moneyData에서 money_100 1감소
    // 7번이면 처음 결제방식 선택으로 가기(getMoney 다시 실행)
    // 실행
    await paymentTypeToFunc(paymentType);

    // 만약에 지폐를 받았을 시,
    // 1,2,3,4 입력시
    // 동전도 교환할 수 있도록 함
    if (
      payment === "1" ||
      payment === "2" ||
      payment === "3" ||
      payment === "4"
    ) {
      vendingData.BillToCoinCheck = true;
    }

    // 선택창 발생
    const howToUseCash = await inputDetail(
      "상품을 구입하고 싶으면 1, 동전으로 교환한다면 2, 처음으로 가고싶다면 3, 다시 선택할 것이라면 4번을 선택하십시오"
    );
    // 만약에 상품을 구입할 것이라면 1
    if (howToUseCash === "1") {
      await vendingChoice();
    }
    // 동전으로 교환할 것이라면 2
    else if (howToUseCash === "2") {
      // 동전교환(output때 구현)
      // 임의로 console.log만 구현
      console.log("동전교환")
    }
    // 취소하고 처음으로 갈 것이라면 3
    else if(howToUseCash === "3"){
      await getMoney(word.mainWord)
    }
    // 그외의 값은 다시 선택하게 하기
    else{
      // getMoney를 실행하도록 지정,
      // 함수로 묶게 될시, 그 함수를 재귀하도록
      await getMoney(word.mainReWord)
    }

    // // 1번이면 moneyData에서 money_50000 1감소
    // if (paymentType === "1") {
    //   console.log("50000원 지불");
    //   moneyData.money_50000 -= 1;
    // }
    // // 2번이면 moneyData에서 money_10000 1감소
    // else if (paymentType === "2") {
    //   console.log("10000원 지불");
    //   moneyData.money_10000 -= 1;
    // }
    // // 3번이면 moneyData에서 money_5000 1감소
    // else if (paymentType === "3") {
    //   console.log("5000원 지불");
    //   moneyData.money_5000 -= 1;
    // }
    // // 4번이면 moneyData에서 money_1000 1감소
    // else if (paymentType === "4") {
    //   console.log("1000원 지불");
    //   moneyData.money_1000 -= 1;
    // }
    // // 5번이면 moneyData에서 money_500 1감소
    // else if (paymentType === "5") {
    //   console.log("500원 지불");
    //   moneyData.money_500 -= 1;
    // }
    // // 6번이면 moneyData에서 money_100 1감소
    // else if (paymentType === "6") {
    //   console.log("100원 지불");
    //   moneyData.money_100 -= 1;
    // }
    // // 7번이면 처음으로 되돌아 감
    // else if (paymentType === "7") {
    //   getMoney(word.mainWord);
    // } else {
    //   console.log("제대로 된 값을 입력하세요");
    // }
  }
  // 다른 값을 입력시
  else {
    // 다시 입력하라고 하고 재귀 실행
    const input = await inputDetail(word.mainReWord);
    await getMoney(input);
  }
};

// export
export default getMoney;
