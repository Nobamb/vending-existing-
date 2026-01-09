// 1. 돈 또는 카드를 입력받는다.
//     1. 돈의 경우, 동전은 100원, 500원 단위로 받고 지폐는 1000원, 5000원, 10000원, 50000원을 받음
//     2. 돈이 입력될 시, 일정량 이상의 돈을 받으면 잔돈을 거슬러준다.
//     3. 카드가 입력되면 물건을 선택한 후 그 값에 따라 현금을 지불한다.
//     4. 돈 또는 카드의 금액이 부족하면, 돈은 받은 금액을 환불하고, 카드는 취소된다.

// 입력 관련 함수
import inputDetail from "../inputDetail/inputDetail.js";
// word 내용 import
import word from "../../data/word/word.js";


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
    const payment = inputDetail(
      word.billPaymentWord
    );
    // 1번이면 moneyData에서 money_50000 1감소
    // 2번이면 moneyData에서 money_10000 1감소
    // 3번이면 moneyData에서 money_5000 1감소
    // 4번이면 moneyData에서 money_1000 1감소
    // 5번이면 moneyData에서 money_500 1감소
    // 6번이면 moneyData에서 money_100 1감소
    // 7번이면 처음 결제방식 선택으로 가기(getMoney 다시 실행)




  }
  // 다른 값을 입력시
  else {
    // 다시 입력하라고 하고 재귀 실행
    const input = await inputDetail(word.mainReWord);
    getMoney(input);
  }
};

// export
export default getMoney;
