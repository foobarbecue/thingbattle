export const Things = new Mongo.Collection('things');

if (Meteor.isServer){
    Meteor.publish('things', function () {
        return Things.find();
    });
}