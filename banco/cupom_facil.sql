-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: 30-Jun-2017 às 02:11
-- Versão do servidor: 5.6.28
-- PHP Version: 7.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `cupom_facil`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `cli_email` varchar(70) NOT NULL,
  `cli_hashsenha` varchar(45) DEFAULT NULL,
  `cli_token_reset_senha` varchar(45) DEFAULT NULL,
  `cli_nome` varchar(70) NOT NULL,
  `cli_dt_nascimento` date DEFAULT NULL,
  `cli_sexo` char(4) DEFAULT NULL,
  `cli_dt_criacao` datetime DEFAULT NULL,
  `cli_dt_ult_alteracao` datetime DEFAULT NULL,
  `cli_ativo` tinyint(1) DEFAULT '1',
  `est_key` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `clientes`
--

INSERT INTO `clientes` (`id`, `cli_email`, `cli_hashsenha`, `cli_token_reset_senha`, `cli_nome`, `cli_dt_nascimento`, `cli_sexo`, `cli_dt_criacao`, `cli_dt_ult_alteracao`, `cli_ativo`, `est_key`) VALUES
(7, 'carlosphbahia@gmail.coml', 'lsasdasdaftsgrgfdxcvxc', '', 'carlos', '1993-12-25', 'masc', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, NULL),
(8, 'jordan@gmail.coml', 'hjlafdasdsaddafd', '', 'jordan', '1993-12-25', 'masc', '2017-05-19 07:43:21', '2017-05-19 07:43:21', 0, NULL),
(9, 'marcos@gmail.coml', 'lsasdasdaftsgrgfdxcvxc', '', 'marcos', '1993-12-25', 'masc', '2017-05-20 00:56:12', '2017-05-20 00:56:12', 1, NULL),
(10, 'tata@gmail.coml', 'iuyvbkaubyfnsdf', '', 'tata', '1993-12-25', 'masc', '2017-05-20 01:58:53', '2017-05-20 01:58:53', 1, NULL),
(12, 'saymon@gmail.coml', 'jsinskjsdnfksdfiwnw', '', 'saymon', '1993-12-25', 'masc', '2017-05-20 03:05:17', '2017-05-20 03:05:17', 1, '4a30af315bfe8af210a2b8af6a379cf1'),
(13, 'nick@gmail.coml', 'su9idfnisudnfisdfnisnfiw', '', 'nick', '1993-12-25', 'masc', '2017-05-20 03:05:43', '2017-05-20 03:05:43', 1, '4a30af315bfe8af210a2b8af6a379cf1'),
(15, 'netobarroncassi@gmail.coml', 'lsasdasdaftsgrgfdxcvxc', '', 'Neto barroncas', '1994-10-07', 'masc', '2017-06-02 03:30:59', '2017-06-02 03:30:59', 1, '4a30af315bfe8af210a2b8af6a379cf1'),
(21, 'lilialinha@gmail.com', 'lsasdasdaftsgrgfdxcvxc', '', 'Lilia mana', '1994-10-07', 'masc', '2017-06-29 22:22:42', '2017-06-29 22:22:42', 0, '4a30af315bfe8af210a2b8af6a379cf1');

-- --------------------------------------------------------

--
-- Estrutura da tabela `cupons`
--

