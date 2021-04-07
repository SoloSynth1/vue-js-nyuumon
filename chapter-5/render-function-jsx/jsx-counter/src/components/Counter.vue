<script>
export default {
  name: "Counter",
  data: function () {
    return {
      counter: 0,
    }
  },
  // eslint-disable-next-line no-unused-vars
  render: function (h) {
    return <div>
      <button on-click={() => this.counter+=1}>
        クリックでカウントアップ
      </button>
      <p>
        クリックされた回数：
        <b>{this.counter} 回</b>
      </p>
    </div>
  },
}
</script>