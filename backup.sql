-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-10-2022 a las 21:43:23
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `wingsoft`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `summary` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `author` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`id`, `title`, `summary`, `content`, `author`, `createdAt`) VALUES
(2, 'Publicacion 1', 'qe2eq2', 'eq2eq2e', 'q2eq2eq2e', '2022-10-04 21:09:35'),
(3, 'Publicacion 2', 'awdawdawd', 'awdawdawdawddawdawdawdawdawd', 'dawdawdawd', '2022-10-04 21:09:43'),
(4, 'Publicacion 3', 'adwdawd', 'awdwdawdawd', 'awdwdawdawdawd', '2022-10-04 21:21:14'),
(5, 'Publicacion 4', 'awdawdawd', 'awdawawdaw', 'dawdawdawdawd', '2022-10-04 21:58:59'),
(6, 'Publicacion 5', 'awdawdawd', 'awdawdawd', 'awdawdawd', '2022-10-04 21:59:05'),
(7, 'Publicacion 6', 'adwdawdawd', 'awdwdawd', 'awdawdawd', '2022-10-04 21:59:12'),
(8, 'Publicacion 7', 'dawdawd', 'awddawdawd', 'kmnkmdkajkwnjdbnawd', '2022-10-04 21:59:57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `role` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `role`, `name`, `email`, `password`) VALUES
(1, 'Admin', 'Admin', 'admin@correo.com', '$2a$10$1n6ojbc56iZqiGUkP6jfb.Fjnhq27mZZDecBR82pfrlZOB3UUZ0Ie'),
(2, 'User', 'User 1', 'user1@correo.com', '$2a$10$Yvd/s.cpxxE2c3C6ClPkGe1Bd7oX5sRgnE1WsDrQZukB24NAIwBd.'),
(3, 'User', 'User 2', 'user2@correo.com', '$2a$10$FH4IuM9DOA5.Ja0Se0wnOukOnaQ7jqu2PM27nrdjfqWVmwI5sJI6K'),
(4, 'User', 'User 3', 'user3@correo.com', '$2a$10$SXaEAqn4jdRohYoMEmmUQOFMoNFlXojMJKaqwPn9QpMNcACLivJdK');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visits`
--

CREATE TABLE `visits` (
  `id` int(10) UNSIGNED NOT NULL,
  `userId` int(10) UNSIGNED DEFAULT NULL,
  `postId` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `visits`
--

INSERT INTO `visits` (`id`, `userId`, `postId`) VALUES
(1, 4, 2),
(2, 4, 3),
(3, 3, 2),
(4, 3, 3),
(5, 3, 4),
(6, 3, 5),
(7, 3, 6),
(8, 3, 7),
(9, 3, 8),
(10, 2, 8),
(11, 2, 2),
(12, 2, 3),
(13, 2, 4),
(14, 2, 5),
(15, 2, 6),
(16, 2, 7),
(17, 2, 8),
(18, 2, 2),
(19, 2, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`);

--
-- Indices de la tabla `visits`
--
ALTER TABLE `visits`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_940b75788f79aa65e37d452f2f0` (`postId`),
  ADD KEY `FK_28f19616757b505532162fd6e75` (`userId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `visits`
--
ALTER TABLE `visits`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `visits`
--
ALTER TABLE `visits`
  ADD CONSTRAINT `FK_28f19616757b505532162fd6e75` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_940b75788f79aa65e37d452f2f0` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
