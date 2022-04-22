<template>
  <div class="guess">
    <form action="">
      <div class="flex flex-col">
        <ejs-combobox
          id="combobox"
          :dataSource="provinces"
          placeholder="Guess the province (e.g., Phnom Penh)"
          allowFiltering="true"
        ></ejs-combobox>
        <button type="submit" class="btn btn-outline-dark mt-3">
          <span>&#127472;&#127469; Submit Guess</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ComboBoxComponent } from "@syncfusion/ej2-vue-dropdowns";
import Provinces from "@/assets/data/provinces.json";

export default {
  name: "GuessSubmission",
  components: {
    "ejs-combobox": ComboBoxComponent,
  },
  data() {
    return {
      provinces: Provinces.provinces,
    };
  },
};
</script>

<style scoped>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";

.guess {
  margin: 10px 55px;
}

button {
  width: 100%;
}
</style>
