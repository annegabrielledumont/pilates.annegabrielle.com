<template>
  <div class="page">
    <Sidebar
      class="sidebar"
      :items="sidebarItems"
      :class="{ hide: !sidebarVisible }"
    />

    <div class="hero mb">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        alt="hero"
        class="hero-img"
      >
      <div class="overlay-color absolute full" />

      <div class="hero-content">
        <div class="container">
          <h1 class="mb-s">
            {{ data.heroText || $title || 'Hello' }}
          </h1>

          <h4 class="description">
            {{ data.tagline || $description || 'Welcome to your VuePress site' }}
          </h4>

          <p
            v-if="data.actionText && data.actionLink"
            class="action text-center"
          >
            <NavLink
              class="btn p"
              :item="actionLink"
            />
          </p>
        </div>
      </div>
    </div>

    <div
      v-if="data.features && data.features.length"
      class="features container"
    >
      <div class="desktop-blobs flex-stretch">
        <div
          v-for="(feature, index) in data.features"
          :key="index"
          class="feature desktop-blob-1-3 flex flex-direction-column"
        >
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.details }}</p>
          <p class="flex-bottom">
            <router-link
              :to="feature.link"
              class="btn-alt p-s full-x text-right"
            >
              →
            </router-link>
          </p>
        </div>
      </div>
      <Content class="custom" />
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import NavLink from './NavLink.vue'

export default {
  components: { NavLink, Sidebar },
  props: ['sidebarItems', 'sidebarVisible'],

  computed: {
    data() {
      return this.$page.frontmatter
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>
