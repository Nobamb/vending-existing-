// getMoney import 받기
import getMoney from "./input/getMoney/getMoney.js";
// inputDetail 테스트
import inputDetail from "./input/inputDetail/inputDetail.js";


// inputDetail 비동기화시켰기에 await 붙이기
const input = await inputDetail("원하는 값을 입력하시오")

// getMoney 테스트
getMoney(input)