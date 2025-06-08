<template>
    <div class="comment-overlay">
        <div
            v-for="(comment, index) in comments"
            :key="index"
            class="comment-line"
            :style="{ top: `calc(${comment.top}% - ${comment.fontSize}px)`, fontSize: `${comment.fontSize}px` }"
        >
            {{ comment.text }}
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class CommentOverlay extends Vue {
    @Prop({ required: true }) readonly comments!: string[];
}
</script>

<style scoped lang="sass">
.comment-overlay
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  pointer-events: none
  z-index: 10

.comment-line
  animation: moveLeft 10s linear forwards
  white-space: nowrap
  color: white
  text-shadow: 1px 1px 2px black
  position: absolute
  left: 100%
  overflow: hidden

@keyframes moveLeft
  from
    left: 100%
  to
    left: -100%
</style>
