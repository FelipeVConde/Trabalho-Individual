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
    ('Diluc'),
    ('Diona'),
    ('Dori'),
    ('Eula'),
    ('Faruzan'),
    ('Fischl'),
    ('Freminet'),
    ('Furina'),
    ('Ganyu'),
    ('Gorou'),
    ('Heizou'),
    ('Hu tao'),
    ('Itto'),
    ('Jean'),
    ('Kaeya'),
    ('Kaveh'),
    ('Kazuha'),
    ('Keqing'),
    ('Kirara'),
    ('Klee'),
    ('Kokomi'),
    ('kuki Shinobu'),
    ('Layla'),
    ('Lisa'),
    ('Lumine'),
    ('Lynette'),
    ('Lyney'),
    ('Mika'),
    ('Mona'),
    ('Nahida'),
    ('Navia'),
    ('Neuvillette'),
    ('Nilou'),
    ('Ningguang'),
    ('Noelle'),
    ('Qiqi'),
    ('Raiden'),
    ('Razor'),
    ('Rosaria'),
    ('Sara'),
    ('Sayu'),
    ('Shenhe'),
    ('Sucrose'),
    ('Tartaglia'),
    ('Thoma'),
    ('Tighnari'),
    ('Traveler'),
    ('Venti'),
    ('Wriothesley'),
    ('Xiangling'),
    ('Xiao'),
    ('Xingqiu'),
    ('Xinyan'),
    ('Yae'),
    ('Yanfei'),
    ('Yaoyao'),
    ('Yelan'),
    ('Yoimiya'),
    ('Yun Jin'),
    ('Zhongli');



SELECT * FROM usuario;

SELECT  * FROM arma;

TRUNCATE usuario;