CREATE TABLE `cupons` (
  `id` int(11) NOT NULL,
  `cup_usado` tinyint(1) DEFAULT NULL,
  `cup_dt_criacao` datetime DEFAULT NULL,
  `cup_dt_ult_alteracao` varchar(45) DEFAULT NULL,
  `cup_ativo` tinyint(1) DEFAULT NULL,
  `cliente_id_cli` int(11) NOT NULL,
  `promocao_id_pro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `estabelecimentos`
--

CREATE TABLE `estabelecimentos` (
  `id` int(11) NOT NULL,
  `est_key` varchar(45) DEFAULT NULL,
  `est_token_reset_senha` varchar(45) DEFAULT NULL,
  `est_nome` varchar(70) DEFAULT NULL,
  `est_email` varchar(70) DEFAULT NULL,
  `est_hashsenha` varchar(45) DEFAULT NULL,
  `est_logo` varchar(70) DEFAULT NULL,
  `est_cep` varchar(9) DEFAULT NULL,
  `est_bairro` varchar(45) DEFAULT NULL,
  `est_rua` varchar(45) DEFAULT NULL,
  `est_numero` varchar(45) DEFAULT NULL,
  `est_complemento` varchar(45) DEFAULT NULL,
  `est_dt_criacao` datetime DEFAULT NULL,
  `est_dt_ult_alteracao` datetime DEFAULT NULL,
  `est_ativo` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `estabelecimentos`
--

INSERT INTO `estabelecimentos` (`id`, `est_key`, `est_token_reset_senha`, `est_nome`, `est_email`, `est_hashsenha`, `est_logo`, `est_cep`, `est_bairro`, `est_rua`, `est_numero`, `est_complemento`, `est_dt_criacao`, `est_dt_ult_alteracao`, `est_ativo`) VALUES
(1, '4a30af315bfe8af210a2b8af6a379cf1', NULL, 'Cachaçaria do Zá', 'cachacariadoze@gmail.com', 'lisdbpsaudnsalhbvasdbvsaofbd', NULL, '69097000', 'miralins', 'shot 101', '42', 'próximo ao mercado lagoa', '2017-05-28 00:00:00', '2017-05-28 00:00:00', 1),
(2, 'ljkdla', NULL, 'bar do binda', 'barbinda@gmail.com', 'oinsdlfnsaljdnflksadnflasd', 'http://p', '69777777', 'cidade nova 2', 'camocim', '12', 'quadra304', '2017-05-21 04:36:25', '2017-05-21 04:36:25', 1),
(3, 'teste1', NULL, 'Pizzaria do arnaldo', 'pizzariadoarnaldoa@gmail.com', 'oinsdlfnsaljdnflksadnflasd', 'http://p', '69777777', 'cidade nova 2', 'camocim', '12', 'quadra304', '2017-05-25 16:10:59', '2017-05-25 16:10:59', 1),
(4, 'e24def63876c4ebddc2b4315a847d835', NULL, 'Pizzaria', 'pizzariadatataa@gmail.com', 'uhbscoahbs', 'http://tata.com.br', '69095187', 'cidade nova', 'girua', '2', 'quadra304', '2017-06-29 21:54:31', '2017-06-29 21:54:31', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `promocoes`
--

CREATE TABLE `promocoes` (
  `id` int(11) NOT NULL,
  `pro_titulo` varchar(45) DEFAULT NULL,
  `pro_regulamento` text,
  `pro_img_fundo` varchar(70) DEFAULT NULL,
  `pro_img_chamada` varchar(70) DEFAULT NULL,
  `pro_validade` datetime DEFAULT NULL,
  `pro_valor` double DEFAULT NULL,
  `pro_qtd_cupom` int(11) DEFAULT NULL,
  `pro_ativo` tinyint(1) DEFAULT NULL,
  `estabelecimento_id_est` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `promocoes`
--

INSERT INTO `promocoes` (`id`, `pro_titulo`, `pro_regulamento`, `pro_img_fundo`, `pro_img_chamada`, `pro_validade`, `pro_valor`, `pro_qtd_cupom`, `pro_ativo`, `estabelecimento_id_est`) VALUES
(1, 'dose unoica', 'lorem ipsom', 'jsd', 'asdasd', '2017-05-31 00:00:00', 25.5, 5, 0, 1),
(2, 'bebidas e comidas a vontade por', 'lorem ipsom', 'jsd', 'asdasd', '2017-10-01 00:00:00', 70.8, 20, 1, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cupons`
--
ALTER TABLE `cupons`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_cupom_cliente_idx` (`cliente_id_cli`),
  ADD KEY `fk_cupom_promocao1_idx` (`promocao_id_pro`);

--
-- Indexes for table `estabelecimentos`
--
ALTER TABLE `estabelecimentos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `promocoes`
--
ALTER TABLE `promocoes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_promocao_estabelecimento1_idx` (`estabelecimento_id_est`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT for table `cupons`
--
ALTER TABLE `cupons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `estabelecimentos`
--
ALTER TABLE `estabelecimentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `promocoes`
--
ALTER TABLE `promocoes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `cupons`
--
ALTER TABLE `cupons`
  ADD CONSTRAINT `fk_cupom_cliente` FOREIGN KEY (`cliente_id_cli`) REFERENCES `clientes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_cupom_promocao1` FOREIGN KEY (`promocao_id_pro`) REFERENCES `promocoes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `promocoes`
--
ALTER TABLE `promocoes`
  ADD CONSTRAINT `fk_promocao_estabelecimento1` FOREIGN KEY (`estabelecimento_id_est`) REFERENCES `estabelecimentos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
