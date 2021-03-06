interface errMessageObjectType {
  readonly [key: string]: string;
}

const errMessageObject: errMessageObjectType = {
  "Request failed with status code 401":
    "로그인 유효기간이 만료되었습니다.\n만약 로그인이 되어있다면 다시 로그인해주세요.",
  "Request failed with status code 400": "비밀번호가 잘못되었습니다.",
  "Request failed with status code 403":
    "요청된 리소스에 대한 액세스가 금지되었습니다.",
  "Request failed with status code 404":
    "해당 요청을 찾을 수 없습니다.\n개발자에게 문의해주세요.",
  "Request failed with status code 418":
    "이모지 중복 오류\n개발자에게 문의해주세요.",
  "Request failed with status code 502": "서버 오류\n개발자에게 문의해주세요.",
};

const errHandler: Function = (err: Error) => {
  try {
    alert(errMessageObject[err.message] || err.message);
  } catch (e) {
    alert("알 수 없는 에러가 발생하였습니다." + err.message);
  }
};

export default errHandler;
