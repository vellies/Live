const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

//Error function
const MongoConnect = (callback) =>{
    MongoClient.connect(
        'mongodb+srv://vellies:vellies113.@live01-jjkmg.mongodb.net/test?retryWrites=true&w=majority')
        .then(client=> {
            console.log('Successfully connected Cloud MongoDB!');
            callback(client);//client means access database connection
        }).catch(err => { 
            console.log(err); 
        });
};

module.exports = MongoConnect;