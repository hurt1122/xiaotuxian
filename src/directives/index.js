import { useIntersectionObserver } from '@vueuse/core'


export const LazyPlugin = {
  install(app) {
    app.directive('img-lazy', {
      mounted(el, binding) {
        //el指绑定的那个元素
        //binding指令等于号后的指
        const { stop } = useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            if (isIntersecting) {
              el.src = binding.value
              stop()
            }
          },
        )
      }
    })
  }
}