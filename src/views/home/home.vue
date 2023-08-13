<script setup>
import HomeCategory from '@/views/home/components/HomeCategory.vue'
import HomeBannder from '@/views/home/components/HomeBannder.vue'
import HomeNew from '@/views/home/components/HomeNew.vue'
import HomeHot from '@/views/home/components/HomeHot.vue'
import Homeprodect from '@/views/home/components/Homeprodect.vue'

</script>
<template>
  <div class="container">
    <HomeCategory />
    <HomeBannder />
  </div>
  <HomeNew />
  <HomeHot />
  <Homeprodect />
</template>

<style scoped></style>