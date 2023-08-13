import { ref } from 'vue'
import { getBannerInfo } from '@/apis/layout'

export function useBanner() {
  const bannerList = ref([])

  const getbannerInfo = async () => {
    const res = await getBannerInfo({
      distributionSite: '2'
    })
    bannerList.value = res.data.result
  }
  getbannerInfo()

  return {
    bannerList,
    getbannerInfo
  }
}