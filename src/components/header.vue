<template>
  <header>
    <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125" />

    <nav class="nav">
      <router-link to="/">الرئيسية</router-link>
      <router-link to="/about">حول</router-link>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'Header'
}

</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
