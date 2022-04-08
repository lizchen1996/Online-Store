function displayItem(req, res) {

}

function queryProduct(req, res) {
  let resMsg = {},
    filters = "",
    sqlStatement = "";

  // detect any filter on the URL line, or just retrieve the full collection
  query = request.url.split('?');
  if (query[1] !== undefined) {
    filters = querystr.parse(query[1]); // parses URL query to a collection of key, value pairs
    sqlStatement = "SELECT JSON_ARRAYAGG(JSON_OBJECT('name', name, 'role', role, 'salary', salary)) FROM employees WHERE " + filters.stringify();
  } else {
    sqlStatement = "SELECT JSON_ARRAYAGG(JSON_OBJECT('name', name, 'role', role, 'salary', salary)) FROM employees;";
  }
  dBCon.query(sqlStatement, function(err, result) {
    if (err) {
      resMsg.code = 503;
      resMsg.message = Service Unavailable;
      resMsg.body = "MySQL server error: CODE = " + err.code + " SQL of the failed query: " + err.sql + " Textual description: " + err.sqlMessage;
    } else {
      resMsg.body = (result);
    }
    return resMsg;
  });
}

module.exports = {
  displayItem: displayItem,
  queryProduct: queryProduct
}
