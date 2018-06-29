'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => Up(queryInterface),
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('products', null, {});
    */
  }
};

async function Up(queryInterface) {
  await queryInterface.bulkInsert('products', [
    {   
      item_id: 1, 
      product_name:'Canon EOS 80D 24.2MP Digital SLR Camera - Black (Body Only)', 
      department_name: 'DSLR Cameras',  
      price: '739.99', 
      stock_quantity:2, 
      CreatedAt: new Date(), 
      UpdatedAt: new Date(),
  },
  {   
      item_id: 2, 
      product_name:"DAVID YURMAN Women's Chatelaine Pendant Necklace w/ 8mm Pearl $325 NEW", 
      department_name: 'Fine Jewelry',  
      price: '194.97', 
      stock_quantity:2, 
      CreatedAt: new Date(), 
      UpdatedAt: new Date(),
  },
  {   
      item_id: 3, 
      product_name:'Gucci Bamboo By Gucci 2.5 Oz Eau De Parfum Spray Perfume Women NEW SEALED BOX', 
      department_name: "Women's Fragrances",  
      price: '30.00', 
      stock_quantity:4,
      CreatedAt: new Date(), 
      UpdatedAt: new Date(),
  },
  {   
      item_id: 4, 
      product_name:'Gucci Bamboo By Gucci 2.5 Oz Eau De Parfum Spray Perfume Women NEW SEALED BOX', 
      department_name: "Women's Fragrances",  
      price: '30.00', 
      stock_quantity:4,
      CreatedAt: new Date(), 
      UpdatedAt: new Date(), 
  },
  {   
      item_id: 5, 
      product_name:'New Canon Rebel T6 SLR Camera Premium Kit w/ 2Lens 18-55& 75-300mm bag', 
      department_name: 'SD Card',  
      price: '469.00', 
      stock_quantity:9,
      CreatedAt: new Date(), 
      UpdatedAt: new Date(), 
  },

   
  ], {});

}

