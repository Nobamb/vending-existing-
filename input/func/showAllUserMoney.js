// user의 전체 money 데이터 가져옴
import moneyData from "../../data/user/moneyData.js";

// user의 전체 money 데이터를 보여줌
const showAllUserMoney = () => {
  // 남은 돈의 총합을 알려줄 변수
  let totalMoney = 0;

  //   실행할 때마다 유저의 전체 현금 데이터라고 알려줌
  console.log("남은 돈 상태입니다.");
  // moneyData하나씩 출력
  moneyData.forEach((element) => {
    console.log(element);
    // element의 count x value의 값을
    // totalMoney의 값에 더함
    totalMoney += element.count * element.value
  });

  //  전체 남은 금액을 알려줌
  console.log("남은 돈 상태입니다.",totalMoney);

  // moneyData하나씩 출력

  // for(const i in moneyData){
  // // 값을 모두 출력
  //     console.log(moneyData[i])

  // }
};
// export
export default showAllUserMoney;
