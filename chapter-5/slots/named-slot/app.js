var MyPage = {
    template: `
        <div>
            <header>
                <!--  ヘッダーのスロット（名前付きのスロット）  -->
                <slot name="header"></slot>
            </header>
            <main>
                <!--  ボディのスロット  -->
                <slot></slot>
            </main>
            <footer>
                <!--  フッターのスロット（名前付きのスロット）  -->
                <slot name="footer"></slot>
            </footer>
        </div>
    `
};

new Vue({
    el: '#app',
    components: {
        MyPage: MyPage
    }
});