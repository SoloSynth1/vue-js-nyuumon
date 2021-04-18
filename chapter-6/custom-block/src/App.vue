<docs>
# HelloWorldコンポーネント

## 概要
これはコンポーネントの使用方法について書かれたドキュメントです。

## 使用方法
...
</docs>

<template>
  <div id="hello">
    <p class="message">メッセージ： {{ msg }}</p>
    <p v-html="docs"></p>
  </div>
</template>

<script>
import marked from 'marked';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      docs: marked(this.$options.__docs),
      msg: 'こんにちは！'
    }
  }
}
</script>

<style scoped>
.message {
  color: #42b983;
}
</style>
