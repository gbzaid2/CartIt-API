const {mongoose} = require("../database/dbSetup.js")
const relatedProductsSchema = new mongoose.Schema({
  product_id: { type: Number, unique: true },
  related_ids: [Number]
});

let RelatedProducts = mongoose.model("Related", relatedProductsSchema);

exports.RelatedProducts = RelatedProducts;
