const config = require('../config');

const { Client } = require('pg');

const client = new Client({
    user: config.dbConfig.username,
    host: config.dbConfig.conf.host,
    database: config.dbConfig.database,
    password: config.dbConfig.password,
    port: 5432,
});

const tables = ['users', 'player', 'type_game', 'game_shema', 'game', 'player_in_game', 'comment'];

const dropTable = () => {
    client.connect();
    tables.forEach(table => {
        client.query({ text: `drop table ${table} cascade;` })
            .then(res => console.log(res.rows[0]))
            .catch(e => console.error(e.stack));
    });
    client.end();
}

const createTable = async() => {
        await client.connect();

        await client.query(
            `CREATE TABLE users(id serial primary key unique,
        login varchar(255) not null,
        password varchar(40) not null,
        first_name varchar(255) not null,
        last_name varchar(255) not null,
        city varchar(255) not null,
        phone_number varchar(40) not null,
        vk_id int not null,
        facebook_id int not null );`
        );

        await client.query(
            `CREATE TABLE player(id serial primary key unique,
        user_id int references users(id),
        description text not null,
        game_count int not null );`
        );

        await client.query(
            `CREATE TABLE type_game(id serial primary key unique,
        name varchar(255)  not null );`
        );

        await client.query(
            `CREATE TABLE game_shema(id serial primary key unique,
        shame_json json not null );`
        );

        await client.query(
            `CREATE TABLE game(id serial primary key unique,
        country varchar(255) not null,
        city varchar(255) not null,
        street varchar(255) not null,
        created_at TIMESTAMP not null DEFAULT NOW(),
        updated_at TIMESTAMP not null DEFAULT NOW(),
        game_type_id int references type_game(id),
        owner_id int references player(id),
        begin_game DATE not null,
        end_game DATE not null,
        team_count int not null,
        shema_id int references game_shema(id) );`
        );

        await client.query(
            `CREATE TABLE player_in_game(id serial primary key unique,
        player_id int references player(id),
        game_id int references game(id),
        position int not null );`
        );

        await client.query(
            `CREATE TABLE comment(id serial primary key unique,
        game_id int references game(id),
        player_id int references player(id),
        text text not null );`
        );

        await client.end();
    }
    // createTable();
module.exports.createTable = createTable;

module.exports.dropTable = dropTable;