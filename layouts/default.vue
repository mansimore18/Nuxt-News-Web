<template>
  <div>
    <header>
      <div class="news-header">
        <p class="news-main-title">Nuxt News Search & Bookmarks</p>
        <div class="top-news-title">
          <nuxtLink to="/" id="top-news"> Top News</nuxtLink>
          <nuxtLink to="/Bookmarks">Bookmarks</nuxtLink>
        </div>
      </div>
    </header>

    <main>
      <nuxt/>
    </main>

  </div>
</template>

<script>

</script> 

<style scoped>
.news-header {
  background-color: hsl(210deg 10% 23%);
  color: rgb(255, 255, 255);
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
}
.news-main-title {
  font-size: 17px;
}
.top-news-title {
  font-size: 17px;
}
.nuxt-link-exact-active {
  color: white;
  text-decoration: none;
  border-bottom: 5px solid darkgray;
}
a {
  color: rgb(172, 169, 169);
  text-decoration: none;
}
@media screen and (min-width: 1070px) {
  .news-main-title {
    font-size: 27px;
  }
 
  .top-news-title {
    font-size: 22px;
  }
}
@media screen and (min-width: 800px) {
  .news-main-title {
    font-size: 25px;
  }
}
@media screen and (min-width: 1300px){
   .news-header {
    padding: 0px 70px 0px 175px;
  }
}
</style>
