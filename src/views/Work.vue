<template>
  <div class="work">
    <div class="title">
      <p>{{ selectWork.date }}</p>
      <h4>{{ selectWork.title }}<br>{{ selectWork.titleZh }}</h4>
      <p>— skills —</p>
      <ul class="skill">
        <li v-for="(skill, key) in selectWork.skills" :key="'skill' + key">{{ skill }}</li>
      </ul>
      <div>
        <a class="work-link" :href="selectWork.demo" target="_blank">Demo</a>
        <a class="work-link" :href="selectWork.github" target="_blank">Github</a>
      </div>
    </div>
    <div class="line"></div>
    <img class="pic" v-for="(pic, key) in selectWork.pics" :key="'pic' + key"
      :src="pic" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      showGodown: true,
      windowHeight: 0,
      selectWork: {},
      works: [
        {
          id: 'web001',
          title: 'Hurley Funiture E-commerce Website',
          titleZh: '傢俱電商網站',
          skills: [
            '整體版面規劃設計',
            'RESTful API 介接 - 產品上架與管理',
            'Sass 設計整體視覺與互動效果',
            'RWD 響應式版型規畫',
            'Vue 元件管理與插件應用',
            'Vue CLI 系統',
            'ESLint 程式碼管理',
            'Github 版本控制'
          ],
          pics: [
            'https://mir-s3-cdn-cf.behance.net/project_modules/fs/cc196c102645107.5f3b9d88eba48.png',
            'https://mir-s3-cdn-cf.behance.net/project_modules/fs/d6733d102645107.5f3ba8b69de2d.png',
            'https://mir-s3-cdn-cf.behance.net/project_modules/fs/f75b66102645107.5f3ba8b69e371.png'
          ],
          date: 'Aug. 2020',
          demo: 'https://clairechang0609.github.io/Hurley-Furniture/#/',
          github: 'https://github.com/clairechang0609/Hurley-Furniture'
        }, {
          id: 'web002',
          title: 'Traits Test Website',
          titleZh: '心理測驗工具',
          skills: [
            '心理測驗 API 介接',
            'Sass 設計整體視覺與互動效果',
            'Vue.js 框架',
            'Github 版本控制'
          ],
          pics: [
            'https://mir-s3-cdn-cf.behance.net/project_modules/fs/f952db102645107.5f3e422790daf.png',
            'https://mir-s3-cdn-cf.behance.net/project_modules/fs/80134c102645107.5f3e42279142e.png',
            'https://mir-s3-cdn-cf.behance.net/project_modules/fs/ba6080102645107.5f3e422791b91.png'
          ],
          date: 'July. 2020',
          demo: 'https://clairechang0609.github.io/personality-traits-test',
          github: 'https://github.com/clairechang0609/personality-traits-test'
        }, {
          id: 'web003',
          title: 'BMI Calculator',
          titleZh: '身體質量指數計算器',
          skills: [
            'LocalStorage 資料儲存',
            'Scss 畫面渲染',
            'Javascript 互動設計',
            'Github 版本控制'
          ],
          pics: [
            'https://mir-s3-cdn-cf.behance.net/project_modules/fs/73f376102645107.5f45cac378067.png'
          ],
          date: 'Jun. 2020',
          demo: 'https://clairechang0609.github.io/BMI-calculator',
          github: 'https://github.com/clairechang0609/BMI-calculator'
        }, {
          id: 'web004',
          title: 'Travel Guide Website',
          titleZh: '旅遊導覽網站',
          skills: [
            'Open Data API 介接',
            'Scss 畫面渲染',
            'RWD 響應式版型規畫',
            'Javascript 互動設計',
            'Github 版本控制'
          ],
          pics: [
            'https://mir-s3-cdn-cf.behance.net/project_modules/fs/252823102645107.5f45d74cccc0d.png'
          ],
          date: 'Jun. 2020',
          demo: 'https://clairechang0609.github.io/JS-travel-guide-website-AJAX',
          github: 'https://github.com/clairechang0609/JS-travel-guide-website-AJAX'
        }, {
          id: 'web005',
          title: 'Restaurant Website',
          titleZh: '西餐廳網站',
          skills: [
            'HTML、CSS 網頁渲染',
            'RWD 響應式版型規畫',
            'jQuery Plugin 打造動態效果'
          ],
          pics: [
            'https://mir-s3-cdn-cf.behance.net/project_modules/fs/78daaf102645107.5f45db53a8ff2.png',
            'https://mir-s3-cdn-cf.behance.net/project_modules/fs/ab331d102645107.5f45db53a957a.png'
          ],
          date: 'May 2020',
          demo: 'https://clairechang0609.github.io/hex-restaurant',
          github: 'https://github.com/clairechang0609/hex-restaurant'
        }
      ]
    }
  },
  created () {
    this.getSingleWork()
  },
  methods: {
    getSingleWork () {
      const id = this.$route.params.id
      this.selectWork = {}
      this.works.forEach(work => {
        if (work.id === id) {
          this.selectWork = work
        }
      })
    }
  }
}
</script>
