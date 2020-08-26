<template>
  <div class="index">
    <div class="banner" :style="`height: ${windowHeight}px`">
      <img src="../assets/img/claire-03.png" :style="`top: ${scrollY}%`"/>
      <div class="box" :style="`top: ${scrollY}%`">
        <div class="pink">
          <img src="../assets/img/circle-pink-05.png" alt />
        </div>
        <div class="green">
          <img src="../assets/img/circle-green-05.png" alt />
        </div>
        <div class="orange">
          <img src="../assets/img/circle-orange-05.png" alt />
        </div>
        <div class="blue">
          <img src="../assets/img/circle-blue-05.png" alt />
        </div>
      </div>
      <div class="go-down" :class="{'show': showGodown}">
        <p>scroll</p>
        <i class="fas fa-chevron-down"></i>
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>
    <div class="content">
      <div class="line"></div>
      <div id="about">
        <h3 class="title">ABOUT</h3>
        <p>
          您好，我叫張庭瑀，有六年的平面設計經驗，主要負責雜誌版型設計與菜單設計，為了精進自我開始學習前端設計與開發，覺得非常的有興趣並持續進修一段時間。喜歡學習新知識並擅於解決問題。
        </p>
        <p>
          My Name is Claire Chang. I have more than 6 years experience in graphic design, mainly focus on magazine layout and menu design. Beside graphic design, I started learning front-end design and development. And I found myself highly enthusiastic about it. I like to learning new things and solving problems. Thank you for watching.
        </p>
        <a href="#" class="resume-link">resume link</a>
      </div>
      <div class="line"></div>
      <div id="skills">
        <h3 class="title">SKILLS</h3>
        <ul class="skill">
          <li>
            <img src="../assets/img/skill01.svg" alt="">
            <h4>Web Layout</h4>
            <ul>
              <li>HTML、CSS 網頁渲染</li>
              <li>Sass 簡化開發</li>
              <li>jQuery Plugin 打造動態效果</li>
              <li>RWD 響應式版型規畫設計</li>
              <li>Bootstrap 框架（學習中）</li>
            </ul>
          </li>
          <li>
            <img src="../assets/img/skill02.svg" alt="">
            <h4>Javascript</h4>
            <ul>
              <li>Javascript 製作互動效果</li>
              <li>AJAX / JSON 串接 Open Data API</li>
              <li>介接 RESTful API經驗</li>
              <li>使用 ESLint 程式碼品質管理</li>
              <li>暸解 ES6 語法</li>
              <li>GitHub 版本管理</li>
            </ul>
          </li>
          <li>
            <img src="../assets/img/skill03.svg" alt="">
            <h4>Vue</h4>
            <ul>
              <li>熟悉 V- 指令</li>
              <li>Vue-router 建構路由</li>
              <li>Components 元件管理</li>
              <li>Vue 插件使用</li>
              <li>Vue Cli系統運用</li>
            </ul>
            <div>
              <a href="https://clairechang0609.github.io/Hurley-Furniture/#/" target="_blank" class="work-link">Demo</a>
              <a href="https://github.com/clairechang0609/Hurley-Furniture" target="_blank" class="work-link">GitHub</a>
            </div>
          </li>
        </ul>
      </div>
      <div class="line"></div>
      <div id="webworks">
        <h3 class="title">WEB WORKS</h3>
        <ul class="list">
          <li v-for="work in works" :key="work.id" class="item">
            <router-link :to="`/work/${work.id}`">
              <div class="pic">
                <span :style="`background-image: url(${work.coverPic})`"></span>
              </div>
              <h4>{{ work.title }}</h4>
              <div class="text">
                  <p>#{{ work.type }}</p>
                  <p><i class="fas fa-clock"></i>{{ work.date }}</p>
              </div>
            </router-link>
          </li>
        </ul>
        <a class="more-btn" href="https://www.behance.net/claire0609e29c" target="_blank">more graphic works ⇀</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      showGodown: true,
      windowHeight: 0,
      scrollY: 50,
      works: [
        {
          id: 'web001',
          type: 'website',
          title: 'Vue Cli 打造電子商務網站',
          coverPic: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/3a520d102645107.5f3b7fd8e8c02.png',
          date: 'Aug. 2020',
          web: 'https://github.com/clairechang0609/Hurley-Furniture'
        }, {
          id: 'web002',
          type: 'website',
          title: 'API 介接完成心理測驗工具',
          coverPic: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0bb220102645107.5f3b80d40a85d.png',
          date: 'July. 2020',
          web: 'https://github.com/clairechang0609/js-week-3-sub-homework'
        }, {
          id: 'web003',
          type: 'website',
          title: 'LocalStorage 儲存 BMI 資料',
          coverPic: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/73f376102645107.5f45cac378067.png',
          date: 'Jun. 2020',
          web: 'https://github.com/clairechang0609/JS--BMI-calculator'
        }, {
          id: 'web004',
          type: 'website',
          title: 'Open Data API 介接製作旅遊網站',
          coverPic: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/2e6970102645107.5f3b86ffcff26.png',
          date: 'Jun. 2020',
          web: 'https://github.com/clairechang0609/JS-travel-guide-website-AJAX'
        }, {
          id: 'web005',
          type: 'website',
          title: 'RWD 製作響應式餐廳網頁',
          coverPic: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/c28154102645107.5f3b87ff288e4.png',
          date: 'May 2020',
          web: 'https://github.com/clairechang0609/rwd-finalwork.io'
        }
      ]
    }
  },
  created () {
    this.fillWindow()
    window.addEventListener('resize', this.fillWindow)
    window.addEventListener('scroll', this.bannerScroll, true)
  },
  methods: {
    fillWindow () {
      this.windowHeight = window.innerHeight
    },
    bannerScroll () {
      this.scrollY = 50 - (window.pageYOffset / 15)

      if (window.scrollY > 100) {
        this.showGodown = false
      } else {
        this.showGodown = true
      }

      const items = document.querySelectorAll('.item')
      items.forEach(item => {
        if ((item.offsetTop + 25) < window.scrollY) {
          item.style.opacity = 1
        }
      })
    }
  }
}
</script>
