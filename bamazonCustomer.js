var inquirer = require ("inquirer");

var mysql = require ("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_db",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
 });

 connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    inquirer.prompt([{
        type: "list",
        message: "What would you like to do?",
        choices: ["choose the items you would like to purchase", "choose the quantity you would like"],
        name: "action"
      }
    ]).then(function(res) {
      console.log(res);
      if(res.action === 'choose the items you would like to purchase') {
        var query = connection.query(
            `SELECT * FROM items`,
            {},
            function(err, res) {
                var itemList = [];
                for(var i = 0; i < res.length; i++) {
                    itemList.push(res[i].product_name);
                }
 
                inquirer.prompt([
                    {
                        type: "list",
                        message: "Which product do you want to purchase?",
                        choices: itemList,
                        name: "product"
                    }
                ]).then(function(res){
                    console.log(res);
                });
            });
      } else {
          inquirer.prompt([
          {
              type: "output",
              message: "Product Name",
              name: "name"
          },
          {
              type: "output",
              message: "Bid Price",
              name: "price"
          },
          {
              type: "list",
              message: "Condition: New/Used",
              choices: ["New", "Used"],
              name: "condition"
          }
          ]).then(function(res) {
            var department_name = res.department_name;
            var product_name = res.product_name;
            var price = res.price;
            var stock_quantity = res.stock_quantity;

 
            var queryString = `INSERT INTO products(department_name, product_name, price, stock_quantity) VALUES("${department_name}", "${product_name}", "${price}", "${stock_quantity}")`
            var query = connection.query(
                queryString,
                {},
                function(err, res) {
                    console.log(err);
                    console.log(res.affectedRows + " product inserted!\n");
                });
            });
        }
 
    });
 });

    