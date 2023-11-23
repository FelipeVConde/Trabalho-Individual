CREATE DATABASE Genshin;
DROP DATABASE Genshin;
USE Genshin;

CREATE TABLE arma(
idArma INT PRIMARY KEY AUTO_INCREMENT,
tipo VARCHAR(45)
);

CREATE TABLE especialidade(
idEspecialidade INT primary KEY AUTO_INCREMENT,
alimento VARCHAR(60),
raridade INT
);

CREATE TABLE personagem(
idPersonagem INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
visão VARCHAR(45),
nação VARCHAR(45),
raridade int,
fkArma INT,
fkEspecialidade INT,
	constraint fkArma foreign key(fkArma)
		references arma(idArma),
    constraint fkEpecialidade foreign key(fkEspecialidade)
		references especialidade(idEspecialidade)
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
    
INSERT INTO especialidade(alimento, raridade) VALUES
	('Bife da Aventureira Campeã!', 1),
    ('Espetinho de Frutas', 1),
    ('Macarrão Misterioso à Bolonhesa', 2),
    ('Ensopado Picante', 2),
    ('Pizza Revigorante', 3),
    ('Bolinho em Formato de Pata', 3),
    ('"Era Uma Vez em Mondstadt"', 3),
    ('Ensopado Verdadeiro do Arconte Anemo', 3),
    ('Sabedoria Suprema (Vida)', 2),
    ('Torrada de Peixe', 2),
    ('Ovo de Teyvat Crocante', 1),
    ('Sinfonia Abençoada', 3),
    ('Panqueca Esponjosa', 2),
    ('Isso não é um aperitivo', 1),
    ('Peixe Fervido do Restaurante de Wanmin', 3),
    ('Iguarias do Interior', 2),
    ('Sonhos Doces', 2),
    ('Fatias de Carne Salteadas', 1),
    ('Carne de Mora Qiankun', 1),
    ('Sem Futuro', 3),
    ('Macarrão Frio com Iguarias das Montanhas', 2),
    ('Peixe Grelhado de Sobrevivência', 1),
    ('Refeição Nutritiva (V.593)', 3),
    ('Sopa de Bambu Cozinhada Lentamente', 3),
    ('Galinha Roqueira!', 2),
    ('Pesca Extrema', 3),
    ('Marcha Fantasmagórica', 2),
    ('Paz Próspera', 3),
    ('Sonho da Floresta', 3),
    ('Jantar Experimental', 2),
    ('"Meu Jeito"', 2),
    ('Torta da Tempestade', 4),
    ('"Neve na Lareira"', 3),
    ('Beleza de Todo Clima', 1),
    ('Peixe do Festival de Verão', 3),
    ('Técnica Arrematadora da Tontura 2.0', 2),
    ('Gel Saciador', 1),
    ('Estratagema Impressionante', 1),
    ('Fé Eterna', 1),
    ('"Calor"', 1),
    ('Caminho da Força', 2),
    ('Lenda Vitoriosa', 3),
    ('Macarrão Fios do Coração', 3),
    ('Nuvens Sobre Jade', 2),
    ('Udon da Fortuna', 2),
    ('Elegância Serena', 3),
    ('Valsa do Omelete de Arroz', 3),
    ('Camarão Marinado', 3),
    ('A Única Verdade', 2),
    ('Recomendação de Patrulheiro Florestal', 2),
    ('Visão', 3),
    ('Cadê a Mora?', 3),
    ('Dança Espiral', 3),
    ('Alma Duelista', 3),
    ('Cuidado Extremo', 2),
    ('Sono Extravagante', 2),
    ('Halvamazd', 3),
    ('Bolo de Coco-Carvão Tradicional', 3),
    ('Chazuke Autêntico', 3),
    ('Situação Ideal', 3),
    ('Comida Caseira de Qingce', 3),
    ('Panelão Fervente', 3),
    ('Fortaleza do Topógrafo', 3),
    ('A Determinação', 2),
    ('Sopa Extintora', 3),
    ('Refeição Energizante', 3),
    ('Viagem do Pássaro do Mar', 3),
    ('Truques Cúbicos', 3),
    ('Gole Descontraído', 3),
    ('"Consomme Purete"', 3),
    ('Churrasco de Costela com Molho Secreto', 2),
    ('"Proustis"', 3),
    ('Furo Exclusivo: Coluna Gourmet', 3),
    ('Pecado: O Tipo que Não Precisa Ser Resolvido', 3),
    ('"Escolha o Que Quiser!"', 3);

    
INSERT INTO personagem(nome, visão, nação, raridade, fkArma, fkEspecialidade) VALUES
	('Albedo', 'geo', 'Mondstadt', 5, 1, 29),
    ('Alhaitham', 'dendro', 'Sumero', 5, 1, 60),
    ('Aloy', 'cryo', null, 5, 4, 37),
    ('Amber', 'pyro', 'Mondstadt', 4, 4, 1),
    ('Andarilho', 'anemo', 'Sumero', 5, 5, 59),
    ('Ayaka', 'cryo', 'Inazuma', 5, 1, 33),
    ('Ayato', 'hydro', 'Inazuma', 5, 1, 46),
    ('Baizhu', 'dendro', 'Liyue', 5, 5, 65),
    ('Barbara', 'hydro', 'Mondstadt', 4, 5, 4),
    ('Beidou', 'electro', 'Liyue', 4, 2, 18),
    ('Bennet', 'pyro', 'Mondstadt', 4, 1, 11),
    ('Candace', 'hydro', 'Sumero', 4, 3, 55),
    ('Charlotte', 'cryo', 'Fontaine', 4, 5, 73),
    ('Chevreuse', 'pyro', 'Fontaine', 4, 3, 74),
    ('Chongyun', 'cryo', 'Liyue', 4, 2, 21),
    ('Collei', 'dendro', 'Sumero', 4, 4, 51),
    ('Cyno', 'electro', 'Sumero', 5, 3, 54),
    ('Dehya', 'pyro', 'Sumero', 5, 2, 62),
    ('Diluc', 'pyro', 'Mondstadt', 5, 2, 7),
    ('Diona', 'cryo', 'Mondstadt', 4, 4, 14),
    ('Dori', 'electro', 'Sumero', 4, 2, 52),
    ('Eula', 'cryo', 'Mondstadt', 5, 2, 32),
    ('Faruzan', 'anemo', 'Sumero', 4, 4, 58),
    ('Fischl', 'electro', 'Mondstadt', 4, 4, 12),
    ('Freminet', 'cryo', 'Fontaine', 4, 2, 67),
    ('Furina', 'hydro', 'Fontaine', 5, 1, 72),
    ('Ganyu', 'cryo', 'Liyue', 5, 4, 28),
    ('Gorou', 'geo', 'Inazuma', 4, 4, 42),
    ('Heizou', 'anemo', 'Inazuma', 4, 5, 49),
    ('Hu tao', 'pyro', 'Liyue', 5, 3, 27),
    ('Itto', 'geo', 'Inazuma', 5, 2, 41),
    ('Jean', 'anemo', 'Mondstadt', 5, 1, 5),
    ('Kaeya', 'cryo', 'Mondstadt', 4, 1, 2),
    ('Kaveh', 'dendro', 'Sumero', 4, 2, 64),
    ('Kazuha', 'anemo', 'Inazuma', 5, 1, 34),
    ('Keqing', 'electro', 'Liyue', 5, 1, 22),
    ('Kirara', 'dendro', 'Inazuma', 4, 1, 66),
    ('Klee', 'pyro', 'Mondstadt', 5, 5, 10),
    ('Kokomi', 'hydro', 'Inazuma', 5, 5, 38),
    ('kuki Shinobu', 'electro', 'Inazuma', 4, 1, 47),
    ('Layla', 'cryo', 'Sumero', 4, 1, 56),
    ('Lisa', 'electro', 'Mondstadt', 4, 5, 3),
    ('Lumine', null, null, 5, 1, null),
    ('Lynette', 'anemo', 'Fontaine', 4, 1, 69),
    ('Lyney', 'pyro', 'Fontaine', 5, 4, 68),
    ('Mika', 'cryo', 'Mondstadt', 4, 3, 63),
    ('Mona', 'hydro', 'Mondstadt', 5, 5, 9),
    ('Nahida', null, 'Sumero', 5, 5, 57),
    ('Navia', 'geo', 'Fontaine', 5, 2, 75),
    ('Neuvillette', null, 'Fontaine', 5, 5, 70),
    ('Nilou', 'hydro', 'Sumero', 5, 1, 53),
    ('Ningguang', 'geo', 'Liyue', 4, 5, 19),
    ('Noelle', 'geo', 'Mondstadt', 4, 2, 13),
    ('Qiqi', 'cryo', 'Liyue', 5, 1, 20),
    ('Raiden', null, 'Inazuma', 5, 3, null),
    ('Razor', 'electro', 'Mondstadt', 4, 2, 6),
    ('Rosaria', 'cryo', 'Mondstadt', 4, 3, 30),
    ('Sara', 'electro', 'Inazuma', 4, 4, 39),
    ('Sayu', 'anemo', 'Inazuma', 4, 2, 36),
    ('Shenhe', 'cryo', 'Liyue', 5, 3, 43),
    ('Sucrose', 'anemo', 'Mondstadt', 4, 5, 23),
    ('Tartaglia', 'hydro', 'Snezhnaya', 5, 4, 26),
    ('Thoma', 'pyro', 'Inazuma', 4, 3, 40),
    ('Tighnari', 'dendro', 'Sumero', 5, 4, 50),
    ('Traveler', null, null, 5, 1, null),
    ('Venti', null, 'Mondstadt', 5, 4, 8),
    ('Wriothesley', 'cryo', 'Fontaine', 5, 5, 71),
    ('Xiangling', 'pyro', 'Liyue', 4, 3, 15),
    ('Xiao', 'anemo', 'Liyue', 5, 3, 17),
    ('Xingqiu', 'hydro', 'Liyue', 4, 1, 16),
    ('Xinyan', 'pyro', 'Liyue', 4, 2, 25),
    ('Yae', 'electro', 'Inazuma', 5, 5, 45),
    ('Yanfei', 'pyro', 'Liyue', 4, 5, 31),
    ('Yaoyao', 'dendro', 'Liyue', 4, 3, 61),
    ('Yelan', 'hydro', 'Liyue', 5, 4, 48),
    ('Yoimiya', 'pyro', 'Inazuma', 5, 4, 35),
    ('Yun Jin', 'geo', 'Liyue', 4, 3, 44),
    ('Zhongli', null, 'Liyue', 5, 3, 24);

-- SELECTS
SELECT * FROM usuario;

SELECT  * FROM arma;

SELECT * FROM especialidade;

SELECT * FROM personagem;

-- Trazer lista de dados do personagem e seu tipo de arma.
SELECT personagem.nome, personagem.visão, personagem.nação, personagem.raridade, arma.tipo as 'tipo de arma' FROM arma
	JOIN personagem ON fkArma = idArma;

-- Trazer lista de dados do usuario que tem certo de personagem.
SELECT usuario.* FROM usuario
    JOIN personagem
        ON idPersonagem = fkPersonagem
WHERE personagem.nome ='';

TRUNCATE usuario;