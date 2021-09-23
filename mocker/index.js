module.exports = {
  'GET /user': {
    state: 200,
    msg: 'ok',
    data: {
      name: 'Frankie',
      age: 20
    }
  },

  'POST /login': (req, res) => {
    console.log(req.body)
    const { username, password } = req.body
    if (username === 'Frankie' && password === '123') {
      const key = Math.random().toString(36).slice(2)
      res.setHeader('Set-Cookie', `auth_key=${key}; max-age=7200`)
      res.send({
        state: 200,
        msg: 'ok',
        data: {
          name: 'Frankie',
          age: 20
        }
      })
    } else {
      res.send({
        state: 403,
        msg: 'error',
        data: null
      })
    }
  }
}
