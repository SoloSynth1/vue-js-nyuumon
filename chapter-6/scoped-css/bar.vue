<template>
  <div class="bar">
    <h1 class="header">Barコンポーネント</h1>
    <p>これはBarコンポーネントです。</p>
    <Foo/>    <!--  Fooコンポーネントの利用。scriptブロックも要注目 -->
  </div>
</template>

<script>
import Foo from "./foo";
export default {      // FooコンポーネントをBarコンポーネントに登録
  components: {
    Foo
  }
};
</script>

<style scoped>
.bar {
  border: solid 1px red;
  margin: 4px;
  padding: 4px;
}

.header {
  font-size: 125%;
}
</style>