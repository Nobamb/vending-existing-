// 문구 import받기
import word from "./data/word/word.js";
// getMoney import 받기
import getMoney from "./input/getMoney/getMoney.js";
// inputDetail 테스트
import inputDetail from "./input/inputDetail/inputDetail.js";


// inputDetail 비동기화시켰기에 await 붙이기
const input = await inputDetail(word.mainWord)

// getMoney 테스트
getMoney(input)