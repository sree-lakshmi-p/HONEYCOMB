const product = require("./product_details");
const properties = require("./product_properties");
const categories = require("./categories");
const manufacturer = require("./manufacturer");
const cart = require("./cart");
const user = require("./userdata");



const db = require("../connector");

product.hasOne(properties);
product.belongsTo(categories);

product.belongsToMany(manufacturer, {
    through: "product_manufacturer",
    foreignKey: "product_id",
    otherKey: "manufacturer_id",
    timestamp: false
})

manufacturer.belongsToMany(product, {
    through: "product_manufacturer",
    foreignKey: "manufacturer_id",
    otherKey: "product_id",
    timestamp: false
})

product.belongsToMany(user, {
    through: cart,
    foreignKey: "product_id",
    otherKey: "user_id",
    timestamp: false
})

user.belongsToMany(product, {
    through: cart,
    foreignKey: "user_id",
    otherKey: "product_id",
    timestamp: false
})

db.sync();
