/*
SQLyog 企业版 - MySQL GUI v8.14 
MySQL - 5.7.14 
*********************************************************************
*/
/*!40101 SET NAMES utf8 */;

create table `sea_type` (
	`tid` double ,
	`upid` tinyint (6),
	`tname` varchar (270)
); 
insert into `sea_type` (`tid`, `upid`, `tname`) values('1','0','电影');
insert into `sea_type` (`tid`, `upid`, `tname`) values('2','0','电视剧');
insert into `sea_type` (`tid`, `upid`, `tname`) values('3','0','综艺');
insert into `sea_type` (`tid`, `upid`, `tname`) values('4','0','动漫');
insert into `sea_type` (`tid`, `upid`, `tname`) values('5','1','动作片');
insert into `sea_type` (`tid`, `upid`, `tname`) values('6','1','爱情片');
insert into `sea_type` (`tid`, `upid`, `tname`) values('7','1','科幻片');
insert into `sea_type` (`tid`, `upid`, `tname`) values('8','1','恐怖片');
insert into `sea_type` (`tid`, `upid`, `tname`) values('9','1','战争片');
insert into `sea_type` (`tid`, `upid`, `tname`) values('10','1','喜剧片');
insert into `sea_type` (`tid`, `upid`, `tname`) values('11','1','纪录片');
insert into `sea_type` (`tid`, `upid`, `tname`) values('12','1','剧情片');
insert into `sea_type` (`tid`, `upid`, `tname`) values('13','2','大陆剧');
insert into `sea_type` (`tid`, `upid`, `tname`) values('14','2','港台剧');
insert into `sea_type` (`tid`, `upid`, `tname`) values('15','2','欧美剧');
insert into `sea_type` (`tid`, `upid`, `tname`) values('16','2','日韩剧');
insert into `sea_type` (`tid`, `upid`, `tname`) values('17','0','国内');
insert into `sea_type` (`tid`, `upid`, `tname`) values('18','0','国际');
insert into `sea_type` (`tid`, `upid`, `tname`) values('19','0','社会');
insert into `sea_type` (`tid`, `upid`, `tname`) values('20','0','军事');
insert into `sea_type` (`tid`, `upid`, `tname`) values('21','0','娱乐');
insert into `sea_type` (`tid`, `upid`, `tname`) values('22','0','八卦');
insert into `sea_type` (`tid`, `upid`, `tname`) values('23','0','科技');
insert into `sea_type` (`tid`, `upid`, `tname`) values('24','0','财经');
insert into `sea_type` (`tid`, `upid`, `tname`) values('25','0','公益');
insert into `sea_type` (`tid`, `upid`, `tname`) values('26','0','评论');
insert into `sea_type` (`tid`, `upid`, `tname`) values('27','0','时尚');
