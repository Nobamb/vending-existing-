// 장바구니 containThings
import containThings from "../../data/user/containThings.js";
// vendingThings 가져옴
import vendingThings from "../../data/vending/vendingThings.js";
// word 가져옴
import word from "../../data/word/word.js";
import containThingsPlus from "../func/containThingsPlus.js";
// 돈을 받는 함수(처음으로 되돌아감)
import getMoney from "../getMoney/getMoney.js";
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

  // // 입력을 받음
  // // input = 입력("원하는 상품을 고르시오, 이름 혹은 번호")
  // const input = await inputDetail("원하는 상품을 고르시오, 이름 혹은 번호");


  // containThingPlus 함수 사용
  containThingsPlus()

  // //  vendingThings를 전부 확인
  // vendingThings.forEach((element) => {
  //   // 이름, 혹은 번호가 일치할 시 그리고 containThings에 존재하지 않을 시
  //   // containThins에 이름, id, 구매할 개수 1 지정
  //   if (
  //     element.name === input ||
  //     element.id === Number(input) ||
  //     containThings.values().id !== element.id
  //   ) {
  //     containThings.push({ name: element.name, id: element.id, count: 1   });
  //   }
  //   // 이름, 혹은 번호가 일치하지만 containThings에 존재할 시,
  //   else if (
  //     element.name === input ||
  //     element.id === Number(input) ||
  //     containThings.values().id === element.id
  //   ) {
  //     // containThings에서 id가 일치하는 상품의 count 1 증가
  //     containThings.values().count += 1;
  //   }
  // });

  // 버튼 누를지, 취소할 지 결정
  // buttonOrCancle = 입력("버튼을 누르겠습니까? 1. 클릭, 2. 취소")
  const buttonOrCancle = await inputDetail(
    "버튼을 누르겠습니까? 1. 클릭, 2. 취소"
  );

  // 버튼을 눌렀을 때
  if (buttonOrCancle == "1") {
    // 만약에 투입한 금액이 부족하면
    // 잔돈 반환하고 처음부터 다시
    // 투입한 금액 이상일때
    // 물건을 가져올 수 있으며, 
    // 해당 금액보다 큰 돈을 넣었다면 거스름돈 반환(500/100원단위)
    // 반환해 줄 금액이 부족하다면 환불
  }

  //   취소를 했다면
  else if (buttonOrCancle == "2") {
    // 처음으로 되돌아감
    getMoney(word.mainWord);
  }
  //   그 외의 값을 입력시,
  // 다시 입력하라고 하면서 재귀동작함
  else {
    // 다시 입력해주세요라고 함
    console.log("다시 입력해주세요");
    // 함수 재귀
    vendingChoice();
  }
};

// export
export default vendingChoice;
