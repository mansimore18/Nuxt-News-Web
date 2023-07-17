<template>
  <div>
    <div class="search-bar">
      <select class="drop-down-box" id="country" v-model="selectedCountry">
        <option value="">Select Country</option>
        <option
            v-for="country in countryOption"
            :key="country.name"
            :value="country.value"
            >{{ country.name }}
          </option>
      </select>
      <select  id="category" class="drop-down-box" v-model="selectedCategory">
        <option value="">Select Categories</option>
        <option
          v-for="category in categories"
          :key="category.name"
          :value="category.value"
          >{{ category.name }}</option
        >
      </select>
      <input
        type="text"
        placeholder="Keyword eg. Technology"
        class="keyword-text-box"
        v-model="keyword"
      />
      <button class="search-bar-buttons" @click="searchNews()">
        <img class="search-icon" src="~/assets/search-icon.png" />
      </button>
      <button class="search-bar-buttons">
        <img class="search-icon" src="~/assets/list.png" />
      </button>
    </div>
    <!-- <p class="result-count">{{ getTotalResults }} News Results(s)</p> -->
  </div>
</template>

<script>
import countryData from '../static/country.json'
import categoryData from '../static/categories.json'

import { mapGetters } from "vuex";

export default {
  data () {
    return {
      countryOption: countryData,
      categories: categoryData,
      selectedCountry: '',
      selectedCategory: '',
      keyword: '',
    }
  },
  computed: {
    ...mapGetters(['getTotalResults'])
  },
  methods: {
    searchNews () {
      let searchFilter = {
        category: this.selectedCategory,
        country: this.selectedCountry,
        keyword: this.keyword || 'all'
      };
      this.$store.dispatch("getNewsData", searchFilter);
    }
  }
}
</script>

<style>
.result-count {
  text-align: center;
  font-size: x-large;
}
.search-bar {
  overflow: hidden;
  background-color: hsl(0deg 0% 66%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 15px;
}
.drop-down-box {
  width: 250px;
  height: 40px;
  border-radius: 6px;
  margin: 5px;
  text-align: center;
  border: none;
}
.keyword-text-box {
  width: 250px;
  height: 40px;
  margin: 5px;
  border-radius: 6px;
  border: none;
  text-align: center;
}
.search-icon {
  width: 25px;
  height: 25px;
}
.search-bar-buttons {
  margin-left: 1%;
  width: 50px;
  height: 40px;
  margin: 2px;
  background-color: hsl(210deg 10% 23%);
  border-radius: 10px;
  border: none;
  cursor: pointer;
}
@media screen and (min-width: 460px) {
  /*  */
  .drop-down-box {
    width: 250px;
    margin: 10px;
  }
  .keyword-text-box {
    width: 250px;
  }
}
@media screen and (min-width: 800px) {
  .search-bar {
    flex-direction: row;
  }
  .drop-down-box {
    width: 360px;
    margin: 16px;
    height: 46px;
  }
}
</style>
