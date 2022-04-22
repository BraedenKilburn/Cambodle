<template>
  <header>
    <div class="menu-left">
      <button
        id="nav-button"
        class="icon"
        aria-label="Navigation menu."
        tabindex="-1"
      >
        <i class="fa-solid fa-bars fa-lg"></i>
      </button>
      <button id="help-button" class="icon" aria-label="Help" tabindex="-1">
        <i class="fa-regular fa-circle-question fa-lg"></i>
      </button>
    </div>
    <div class="title">Cambodle</div>
    <div class="menu-right">
      <button
        id="statistics-button"
        class="icon"
        aria-label="Statistics"
        tabindex="-1"
      >
        <i class="fa-solid fa-ranking-star fa-lg"></i>
      </button>
      <button
        id="settings-button"
        class="icon"
        aria-label="Settings"
        tabindex="-1"
      >
        <i class="fa-solid fa-gear fa-lg"></i>
      </button>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  border-bottom: 1px solid var(--color-tone-4);
  width: 100%;
}

header .title {
  font-family: "nyt-karnakcondensed";
  font-weight: 700;
  font-size: 37px;
  line-height: 100%;
  letter-spacing: 0.01em;
  text-align: center;
  left: 0;
  right: 0;
  pointer-events: none;
}

.menu-left {
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
  width: 70px;
  justify-content: flex-start;
}

.menu-right {
  display: flex;
  width: 70px;
  justify-content: flex-end;
}

button.icon {
  margin: 0 0.5vw;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 4px;
}
</style>
