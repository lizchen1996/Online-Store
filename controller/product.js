const query = require('../db/conn.js');

module.exports = {

  async getProducts(productObj){
    let{name, price, description} = productObj;
    if(productObj){
      let sql = "select "
      let resultData = await query(sql,[name]);

    }else{
      let sql = "select "
      let resultData = await query(sql,[name]);
    }
    return resultData;
  },

  addProducts(){
    
  }

};
