// 값을 입력받는 함수(node.js상에서)

import readline from "node:readline/promises";

// inputDetail
// 입력값으로 문구를 받음
const inputDetail = async (word) => {
    const rl = readline.createInterface({
      // 프로그램의 입력을 받음
      input: process.stdin,
      // 프로그램의 출력을 줌
      output: process.stdout,
    });

    // 시도 
    try{
        // 질문을 함(질문하면서 값도 받음)
        const question = await rl.question(word, (answer)=>{
            // 답을 미리 출력해줌
            console.log(answer)
        })
        
        // 값을 출력
        return question

    }

    finally{
        
        // rl 닫아줌, 프로그램 끝내기
        // 닫아주지 않으면 프로그램이 영원히 끝나지 않게 됨
        rl.close()

    }
    
    
}

// export
export default inputDetail
