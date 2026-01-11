// containThings, vendingThings 불러옴
import containThings from "../../data/user/containThings.js";
import vendingThings from "../../data/vending/vendingThings.js";

// input 값 받음

const containThingsPlus = (input) => {
    //  vendingThings를 전부 확인
    vendingThings.forEach((element) => {
      // 이름, 혹은 번호가 일치할 시 그리고 containThings에 존재하지 않을 시
      // containThins에 이름, id, 구매할 개수 1 지정
      if (
        element.name === input ||
        element.id === Number(input) ||
        containThings.values().id !== element.id
      ) {
        containThings.push({ name: element.name, id: element.id, count: 1   });
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
    });
}


// export 
export default containThingsPlus