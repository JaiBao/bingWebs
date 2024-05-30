<template>
  <!-- banner -->
  <div class="indexBanner">
    <q-carousel
      v-model="bannerSlide"
      swipeable
      navigation
      infinite
      padding
      animated
      control-color="pink-8"
      class="rounded-borders"
      prev-icon="arrow_circle_left"
      next-icon="arrow_circle_right"
      transition-prev="slide-right"
      transition-next="slide-right"
      arrows
      :autoplay="bannerAutoplay">
      <template v-slot:navigation-icon="{ active, btnProps, onClick }">
        <q-btn v-if="active" size="sm" :icon="btnProps.icon" color="pink" flat round dense @click="onClick" />
        <q-btn v-else size="sm" :icon="btnProps.icon" color="white" flat round dense @click="onClick" />
      </template>

      <!-- 第一張輪播圖片 -->
      <q-carousel-slide :name="1">
        <nuxt-link to="/group">
          <img src="/index/Banner.png" alt="Banner" />
        </nuxt-link>
      </q-carousel-slide>

      <!-- 第二張輪播圖片 -->
      <q-carousel-slide :name="2">
        <nuxt-link to="/delicious#riceBox">
          <img src="/index/Banner4.jpg" alt="Banner4" />
        </nuxt-link>
      </q-carousel-slide>
      <!-- 第三張輪播圖片 -->
      <q-carousel-slide :name="3">
        <!-- <nuxt-link to="/group"> -->
        <img src="/index/Banner5.jpg" alt="Banner5" />
        <!-- </nuxt-link> -->
      </q-carousel-slide>
      <!-- 第四張輪播圖片 -->
      <q-carousel-slide :name="4">
        <nuxt-link @click="onFabClick">
          <img src="/index/Banner3.jpg" alt="Banner3" />
        </nuxt-link>
      </q-carousel-slide>
    </q-carousel>
  </div>
  <!-- Banner2 -->
  <!-- <div class="indexBanner2">
    <div class="banner2Top">
      <div class="topImg">
        <img loading="lazy" src="/index/avatar.png" alt="food" class="roundedImg" />
      </div>
      <div class="topText">
        <p>企業團體&nbsp; &nbsp; 一致推薦</p>
        <p>潤餅便當‧午茶盒餐</p>
      </div>
    </div>
    <div class="groupImgs"> -->
  <!-- 上層 -->
  <!-- <div class="groupImgTop">
        <div class="groupImg" v-for="(item, index) in topRowItems" :key="index">
          <div class="backgroundOverlay">
            <p class="text">{{ item.text }}</p>
          </div>
          <img loading="lazy" :src="item.src" :alt="`圓形${index + 1}`" />
        </div>
      </div> -->
  <!-- 下層 -->
  <!-- <div class="groupImgTop">
        <div class="groupImg" v-for="(item, index) in bottomRowItems" :key="index">
          <div class="backgroundOverlay">
            <p class="text">{{ item.text }}</p>
          </div>
          <img loading="lazy" :src="item.src" :alt="`圓形${index + 5}`" />
        </div>
      </div>
    </div>
  </div> -->
  <!-- 輪播 -->
  <!-- <div class="indexCarousel gt-sm">
    <q-carousel
      v-model="slide"
      swipeable
      navigation
      infinite
      padding
      control-color="red"
      class="rounded-borders"
      prev-icon="arrow_circle_left"
      next-icon="arrow_circle_right"
      arrows
      :autoplay="8000"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true">
      <template v-slot:navigation-icon="{ active, btnProps, onClick }">
        <q-btn v-if="active" size="sm" icon="radio_button_unchecked" color="pink" flat round dense @click="onClick" />
        <q-btn v-else size="sm" :icon="btnProps.icon" color="pink" flat round dense @click="onClick" />
      </template> -->
  <!-- 陣列 -->
  <!-- <q-carousel-slide v-for="(product, index) in products" :key="index" :name="index + 1">
        <div class="row items-center justify-center">
          <img loading="lazy" class="incarouselBg" src="/index/newBg.png" alt="背景圖" /> -->
  <!-- 商品圖片 -->
  <!-- <img :src="product.image" :alt="product.name" class="incarouselImg col-12" ref="productImage" />
          <div class="productTitle">
            <img src="/index/FrameTitle.png" alt="產品" />
            <div class="productText">
              <div class="product-title">{{ product.title }}</div>

              <div class="product-content gt-sm">
                {{ product.content }}
                <br />
                {{ product.content2 }}
                <br />
                {{ product.content3 }}
                <p class="smallNote">{{ product.smallNote }}</p>
              </div>
              <button @click="navigateTo(product.route)">{{ product.name }}</button>
            </div>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div> -->

  <!-- 預算選擇 -->
  <div class="row justify-center items-center dollarTitle">
    <img loading="lazy" src="/index/0-pic-flower.png" alt="花朵" class="flower" />
    <h3>美味餐盒 多樣選擇</h3>
    <img loading="lazy" src="/index/0-pic-flower.png" alt="花朵" class="flower" />
  </div>
  <div class="tenBG">
    <div class="column dollar">
      <div class="indexCard row justify-center">
        <div class="col-md-3 col-12 dollarCard" v-for="(card, index) in cards" :key="index" :id="`card-${index}`">
          <q-card class="dollarCards" @click="navigateTo(card.route)">
            <q-img :src="card.image"></q-img>

            <q-card-actions>
              <button class="dollarBtn">
                <span>
                  {{ card.text }}
                  <q-icon name="arrow_circle_right" style="color: #f50077; font-size: 2rem"></q-icon>
                </span>
              </button>
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
    <!-- 介紹-->
    <div class="row indexIntroduce">
      <div class="indexStory row">
        <img loading="lazy" src="/index/0-pic-16.png" alt="一餅" class="col-12 col-md-4" />

        <div class="indexStoryText col-12 col-md-4">
          <div class="storyTextContent">
            <h4>五十年手藝の台灣潤餅</h4>
            <!-- 
          <q-btn flat>
            <a href="https://www.facebook.com/chinese.lumpia/?locale=zh_TW" target="_blank"> <img loading="lazy" src="/index/0-pic-17.png" alt="讚" class="good" /></a>
          </q-btn> -->

            <h5>​"Taiwanese Scallion Pancake with 50 Years of Craftsmanship"</h5>

            <div class="indexStoryP">
              <p>
                傳承阿爸五十年手藝の台灣潤餅，不改古法製程，同時首創潤餅創新經營型態，在走半個世紀後，「中華一餅」以全新風貌，帶給消費者最具有創意多元潤餅盒餐新選擇，並貼心提供外送服務，讓您享受既新穎又不失傳統的「台灣潤餅」。豐富富具創意的餐點內容，廣受企業、團體、公家機關的青睞，讓中華一餅儼然成為團體餐盒的最佳首選品牌！
              </p>
            </div>
            <q-btn class="gotoStory" to="/history">品牌故事</q-btn>
          </div>
        </div>
        <img loading="lazy" src="/index/0-pic-18.png" alt="阿伯" class="col-12 col-md-4" />
      </div>

      <!-- 新版dm -->
      <div class="demoArea">
        <div class="demoLeft">
          <div class="demoImg">
            <img loading="lazy" src="/index/dmDubble.png" />
          </div>
          <div class="leftText">
            <h4>查看完整菜單</h4>
            <div class="leftTextContent">
              <p>讓我們共同傳承過去的智慧，並迎接未來的挑戰。我們將努力不懈地探索和創新，為您提供跨時代的餐盒選擇，讓用餐體驗更加環保、便利和令人滿意。</p>
            </div>

            <q-btn @click="onDownloadClick" class="no-underline">下載傳單訂單</q-btn>
          </div>
        </div>
        <div class="demoRight">
          <h4>加入華餅家族，好康不漏接</h4>
          <div class="rightContent">
            <div class="contentImg">
              <img loading="lazy" src="/index/0-pic-25.png" alt="qrCode" @click="onMessengerClick" class="pointer" />
            </div>
            <div class="contentText">
              <p>潤餅手工現作，</p>
              <p>每日限量供應。</p>
            </div>
          </div>
          <!-- <q-btn class="col-3 col-sm-12" @click="dialNumber">
         
            立即預訂
          </q-btn> -->
        </div>
      </div>

      <!-- ig -->
      <showIgImag />
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useUniversal } from '~/stores/universal'
import { useAgreeCollectionStore } from '/stores/agreeCollection'
import { useDialogStore } from '/stores/useDialogStore'
const { onOnlineClick } = useDialogStore()
const agreeCollection = useAgreeCollectionStore()
const { onMessengerClick, onForm1Click, onForm2Click, onMessengerIg, dialNumber, onDownloadClick } = useUniversal()
definePageMeta({
  layout: 'index'
})

