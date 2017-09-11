import { Things } from '../imports/api/things.js'

Meteor.startup(()=>{
    if (Things.find().count() === 0){
        const fixtures = [
            {name: 'cats', merit: 5},
            {name: 'dogs', merit: 68},
            {name: 'The Federal Reserve', merit: 2},
            {name: 'plutonium', merit: 76}
        ]
        for (fixture of fixtures){
            Things.insert(fixture);
        }
    }
});