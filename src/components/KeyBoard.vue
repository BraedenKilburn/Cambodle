<template>
  <div id="keyboard">
    <div class="row">
      <button data-key="q">q</button><button data-key="w">w</button
      ><button data-key="e">e</button><button data-key="r">r</button
      ><button data-key="t">t</button><button data-key="y">y</button
      ><button data-key="u">u</button><button data-key="i">i</button
      ><button data-key="o">o</button><button data-key="p">p</button>
    </div>
    <div class="row">
      <div class="spacer half"></div>
      <button data-key="a">a</button><button data-key="s">s</button
      ><button data-key="d">d</button><button data-key="f">f</button
      ><button data-key="g">g</button><button data-key="h">h</button
      ><button data-key="j">j</button><button data-key="k">k</button
      ><button data-key="l">l</button>
      <div class="spacer half"></div>
    </div>
    <div class="row">
      <button data-key="↵" class="one-and-a-half">enter</button
      ><button data-key="z">z</button><button data-key="x">x</button
      ><button data-key="c">c</button><button data-key="v">v</button
      ><button data-key="b">b</button><button data-key="n">n</button
      ><button data-key="m">m</button
      ><button data-key="←" class="one-and-a-half">
        <i class="fa-solid fa-delete-left"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "KeyBoard",
};
</script>

<style scoped>
:host {
  height: var(--keyboard-height);
}
#keyboard {
  margin: 0 8px;
  user-select: none;
}

.row {
  display: flex;
  width: 100%;
  margin: 0 auto 8px;
  /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */
  touch-action: manipulation;
}

button {
  font-family: inherit;
  font-weight: bold;
  border: 0;
  padding: 0;
  margin: 0 6px 0 0;
  height: 58px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  background-color: var(--key-bg);
  color: var(--key-text-color);
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
}

button:focus {
  outline: none;
}

button.fade {
  transition: background-color 0.1s ease, color 0.1s ease;
}

button:last-of-type {
  margin: 0;
}

.half {
  flex: 0.5;
}

.one {
  flex: 1;
}

.one-and-a-half {
  flex: 1.5;
  font-size: 12px;
}

.two {
  flex: 2;
}

button[data-state="correct"] {
  background-color: var(--key-bg-correct);
  color: var(--key-evaluated-text-color);
}

button[data-state="present"] {
  background-color: var(--key-bg-present);
  color: var(--key-evaluated-text-color);
}

button[data-state="absent"] {
  background-color: var(--key-bg-absent);
  color: var(--key-evaluated-text-color);
}
</style>
