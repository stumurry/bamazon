const db = require("./models");
var inquirer = require("inquirer");

async function doIt() {
  try {
    // show customer list;

    var allItems = await db.products.findAll();

    console.log("Listing contents");
    console.log(allItems.map(s => s.dataValues));

    var messages = [
      { name: "id", message: "What ID of the product would you like to buy?" },
      {
        name: "units",
        message: "how many units of the product they would like to buy?"
      }
    ];

    var resp = await inquirer.prompt(messages);

    console.log(resp);

    var items = allItems.filter(s => s.item_id == parseInt(resp.id));

    if (!items || items.length == 0) {
        console.log('Item not found.  Please try again.');

        return;
    }
    
    var item = items[0];
    console.log(item);

    var count = parseInt(item.stock_quantity);
    console.log(count);

    var requestedCount = parseInt(resp.units);

    if (requestedCount > count) {
        console.log('Insufficient quantity!');
        return;
    }

    var updatedCount = requestedCount - count;
    console.log('updatedCount');
    console.log(updatedCount);

    await item.update( { stock_quantity : updatedCount });

    console.log('Your total cost is: ' + requestedCount * parseFloat(item.price) );

    // done

  } catch (ex) {
    console.log(ex);
  } finally {
    // otherwise Node will hang on Mysql datasource connection.
    db.sequelize.close();
  }
}
// tie async code by using promise chain.
doIt().then(s => console.log(s));
