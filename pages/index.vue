<template>
  <div class="index">
    <div class="py-10 flex justify-between items-center">
      <div class="flex flex-col justify-center xs:items-center sm:items-start">
        <p class="text-gray-700 xs:text-xl sm:text-2xl md:text-3xl font-bold xs:text-center sm:text-left whitespace-pre-line">
          写代码累到的时候，
          加班疲惫的时候，
          家是你最好的归宿！
        </p>
        <p class="mt-4 mb-10 text-gray-600 text-sm xs:text-center sm:text-left sm:whitespace-pre-line">
          人们赞美流星，是因为它燃烧着走完自己的全部路程!
        </p>
        <div>
          <ns-button
            size="large"
            @click="$router.push('/articles')"
          >
            查看文章
          </ns-button>
        </div>
      </div>
      <img
        class="cover"
        src="~/assets/images/home.png"
        alt="首页图片"
      >

      <!-- src="https://gitee.com/chinesee/images/raw/master/img/img_029.png" -->
    </div>

    <div class="mt-10 pt-8 conact">
      <p class="text-xc text-gray-400">联系我 微信：new588088 QQ：1182798549 邮箱：1182798549@qq.com</p>
      <!-- <ul class="text-gray-300">
        <li class="mb-1">微信：new588088</li>
        <li class="mb-1">QQ：1182798549</li>
        <li class="mb-1">邮箱：1182798549@qq.com</li>
      </ul> -->
    </div>

    <!-- <div class="mb-10">
      <h2 class="mb-5 text-xl font-bold">最近文章</h2>
      <recent-articles
        class="pt-10"
        :articles="filterArticles"
      ></recent-articles>
    </div> -->

    <!-- <banner class="my-16"></banner> -->
  </div>
</template>

<script>
import head from '~/mixins/head'

// import Banner from '~/components/home/Banner'
// import RecentArticles from '~/components/home/RecentArticles'

export default {
  // components: { Banner, RecentArticles },
  mixins: [head({ title: '首页' })],
  asyncData() {
    const resolve = require.context('~/contents/', true, /\.md$/)
    const articles = resolve
      .keys()
      .reduce((res, key) => {
        const { attributes: { title, description, time }, meta: { resourcePath } } = resolve(key)
        if (title) {
          const paths = resourcePath.split('\\')
          const path = paths
            .slice(paths.indexOf(`${process.env.blogRoot}`) + 1)
            .join('/')
            .replace('.md', '')
          const timestamp = new Date(time.replace(/[(年)|(月)|(日)]/g, '/')).getTime()

          res.push({ path, title, description, time, timestamp })
          return res
        }
      }, [])
    // const articles = resolve.keys().map(key => {
    //   const { attributes: { title, description, time }, meta: { resourcePath } } = resolve(key)
    //   const paths = resourcePath.split('\\')
    //   const path = paths.slice(paths.indexOf(`${process.env.blogRoot}`) + 1).join('/').replace('.md', '')
    //   const timestamp = new Date(time.replace(/[(年)|(月)|(日)]/g, '/')).getTime()
    //   return { path, title, description, time, timestamp }
    // })
    const filterArticles = articles
      .sort((a, b) => {
        return a.timestamp > b.timestamp ? -1 : 1
      })
      .slice(0, 4)
    return { filterArticles }
  },

  data: () => ({
  }),
}
</script>

<style lang="scss" scoped>
.index {
  @apply pt-6;
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
}

// 封面图
.cover {
  transition: $transition;
  padding-top: 100px;
  @media (max-width: 820px) {
    display: none;
  }

  @media (min-width: 821px) {
    width: 45%;
  }

  @media (min-width: 1040px) {
    width: 50%;
  }

  @media (min-width: 1160px) {
    width: 60%;
  }

  @media (min-width: 1280px) {
    width: 700px;
  }
}
.conact {
  padding-top: 150px;
  text-align: center;
}
</style>
