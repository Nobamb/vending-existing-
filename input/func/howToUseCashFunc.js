// input값을 받음
import inputDetail from "../inputDetail/inputDetail.js";
// 자판기에서 물건 선택
import vendingChoice from "../choice/vendingChoice.js";
// 돈을 받을 때의 함수
import getMoney from "../getMoney/getMoney.js";
// 어떤 돈을 넣을지에 대한 함수
import paymentTypeToFunc from "./paymentTypeToFunc.js";
// word 추가
import word from "../../data/word/word.js";


// 어떻게 결제를 할 것인지 결정
const howToUseCashFunc = async () => {
  // 선택창 발생
  const howToUseCash = await inputDetail(
    "상품을 구입하고 싶으면 1, 동전으로 교환한다면 2, 취소하고 다시 가고싶다면 3, 현금을 추가로 넣을 것이라면 4번을 선택하십시오"
  );
  // 만약에 상품을 구입할 것이라면 1
  if (howToUseCash === "1") {
    await vendingChoice();
  }
  // 동전으로 교환할 것이라면 2
  else if (howToUseCash === "2") {
    // 동전교환(output때 구현)
    // 임의로 console.log만 구현
    console.log("동전교환");
  }
  // 취소하고 처음으로 갈 것이라면 3
  else if (howToUseCash === "3") {
    // 장바구니 비우기
    containThings = [];

    await getMoney(word.mainWord);
  }
  // 추가로 현금을 넣고싶다면 4
  else if (howToUseCash === "4") {
    // 지불할 현금 종류 결정
    const paymentType = await inputDetail(word.billPaymentWord); 
    await paymentTypeToFunc(paymentType);
  }

  // 그외의 값은 다시 선택하게 하기
  else {
    // getMoney를 실행하도록 지정,
    // 함수로 묶게 될시, 그 함수를 재귀하도록
    await getMoney(word.mainReWord);
  }
};

// export
export default howToUseCashFunc;
