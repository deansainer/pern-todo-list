create database todo;

create table todo(
    id serial primary key,
    description varchar(255),
    is_completed: boolean
);
