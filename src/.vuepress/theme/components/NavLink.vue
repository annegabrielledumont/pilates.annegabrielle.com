<template>
  <router-link
    v-if="!isExternal(link)"
    class="nav-link"
    :exact="exact" 
    :to="link"
  >
    {{ item.text }}
  </router-link>
  <a
    v-else
    :href="link"s
    class="nav-link"
  >
  <img :src="item.image" alt="item.text" v-if="item.image">
  <span v-else>{{ item.text }}</span>
  </a>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from '../util'

export default {
  props: {
    item: {
      required: true
    }
  },

  computed: {
    link() {
      return ensureExt(this.item.link)
    },

    exact() {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(
          rootLink => rootLink === this.link
        )
      }
      return this.link === '/'
    }
  },

  methods: {
    isExternal,
    isMailto,
    isTel
  }
}
</script>
