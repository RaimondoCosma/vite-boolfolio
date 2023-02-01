<script>
import { store } from "../../../store";
import AppScore from "../score/AppScore.vue";
export default {
  name: "BoxContainer",
  components: {
    AppScore,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    boxFlag(number) {
      this.store.boxPosition = number;
      this.store.isBomb = true;
    },
    toggleColor(number) {
      this.store.boxPosition = number;
      const index = this.store.totalBox.indexOf(number);
      if (index > -1) {
        this.store.totalBox.splice(index, 1);
      } else {
        this.store.totalBox.push(number);
      }
    },
    getColor(number) {
      if (this.store.totalBox.includes(number)) {
        if (this.store.boxBombs.includes(number)) {
          return "red";
        } else {
          if (!this.store.boxNoBomb.includes(number)) {
            this.store.boxNoBomb.push(number);
            this.getWinnerBan();
          }
          return "blue";
        }
      }
    },
    getWinnerBan() {
      if (
        this.store.boxNoBomb.length ===
        Number(this.store.difficulties) - this.store.boxBombs.length
      ) {
        this.store.gameOverWin = true;
      }
    },
    getHelper(number) {
      let position = Math.sqrt(Number(this.store.difficulties));
      let helpNumber = 0;
      let help = document.getElementById(`helper-${number}`);
      if (this.store.boxBombs.includes(number + 1)) {
        if (this.store.boxPosition % position === 0) {
          helpNumber = helpNumber;
        } else {
          helpNumber++;
        }
      }
      if (this.store.boxBombs.includes(number - 1)) {
        if (this.store.boxPosition % position === 1) {
          helpNumber = helpNumber;
        } else {
          helpNumber++;
        }
      }
      if (this.store.boxBombs.includes(number - position)) {
        helpNumber++;
      }
      if (this.store.boxBombs.includes(number - position - 1)) {
        if (this.store.boxPosition % position === 1) {
          helpNumber = helpNumber;
        } else {
          helpNumber++;
        }
      }
      if (this.store.boxBombs.includes(number - position + 1)) {
        if (this.store.boxPosition % position === 0) {
          helpNumber = helpNumber;
        } else {
          helpNumber++;
        }
      }
      if (this.store.boxBombs.includes(number + position)) {
        helpNumber++;
      }
      if (this.store.boxBombs.includes(number + position - 1)) {
        if (this.store.boxPosition % position === 1) {
          helpNumber = helpNumber;
        } else {
          helpNumber++;
        }
      }
      if (this.store.boxBombs.includes(number + position + 1)) {
        if (this.store.boxPosition % position === 0) {
          helpNumber = helpNumber;
        } else {
          helpNumber++;
        }
      }
      help.innerHTML = helpNumber;
    },
  },
};
</script>

<template>
  <div class="box-container" v-if="this.store.difficulties">
    <div
      @contextmenu="boxFlag(index + 1)"
      @click="[toggleColor(index + 1), getHelper(index + 1)]"
      v-for="(n, index) in Number(this.store.difficulties)"
      class="box-item"
      :class="[`box-item${Math.sqrt(this.store.difficulties)}`]"
      :style="{ 'background-color': getColor(index + 1) }"
    >
      <div class="helper" :id="`helper-${index + 1}`">
        {{ this.store.helpNumber }}
      </div>
    </div>
    <AppScore />
  </div>
</template>

<style lang="scss" scoped>
.box-container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 64vh;
  height: 64vh;
  background-color: #90ee90;
  border: 0.0625rem solid black;
}
.box-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border: 0.0625rem solid black;
  cursor: pointer;
}
.helper {
  position: absolute;
  top: 0.125rem;
  left: 50%;
  transform: translate(-50%);
  color: #fff;
}
.box-item7 {
  width: calc(100% / 7);
  height: calc(100% / 7);
}
.box-item9 {
  width: calc(100% / 9);
  height: calc(100% / 9);
}
.box-item10 {
  width: calc(100% / 10);
  height: calc(100% / 10);
}
.box-flag {
  background-color: black;
}
// .box-active {
//   background-color: blue;
// }
// .box-error {
//   background-color: red;
// }
</style>
