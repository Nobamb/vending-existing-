// 자판기 리스트는 10개까지(기본 6개, 각 개수는 별도, 새로운 값도 받을 수 있음)

let vendingThings = [
  // 1번 콜라 3개 1500원
  {
    id: 1,
    name: "콜라",
    count: 3,
    price: 1500,
  },
  // 2번 사이다 2개 1500원
  {
    id: 2,
    name: "사이다",
    count: 2,
    price: 1500,
  },
  // 3번 포카리스웨트 5개 1200원
  {
    id: 5,
    name: "포카리스웨트",
    count: 5,
    price: 1200,
  },
  // 4번 삼다수 1개 800원
  {
    id: 4,
    name: "삼다수",
    count: 1,
    price: 800,
  },
  // 5번 환타 오렌지맛 2개 1000원
  {
    id: 5,
    name: "환타 오렌지맛",
    count: 2,
    price: 1000,
  },
  // 6번 환타 레몬맛 0개 1000원
  {
    id: 6,
    name: "환타 레몬맛",
    count: 0,
    price: 1000,
  },
];


// export 
export default vendingThings