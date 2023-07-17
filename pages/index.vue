<template>
  <div>
    <searchBar/>
    <news-card/>
  </div>
</template>

<script>
import searchBar from '../components/searchBar.vue'
import newsCard from '../components/newsCard.vue'
export default {
  name: 'IndexPage',
  layout: 'default',
  components: {
    searchBar,
    newsCard
  },
  data () {
    return {
      payload: {
        category: '',
        country: '',
        keyword: 'all'
      }
    }
  },
  beforeMount () {
    this.$store.dispatch('getNewsData', this.payload)
  },
}
</script>
<style>
body {
  background: hsl(0deg 0% 80%);
}
</style>
