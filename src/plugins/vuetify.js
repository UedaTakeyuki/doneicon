import Vue from 'vue';
//import Vuetify from 'vuetify/lib/framework';
import Vuetify from 'vuetify';
import SvgIconDone from '@/components/SvgIconDone';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
    values: {
      // macOs: ここが呼び出しicon名となる
      SvgIconDone: {
        component: SvgIconDone
      }
    }
  }
});
