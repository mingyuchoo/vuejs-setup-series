<template>
  <div class="hello">
    <h1>Tasks</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else-if="tasks">
      <ul v-for="task of tasks" v-bind:key="task.id">
        <li>{{ task.id }}</li>
        <li>{{ task.title }}</li>
        <li>{{ task.content }}</li>
        <li>{{ task.created_at }}</li>
        <li>{{ task.updated_at }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
/*
- URL: http://localhost:8080/v1/graphql
- Query:
query QueryTasks {
  tasks {
    id
    title
    content
    created_at
    updated_at
  }
}
- Response:
{
  "data": {
    "tasks": [
      {
        "id": 1,
        "title": "Greeting",
        "content": "Hello, World",
        "created_at": "2021-06-29T18:23:57.725089+00:00",
        "updated_at": "2021-06-29T18:23:57.725089+00:00"
      }
    ]
  }
}
*/
import { useQuery, useResult } from "@vue/apollo-composable";
import gql from "graphql-tag";
export default {
  setup() {
    const { result, loading, error } = useQuery(gql`
      query getTasks {
        tasks {
          id
          title
          content
          created_at
          updated_at
        }
      }
    `);
    const tasks = useResult(result, null, (data) => data.tasks);
    return {
      tasks,
      loading,
      error,
    };
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
