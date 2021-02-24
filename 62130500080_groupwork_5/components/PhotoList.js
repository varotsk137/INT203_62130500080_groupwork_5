app.component('photo-list', {
    props: {
        images: Array
    },
    template:
        /*html*/`
    <div class="space-y-2.5 w-full pb-2">
        <div class="text-center mx-auto text-3xl py-5 font-bold" v-if="!hasPhoto()">No Photo.</div>
        <div v-for="(image,index) in showGallery" :key="image.id">
            <div class="image-container mx-auto space-x-3 items-center flex" v-if="image.show">
                <img :src="image.image" width="150" height="75" class="px-4" @click="$emit('select-img', image.id)">
                <div class="w-64 h-full space-y-1">
                    <p class="italic text-base font-semibold">{{ image.name }}</p>
                    <p class="text-gray-400 text-xs underline"> {{ image.location }} </p>
                </div>
                <button @click="$emit('toggle-heart', image.id)"><i class="material-icons" :class="{'text-red-500': image.fav}">
                    favorite
                </i></button>
            </div>
        </div>
    <div class="sep-line h-0.5 bg-gray-700 mx-10"></div>
    <div class="w-full text-base text-center font-bold"> Total Favorite: {{ totalLike }}</div>
    </div>
    `,
    methods: {
        hasPhoto() {
            if (this.images.filter(i => i.show).length != 0) {
                return true
            }
            return false
        }
    },
    computed: {
        showGallery() {
            return this.images
        },
        totalLike() {
            return this.images.filter(i => i.fav).length
        }
    }
})