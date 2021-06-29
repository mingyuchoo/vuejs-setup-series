import { createApp } from "vue";
import VueApollo from "vue-apollo";

import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import App from "./App.vue";
import router from "./router";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "http://localhost:8080/v1/graphql",
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

export const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

new VueApollo({
  el: "#app",
  components: { App },
  provide: apolloProvider.provide(),
  template: "<App/>",
});

createApp(App).use(router).use(VueApollo).mount("#app");
