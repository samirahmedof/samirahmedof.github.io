<template>
  <transition
    enter-active-class="animate__animated animate__fadeIn animate__faster"
    leave-active-class="animate__animated animate__fadeOut animate__faster"
  >
    <div id="loader">
      <div class="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
@keyframes loader {
  0%,
  10%,
  100% {
    width: 80px;
    height: 80px;
  }
  65% {
    width: 150px;
    height: 150px;
  }
}
@keyframes loaderBlock {
  0%,
  30% {
    transform: rotate(0);
  }
  55% {
    background-color: #ffd162;
  }
  100% {
    transform: rotate(90deg);
  }
}
@keyframes loaderBlockInverse {
  0%,
  20% {
    transform: rotate(0);
  }
  55% {
    background-color: #ffd162;
  }
  100% {
    transform: rotate(-90deg);
  }
}
#loader {
  background: #2222229e;
  position: fixed;
  left: 0;
  width: 100%;
  top: 0;
  height: 100%;
  z-index: 200;
  backdrop-filter: blur(15px);
  .loader {
    width: 80px;
    height: 80px;
    transform: translate(-50%, -50%) rotate(45deg) translate3d(0, 0, 0);
    animation: loader 1.2s infinite ease-in-out;
    position: absolute;
    left: 50%;
    top: 50%;
    span {
      position: absolute;
      display: block;
      width: 40px;
      height: 40px;
      background-color: #ffb400;
      animation: loaderBlock 1.2s infinite ease-in-out both;

      &:nth-child(1) {
        top: 0;
        left: 0;
      }
      &:nth-child(2) {
        top: 0;
        right: 0;
        animation: loaderBlockInverse 1.2s infinite ease-in-out both;
      }
      &:nth-child(3) {
        bottom: 0;
        left: 0;
        animation: loaderBlockInverse 1.2s infinite ease-in-out both;
      }
      &:nth-child(4) {
        bottom: 0;
        right: 0;
      }
    }
  }
}
</style>