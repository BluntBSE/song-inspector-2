CREATE EXTENSION pgcrypto ;

CREATE table if not EXISTS transactions (
    request_id VARCHAR(50),
    transaction_id VARCHAR(50),
    user_id VARCHAR(50),
    song_id VARCHAR(50),
    originator BOOL,
    artists VARCHAR(50)[],
    acousticness FLOAT,
    danceability FLOAT,
    duration FLOAT,
    energy FLOAT,
    instrumentalness FLOAT,
    key FLOAT,
    liveness FLOAT,
    loudness FLOAT,
    mode FLOAT,
    popularity FLOAT,
    speechiness FLOAT,
    tempo FLOAT,
    time_signature FLOAT,
    valence FLOAT,
    genre VARCHAR(50),
    target_duration FLOAT,
    target_energy FLOAT,
    target_instrumentalness FLOAT,
    target_key FLOAT,
    target_liveness FLOAT,
    target_loudness FLOAT,
    target_mode FLOAT,
    target_popularity FLOAT,
    target_speechiness FLOAT,
    target_tempo FLOAT,
    target_time_signature FLOAT,
    target_valence FLOAT,
    target_genre VARCHAR(50),
    param_precision FLOAT
); 

create table if not exists users (
temp BOOL,
id VARCHAR(50),
spotify_id VARCHAR(50),
email VARCHAR (50),
ads BOOL,
phash VARCHAR(100),
playlists VARCHAR(50)[][]
);

create table if not exists transactions (
transaction_id VARCHAR(50),
location VARCHAR(50),
user_id VARCHAR(50)
);


