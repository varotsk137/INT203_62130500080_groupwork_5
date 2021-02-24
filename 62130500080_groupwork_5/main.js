const app = Vue.createApp({
    data() {
        return {
            images: [{
                id: 0,
                image: './images/fullmoon.jpg',
                name: 'Lone Full moon in the night sky',
                location: 'Shush, Khuzestan Province, Iran',
                fav: false,
                show: true
            },
            {
                id: 1,
                image: './images/galaxy.jpg',
                name: 'Twinkle Twinkles, That many stars for you',
                location: 'Zolotaya Dolina, Primorsky kray, Russia',
                fav: false,
                show: true
            },
            {
                id: 2,
                image: './images/hillhouse.jpg',
                name: 'Lone house in the sea of fogs',
                location: 'Ojstrica viewpoint, Slovenia',
                fav: false,
                show: true
            }, {
                id: 3,
                image: './images/twilightbeach.jpg',
                name: 'Twilight Beach',
                location: 'Twilight Beach Rd, West Beach WA 6450, Australia, West Beach',
                fav: false,
                show: true
            }
        ],
        searchValue: '',
        canvasImg: null,
        }
    },
    methods: {
        toggleHeart(index) {
            this.images[index].fav = !this.images[index].fav
        },
        selectImg(index) {
            this.canvasImg = this.images[index]
        },
        searchPhoto(searchValue){
            this.searchValue = searchValue
        },
        selectImg(index) {
            this.canvasImg = this.images[index]
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
            if(this.searchValue){
                return this.images.filter(image => image.name.toLowerCase().includes(this.searchValue.toLowerCase()) || 
                image.location.toLowerCase().includes(this.searchValue.toLowerCase()))
            } else {
                return this.images
            }
        },
        totalPhoto() {
            if(this.searchValue){
                return this.images.filter(image => image.name.toLowerCase().includes(this.searchValue.toLowerCase()) || 
                image.location.toLowerCase().includes(this.searchValue.toLowerCase())).length
            } else {
            return this.images.length
        }},
        
    }
}
)

