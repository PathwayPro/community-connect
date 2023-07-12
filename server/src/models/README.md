# Models

For creating and migrating models there was use Sequelize ORM.
API: https://sequelize.org/api/v6/identifiers

# DB connection

All connection settings are located in the `database.js` config.

# Create new Model by Sequelize CLI

```bash
yarn run sequelize-cli model:generate --name Role --attributes name:string,status:string,deletedAt:Date
```

This example will create a `Role model` inside `/src/models` folder with next attributes(columns):

###

Model name: Role
Table name: Roles
Attributes:
id: number, autoincremented, added by default, PK
name: string
status: string
createdAt: Date, added by default
updatedAt: Date, added by default
deletedAt: Date

###

Also at the same time ф migration file `20230705221514-create-role` for this model will be created
inside `/src/migrations` folder

# Migrate Models and model's updates to the DB

## Running all migrations

```bash
yarn run sequelize-cli db:migrate
```

## Running migration by name `20230705221514-create-role`

```bash
yarn run sequelize-cli db:migrate --name 20230705221514-create-role
```
