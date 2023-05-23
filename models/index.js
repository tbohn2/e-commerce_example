// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Sets up the association that Product belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
})
// Sets up the association that Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});
// Sets up the association that Products belongToMany Tags through ProductTag
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_tags'
})

// Sets up the association that Tags belongToMany Products through ProductTag
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'products_with_tag'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
