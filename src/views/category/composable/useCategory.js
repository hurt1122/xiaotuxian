import { getCategoryList } from '@/apis/category'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { onBeforeRouteUpdate } from 'vue-router';


export function useCategory() {
  const router = useRoute()

  const categoryList = ref({})
  const getList = async (id = router.params.id) => {
    const res = await getCategoryList(id)
    categoryList.value = res.data.result
  }
  onMounted(() => (getList()))

  //希望在路由参数变化的时候把分类接口数据重新发送
  onBeforeRouteUpdate((to) => {
    //使用最新的路由参数的分类数据，而路由传参是滞后的
    getList(to.params.id)
  })

  return {
    categoryList
  }

}