<script lang="ts">
export default {
  props: ['orientation']  
}
</script>

<template>
    <div class="svg-container">
      <svg v-if="this.orientation === 'N'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-caret-up-square-fill" viewBox="0 0 16 16">
        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 9h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5A.5.5 0 0 0 4 11z"/>
      </svg>

      <svg v-if="this.orientation === 'S'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-caret-down-square-fill" viewBox="0 0 16 16">
        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 4a.5.5 0 0 0-.374.832l4 4.5a.5.5 0 0 0 .748 0l4-4.5A.5.5 0 0 0 12 6H4z"/>
      </svg>

      <svg v-if="this.orientation === 'W'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-caret-left-square-fill" viewBox="0 0 16 16">
        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm10.5 10V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4A.5.5 0 0 0 10.5 12z"/>
      </svg>

      <svg v-if="this.orientation === 'E'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-caret-right-square-fill" viewBox="0 0 16 16">
        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z"/>
      </svg>
    </div>
</template>

<style scoped src="../assets/base.css"></style>
