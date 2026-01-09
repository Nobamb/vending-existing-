// vendingThings 가져옴

import vendingThings from "../../data/vending/vendingThings.js";
// input을 받도록 함
import inputDetail from "../inputDetail/inputDetail.js";

// 상품을 선택할 수 있음
// 상품관련해서 선택창을 띄우도록 함
// 선택창은 vendingThing를 순회하여 보여줌
// 그리고 입력을 받고,
// 버튼을 누르면 그 물건을 뽑을 수 있음
// 버튼을 누르기 전에 취소를 한다면 처음으로 돌아감
// main에서 실행할 때와 같이

const vendingChoice = async () => {
  // vendingThings의 값들을 하나하나 출력
  vendingThings.forEach((element) => {
    console.log(element.id, element.name);
  });

  // 입력을 받음
  // input = 입력("원하는 상품을 고르시오")
  const input = await inputDetail("원하는 상품을 고르시오")


  // 버튼 누를지, 취소할 지 결정
  // buttonOrCancle = 입력("버튼을 누르겠습니까? 1. 클릭, 2. 취소")
  const buttonOrCancle = await inputDetail("버튼을 누르겠습니까? 1. 클릭, 2. 취소")


  // 버튼을 눌렀을 때
  // 만약에 투입한 금액이 부족하면
  // 잔돈 반환하고 처음부터 다시
  // 투입한 금액 이상일때
  // 물건을 가져올 수 있으며,
  // 해당 금액보다 큰 돈을 넣었다면 거스름돈 반환(500/100원단위)
  // 반환해 줄 금액이 부족하다면 환불

  //   취소를 했다면
  // 처음으로 되돌아감
};

// export
export default vendingChoice;
