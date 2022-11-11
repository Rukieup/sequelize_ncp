-- 데이터베이스 목록보기
SHOW databases;

-- (데이터베이스 생성)
CREATE DATABASE kdt DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

-- 데이터베이스 선택 (사용)
USE kdt;

-- 데이터베이스 내 테이블 목록 보기
SHOW tables;

-- ########
-- DDL 
-- 테이블 생성
CREATE TABLE visitor (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT
);

-- 테이블 구조 확인
DESC visitor; 


-- DML
-- 테이블 전체 데이터 조회 (read)
SELECT * FROM visitor;

-- 데이블 데이터 추가 (create)
INSERT INTO visitor (name, comment) VALUES("홍길동", "내가 왔다.");
INSERT INTO visitor (name, comment) VALUES("이찬혁", "으라차차");
INSERT INTO visitor (name, comment) VALUES("이수현", "가가가");
INSERT INTO visitor (name, comment) VALUES("아이유", "양야야");

-- 테이블 데이터 삭제 (delete)
DELETE FROM visitor WHERE id > 2;

-- 테이블 데이터 수정 (update)
UPDATE visitor SET name='누구', comment='아무말' WHERE id=1;

-- DCL
-- mysql 사용자 추가 (user계정)
CREATE USER 'user'@'%' IDENTIFIED BY '1234';
-- user 계정에 db 권한 부여 (모든 db에 접근 가능 설정)
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
-- 현재 사용중인 mysql 캐시 지우고 새로운 설정 적용
FLUSH PRIVILEGES;

-- 비밀번호 변경하고 싶다면?
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '1234';