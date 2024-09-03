<template>
    <li>{{ todo.text }}</li>
</template>

<script>
    export default {
        name: 'TodoItem',
        props: {
            todo: {
                type: Object,
                required: true
            }
        }
    };
</script>

<style scoped>
    li {
        background-color: white;
        margin: 10px 0;
        padding: 10px;
        border: 1px solid #ddd;
    }
</style>