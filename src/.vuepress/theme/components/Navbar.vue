<template>
  <header class="navbar">
    <div class="container">
      <div class="blobs">
        <div class="blob-1 desktop-blob-1-2 flex">
          <SidebarButton
            class="desktop-hide mr"
            @sidebar-toggle="$emit('sidebar-toggle')"
          />
          <router-link
            :to="$localePath"
            class="home-link flex-full-x"
          >
            <img
              v-if="$site.themeConfig.logo"
              class="logo"
              :src="$withBase($site.themeConfig.logo)"
              :alt="$siteTitle"
            >
            <div
              v-else
              ref="siteName"
              class="py-s sitename"
            >
              {{ $siteTitle }}
            </div>
          </router-link>
        </div>

        <div class="blob-1-2">
          <SearchBox v-if="$site.themeConfig.search !== false" />
          <NavLinks class="hide desktop-show" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import SidebarButton from './SidebarButton.vue'
import SearchBox from '@SearchBox'
import NavLinks from './NavLinks.vue'

export default {
  components: { SidebarButton, NavLinks, SearchBox }
}
</script>