gsap.registerPlugin(ScrollTrigger)
useHead({
  title: '中華一餅 | 手作輕食 潤餅盒餐外送第一品牌',
  meta: [
    // Description Meta Tag
    {
      name: 'description',
      content:
        '中華一餅傳承台灣潤餅美食並將其發展成企業愛戴的團體便當、團體餐盒。無論是午茶盒餐、潤餅便當、團體盒餐、點心餐盒等或是會議餐盒外送、便當外送，找中華一餅就對囉！'
    },
    // Open Graph
    {
      property: 'og:title',
      content: '中華一餅 | 手作輕食 潤餅盒餐外送第一品牌'
    },
    {
      property: 'og:description',
      content:
        '中華一餅傳承台灣潤餅美食並將其發展成企業愛戴的團體便當、團體餐盒。無論是午茶盒餐、潤餅便當、團體盒餐、點心餐盒等或是會議餐盒外送、便當外送，找中華一餅就對囉！'
    },
    {
      property: 'og:image',
      content: '/favicon.ico' // 使用你的圖片路徑
    },
    {
      property: 'og:image:alt',
      content: '中華一餅圖片'
    },
    {
      property: 'og:url',
      content: 'https://www.chinabing.net/'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'author',
      content: 'bao'
    },

    { name: 'google-site-verification', content: '5j6K_dFtD3LNzCJ42rR_OSpfv1rmneTcTEXsdRASwU0' }
    // ...
  ]
})

