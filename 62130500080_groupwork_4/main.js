const app = {
    data() {
        return {
            images: [{
                    image: './images/fullmoon.jpg',
                    name: 'Lone Full moon in the night sky',
                    location: 'Shush, Khuzestan Province, Iran',
                    fav: false
                },
                {
                    image: './images/galaxy.jpg',
                    name: 'Twinkle Twinkles, That many stars for you',
                    location: 'Zolotaya Dolina, Primorsky kray, Russia',
                    fav: false
                },
                {
                    image: './images/hillhouse.jpg',
                    name: 'House in the sea of fogs',
                    location: 'Unknown',
                    fav: false
                }
            ],
            searchModeOn: false,
            searchValue: '',
            searchImages: [{
                    image: './images/fullmoon.jpg',
                    name: 'Lone Full moon in the night sky',
                    location: 'Shush, Khuzestan Province, Iran',
                    fav: false
                },
                {
                    image: './images/galaxy.jpg',
                    name: 'Twinkle Twinkles, That many stars for you',
                    location: 'Zolotaya Dolina, Primorsky kray, Russia',
                    fav: false
                },
                {
                    image: './images/hillhouse.jpg',
                    name: 'House in the sea of fogs',
                    location: 'Unknown',
                    fav: false
                }
            ]
        }
    },
    methods: {
        toggleHeart(index) {
            this.images[index].fav = !this.images[index].fav
        },
        toggleSearchMode() {
            if (this.searchModeOn) {
                this.searchImages = this.images
            }
            this.searchModeOn = !this.searchModeOn;
        },
        searchPhoto() {
            // Check condition if input is null then just return //
            if (this.searchValue == '') {
                return
            }
            this.searchImages = [];
            // Push image which include the values in new array //
            this.images.forEach(image => {
                console.log(image.name);
                if (image.name.toLowerCase().includes(this.searchValue.toLowerCase()) 
                || image.location.toLowerCase().includes(this.searchValue.toLowerCase())) {
                    this.searchImages.push(image)
                }
            })
            this.searchValue = ''
        },
        hasPhoto(){
            if(this.searchImages.length == 0){
                return true
            }
            return false
        }
    },
    computed: {
        totalPhoto() {
            return this.searchImages.length
        },
        showGallery() {
            return this.searchImages
        }
    }
}


var mountedApp = Vue.createApp(app).mount('#app');