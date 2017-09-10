<template>
    <div>
        <div v-if="!$subReady.things">Loading...</div>
        <div v-for="thing in things">
            <thingcard :thing="thing"></thingcard>
        </div>
        <input type="text" v-model="newThing">
        <button @click=addThing()>add this thing</button>
        <p><button @click="removeThing()">remove a thing</button></p>

    </div>
</template>
<script>
import { Things } from '../api/things.js';
window.Things = Things;
export default{
    data(){return {newThing:null}},
    meteor:{
        $subscribe:{
                'things':[]
            },
        things () {
            return Things.find({})
        }
    },
    methods:{
        addThing() {
            Things.insert({name:this.newThing});
        },
        removeThing(){
            athing=Things.findOne();
            Things.remove(athing._id);
        }
    }
}
</script>