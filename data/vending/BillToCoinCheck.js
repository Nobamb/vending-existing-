// 클래스의 static으로 전달
// 순수 변수로 하면 
// 참조되는 값이 됨
// 데이터를 공유해야만 하기 때문
class BillToCoinCheck{

    // 기본값은 false
    // 지폐가 존재하면 true
    static BillToCoinCheck = false

}

// export 
export default BillToCoinCheck