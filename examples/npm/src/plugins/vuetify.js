import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import {DoneIcon} from 'doneicon' 

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    values: {
      // macOs: ここが呼び出しicon名となる
      SvgIconDone: {
        component: DoneIcon
      }
    }
  }

});
