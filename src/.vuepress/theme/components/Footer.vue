<template>
  <div class="footer">
    <div class="container py">
      <div class="flex">
      
          <ul class="list-sans">
            <li>
              email : <a href="mailto:hello@annegabrielle.com">hello@annegabrielle.com</a>
            </li>
            <li>
              tél. : <a href="tel:+330767820991">07.67.82.09.91</a>
            </li>
          </ul>
   
            <div class="flex-right">
              <a :href="$site.themeConfig.externalLink.url"><img :src="$site.themeConfig.externalLink.logo" :alt="$site.themeConfig.externalLink.text"  class="footer-logo"></a>
            </div>
      </div>
      <p class="h5 mb-0">
        © Anne Gabrielle Dumont - Savœurs
      </p>
    </div>
  </div>
</template>
<script>
export default {}
</script>

