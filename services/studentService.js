const { ObjectId } = require('mongodb');
var config = require("../config/setting.json");
class studentService {
    databaseConnection = require('./../database/database');
    student = require('../apps/model/student');

    client;
    studentDatabase;
    studentCollection;
    constructor() {
        this.client = this.databaseConnection.getMongoClient();
        this.studentDatabase = this.client.db(config.mongodb.database);
        this.studentCollection = this.studentDatabase.collection("student");
    }
    async deleteStudent(id) {
        return await this.studentCollection.deleteOne({ "_id": new ObjectId(id) });
    }
    async updateStudent(student) {
        return await this.studentCollection.updateOne({ "_id": new ObjectId(student._id) }, { $set: student });
    }
    async insertStudent(student) {
        return await this.studentCollection.insertOne(student);
    }
    async getStudent(id) {
        return await this.studentCollection.findOne({ "_id": new ObjectId(id) }, {});
    }
    async getStudentList() {
        const cursor = await this.studentCollection.find({}, {}).skip(0).limit(100);
        return await cursor.toArray();
    }
}
module.exports = studentService;
