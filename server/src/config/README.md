# Setup dev env to work with Postgres

## Start Postgress and login:

`psql postgres`

You’ll see that you have entered into a new connection.
You are now inside `psql` in the `postgres` database.
The prompt ends with a `#` to denote that you logged in as the superuser

## Check what database, user, and port we’ve connected

`postgres=# \conninfo`

## Create a role called `root` and add option to create DB

`postgres=# CREATE ROLE root WITH LOGIN PASSWORD 'root';`
`ALTER ROLE root CREATEDB;`

## Cnnect postgres with root

From default terminal connection run:

`psql -d postgres -U root`
