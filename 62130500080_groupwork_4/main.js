const app = {
    data() {
        return {
            images: [
                {image: './images/fullmoon.jpg', name: 'Lone Full moon in the night sky',location:'Shush, Khuzestan Province, Iran', fav: false},
                {image: './images/galaxy.jpg', name: 'Twinkle Twinkles, That many stars for you',location:'Zolotaya Dolina, Primorsky kray, Russia', fav: false},
                {image: './images/hillhouse.jpg', name: 'House in the sea of fogs',location:'Unknown', fav: false}
            ],
            searchModeOn: false
        }
    },
    methods: {
        toggleHeart(index){
            this.images[index].fav = !this.images[index].fav
        },
        toggleSearchMode(){
            this.searchModeOn = !this.searchModeOn;
        }
    },
    computed: {
        totalPhoto() {
            return this.images.length
        }
    }
}


var mountedApp = Vue.createApp(app).mount('#app');