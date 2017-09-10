<template xmlns:v-for="http://www.w3.org/1999/xhtml">
    <div>
        <div v-if="!$subReady.things">Loading...</div>
        <div v-for="thing in things">
            <thingcard :thing="thing"></thingcard>
        </div>
    </div>
</template>
<script>
import { Things } from '../api/things.js';
window.Things = Things;
export default{
    meteor:{
        $subscribe:{
                'things':[]
            },
        things () {
            return Things.find({})
        }
    },
}
</script>