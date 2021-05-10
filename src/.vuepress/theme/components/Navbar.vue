<template>
  <header class="navbar">
    <div class="container">
      <div class="blobs">
        <div class="blob-1 desktop-blob-1-2 flex">
          <router-link
            :to="$localePath"
            class="home-link"
          >
            <img
              v-if="$site.themeConfig.logo"
              class="logo"
              :src="$withBase($site.themeConfig.logo)"
              :alt="$siteTitle"
            >
            <div
              v-if="$siteTitle"
              ref="siteName"
              class="sitename nowrap"
            >
              {{ $siteTitle }}
            </div>
          </router-link>

          <SidebarButton
            class="desktop-hide flex-right"
            @sidebar-toggle="$emit('sidebar-toggle')"
          />
        </div>

        <div class="blob-1-2 text-right">
          <NavLinks class="hide desktop-show" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import SidebarButton from './SidebarButton.vue'
import NavLinks from './NavLinks.vue'

export default {
  components: { SidebarButton, NavLinks }
}
</script>
