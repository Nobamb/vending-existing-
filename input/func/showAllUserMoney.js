// user의 전체 money 데이터 가져옴
import moneyData from "../../data/user/moneyData.js"

// user의 전체 money 데이터를 보여줌
const showAllUserMoney = () => {

    // moneyData하나씩 출력
    for(const moneytype of moneyData){
        // 값을 모두 출력
        console.log(moneytype)

    }

}
// export 
export default showAllUserMoney