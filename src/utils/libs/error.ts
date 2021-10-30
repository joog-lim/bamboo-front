const errHandler = (err: Error) => {
  switch (err.message) {
    case "Request failed with status code 401":
      alert(
        "로그인이 필요한 서비스입니다.\n만약 로그인이 되어있다면 다시 로그인해주세요."
      );
      break;
    case "Request failed with status code 400":
      alert("비밀번호가 잘못되었습니다.");
      break;
    case "Request failed with status code 418":
      alert("이모지 중복 오류\n양심에 손을 얹고 무언가를\n건드리지않았는지 생각해봅시다.");
      break;
    default:
      alert("알 수 없는 에러가 발생하였습니다." + err.message);
      break;
  }
};

export default errHandler;
