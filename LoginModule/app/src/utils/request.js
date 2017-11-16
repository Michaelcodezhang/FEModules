export function login(body) {
    const req = new Request('http://oj.marklux.cn/user/login', {
    method: 'POST',
    headers : {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(body)
  })
  return req
}
