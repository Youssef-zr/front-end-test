<template>
  <div id="app">
    <sp-header />
    <business />
    <about />
    <pricing />
    <FAQ />
    <contact />
    <!-- <router-view /> -->
  </div>
</template>

<script>
import spHeader from "@/components/header";
import business from "@/components/business";
import about from "@/components/about";
import pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import contact from "@/components/contact";

export default {
  data() {
    return {};
  },
  components: {
    spHeader,
    business,
    about,
    pricing,
    FAQ,
    contact
  }
};
</script>
