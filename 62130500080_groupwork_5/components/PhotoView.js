app.component('photo-view', {
    props: {
        canvasImg: Object
    },
    template:
        /*html*/
        `
          <div class="canvas m-2 p-2 bg-gray-700 rounded h-max space-y-2" v-if="canvasImg">
          <img class="w-full" :src="canvasImg.image">
          <div class="h-0.5 bg-gray-400"></div>
          <div>
            <p class="pl-5 text-xl text-white italic text-gray-200">
              {{ canvasImg.name }}
            </p>
            <p class="pl-5 text-base text-white italic text-gray-200">
              @{{ canvasImg.location }}
            </p>
          </div>
          <div class="flex justify-center text-white font-bold space-x-3">
            <button @click="$emit('previous',canvasImg.id)"> <i class="material-icons">
                keyboard_arrow_left
              </i></button>
            <button @click="closeCanvas"> <i class="material-icons">
                highlight_off
              </i></button>
            <button @click="$emit('next',canvasImg.id)"><i class="material-icons">
                keyboard_arrow_right
              </i></button>
          </div>
          <div class="h-0.5 bg-gray-400"></div>
        </div>
    `,
    methods: {
        closeCanvas(){
            this.canvasImg = null
        },
    }
})