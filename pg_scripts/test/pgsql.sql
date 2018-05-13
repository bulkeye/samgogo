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

insert into acc_name (firstName,lastName,password,email,isActive) values ('a','a','$2a$06$zs31FLkOBVUXVUGCzlPAuOfjrLricAYnppXHPMUvx89gDwaQohJ0C','1@b',true)
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
select encode(hmac('abc','111111', 'sha512'),'hex') 
select encode(digest('abc', 'sha512'), 'hex')

select crypt('ABCDE12345', gen_salt('bf'))
select '$2a$06$6nSznHgE8NVMnweNpkl8QeCMat8qq819HynScCV2C2oZ8rJ9IJPiS' = crypt('723456', '$2a$06$6nSznHgE8NVMnweNpkl8QeCMat8qq819HynScCV2C2oZ8rJ9IJPiS')


select pgp_sym_encrypt('hello', '111111' ) 
select pgp_sym_decrypt_bytea(decode((encode(pgp_sym_encrypt('hello', '11111' ),'hex')),'hex'), '11111')

select now(),uuid_in(md5(random()::text || now()::text)::cstring)
select  gen_random_uuid() 
    




CREATE OR REPLACE FUNCTION public.fn_isloginsuccessful(text, text)
 RETURNS json
 LANGUAGE plpgsql
AS $function$
declare
    --select password from test.public.acc_name where email = 'iuf_5180@yahoo.com.au'
    --select * From public.acc_name
    --select isLoginSucceed('qiuf_5180@yahoo.com.au','123456')
    
    txt_tblcatalog          CONSTANT text := 'test';
    txt_tblschema           CONSTANT text := 'public';
    txt_userProfileTbl      CONSTANT text := 'view_userProfile';
    txt_userProfileTblFull  CONSTANT text := txt_tblcatalog || '.' || txt_tblschema || '.' || txt_userProfileTbl;
    
    arr_jsonKeys text[];
    arr_jsonVals text[];
    arr_jsonValsFinal text[];
    
    

    
    txt_cryptedPw text;
    bl_isLoginSucceed boolean;
   
    json_emailNotExists json;
    json_returnVal json;
    txt_qrystr text := '';
    
    
    test text;
    

    
begin
    --get cryted pw 
    txt_qrystr = 'select password from '  || txt_userProfileTblFull || ' where email = ''' || $1 || ''''; 
    raise notice '% : %',now(),txt_qrystr;
    execute txt_qrystr into txt_cryptedPw;
    raise notice '% : %',now(),txt_cryptedPw;
    
    --check if email exists in database
    if txt_cryptedPw is null then
        json_emailNotExists = ('{"error": "email ' || $1 || ' is not registered in our database."}')::json;
        raise notice '% : %',now(),json_emailNotExists;
        return json_emailNotExists;
    end if;
    
    --check if login is successful 
    txt_qrystr = 'select ''' || txt_cryptedPw || ''' = crypt(''' || $2 || ''', ''' || txt_cryptedPw || ''')' ;
    raise notice '% : %',now(),txt_qrystr;
    execute txt_qrystr into bl_isLoginSucceed;

    --json keys array
    txt_qrystr = 'select array[''firstname'',''lastname'',''uuid'',''email'',''isactive'',''issuccessful'']';
    raise notice '% : %',now(),txt_qrystr;
    execute txt_qrystr into arr_jsonKeys ;
    
    
    --json values array
    txt_qrystr = 'select string_to_array(regexp_replace(regexp_replace(t::text,''^[(]{1,1}'',''''),''[)]{1,1}$'',''''),'','') from (
                        select firstname,lastname,uuid,email,isactive::text from ' || txt_userProfileTblFull || ') t ';
    raise notice '% : %',now(),txt_qrystr;                    
    execute txt_qrystr into arr_jsonVals;
    
    --merge 2 value array with isSuccessful value
    arr_jsonValsFinal = (select array_append(arr_jsonVals::text[],bl_isLoginSucceed::text));
    raise notice '% : %',now(),arr_jsonValsFinal ;
   
    raise notice '% : % : %',now(),arr_jsonKeys, arr_jsonValsFinal ;
    
    --return json object
    json_returnVal = (select json_object(arr_jsonKeys::text[],arr_jsonValsFinal::text[]));
    
    return json_returnVal ;
    
end;
$function$
