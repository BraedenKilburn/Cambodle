<template>
  <footer class="d-flex justify-content-start align-items-center">
    <a
      href="https://github.com/BraedenKilburn/Cambodle"
      target="_blank"
      rel="noopener noreferrer"
      class="d-flex align-items-center mb-sm-3 mb-md-0 text-decoration-none"
    >
      <i class="fab fa-github"></i>
      <p class="pl-5 mb-0">Created by Braeden Kilburn</p>
    </a>
  </footer>
</template>

<style scoped>
footer {
  bottom: 0;
  width: 100%;
  z-index: 1000;
  justify-content: space-between;
  padding-left: var(--bs-gutter-x, 0.75rem);
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-top: 10px;
}

footer p,
footer i {
  color: black;
  padding-left: 10px;
}

footer a p:hover,
footer a i:hover {
  text-decoration: underline;
}
</style>
