module.exports = {
	Bot: {
		token: 'e',
		prefix: ["hikari", '$getServerVar[prefix]'],
		intents: "all" , 
    suppressAllErrors: true,
    database: {
        type:'default',
        db:require('dbdjs.db'),
        path:"./database/",
        tables:["main"],
        promisify:false
    }
	  }
}