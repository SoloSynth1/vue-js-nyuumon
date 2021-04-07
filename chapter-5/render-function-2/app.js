new Vue({
    el: '#app',
    data: function () {
        return {
            counter: 0
        }
    },
    render: function (h) {
        return h('div', [
            h('button', {
                on: {
                    click: () => this.counter += 1
                }
            }, 'クリックでカウントアップ'),
            h('p', [
                'クリックされた回数：',
                h('b', this.counter + ' 回')
            ])
        ])
    }
});