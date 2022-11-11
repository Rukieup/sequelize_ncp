// [Before]
// const Visitor = require('../model/Visitor');
// [After]
const models = require('../models'); // ../models/index.js
// models = { sequelize: sequelize, Sequelize: Sequelize, Visitor: model }

exports.main = (req, res) => {
  res.render('index');
};

exports.getVisitors = (req, res) => {
  // [Before]
  // Visitor.getVisitors((result) => {
  //   console.log('Cvisitor.js', result); // [ {}, {}, {}, {} ]
  //   res.render('visitor', { data: result });
  // });

  // [After]
  // SELECT * FROM visitor
  models.Visitor.findAll().then((result) => {
    console.log('findAll >> ', result); // [ {}, {}, {}, ...]
    res.render('visitor', { data: result });
  });
};

exports.getVisitor = (req, res) => {
  // [Before]
  // console.log(req.query); // { id: '1' }
  // console.log(req.query.id); // '1'
  // Visitor.getVisitor(req.query.id, (result) => {
  //   console.log('Cvisitor.js', result);
  //   res.send(result);
  // });

  // [After]
  // SELECT * FROM visitor WHERE id=${req.query.id}
  models.Visitor.findOne({
    where: { id: req.query.id },
  }).then((result) => {
    console.log('findOne >> ', result);
    res.send(result);
  });
};

exports.postVisitor = (req, res) => {
  // [Before]
  // console.log('postvisitor: ', req.body);
  // // postvisitor:  { name: '빅파이', comment: '맛있다' }
  // Visitor.postVisitor(req.body, (result) => {
  //   console.log('Cvisitor.js', result); // Cvisitor.js 10
  //   res.send({
  //     id: result, // pk(id) -> 10
  //     name: req.body.name, // 폼에 입력한 name
  //     comment: req.body.comment, // 폼에 입력한 comment
  //   });
  // });

  // [After]
  // INSERT INTO visitor (name, comment) VALUES('${data.name}', '${data.comment}')
  // INSERT INTO visitor (name, comment) VALUES('${req.body.name}', '${req.body.comment}')
  models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  }).then((result) => {
    console.log('create >> ', result);
    res.send(result);
  });
};

exports.patchVisitor = (req, res) => {
  // [Before]
  // console.log(req.body);

  // Visitor.patchVisitor(req.body, (result) => {
  //   console.log('Cvisitor.js:', result);
  //   res.send('수정 성공!!!');
  // });

  // [After]
  // UPDATE visitor SET name='${data.name}', comment='${data.comment}' WHERE id=${data.id}
  // UPDATE visitor SET name='${req.body.name}', comment='${req.body.comment}' WHERE id=${req.body.id}
  models.Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then((result) => {
    console.log('update >> ', result);
    res.send('수정 성공!!!');
  });
};

exports.deleteVisitor = (req, res) => {
  // [Before]
  // console.log(req.body); // { id: '1' }
  // console.log(req.body.id); // 1

  // Visitor.deleteVisitor(req.body.id, (result) => {
  //   console.log('Cvisitor.js: ', result);
  //   res.send('삭제 성공!!!');
  // });

  // [After]
  // DELETE FROM visitor WHERE id=${id}
  // DELETE FROM visitor WHERE id=${req.body.id}
  models.Visitor.destroy({
    where: { id: req.body.id },
  }).then((result) => {
    console.log('destroy >> ', result);
    res.send('삭제 성공!!!!');
  });
};

exports.getSignup = (req, res) => {
  res.render('signup')
};

exports.getSignin = (req, res) => {
  res.render('signin')
};

exports.postSignup = (req, res) => {

  models.Visitor.findAll().then((result) => {
    console.log('findAll >> ', result); // [ {}, {}, {}, ...]
    res.render('visitor', { data: result });
  });
}