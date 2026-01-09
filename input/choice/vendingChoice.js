// vendingThings 가져옴

import vendingThings from "../../data/vending/vendingThings.js"

// 상품을 선택할 수 있음
// 상품관련해서 선택창을 띄우도록 함
// 선택창은 vendingThing를 순회하여 보여줌
// 그리고 입력을 받고,
// 버튼을 누르면 그 물건을 뽑을 수 있음
// 버튼을 누르기 전에 취소를 한다면 처음으로 돌아감
// main에서 실행할 때와 같이


const vendingChoice = () => {
    // vendingThings의 값들을 하나하나 출력
    vendingThings.forEach((element)=>{

        console.log(element.id, element.name)

    })


}

// export
export default vendingChoice