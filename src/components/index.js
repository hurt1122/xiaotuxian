import imageview from '@/components/image.vue'
import LayoutNav from '@/components/LayoutNav.vue'
import LayoutHeader from '@/components/LayoutHeader.vue'
import LayoutFooter from '@/components/LayoutFooter.vue'
import LayoutFix from '@/components/LayoutFix.vue'
import XtxSku from '@/components/XtxSku/index.vue'

export const componentPlugin = {
  install(app) {
    app.component('imageview', imageview)
    app.component('LayoutNav', LayoutNav)
    app.component('LayoutHeader', LayoutHeader)
    app.component('LayoutFooter', LayoutFooter)
    app.component('LayoutFix', LayoutFix)
    app.component('XtxSku', XtxSku)
  }
}