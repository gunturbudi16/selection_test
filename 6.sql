CREATE DATABASE IF NOT EXISTS `project` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `project`;

CREATE TABLE `cashier` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `cashier` (`id`, `name`) VALUES
(1, 'Pevita Pearce'),
(2, 'Raisa Andriana'),
(3, 'Guntur Budi');

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Food'),
(2, 'Drink');

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `price` int(11) NOT NULL,
  `id_category` int(11) NOT NULL,
  `id_cashier` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `product` (`id`, `name`, `price`, `id_category`, `id_cashier`) VALUES
(1, 'Latte', 10000, 2, 1),
(2, 'Cake', 20000, 1, 2),
(3, 'Puff', 50000, 1, 3);

ALTER TABLE `cashier`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `cashier`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;



