import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getLayoutHeaderInfo } from '@/apis/layout.js'

export const useLayoutStore = defineStore('counter', () => {


  const categoryList = ref([])
  const getCategory = async () => {
    const res = await getLayoutHeaderInfo()
    categoryList.value = res.data.result
  }

  return {
    getCategory,
    categoryList
  }
})
