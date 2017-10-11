create table acc_name (
accout_id serial primary key not null ,
firstName text not null constraint firstname_alphabetic check (firstName ~* '[a-z]+ *[a-z]*'),
lastName text not null constraint lastName_alphabetic check (lastName ~* '[a-z]+ *[a-z]*'),
uuid UUID not null default uuid_in(md5(random()::text || now()::text)::cstring),
password text not null,
security_qustion text not null,
security_answer text not null,
userCreatedDate timestamptz not null default now() 
)

create table acc_logindateTime(
id serial primary key not null,
login_datetime timestamptz not null default now(),
account_id bigint not null REFERENCES acc_name 
)
