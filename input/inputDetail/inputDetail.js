// 값을 입력받는 함수(node.js상에서)

import readline from "node:readline";

// inputDetail
// 입력값으로 문구를 받음
const inputDetail = (word) => {
    const rl = readline.createInterface({
      // 프로그램의 입력을 받음
      input: process.stdin,
      // 프로그램의 출력을 줌
      output: process.stdout,
    });
    
    // 질문을 함(질문하면서 값도 받음)
    const question = rl.question(word, (answer)=>{

        // 답을 미리 출력해줌
        console.log(answer)
        // 종료
        rl.close()
    })
    
    // 값을 출력
    return question
}

// export
export default inputDetail
