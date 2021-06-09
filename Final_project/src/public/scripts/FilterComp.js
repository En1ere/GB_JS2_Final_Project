Vue.component('filter-goods', {
    data() {
        return {
            searchLine: '',
        }
    },
    template: `<div>
                    <form class="header__form" action="#" @submit.prevent="$parent.$refs.products.filter(searchLine)">
                        <div class="browse">Browse&nbsp;&nbsp;<i class="fas fa-caret-down"></i></div>
                        <input type="text" class="search__text" v-model="searchLine" placeholder="Search for item...">
                        <button class="search" type="submit"><i class="fas fa-search"></i></button>
                    </form>
                </div>`
})