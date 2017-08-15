create database vcApp;
use vcApp;

CREATE TABLE User (
    mobile varchar(255),
    firstName varchar(255) NOT NULL,
    lastName varchar(255),
    address varchar(255),
    city varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    state varchar(50) NOT NULL,
    email varchar(255) NOT NULL,
    gender varchar(10) NOT NULL,
    PRIMARY KEY (mobile)
);

CREATE TABLE question (
  id INT NOT NULL,
  url VARCHAR(255) NULL,
  options VARCHAR(255) NULL,
  ques_date INT(20) NULL,
  ques_title VARCHAR(255) NULL,
  PRIMARY KEY (id));

CREATE TABLE user_ques (
  user_ques_id varchar(255),
  user_id VARCHAR(255) NOT NULL,
  ques_id VARCHAR(255) NOT NULL,
  ques_date VARCHAR(255) NOT NULL,
  ans_option VARCHAR(45) NOT NULL,
  PRIMARY KEY (user_ques_id));