const bannerImg = ref(null)
const bannerSlide = ref(4)
const bannerAutoplay = ref(5000)

const isMobile = ref(false)
const slide = ref(0)
const autoplay = ref(false)
const router = useRouter()
const topRowItems = [
  { text: '企業團餐', src: '/group/circle1.png' },
  { text: '團訂午餐', src: '/group/circle2.png' },
  { text: '同事揪團', src: '/group/circle3.png' },
  { text: '會議盒餐', src: '/group/circle4.png' }
]

const bottomRowItems = [
  { text: '活動點心', src: '/group/circle5.png' },
  { text: '記者會', src: '/group/circle6.png' },
  { text: '家庭日', src: '/group/circle7.png' },
  { text: '野餐日', src: '/group/circle8.png' }
]

const navigateTo = route => {
  router.push(route)
}

const onFabClick = () => {
  if (agreeCollection.hasAgreed) {
    router.push('/onlineOrder')
  } else {
    onOnlineClick()
  }
}

const cards = ref([
  {
    image: '/index/0-pic-13.png',
    text: '午茶盒餐系列​',
    route: '/delicious#box',
    ref: 'card1'
  },
  {
    image: '/index/0-pic-14.png',
    text: '潤餅便當系列​',
    route: '/delicious#bandong',
    ref: 'card2'
  },
  {
    image: '/index/0-pic-15.png',
    text: '精緻客製化餐盒',
    route: '/budget#select3',
    ref: 'card3'
  }
])

