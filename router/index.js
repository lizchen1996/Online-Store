const url = require("url");

function handleRequest(req, res){
  let urlObj = url.parse(req.url, true);
  let method = req.method;
  console.log(method);
  if(method === 'GET'){
    if(urlObj.pathname === '/'){
      return {"a": "test"};
    }else if(urlObj.pathname === '/'){
      
    }
  }else if (method === 'POST') {
    if(urlObj.pathname === '/'){

    }else if(urlObj.pathname === '/'){

    }
  }else if (method === 'DELETE') {
    if(urlObj.pathname === '/'){

    }else if(urlObj.pathname === '/'){

    }
  }else{
    if(urlObj.pathname === '/'){

    }else if(urlObj.pathname === '/'){

    }
  }
}

module.exports = handleRequest;
