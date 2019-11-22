/*
SQLyog 企业版 - MySQL GUI v8.14 
MySQL - 5.7.14 
*********************************************************************
*/
/*!40101 SET NAMES utf8 */;

create table `users` (
	`id` double ,
	`username` varchar (180),
	`userpassword` varchar (42),
	`nickname` varchar (60),
	`headimg` varchar (765)
); 
insert into `users` (`id`, `username`, `userpassword`, `nickname`, `headimg`) values('2','admin','111111','孙孙孙','/headimg/14.jpg');
insert into `users` (`id`, `username`, `userpassword`, `nickname`, `headimg`) values('45','zhang123456','123123','qqqqqq','/headimg/12.jpg');
insert into `users` (`id`, `username`, `userpassword`, `nickname`, `headimg`) values('44','admin2','222222','admin2','/headimg/7.jpg');