// const products = ref([
//   {
//     image: '/index/Frame180.png',
//     title: '單點系列-6吋潤餅 80元',
//     name: '查看完整6吋潤餅',
//     content: '6 種口味：',
//     content2: '薯泥香素鬆、蒜味鄉村魚、蜂蜜芥末雞',
//     content3: '千島香酥蝦、凱薩烤培根、媽手老滷肉 (預訂供應)',
//     route: '/delicious#solo'
//   },
//   {
//     image: '/index/Frame181.png',
//     title: '雙主餐潤餅便當 - 清蒸嫩雞胸 125元',
//     name: '查看完整便當系列',
//     content: '3 吋潤餅 + 清蒸嫩雞胸 ',
//     content2: '梅汁蕃茄 + 鹽水煮蛋 + 季節時蔬',
//     content3: '廚娘油飯 + 酥炸菇菇 + 香滷豆干',
//     smallNote: '*廚娘油飯依預訂單當日現作限量供應，不足數將以芋頭糕或蜜地瓜替換，恕無法自選，請您諒解！',
//     route: '/delicious#bandong'
//   },
//   {
//     image: '/index/Frame182.png',
//     title: '午茶系列 - 貴賓盒餐 $125',
//     name: '查看完整盒餐系列',
//     content: '3 吋潤餅 + 蜂蜜芥末醬地瓜',
//     content2: '主廚小點 +  湯飲品擇 1',
//     smallNote: '* 主廚小點：蛋塔、甜酥餅、芋頭糕 不定期供應 ',
//     route: '/delicious#box'
//   },
//   {
//     image: '/index/Frame184.png',
//     title: '雙主餐潤餅便當 - 燻鮭魚馬鈴薯 180 元',
//     name: '查看完整便當系列',
//     content: '3 吋潤餅 + 燻鮭魚馬鈴薯',
//     content2: '梅汁蕃茄 + 鹽水煮蛋 + 季節時蔬',
//     content3: '廚娘油飯 + 酥炸菇菇 + 香滷豆干',
//     smallNote: '*廚娘油飯依預訂單當日現作限量供應，不足數將以芋頭糕或蜜地瓜替換，恕無法自選，請您諒解！',
//     route: '/delicious#bandong'
//   },
//   {
//     image: '/index/Frame183.png',
//     title: '客製化精緻餐盒',
//     name: '查看客製化精緻餐盒',
//     content: '期待與您深入討論，專屬調整每一餐。',
//     content2: '價格依輕食選擇，確保符合您的預算。',
//     route: '/budget#select3'
//   },
//   {
//     image: '/index/Frame185.png',
//     title: '分享餐220元',
//     name: '查看完整盒餐系列',
//     content: '3 吋潤餅 6 入 ( 口味 6 擇 3 或 2 )：',
//     content2: '薯泥香素鬆、蒜味鄉村魚、蜂蜜芥末雞',
//     content3: '千島香酥蝦、凱薩烤培根、媽手老滷肉 (預訂供應)',
//     route: '/delicious#box'
//   }
// ])
const imagesToPreload = ['/index/Banner.png', '/index/Banner4.jpg']

