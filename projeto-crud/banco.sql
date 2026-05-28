-- usuário: Jamorant
-- senha: ggjackson

-- criar o banco de dados
create database userdb_nome;

use userdb_nome;

-- criar a tabela de usuários
create table users (
	id int auto_increment primary key,
    nome varchar(100) not null,
    email varchar(100) not null
);

select * from users;