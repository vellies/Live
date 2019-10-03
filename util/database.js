const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

//Error function
const mongoConnect = (callback) =>{
    MongoClient.connect(
        'mongodb+srv://vellies:vellies113.@live01-jjkmg.mongodb.net/Live?retryWrites=true&w=majority')
        .then(client=> {
            console.log('Successfully connected Cloud MongoDB!');
            _db = client.db();
            callback(client);//client means access database connection
        }).catch(err => { 
            console.log(err); 
            throw err;
        });
};

const getDb = () =>{
    if(_db){
        return _db;
    }
    throw 'No Database Found!';
}

exports.MongoConnect = mongoConnect;
exports.getDb = getDb;