import {Meteor} from 'meteor/meteor';
import {Vue} from 'meteor/akryum:vue';
import VueMeteorTracker from 'vue-meteor-tracker';
// Main app
import App from '/imports/ui/App.vue';

Meteor.startup(() => {
    Vue.use(VueMeteorTracker);
    window.vueapp = new Vue(App).$mount(document.body);
});