# bamazon

Mysql Sequelize CLI

`npm install --save mysql2`

`npm install --save sequelize`

`npm install -g sequelize-cli`

`sequelize init`

```
sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string

sequelize model:generate --name products --attributes department_name:string,product_name:string,price:string,stock_quantity:string
```

After generating key, make sure to rename the primary key inside models/products.js

```
    item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
```

Be sure to change the migration file `<datestamp>-create-products.js`

```
    item_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
```

edit the `config/config.js` and set the username and password of your Mysql or database instance.

```
 "development": {
    "username": "root",
    "password": null,
    "database": "bamazon",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "bamazon",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "bamazon",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
```

You can now finally run your first migration!

`sequelize db:migrate`

One suggestion would be to place this command as a test script within your `package.json` so when you write tests it will automatically execute when you start developing your codebase.

```
"scripts": {
    "test": "sequelize db:migrate && exit 1"
  },
```

When you make changes, simply execute the line below:

`npm test`

Many CI frameworks like Travis will execute this call, so if its attached to your production server on autodeploy from Github, the databases tables get automatically updated. Most CI are set to go off on commits to `master` so when everyone is happy, simply push to master and let the magic begin. Travis gives you a nice PASS/FAIL badge that you can hyperlink on your dash board.

Add seed data

sequelize seed:generate --name products

Open your `/seeders/<date>-products.js` and add the following data.

```
{
    item_id: 1,
    product_name:'Canon EOS 80D 24.2MP Digital SLR Camera - Black (Body Only)',
    department_name: 'DSLR Cameras',  
    price: 739.99,
    stock_quantity:2,
    CreatedAt: new Date(),
    UpdatedAt: new Date(),
},
{
    item_id: 2,
    product_name:'DAVID YURMAN Women's Chatelaine Pendant Necklace w/ 8mm Pearl $325 NEW',
    department_name: 'Fine Jewelry',  
    price: 194.97,
    stock_quantity:2,
    CreatedAt: new Date(),
    UpdatedAt: new Date(),  
},
{
    item_id: 3,
    product_name:'Gucci Bamboo By Gucci 2.5 Oz Eau De Parfum Spray Perfume Women NEW SEALED BOX',
    department_name: 'Women's Fragrances',  
    price: 30.00,
    stock_quantity:4,
    CreatedAt: new Date(),
    UpdatedAt: new Date(),  
},
{
    item_id: 4,
    product_name:'Gucci Bamboo By Gucci 2.5 Oz Eau De Parfum Spray Perfume Women NEW SEALED BOX',
    department_name: 'Women's Fragrances',  
    price: 30.00,
    stock_quantity:4,
    CreatedAt: new Date(),
    UpdatedAt: new Date(),
},
{
    item_id: 5,
    product_name:'New Canon Rebel T6 SLR Camera Premium Kit w/ 2Lens 18-55& 75-300mm bag',
    department_name: 'SD Card',  
    price: 469.00,
    stock_quantity:9,
    CreatedAt: new Date(),
    UpdatedAt: new Date(),  
},
```

After the data is declared in your seed migration, execute the following statement.

`sequelize db:seed:all`
