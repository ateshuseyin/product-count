CREATE TABLE `product_count`.`product` (
  `barcode` INT NOT NULL,
  `part_no` VARCHAR(45) NULL,
  `quantity` DECIMAL(10,4) NULL,
  `quantity_count` DECIMAL(10,4) NULL,
  PRIMARY KEY (`barcode`));
