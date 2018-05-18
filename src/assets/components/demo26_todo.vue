<template>
    <div>
        <todo-input></todo-input>
        <todo-list></todo-list>
    </div>
</template>
<script>
import todoInput from './demo26_todo-input';
import todoList from './demo26_todo-list';
    export default{
        components:{todoInput,todoList}
    }
</script>