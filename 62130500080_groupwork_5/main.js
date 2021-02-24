const app = {
    data() {
        return {
            images: [{
                    id: 1,
                    image: './images/fullmoon.jpg',
                    name: 'Lone Full moon in the night sky',
                    location: 'Shush, Khuzestan Province, Iran',
                    fav: false,
                    show: true
                },
                {
                    id: 2,
                    image: './images/galaxy.jpg',
                    name: 'Twinkle Twinkles, That many stars for you',
                    location: 'Zolotaya Dolina, Primorsky kray, Russia',
                    fav: false,
                    show: true
                },
                {
                    id: 3,
                    image: './images/hillhouse.jpg',
                    name: 'Lone house in the sea of fogs',
                    location: 'Ojstrica viewpoint, Slovenia',
                    fav: false,
                    show: true
                },{
                    id: 4,
                    image: './images/twilightbeach.jpg',
                    name: 'Twilight Beach',
                    location: 'Twilight Beach Rd, West Beach WA 6450, Australia, West Beach',
                    fav: false,
                    show: true
                }
            ],
            searchModeOn: false,
            searchValue: '',
            canvasImg: null
        }
    },
    methods: {
        toggleHeart(index) {
            this.images[index].fav = !this.images[index].fav
        },
        toggleSearchMode() {
            if (this.searchModeOn) {
                this.images.forEach(image => {
                    image.show = true
                });
            }
            this.searchModeOn = !this.searchModeOn;
        },
        searchPhoto() {
            // Check condition if input is null then just return //
            if (this.searchValue == '') {
                return
            }
            // Push image which include the values in new array //
            this.images.forEach(image => {
                if (image.name.toLowerCase().includes(this.searchValue.toLowerCase()) ||
                    image.location.toLowerCase().includes(this.searchValue.toLowerCase())) {
                    image.show = true
                } else {
                    image.show = false
                }
            })
            this.searchValue = ''
        },
        hasPhoto() {
            if(this.images.filter(i => i.show).length != 0){return true}
            return false
        },
        selectImg(index) {
            this.canvasImg = this.images[index]
        },
        closeCanvas(){
            this.canvasImg = null
        },
        previous(id){
            if(id == this.images[0].id){
                this.canvasImg = this.images[this.images.length-1]
            } else {
                for(let i = 0 ; i < this.images.length ; i++){
                    if(id == this.images[i].id){
                        this.canvasImg = this.images[i-1]
                        return
                    }
                }
            }
        },
        next(id){
            if(id == this.images[this.images.length-1].id){
                this.canvasImg = this.images[0]
            } else {
                for(let i = 0 ; i < this.images.length ; i++){
                    if(id == this.images[i].id){
                        this.canvasImg = this.images[i+1]
                        return
                    }
                }
            }
        }
    },
    computed: {
        showGallery() {
            return this.images
        },
        totalPhoto() {
            return this.images.filter(i => i.show).length
        },
        totalLike() {
            return this.images.filter(i => i.fav).length
        }
        
    }
}


var mountedApp = Vue.createApp(app).mount('#app');