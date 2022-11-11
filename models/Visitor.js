// CREATE TABLE visitor (
//   id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
//   name VARCHAR(10) NOT NULL,
//   comment MEDIUMTEXT
// );

// TODO: visitor 모델(-> 테이블 구조) 정의
// sequelize model이랑 mysql table 연결
const Visitor = function (Sequelize, DataTypes) {
  // Sequelize: models/index.js의 sequelize
  // DataTypes: models/indes.js의 Sequelize
  
  // Squelize.define(param1, param2, param3)
  // param1: 모델 이름 설정 -> ''
  // param2: 컬럼 정의 -> {}
  // param3: 모델 옵션 정의 -> {}

  const model = Sequelize.define(
    'visitor',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      // name VARCHAR(10) 
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      // comment MEDIUMTEXT
      comment: {
        type: DataTypes.TEXT('medium')
      }
    },
    {
      tableName: 'visitor', // 실제 DB의 테이블 이름
      freezeTableName: true, // 테이블 이름 고정
      timestamps: false, // 데이터가 추가/수정 시간을 자동으로 컬럼 만들어서 기록
    }
  );

  return model;
};


module.exports = Visitor;