// word, moneyTovending, showAllUserMoney import
import word from "../../data/word/word.js";
import moneyToVending from "./moneyToVending.js";
import showAllUserMoney from "./showAllUserMoney";


// moneydata에서 count가 1일때를 점검
// index, word를 매개변수로 받음
// index는 moneyData에 있는 데이터의 순서를 받음
// successWord는 count가 1을 만족할 때 출력될 문자
const moneyCountCheck = async (index, successWord) => {
  // 만약에 현금의 수가 1 이상일 때
  if (moneyData[index].count >= 1) {
    console.log(successWord);
    // 값 교환
    moneyToVending(0);
    // moneyData[0].count -= 1;
    // //   자판기가 받을 돈 증가
    // vendingMoney[0].count +=1

    // 유저의 전체 현금 데이터 보여줌
    showAllUserMoney();
  }
  // 아니라면 지불할 수 없다며
  // 터미널에 띄우기
  // 그리고 원상태로 되돌아가기(재귀)
  else {
    console.log("현재 현금이 존재하지 않습니다. 다시 시도해주세요");
    // 원하는 현금 투입
    const paymentType = await inputDetail(word.billPaymentWord);
    await paymentTypeToFunc(paymentType);
  }
};

// export
export default moneyCountCheck