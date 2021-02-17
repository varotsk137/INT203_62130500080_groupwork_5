const app = {
    data() {
        return {
            images: [
                {image: './images/fullmoon.jpg', name: 'Lone Full moon in the night sky', fav: false},
                {image: './images/galaxy.jpg', name: 'Twinkles, That many star for you', fav: false},
                {image: './images/hillhouse.jpg', name: 'House in the sea of fogs', fav: false}
            ]
        }
    },
    methods: {
        toggleHeart(index){
            this.images[index].fav = !this.images[index].fav
        }
    },
    computed: {
        totalPhoto() {
            return this.images.length
        }
    }
}


var mountedApp = Vue.createApp(app).mount('#app');