onMounted(() => {
  imagesToPreload.forEach(image => {
    const img = new Image()
    img.src = image
    img.onload = () => {
      console.log(image + ' loaded')
    }
    img.onerror = () => {
      console.error('Error loading ' + image)
    }
  })

  AOS.init()
  // 定義螢幕寬度
  isMobile.value = window.innerWidth <= 992

  // 監聽螢幕寬度變化
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth <= 992
  })

  gsap.registerPlugin(ScrollTrigger)

  // gsap.from(bannerImg.value, {
  //   scale: 0.5,
  //   autoAlpha: 0,
  //   scrollTrigger: {
  //     trigger: bannerImg.value,
  //     start: 'bottom bottom',
  //     toggleActions: 'play none none none',
  //     once: true
  //     // markers: true`
  //   }
  // })

  // 只在手機版時執行的動畫
  cards.value.forEach((card, index) => {
    const cardElement = document.getElementById(`card-${index}`)

    if (isMobile.value) {
      gsap.to(cardElement.querySelector('.dollarBtn'), {
        // CSS class settings here
        onStart: () => {
          cardElement.querySelector('.dollarBtn').classList.add('hover')
        },
        onReverseComplete: () => {
          cardElement.querySelector('.dollarBtn').classList.remove('hover')
        },
        scrollTrigger: {
          trigger: cardElement,
          start: 'bottom bottom',
          toggleActions: 'play reverse play reverse',
          once: false
        }
      })
    }
  })

  // nextTick()
  // animateImage()
  // 監聽調整效果
})

// watch(slide, async () => {
//   await nextTick()
//   animateImage()
// })

// function animateImage() {
//   gsap.from('.incarouselImg', {
//     // opacity: 0,
//     duration: 1,
//     x: -100
//   })
// }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700;900&display=swap');

//Banner
.indexBanner {
  display: block;
  height: 100%;
  background: #f5f5f5;
  img {
    width: 100%;

    height: 100%;
    object-fit: contain;
  }

  width: 100%;
  min-height: 151.5px;
  // height: 100%;
  .q-carousel {
    background-color: #f5f5f5;
    height: 100%;
  }
  .q-carousel__arrow .q-icon {
    font-size: 3rem;
    color: #e5006e;
  }
}

//Banner2
.indexBanner2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: #f5f5f5;
}
.banner2Top {
  display: flex;
  flex-direction: row;
  // justify-content: flex-end;
  width: 100%;
  .roundedImg {
    width: 40%;
    height: 40%;
    object-fit: contain;
    position: absolute;
    top: -12%;
    left: 2%;
    // max-width: 380px;
    // max-height: 380px;
    @media (min-width: 500px) {
      top: -8%;
      left: 7%;
      width: 30%;
      height: 35%;
    }
    @media (min-width: 576px) {
      top: -8%;
      left: 7%;
      // width: 30%;
      // height: 35%;
    }
    @media (min-width: 768px) {
      left: 12%;
      // width: 28%;
      // height: 35%;
    }
    @media (min-width: 992px) {
      left: 11%;
      width: 40%;
      // height: 35%;
    }
    @media (min-width: 1200px) {
      left: 11%;
    }
    @media (min-width: 1500px) {
      left: 13%;
    }
  }
  p {
    font-size: 21px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    color: #f50077;
    @media (min-width: 768px) {
      font-size: 2rem;
    }
    @media (min-width: 992px) {
      font-size: 3rem;
    }
  }
  .topText {
    margin: 5% 10%;
    position: relative;
    left: 35%;
    line-height: 140%; /* 67.2px */
  }
}
.groupImgs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  // padding-top: 5%;
  margin-bottom: 10%;
  .groupImgTop {
    display: flex;
    flex-direction: row;
    margin: 2%;
    width: 100%;
    justify-content: center;
  }
  // 單張圖片
  .groupImg {
    position: relative; /* 設置定位上下文，以便內部元素可以準確定位 */
    width: 4.5rem;
    height: 4.5rem;
    flex-shrink: 0;
    border-radius: 9999px;
    overflow: hidden; /* 隱藏圖片超出部分 */
    margin: 1%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media (min-width: 576px) {
      width: 6.5rem;
      height: 6.5rem;
    }
    @media (min-width: 768px) {
      width: 8rem;
      height: 8rem;
    }
    @media (min-width: 992px) {
      width: 9rem;
      height: 9rem;
    }
    @media (min-width: 1200px) {
      width: 11rem;
      height: 11rem;
    }
    @media (min-width: 1500px) {
      width: 14.375rem;
      height: 14.375rem;
    }
    // @media (min-width: 1700px) {
    //   width: 10.375rem;
    //   height: 10.375rem;
    // }
    // 灰色圓形
    .backgroundOverlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 9999px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      transition: opacity 0.3s ease; /* 動畫過渡效果 */
      &:hover {
        opacity: 0; /* 透明度變為 0 */
      }
      .text {
        display: flex;
        flex-direction: row;
        justify-content: center;
        color: white;
        width: 100px;

        font-size: 0.8rem;
        font-weight: 700;
        margin: 0;
        opacity: 1; /* 初始透明度 */
        transition: opacity 0.3s ease; /* 動畫過渡效果 */
      }
      /* HOVER 時的效果 */
      .groupImg:hover .text {
        opacity: 0; /* 文字透明度變為 0 */
      }

      @media (min-width: 768px) {
        .text {
          font-size: 1.2rem;
        }
      }
      @media (min-width: 992px) {
        .text {
          font-size: 1rem;
        }
      }
      @media (min-width: 1200px) {
        .text {
          font-size: 1.3rem;
        }
      }
    }
  }
}

