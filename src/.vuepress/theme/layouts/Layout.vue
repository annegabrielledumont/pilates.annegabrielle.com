<template>
  <div
    class="layout"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar
      v-if="navbarShow"
      @sidebar-toggle="sidebarToggle"
    />

    <div
      class="sidebar-mask"
      @click="sidebarToggle(false)" 
    />

    <main class="main">
      <div class="container">
        <div class="blobs">
          <Sidebar
            :items="sidebarItems"
            class="sidebar desktop-blob-1-4"
            :class="{ hide: !sidebarVisible }"
            @sidebar-toggle="sidebarToggle"
          />

          <Home
            v-if="$page.frontmatter.home"
            class="blob-1 desktop-blob-3-4"
          />

          <Page
            v-else
            :sidebar-items="sidebarItems"
            class="page blob-1 desktop-blob-3-4"
          />
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'
import Home from '../components/Home.vue'
import Navbar from '../components/Navbar.vue'
import Page from '../components/Page.vue'
import Sidebar from '../components/Sidebar.vue'
import Footer from '../components/Footer.vue'
import { resolveSidebarItems } from '../util'

export default {
  components: { Home, Page, Sidebar, Navbar, Footer },

  data() {
    return {
      sidebarVisible: false
    }
  },

  computed: {
    navbarShow() {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      )
    },

    shouldShowSidebar() {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      )
    },

    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.navbarShow,
          'sidebar-open': this.sidebarVisible,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },

  mounted() {
    // configure progress bar

    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !Vue.component(to.name)) {
        // loader start
      }
      next()
    })

    this.$router.afterEach(() => {
      // loader hide
      this.sidebarVisible = false
    })
  },

  methods: {
    sidebarToggle(to) {
      this.sidebarVisible = typeof to === 'boolean' ? to : !this.sidebarVisible
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.sidebarToggle(true)
        } else {
          this.sidebarToggle(false)
        }
      }
    }
  }
}
</script>

<style>
@import '../styles/styles.css';
</style>
