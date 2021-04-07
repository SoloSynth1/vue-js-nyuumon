Vue.component('my-button', {
    props: ['href', 'tag'],
    render: function (createElement) {
        var tag = this.tag || (this.href ? 'a' : 'button');
        return createElement(tag, {
            attrs: {
                href: this.href || '#'
            },
            on: {
                click: this.handleClick
            }
        }, this.$slots.default);
    },
    methods: {
        handleClick (event) {
            console.log("hi");
        }
    }
});

new Vue({
    el: '#app'
});