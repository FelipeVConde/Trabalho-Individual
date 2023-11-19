CREATE DATABASE Genshin;
DROP DATABASE Genshin;
USE Genshin;


CREATE TABLE arma(
idArma INT PRIMARY KEY AUTO_INCREMENT,
tipo VARCHAR(45)
);

CREATE TABLE personagem(
idPersonagem INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
visão VARCHAR(45),
nação VARCHAR(45),
raridade int,
fkArma INT,
	constraint fkArma foreign key (fkArma)
    references arma(idArma)
);

CREATE TABLE usuario(
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45),
    senha VARCHAR(45),
	fkPersonagem INT,
	constraint fkPersonagem foreign key (fkPersonagem)
    references personagem(idPersonagem)
);
 
-- INSERTS

INSERT INTO arma(tipo) VALUES
	('espada'),
    ('espadão'),
    ('lança'),
    ('arco'),
    ('catalisador');
    
INSERT INTO personagem(nome, visão, nação, raridade, fkArma) VALUES
	('Albedo', 'geo', 'Mondstadt', 5, 1),
    ('Alhaitham', 'dendro', 'Sumero', 5, 1),
    ('Aloy', 'cryo', null, 5, 4),
    ('Amber', 'pyro', 'Mondstadt', 4, 4),
    ('Andarilho', 'anemo', 'Sumero', 5, 5),
    ('Ayaka', 'cryo', 'Inazuma', 5, 1),
    ('Ayato', 'hydro', 'Inazuma', 5, 1),
    ('Baizhu', 'dendro', 'Liyue', 5, 5),
    ('Barbara', 'hydro', 'Mondstadt', 4, 5),
    ('Beidou', 'electro', 'Liyue', 4, 2),
    ('Bennet', 'pyro', 'Mondstadt', 4, 1),
    ('Candace', 'hydro', 'Sumero', 4, 3),
    ('Charlotte', 'cryo', 'Fontaine', 4, 5),
    ('Chevreuse', 'pyro', 'Fontaine', 4, 3),
    ('Chongyun', 'cryo', 'Liyue', 4, 2),
    ('Collei', 'dendro', 'Sumero', 4, 4),
    ('Cyno', 'electro', 'Sumero', 5, 3),
    ('Dehya', 'pyro', 'Sumero', 5, 2),
    ('Diluc', 'pyro', 'Mondstadt', 5, 2),
    ('Diona', 'cryo', 'Mondstadt', 4, 4),
    ('Dori', 'electro', 'Sumero', 4, 2),
    ('Eula', 'cryo', 'Mondstadt', 5, 2),
    ('Faruzan', 'anemo', 'Sumero', 4, 4),
    ('Fischl', 'electro', 'Mondstadt', 4, 4),
    ('Freminet', 'cryo', 'Fontaine', 4, 2),
    ('Furina', 'hydro', 'Fontaine', 5, 1),
    ('Ganyu', 'cryo', 'Liyue', 5, 4),
    ('Gorou', 'geo', 'Inazuma', 4, 4),
    ('Heizou', 'anemo', 'Inazuma', 4, 5),
    ('Hu tao', 'pyro', 'Liyue', 5, 3),
    ('Itto', 'geo', 'Inazuma', 5, 2),
    ('Jean', 'anemo', 'Mondstadt', 5, 1),
    ('Kaeya', 'cryo', 'Mondstadt', 4, 1),
    ('Kaveh', 'dendro', 'Sumero', 4, 2),
    ('Kazuha', 'anemo', 'Inazuma', 5, 1),
    ('Keqing', 'electro', 'Liyue', 5, 1),
    ('Kirara', 'dendro', 'Inazuma', 4, 1),
    ('Klee', 'pyro', 'Mondstadt', 5, 5),
    ('Kokomi', 'hydro', 'Inazuma', 5, 5),
    ('kuki Shinobu', 'electro', 'Inazuma', 4, 1),
    ('Layla', 'cryo', 'Sumero', 4, 1),
    ('Lisa', 'electro', 'Mondstadt', 4, 5),
    ('Lumine', null, null, 5, 1),
    ('Lynette', 'anemo', 'Fontaine', 4, 1),
    ('Lyney', 'pyro', 'Fontaine', 5, 4),
    ('Mika', 'cryo', 'Mondstadt', 4, 3),
    ('Mona', 'hydro', 'Mondstadt', 5, 5),
    ('Nahida', null, 'Sumero', 5, 5),
    ('Navia', 'geo', 'Fontaine', 5, 2),
    ('Neuvillette', null, 'Fontaine', 5, 5),
    ('Nilou', 'hydro', 'Sumero', 5, 1),
    ('Ningguang', 'geo', 'Liyue', 4, 5),
    ('Noelle', 'geo', 'Mondstadt', 4, 2),
    ('Qiqi', 'cryo', 'Liyue', 5, 1),
    ('Raiden', null, 'Inazuma', 5, 3),
    ('Razor', 'electro', 'Mondstadt', 4, 2),
    ('Rosaria', 'cryo', 'Mondstadt', 4, 3),
    ('Sara', 'electro', 'Inazuma', 4, 4),
    ('Sayu', 'anemo', 'Inazuma', 4, 2),
    ('Shenhe', 'cryo', 'Liyue', 5, 3),
    ('Sucrose', 'anemo', 'Mondstadt', 4, 5),
    ('Tartaglia', 'hydro', 'Snezhnaya', 5, 4),
    ('Thoma', 'pyro', 'Inazuma', 4, 3),
    ('Tighnari', 'dendro', 'Sumero', 5, 4),
    ('Traveler', null, null, 5, 1),
    ('Venti', null, 'Mondstadt', 5, 4),
    ('Wriothesley', 'cryo', 'Fontaine', 5, 5),
    ('Xiangling', 'pyro', 'Liyue', 4, 3),
    ('Xiao', 'anemo', 'Liyue', 5, 3),
    ('Xingqiu', 'hydro', 'Liyue', 4, 1),
    ('Xinyan', 'pyro', 'Liyue', 4, 2),
    ('Yae', 'electro', 'Inazuma', 5, 5),
    ('Yanfei', 'pyro', 'Liyue', 4, 5),
    ('Yaoyao', 'dendro', 'Liyue', 4, 3),
    ('Yelan', 'hydro', 'Liyue', 5, 4),
    ('Yoimiya', 'pyro', 'Inazuma', 5, 4),
    ('Yun Jin', 'geo', 'Liyue', 4, 3),
    ('Zhongli', null, 'Liyue', 5, 3);



SELECT * FROM usuario;

SELECT  * FROM arma;

SELECT * FROM personagem;

SELECT personagem.nome, personagem.visão, personagem.nação, personagem.raridade, arma.tipo FROM arma
	JOIN personagem ON fkArma = idArma;

TRUNCATE usuario;