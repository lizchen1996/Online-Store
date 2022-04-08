const query = require('../db/conn');

module.exports = {

  async getProductList(urlParams) {
    let {
      name,
      price,
      catagory
    } = urlParams;

    let sql = "select * from products where 1=1";
    
    if (name) {
      sql += " and name=?";
    }
    if (price) {
      sql += " and price=?";
    }
    if (catagory) {
      sql += " and catagory=?";
    }

    let resultData = await query(sql, [name, price, catagory]);
    return resultData;
  },

  async addProduct(productObj) {
    let {
      name,
      price,
      description
    } = productObj;
    let sql = "insert into products (name, price, description) values (?,?,?)";
    let resultData = await query(sql, [name, price, description]);
    if (resultData) {
      return {
        msg: 'Success'
      }
    } else {
      return {
        msg: "Fail"
      }
    }
  },

  async updateProduct(id, productObj) {
    let {
      name,
      price,
      description
    } = productObj;
    let sql = "update products set name = ?, price = ?, description = ? where id = ?";
    let resultData = await query(sql, [name, price, description, id]);
    if (resultData.affectedRows > 0) {
      return {
        msg: 'Success'
      }
    } else {
      return {
        msg: "Fail"
      }
    }
  },

  async deleteProduct(id) {
    let sql = "delete from products where id = ?";
    let resultData = await query(sql, [id]);
    if (resultData.affectedRows > 0) {
      return {
        msg: 'Success'
      }
    } else {
      return {
        msg: "Fail"
      }
    }
  }
};
