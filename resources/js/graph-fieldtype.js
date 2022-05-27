import Graph from './templates/graph-fieldtype.vue';

Statamic.booting(() => {
    Statamic.$components.register('graph-fieldtype', Graph);
});