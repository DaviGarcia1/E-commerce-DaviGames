CREATE DATABASE  IF NOT EXISTS `dgecomerce` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `dgecomerce`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: dgecomerce
-- ------------------------------------------------------
-- Server version	8.4.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cadastros`
--

DROP TABLE IF EXISTS `cadastros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cadastros` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `telefone` varchar(15) DEFAULT NULL,
  `timeFav` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `dataNascimento` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastros`
--

LOCK TABLES `cadastros` WRITE;
/*!40000 ALTER TABLE `cadastros` DISABLE KEYS */;
INSERT INTO `cadastros` VALUES (1,'neiel','ahfjdhkfjh@gmail.com','dndfjldsf2','31989892','davizinho','davigarcialves','2012-08-31 00:00:00','2024-12-10 20:05:46','2024-12-10 20:05:46'),(2,'DAVI GARCIA CASTRO ALVES','davidanivi@gmail.com','danivi2012','3198989833','galao','davigarciaalves','2004-08-09 00:00:00','2024-12-10 20:07:15','2024-12-10 20:07:15'),(3,'Ana Clara Fernandes','ana@gmail.com','analinda','318877669900','Galão','aniinhaxx','2005-04-27 00:00:00','2024-12-17 21:44:17','2024-12-17 21:44:17'),(4,'Neymar da Silva Santos Junior','neymar@gmail.com','neyney','31131331331','Santos','neymar','1982-04-04 00:00:00','2024-12-17 22:10:22','2024-12-17 22:10:22'),(5,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2025-01-01 23:32:32','2025-01-01 23:32:32'),(6,'testin','testin@gmail.com','testin','432842379','flamengo','@testin','2025-01-03 00:00:00','2025-01-01 23:39:39','2025-01-03 02:27:31'),(7,'Samuka','samuka@gmail.com','samuka','4371276843','Cruzeiro','@samuka',NULL,'2025-01-03 02:37:50','2025-01-03 02:37:50');
/*!40000 ALTER TABLE `cadastros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nome` (`nome`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Fps','2024-12-11 20:06:23','2024-12-11 20:06:23'),(2,'Futebol','2024-12-11 20:07:33','2024-12-11 20:07:33'),(3,'Modo Historia','2024-12-11 20:07:51','2024-12-11 20:07:51'),(4,'Luta','2024-12-11 20:08:06','2024-12-11 20:08:06'),(5,'Anime','2024-12-11 20:08:21','2024-12-11 20:08:21');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `preco` decimal(10,2) DEFAULT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  `descricao` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `categoria_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categoria_id` (`categoria_id`),
  CONSTRAINT `produtos_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (4,'Fifa 25',380.00,'/img/fifa25.png','O melhor jogo de Futebol do mundo!','2024-12-12 22:04:13','2024-12-12 22:04:13',2),(5,'Call Of Dutty',300.00,'/img/cod06.jfif','Um excelente jogo pra quem gosta de tiro! Ação garantida','2024-12-12 22:08:52','2024-12-12 22:08:52',1),(6,'Gta 06',400.00,'/img/gta06.jpg','Levando a fama do Gta V, o Gta 6 promete entregar muito mais!','2024-12-12 22:11:16','2024-12-12 22:11:16',3),(7,'FarCry 06',100.00,'/img/farcry06.jpg','Farcry 06 um jogo excelente! Não vai se arrepender.','2024-12-12 22:25:46','2024-12-12 22:25:46',3),(8,'One Piece Pirate Warriors 4',50.00,'/img/opr4.avif','O melhor jogo de One Piece. Venha se aventurar com os chapéus de palha!','2024-12-12 22:27:14','2024-12-12 22:27:14',5),(9,'Sparking Zero',209.00,'/img/sparkingZero.jpg','O jogo de Dragon Ball que vai te trazer a memória dos budokais antigos!','2024-12-13 16:45:31','2024-12-13 16:45:31',4),(10,'Tekken 8',300.00,'/img/tekken.jpg','Um excelente jogo de luta.','2024-12-13 16:46:33','2024-12-13 16:46:33',4),(11,'Naruto Ultimate Ninja Storm 4',50.00,'/img/naruto4.jpg','Naruto Storm 4 um jogo que fez muito sucesso e ainda faz!','2024-12-13 20:40:30','2024-12-13 20:40:30',5),(12,'Dragon Ball Xenoverse 2',50.00,'/img/dbXenoverse.jpg','Dragon Ball Xenoverse um dos melhores jogos de Dragon Ball!','2024-12-13 20:42:10','2024-12-13 20:42:10',5),(13,'Dragon Ball Figther Z',30.00,'/img/dbFigtherZ.jpg','Figther Z um jogo de luta frenético!','2024-12-13 20:44:06','2024-12-13 20:44:06',5),(14,'Assasins Creed Valhala',200.00,'/img/assasinsCreed.jpg','Um excelente jogo com história envolvente','2024-12-13 20:48:19','2024-12-13 20:48:19',3),(15,'god Of War Ragnarok',200.00,'/img/gdfw.jpg','god Of War... Quem não gosta? Venha adquirir!','2024-12-13 20:50:12','2024-12-13 20:50:12',3),(16,'Fifa 24',150.00,'/img/fifa24.jpg','Um excelente jogo de futebol','2024-12-18 23:26:33','2024-12-18 23:26:33',2),(17,'Ufl',0.00,'/img/ufl.jpg','Novo jogo de futebol patrocinado por Cristiano Ronaldo.','2024-12-18 23:28:43','2024-12-18 23:28:43',2),(18,'Efootball',0.00,'/img/efootbal.jpg','Antigo pés, que se tornou gratuito e hoje ainda faz sucesso.','2024-12-18 23:30:04','2024-12-18 23:30:04',2),(19,'Call of Duty Vanguard',100.00,'/img/codVanguard.jpg','Jogo de tiro muito bom.','2024-12-18 23:32:28','2024-12-18 23:32:28',1);
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-07 19:48:59
