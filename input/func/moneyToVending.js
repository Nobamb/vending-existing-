// data받기
// 사용자 money 데이터
import moneyData from "../../data/user/moneyData.js";
// 자판기 money 데이터
import vendingMoney from "../../data/vending/vendingMoney.js";

// moneyData에 있는 현금 데이터값을
// vendingMoney로 교환
const moneyToVending = (index) => {
  // 사용자가 가지고 있는 돈 감소
  moneyData[index].count -= 1;
  //   자판기가 받을 돈 증가
  vendingMoney[index].count += 1;
};

// export
export default moneyToVending;
