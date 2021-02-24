app.component('photo-search', {
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
         
      }
    },
    methods: {
        
    },
    computed: {
        
    }
  })