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
        <a v-if="selectWork.demo" class="work-link" :href="selectWork.demo" target="_blank">Demo</a>
        <a v-if="selectWork.github" class="work-link" :href="selectWork.github" target="_blank">Github</a>
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
          date: 'Jul. 2020',
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
        }, {
          id: 'graphic001',
          title: 'Japanese Cuisine Menu Design',
          titleZh: '一花亭日式料理 / 丼飯菜單設計',
          skills: [
            'Photoshop 影像處理與合成',
            'Illustrator 向量繪圖編修',
            'Indesign 平面排版'
          ],
          pics: [
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/dfd65974054567.5c1f9b6e21e75.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/fe25c774054567.5c1f9b6e220ac.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/a9edd074054567.5c1f9b6e210c7.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/38a8bb74054567.5c1f9b6e23590.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/6b57c774054567.5c1f9b6e22847.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/0791ec74054567.5c1f9b6e21bd1.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/58064574054567.5c1f9b6e22e9a.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/c3c06b74054567.5c1f9b6e237e4.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/e5e74a74054567.5c1f9b6e21468.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/98017474054567.5c1f9b6e22607.jpg'
          ],
          date: 'Apr. 2016'
        }, {
          id: 'graphic002',
          title: 'Movenpick Café Menu Design',
          titleZh: '莫凡比咖啡館菜單設計',
          skills: [
            'Photoshop 影像處理與合成',
            'Illustrator 向量繪圖編修',
            'Indesign 平面排版'
          ],
          pics: [
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/638ec074076439.5c20adc55e6a9.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/4f6e6674076439.5c20adc55e01f.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/671a3874076439.5c20adc55ca2d.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/bc43d274076439.5c20adc55d8f0.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/74cd6574076439.5c20adc55e445.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/a8db4074076439.5c20adc55e9f5.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/06261674076439.5c20adc55bf74.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/0f363374076439.5c20adc55c2a0.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/8d225d74076439.5c20adc55d4e8.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/1acc4374076439.5c20adc55cd81.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/13402474076439.5c20adc55ed48.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/db93a374076439.5c20adc55d186.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/7d079374076439.5c20adc55c60c.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/5a1b1374076439.5c20adc55dcd1.jpg'
          ],
          date: 'Jun. 2015'
        }, {
          id: 'graphic003',
          title: 'Men’s Fashion Magazine',
          titleZh: '男性生活雙月刊',
          skills: [
            'Photoshop 影像處理與合成',
            'Illustrator 向量繪圖編修',
            'Indesign 平面排版'
          ],
          pics: [
            'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7fb83688396149.5dd7715bdb74d.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/82f1ce88396149.5dd7715b7e312.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/daa68188396149.5dd7715b7eab3.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/13d58888396149.5dd7715b7d911.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/6b534688396149.5dd78be71891f.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/d1594688396149.5dd78be717e74.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/dd9b8a88396149.5dd796521fa56.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/07d01188396149.5dd7964faa034.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/5e956c88396149.5dd7964faab49.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/fae18f88396149.5dd79650d5259.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/13a44d88396149.5dd79650d5af8.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/6134b988396149.5dd7afea6730b.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/9c861688396149.5dd7afea67b45.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/3cd14a88396149.5dd78be805606.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/b33c6f88396149.5dd7965056e1f.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/cfaae188396149.5dd79650566a8.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/6b743288396149.5dd79651444fc.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/955bc588396149.5dd7965143df7.jpg'
          ],
          date: 'Sep. 2019'
        }, {
          id: 'graphic004',
          title: 'tigertales taiwan inflight magazine',
          titleZh: '台灣虎航機上旅遊雜誌',
          skills: [
            'Photoshop 影像處理與合成',
            'Illustrator 向量繪圖編修',
            'Indesign 平面排版'
          ],
          pics: [
            'https://mir-s3-cdn-cf.behance.net/project_modules/fs/8f0a5a76231715.5c63ba1c477c2.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/fs/be217976231715.5c63ba1c46703.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/fs/928f5376231715.5c63ba1c44ffa.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/fs/d2d7e376231715.5c63ba1c45329.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/fs/b94f4876231715.5c63ba1c4588d.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/fs/f71fd576231715.5c63ba1c45b2c.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/fs/c7402876231715.5c63ba1c44d0f.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/fs/122b7f76231715.5c63ba1c46498.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/a0396670137811.5ba277f0879c2.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/a890a870137811.5ba277f088669.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/9a782370137811.5bbf6547a1877.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/2dcf0771599869.5bcab0812889a.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/01e99e71599869.5bcab0812b24c.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/c77d3371599869.5bcab08129455.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/8aadf971599869.5bcab08127baf.jpg'
          ],
          date: 'Apr. 2019'
        }, {
          id: 'graphic005',
          title: 'Art & Culture Brochure Design',
          titleZh: '藝文手冊設計 (英文 / 日文)',
          skills: [
            'Photoshop 影像處理與合成',
            'Illustrator 向量繪圖編修',
            'Indesign 平面排版'
          ],
          pics: [
            'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/72485874099545.5c21e3ad75e37.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/fs/a0b6c474099545.5c21e3ad768c2.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/23b86d74099545.5c2352d7ed9b5.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/c267d774099545.5c2352d7ed5ec.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/fs/8bbb0374099545.5c2202e6daf80.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/39fa0b74099545.5c21e3ad76b02.jpg'
          ],
          date: 'Nov. 2018'
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
