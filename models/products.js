"use strict";
module.exports = (sequelize, DataTypes) => {
  var products = sequelize.define(
    "products",
      {
      item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      department_name: DataTypes.STRING,
      product_name: DataTypes.STRING,
      price: DataTypes.STRING,
      stock_quantity: DataTypes.INTEGER,
    },
    {}
  );
  products.associate = function(models) {
    // associations can be defined here
  };
  return products;
};
