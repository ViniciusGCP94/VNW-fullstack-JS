CREATE TABLE usuarios (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL UNIQUE,
	senha VARCHAR(100) NOT NULL,
	criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE postagens (
	id SERIAL PRIMARY KEY,
	titulo VARCHAR(255) NOT NULL,
	conteudo VARCHAR(3000) NOT NULL,
	usuario_id INT NOT NULL,
	criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

	CONSTRAINT fk_usuarios
	FOREIGN KEY (usuario_id)
	REFERENCES usuarios(id)
	ON DELETE CASCADE
);

INSERT INTO usuarios (nome, email, senha) VALUES ('Juliana', 'juh@email.com.br', 'j012345');
SELECT * FROM usuarios;

INSERT INTO postagens (titulo, conteudo, usuario_id) VALUES ('Tô ON tbm', 'Tô ON no Orkut', 2);
SELECT * FROM postagens

SELECT
	usuarios.nome AS usuario,
	postagens.conteudo,
	postagens.criado_em
FROM postagens
JOIN usuarios ON postagens.usuario_id = usuarios.id

SELECT
	usuarios.nome,
	postagens.conteudo,
	postagens.criado_em
FROM postagens
JOIN usuarios ON postagens.usuario_id = usuarios.id WHERE usuarios.id = 2;