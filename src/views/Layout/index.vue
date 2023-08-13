<script setup>

import LayoutNav from '@/components/LayoutNav.vue'
import LayoutHeader from '@/components/LayoutHeader.vue'
import LayoutFooter from '@/components/LayoutFooter.vue'
import LayoutFix from '@/components/LayoutFix.vue'


import { useLayoutStore } from '@/stores/modules/layout'

const userStore = useLayoutStore()

userStore.getCategory()
</script>

<template>
  <Layout-Fix></Layout-Fix>
  <Layout-Nav></Layout-Nav>
  <Layout-Header></Layout-Header>
  <router-view></router-view>
  <Layout-Footer></Layout-Footer>
</template>