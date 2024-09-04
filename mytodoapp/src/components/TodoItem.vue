<template>
    <li @click="toggleComplete" :class="{ completed: todo.completed }">
        {{ todo.text }}
    </li>
</template>

<script>
    export default {
        name: 'TodoItem',
        props: {
            todo: {
                type: Object,
                required: true
            }
        },
        methods: {
            toggleComplete() {
                //this.$emit()
                this.$emit('toggle-complete', this.todo.id);
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
        cursor: pointer;
    }
    .completed {
        text-decoration: line-through;
        color: gray;
    }
</style>