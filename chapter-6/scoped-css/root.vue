<template>
  <div id="root">
    <h1 class="header">Root コンポーネント</h1>
    <p>これはRootコンポーネントです。</p>
    <Foo/>
    <Bar/>
  </div>
</template>

<script>
import Foo from "./foo";
import Bar from "./bar";

export default {
  components: {
    Foo,
    Bar
  }
};
</script>

<style>
#root {
  border: solid 1px blue;
  margin: 4px;
  padding: 4px;
}

.header {
  font-size: 200%;
}

p {
  text-decoration: underline;
}
</style>