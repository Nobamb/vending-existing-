// user의 전체 money 데이터 가져옴
import moneyData from "../../data/user/moneyData.js";

// user의 전체 money 데이터를 보여줌
const showAllUserMoney = () => {
  //   실행할 때마다 유저의 전체 현금 데이터라고 알려줌
  console.log("남은 돈 상태입니다.");
  // moneyData하나씩 출력
  moneyData.forEach((element) => {
    console.log(element);
  });

  // moneyData하나씩 출력

  // for(const i in moneyData){
  // // 값을 모두 출력
  //     console.log(moneyData[i])

  // }
};
// export
export default showAllUserMoney;
