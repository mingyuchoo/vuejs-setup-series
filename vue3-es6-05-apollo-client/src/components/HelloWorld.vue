<template>
  <div class="hello">
    <h1>Hello</h1>
    <p>Hello, World</p>
    <pre>{{ result.task }}</pre>
  </div>
</template>

<script>
/*
- URL: http://localhost:8080/v1/graphql
- Query:
query MyQuery {
  task {
    id
    title
    content
  }
}
- Response:
{
  "data": {
    "task": [
      {
        "id": 1,
        "title": "Greeting",
        "content": "Hello, World"
      }
    ]
  }
}
*/
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
export default {
  setup() {
    const { result } = useQuery(gql`
      query MyQuery {
        task {
          id
          title
          content
        }
      }
    `);
    return {
      result,
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