//輪播
.indexCarousel {
  width: 100%;
  min-height: 151.5px;
  // height: 100%;
  .q-carousel {
    background-color: #f5f5f5;
    height: 100%;
  }
}

.incarouselBg {
  width: 100%;
  // height: 50%;
  object-fit: contain;
  position: relative;
  padding-bottom: 3%;
}

.incarouselImg {
  width: 44%;
  // height: 50%;
  object-fit: contain;
  position: absolute;
  top: -7%;
  left: 10%;
  z-index: 1;
  // @media (min-width: 992px) {
  //   left: 8%;
  //   width: 40%;
  // }
}

.productTitle {
  position: absolute;
  top: 42%;
  left: 70%;
  width: 30%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  img {
    width: 70%;
    margin-bottom: 3%;
  }
  @media (min-width: 768px) {
    left: 75%;
    img {
      width: 70%;
      margin-bottom: 3%;
    }
  }
  @media (min-width: 1024px) {
    top: 38%;
  }
}
.productText {
  .product-title {
    color: var(--e-5006-e, #f50077);

    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  button {
    display: flex;
    border-radius: 0;
    box-shadow: none;
    min-width: 120px;
    margin-top: 13%;
    border: 1px solid #f50077;
    color: #f50077;
    background: transparent;
    height: 39px;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    &::before {
      box-shadow: none;
    }
  }
  button:hover {
    background: #f50077;
    color: #fff;
  }

  @media (min-width: 992px) {
    width: 100%;
    .product-title {
      /* 中華一餅/web/小標/noto 24px */

      font-size: 1.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      color: #f50077;
    }
    .product-content {
      /* 中華一餅/web/內文 noto 18px */

      font-size: 1.125rem;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 28.8px */
      color: #2b2b2b;
    }
    button {
      display: flex;
      margin-top: 8%;
      // padding: 10px 48px;
      width: 195px;
      height: 46px;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      border: 1px solid #f50077;
      color: #f50077;
      font-size: 1.125rem;
    }
  }
}

//時是
.tenBG {
  background: #fffaf3 url('/delicious/ten.png') repeat 0% 0% / cover;
}
.dollarTitle {
  background: #fffaf3;
  img {
    background: #fffaf3;
  }
  h3 {
    font-size: 1.3125rem;
  }
  @media (min-width: 768px) {
    h3 {
      font-size: 2.375rem;
      line-height: 9.125rem;
    }
  }
}
//預算
.flower {
  object-fit: contain;
  margin: 0 1%;
  // width: 3%;
  width: 2rem;
  @media (min-width: 768px) {
    width: auto;
  }
}

.dollar {
  width: 100%;
  height: 100%;
  h3 {
    font-size: 1.5rem;
  }
  img {
    width: 10%;
    height: 10%;
    object-fit: contain;
  }
  @media (min-width: 768px) {
    h3 {
      font-size: 3rem;
    }
    img {
      width: 8%;
      height: 8%;
    }
  }
  @media (min-width: 992px) {
    h3 {
      font-size: 3rem;
    }
    img {
      width: 3%;
      height: 3%;
    }
  }
}

.indexCard {
  width: 100%;
  height: 100%;
}
.dollarCard {
  // width: 100%;
  margin: 2%;
  display: flex;
  flex-direction: column;
  background: none;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  .q-card {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: none;
    background-color: transparent;
    @media (min-width: 992px) {
      width: 100%;
    }
  }

  img {
    width: 100%;
    object-fit: contain;
  }
}
//預算選擇btn
.dollarBtn {
  border: 1px solid #f50077;
  font-size: 1.1rem;
  padding: 0 5vw;
  border: 0;
  background: none;
  text-transform: uppercase;
  color: #f50077;
  font-weight: bold;
  position: relative;
  outline: none;
  padding: 10px 20px;
  box-sizing: border-box;
  cursor: pointer;
}

.dollarBtn::before,
.dollarBtn::after {
  box-sizing: inherit;
  position: absolute;
  content: '';
  border: 2px solid transparent;
  width: 0;
  height: 0;
}

.dollarBtn::after {
  bottom: 0;
  right: 0;
}

.dollarBtn::before {
  top: 0;
  left: 0;
}
.dollarCard {
  cursor: pointer;
}
.dollarCards:hover .dollarBtn::before,
.dollarCards:hover .dollarBtn::after {
  width: 100%;
  height: 100%;
}

.dollarCards:hover .dollarBtn::before {
  border-top-color: #f50077;
  border-right-color: #f50077;
  transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
}

.dollarCards:hover .dollarBtn::after {
  border-bottom-color: #f50077;
  border-left-color: #f50077;
  transition: border-color 0s ease-out 0.6s, width 0.3s ease-out 0.6s, height 0.3s ease-out 1s;
}

.dollarCards .dollarBtn.hover::before,
.dollarCards .dollarBtn.hover::after {
  width: 100%;
  height: 100%;
}

.dollarCards .dollarBtn.hover::before {
  border-top-color: #f50077;
  border-right-color: #f50077;
  transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
}

.dollarCards .dollarBtn.hover::after {
  border-bottom-color: #f50077;
  border-left-color: #f50077;
  transition: border-color 0s ease-out 0.6s, width 0.3s ease-out 0.6s, height 0.3s ease-out 1s;
}

//介紹

.indexIntroduce {
  // background-color: #f9f2ea;
  width: 100%;
  height: 100%;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
}

.indexStory {
  // margin: 5% 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  img {
    object-fit: contain;
    width: 100%;
    padding: 8% 15%;
  }

  button {
    img {
      width: 100%;
    }
  }
  @media (min-width: 1024px) {
    margin: 5% 0;
    img {
      padding: 0;
      width: 30%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.indexStoryText {
  .storyTextContent {
    background-color: white;
    padding: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (min-width: 1024px) {
      height: 100%;
    }
  }
  padding: 8% 15%;

  h4 {
    font-weight: 700;
    font-size: 1.1rem;
    margin: 0;
    margin-top: 10%;
  }
  .indexStoryP {
    text-align: left;
  }
  h5 {
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 18px; /* 150% */
    margin: 10% 0;
    line-height: 180%; /* 21.6px */
  }
  p {
    font-style: normal;
    font-weight: 400;
    line-height: 180%; /* 30.6px */
    font-size: 0.8rem;
    margin-bottom: 10%;
  }
  .gotoStory {
    // background-color: #F50077;
    color: #f50077;
    font-size: 1rem;
    border: 1px solid #f50077;
    text-decoration: none;
    display: flex;
    width: 195px;
    // padding: 10px 48px;
    justify-content: space-between;
    border-radius: 0;
    box-shadow: none;
    margin: 0;
    margin-bottom: 10%;
    &::before {
      box-shadow: none;
    }
  }
  .gotoStory:hover {
    background: #f50077;
    color: #fff;
  }
  .good {
    width: 29px;
    height: 24px;
  }
  @media (min-width: 768px) {
    h4 {
      font-size: 2rem;
    }
    p {
      font-size: 1.4rem;
    }

    .gotoStory {
      font-size: 1.3rem;
    }
  }
  @media (min-width: 1024px) {
    padding: 0% 5%;
    h4 {
      font-weight: 700;
      font-size: 1.5rem;
    }
    h5 {
      font-size: 0.9rem;
    }
    p {
      font-size: 1.1rem;
    }
    .gotoStory {
      display: flex;
      width: 195px;
      height: 46px;
      // padding: 10px 48px;
      justify-content: space-between;
      align-items: center;
      // margin-top: 3rem;
      font-size: 1.1rem;
    }
  }
}

.demoArea {
  width: 100%;
  height: 100%;
  background-color: #ffefad;
  // margin: 5%;
  padding: 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}
.demoLeft {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    width: 49%;
    flex-direction: row;
  }
}

.demoImg {
  display: flex;
  flex-direction: row;
  justify-content: center;
  img {
    width: 100%;
    object-fit: contain;
  }
  @media (min-width: 768px) {
    img {
      width: 100%;
    }
  }
}
.leftText {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  h4 {
    font-weight: 700;
    font-size: 1.1rem;
    margin: 3% 0;
  }

  p {
    font-weight: 400;
    font-size: 0.8rem;
    padding: 0 10%;
    margin: 3% 0 6% 0;
  }

  button {
    display: flex;
    width: 195px;
    max-height: 44px;
    // padding: 10px 48px;
    font-size: 1.1rem;
    justify-content: space-between;
    align-items: center;
    border-radius: 0;
    border: 1px solid var(--e-5006-e, #f50077);
    color: #f50077;
    // margin-top: 2%;
    &:hover {
      background: #f50077;
      color: #fff;
    }
    &:active {
      opacity: 0.7;
    }
    &::before {
      box-shadow: none;
    }
  }
  @media (min-width: 768px) {
    align-items: flex-start;
    h4 {
      font-size: 1.5rem;
    }
    .leftTextContent {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 210px;
    }
    p {
      font-size: 1.1rem;
      width: 70%;
      // height: 210px;
      padding: 0;
    }
  }
}
.demoRight {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10%;
  h4 {
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: 0;
  }
  p {
    font-weight: 700;
    font-size: 0.9rem;
    color: #f50077;
    margin-bottom: 0;
  }
  button {
    margin-top: 16px;
    display: flex;
    width: 210px;
    max-height: 44px;
    // padding: 10px 48px;
    font-size: 1.1rem;
    border-radius: 0;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--e-5006-e, #f50077);
    color: #f50077;
    &:hover {
      background: #f50077;
      color: #fff;
    }
    &:active {
      opacity: 0.7;
    }
    &::before {
      box-shadow: none;
    }
  }

  @media (min-width: 768px) {
    width: 49%;

    align-items: flex-start;
    margin-left: 5%;
    margin-bottom: 0%;
    h4 {
      font-weight: 700;
      font-size: 1.5rem;
    }

    p {
      font-weight: 700;
      font-size: 1.3rem;
      color: #f50077;
      margin-bottom: 8px;
    }
  }
  @media (min-width: 1024px) {
    h4 {
      margin-top: 1%;
    }
  }
}
.rightContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  .contentImg {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 10%;
    img {
      width: 210px;
      height: 210px;
      object-fit: contain;
    }
  }
  .contentText {
    text-align: center;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    img {
      width: 134px;
      height: 134px;
    }
    .contentText {
      text-align: left;
    }
  }
}
.no-underline {
  text-decoration: none;
}
.smallNote {
  font-size: 16px;
  color: #666;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
}
</style>
