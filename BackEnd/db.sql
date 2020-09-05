CREATE TABLE IF NOT EXISTS `Users` (
  `user` VARCHAR(30) NOT NULL,
  `password` VARCHAR(30) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(64) NOT NULL,
  `pfp` BLOB NULL,
  `major` VARCHAR(45) NOT NULL,
  `class` ENUM("U1", "U2", "U3", "U4") NOT NULL,
  `residence` VARCHAR(120) NOT NULL,
  `desc` VARCHAR(300) NULL,
  PRIMARY KEY (`user`))