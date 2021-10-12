import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

// font awesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import  {FontAwesomeIcon}  from '@fortawesome/vue-fontawesome'
import { fas, faUserSecret, faCaretUp, faCaretDown, faTimesCircle, faEllipsisV, faClock, faFileAlt, faHandsHelping, faProjectDiagram, faBezierCurve,faInfo,faHandshake } from '@fortawesome/free-solid-svg-icons'
import { faCss3, faPhp, faJs } from '@fortawesome/free-brands-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'


library.add(faSpinner, fas, faUserSecret, faCaretUp, faCaretDown, faTimesCircle, faEllipsisV, faCss3, faPhp, faJs, faClock, faFileAlt, faHandshake, faHandsHelping, faProjectDiagram, faBezierCurve, faInfo);
dom.watch();

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')


