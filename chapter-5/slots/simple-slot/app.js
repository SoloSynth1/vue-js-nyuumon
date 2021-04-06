var MyButton = {
    template: `
        <button>
            <!--  親コンポーネントで渡されたコンテンツに指し替えられる  -->
            <slot>OK</slot>
        </button>
    `
};

new Vue({
    el: '#app',
    components: {
        MyButton: MyButton
    }
});