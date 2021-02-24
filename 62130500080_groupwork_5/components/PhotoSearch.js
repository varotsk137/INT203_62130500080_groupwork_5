app.component('photo-search', {
    props: {
        images: Array
    },  
    template:
    /*html*/`
    <div class="text-right h-8 pr-10 w-full" v-if="!searchModeOn">
    <button><i class="material-icons border p-1 bg-gray-200 rounded-full" @click="toggleSearchMode">
        search
      </i></button>
  </div>
  <div class="flex search-bar w-full h-8 space-x-4  items-center" v-if="searchModeOn">
    <input class="ml-10 h-full rounded w-80 border px-2" name="search-bar" type="text"
      placeholder="Input text here..." v-model="searchValue" @keyup.enter="searchPhoto">
    <button class="h-full rounded bg-red-500 px-2 text-white" @click="toggleSearchMode"> Cancel </button>
  </div>
  `,
    data() {
      return {
         searchModeOn: false,
         searchValue: ''
      }
    },
    methods: {
        toggleSearchMode() {
            if (this.searchModeOn) {
                this.searchValue = ''
                this.searchPhoto()
            }
            this.searchModeOn = !this.searchModeOn;
        },
        searchPhoto() {
            // Check condition if input is null then just return //
            if (this.searchValue == '') {
                this.$emit('search-photo','')
                return
            }
            this.$emit('search-photo',this.searchValue)
            this.searchValue = ''
        },
    },
    computed: {
        
    }
  })