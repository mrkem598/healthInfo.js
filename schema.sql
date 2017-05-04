-- Create "health_info_db"
CREATE DATABASE health_info_db;
USE health_info_db;
CREATE TABLE health_info(
  id int(2) AUTO_INCREAMENT NOT NULL,
  health VARCHAR(15) NOT NULL,
  info VARCHAR(300) NOT NULL,
  PRIMARY KEY(id)
);
-- Inser a set of record in to the table
INSERT INTO health (health) VALUES ("Health assessment is the evaluation of the health status by performing a physical exam after taking a health history.");
INSERT INTO health (health) VALUE ("Mental health assesment  looks at how well you are able to think, reason, and remember (cognitive functioning)");
INSERT INTO health (health) VALUE ("To enjoy good health, to bring true happiness to one's family, to bring peace to all, one must first discipline and control one's own mind.");
INSERT INTO health (health) value ("Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship. ");
