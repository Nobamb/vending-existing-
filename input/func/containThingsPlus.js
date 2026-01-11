// containThings, vendingThings 불러옴
import containThings from "../../data/user/containThings.js";
import vendingThings from "../../data/vending/vendingThings.js";
// inputDetail 가져오기
import inputDetail from "../inputDetail/inputDetail.js";

// input 값 받음

const containThingsPlus = async () => {
  // 입력을 받음
  // input = 입력("원하는 상품을 고르시오, 이름 혹은 번호")
  const input = await inputDetail("원하는 상품을 고르시오, 이름 혹은 번호");

  //  vendingThings를 전부 확인
  vendingThings.forEach((element) => {
    // 이름, 혹은 번호가 일치할 시 그리고 containThings에 존재하지 않을 시
    // containThins에 이름, id, 구매할 개수 1 지정
    if (
      element.name === input ||
      element.id === Number(input) ||
      containThings.values().id !== element.id
    ) {
      containThings.push({ name: element.name, id: element.id, count: 1 });
    }
    // 이름, 혹은 번호가 일치하지만 containThings에 존재할 시,
    else if (
      element.name === input ||
      element.id === Number(input) ||
      containThings.values().id === element.id
    ) {
      // containThings에서 id가 일치하는 상품의 count 1 증가
      containThings.values().count += 1;
    }
    else{
      // 그 외의 값일 때
      // 재귀적으로 함수 다시 실행
      console.log("다시 입력해주세요")
      containThingsPlus()
    }
  });
};

// export
export default containThingsPlus;
