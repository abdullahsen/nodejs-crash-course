const url = require('url');

const myUrl = new URL('http://website.com/hello.html?id=100&status=active');

//Serialized Url
console.log(myUrl.href);
console.log(myUrl.toString());

//Host(Root domain)
console.log(myUrl.host);

//Hostname(does not get port)
console.log(myUrl.hostname);

//Path name
console.log(myUrl.pathname);

//Serialized Query
console.log(myUrl.search);

//Params Object
console.log(myUrl.searchParams);

//Add param
myUrl.searchParams.append("abc","123");
console.log(myUrl.searchParams);

//Loop through params
myUrl.searchParams.forEach(((value, key) => console.log(`${key}: ${value}`)));