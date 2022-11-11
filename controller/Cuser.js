// TODO: 컨트롤러 코드
const models = require('../models'); // models/user.js
//models = {sequelize: sequelize, }

exports.main = (req, res) => {
  res.render('index');
};

exports.getSignup = (req, res) => {
  res.render('signup');
};

exports.getSignin = (req, res) => {
  res.render('signin');
};

exports.postSignup = (req, res) => {
  console.log('postSignup: ', req.body);
  // postSignup:  { userid: 'aa', pw: 'aa', name: 'aa' }
  
  // [Before]
  // User.postSignup(req.body, (result) => {
  //   console.log('postSignup', result);

  //   res.send({
  //     // 폼에 입력한 데이터 
  //     id: result,
  //     userid: req.body.userid,
  //     pw: req.body.pw,
  //     name: req.body.name, 
  //   })
  // });

  // [After]
  // INSERT INTO user (userid, pw, name) VALUE('${data.userid}','${data.pw}','${data.name}')
  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then((result)=> {
    console.log('create >> ', result);
    res.send(result);
  });
};

exports.postSignin = (req, res) => {
  // [Before]
  // User.postSignin(req.body, (result) => {
  //   // 로그인 성공시 -> [ {} ] 
  //   // 로그인 실패시 -> []
  //   console.log('Cuser.js', result); 
  //   console.log('result.length', result.length); 

  //   if (result.length) {
  //     res.send(true);
  //   } else {
  //     res.send(false)
  //   };
    
  // 성공 -> res.send(true)
  // 실패 -> res.send(false)
  // });

  // [After]
  // SELECT * FROM user WHERE userid = '${data.userid}' AND pw = '${data.pw}'
  models.User.findOne({
    where: { userid: req.body.userid },
  }).then((result) => {
    res.send(result);
  });
};

exports.postProfile = (req, res) => {
  // [BEFORE]
  // console.log('데이터',req.body)
  // User.postProfile(req.body, (result) => {
  //   console.log('결과',result)
    
  //   res.render('profile', {data: result});
  // });

  // [AFTER]
  // SELECT * FROM user WHERE userid = '${data.userid}'
  models.User.findOne({
    where: { userid: req.body.userid },
  }).then((result) => {
    console.log('findOne >> ', result)
    res.render('profile', {data: result});
  })
};


exports.patchProfile = (req, res) => {
  // [BEFORE]
  // User.patchProfile(req.body, (result) => {
  //   res.send(true);
  // })

  // [AFTER]
  // UPDATE user SET pw='${data.pw}', name='${data.name}' WHERE id='${data.id}'
  models.User.update(
    {
      userid: req.body.name,
      pw: req.body.pw,
      name: req.body.name,
    },
    {
      where: {
        userid: req.body.userid,
      },
    }
  ).then((result) => {
    console.log('update >> ', result);
    res.send('수정 성공~')
  });
};

exports.deleteProfile = (req, res) => {
  // [BEFORE]
  // User.deleteProfile(req.body, (result) => {
  //   res.send(true);
  // })

  // [AFTER]
  // DELETE FROM user WHERE id=${data.id}
  models.User.destroy({
    where: { id: req.body.id},
  }).then((result) => {
    console.log('destroy >> ', result);
    res.send('삭제 성공~');
  });
};
