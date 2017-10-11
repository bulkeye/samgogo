
create table acc_name (
accout_id serial primary key not null ,
firstName text not null constraint firstname_alphabetic check (firstName ~* '[a-z]+ *[a-z]*'),
lastName text not null constraint lastName_alphabetic check (lastName ~* '[a-z]+ *[a-z]*'),
uuid UUID not null default uuid_in(md5(random()::text || now()::text)::cstring),
password text not null constraint pwd_format check (password ~* '[a-z]{1,}' and  password ~* '[0-9]{1,}'  and  password ~* '[^a-z0-9]{1,}' and length(password) >=7 and password !~* '[ ]'),
email text not null constraint email_format check (email ~* '.+[@][a-z0-9]+[.][a-z0-9]+[.a-z0-9]*[a-z0-9]+$'),
accCreatedDate timestamptz not null default now(),
isActive boolean not null
)


create table acc_logindateTime(
id serial primary key not null,
login_datetime timestamptz not null default now(),
account_id bigint not null REFERENCES acc_name 
)


--encryption function
select encode(hmac('abc','sammy5182', 'sha512'),'hex') 
select encode(digest('abc', 'sha512'), 'hex')

select crypt('ABCDE12345', gen_salt('bf'))
select '$2a$06$6nSznHgE8NVMnweNpkl8QeCMat8qq819HynScCV2C2oZ8rJ9IJPiS' = crypt('723456', '$2a$06$6nSznHgE8NVMnweNpkl8QeCMat8qq819HynScCV2C2oZ8rJ9IJPiS')


select pgp_sym_encrypt('hello', 'sammy5182' ) 
select pgp_sym_decrypt_bytea(decode((encode(pgp_sym_encrypt('hello', 'sammy5182' ),'hex')),'hex'), 'sammy5182')

select now(),uuid_in(md5(random()::text || now()::text)::cstring)
select  gen_random_uuid() 
    