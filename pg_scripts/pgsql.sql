drop table acc_logindateTime
drop table if exists  acc_name cascade ;

create table acc_name (
account_id serial primary key not null ,
firstName text not null constraint firstname_alphabetic check (firstName ~* '[a-z]+ *[a-z]*'),
lastName text not null constraint lastName_alphabetic check (lastName ~* '[a-z]+ *[a-z]*'),
uuid UUID not null default uuid_in(md5(random()::text || now()::text)::cstring),
password text not null constraint pwd_format check (password ~* '[a-z]{1,}' and  password ~* '[0-9]{1,}'  and  password ~* '[^a-z0-9]{1,}' and length(password) >=7 and password !~* '[ ]'),
email text not null constraint email_format check (email ~* '.+[@][a-z0-9]+[.][a-z0-9]+[.a-z0-9]*[a-z0-9]+$'),
accCreatedDate timestamptz not null default now(),
isActive boolean not null

insert into acc_name (firstName,lastName,password,email,isActive) values ('Feng','Qiu','$2a$06$zs31FLkOBVUXVUGCzlPAuOfjrLricAYnppXHPMUvx89gDwaQohJ0C','qiuf_5180@yahoo.com.au',true)
select * from acc_name

create table acc_logindateTime(
id serial primary key not null,
login_datetime timestamptz not null default now(),
account_id bigint not null REFERENCES acc_name on delete RESTRICT  --(CASCADE)
)

create table acc_logindateTime(
id serial primary key not null,
login_datetime timestamptz not null default now(),
account_id bigint not null REFERENCES acc_name on delete RESTRICT  --(CASCADE)
)

insert into acc_logindateTime (account_id) values (1)
select * from acc_logindateTime 



create table acc_lkp_auState(
id serial primary key not null,
state text not null unique,
constraint state check (state ~ '(^NSW$)|(^VIC$)|(^TAS$)|(^QLD$)|(^WA$)|(^SA$)|(^NT$)|(^ACT$)')
)
insert into acc_lkp_auState (state) select * from json_to_recordset('[{"state":"NSW"},{"state":"VIC"},{"state":"TAS"},{"state":"SA"},{"state":"WA"},{"state":"NT"},{"state":"QLD"},{"state":"ACT"}]') as x(state text); 
 
select * from acc_lkp_auState


--encryption function
select encode(hmac('abc','sammy5182', 'sha512'),'hex') 
select encode(digest('abc', 'sha512'), 'hex')

select crypt('ABCDE12345', gen_salt('bf'))
select '$2a$06$6nSznHgE8NVMnweNpkl8QeCMat8qq819HynScCV2C2oZ8rJ9IJPiS' = crypt('723456', '$2a$06$6nSznHgE8NVMnweNpkl8QeCMat8qq819HynScCV2C2oZ8rJ9IJPiS')


select pgp_sym_encrypt('hello', 'sammy5182' ) 
select pgp_sym_decrypt_bytea(decode((encode(pgp_sym_encrypt('hello', 'sammy5182' ),'hex')),'hex'), 'sammy5182')

select now(),uuid_in(md5(random()::text || now()::text)::cstring)
select  gen_random_uuid() 
    
