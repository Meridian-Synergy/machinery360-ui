<script setup lang="ts">
import { computed } from 'vue'

/**
 * McSpinner — the single loading indicator for every Machinery360 surface.
 *
 * A ring of amber dots fading around the circle, rotating as a whole. Theme-safe
 * on both light and dark surfaces: the trail fades via opacity, not a fixed
 * light/dark colour, so it reads the same on #F2F4F7 and on #161C25.
 *
 * Self-contained keyframes — never depends on a global `@keyframes` in the
 * consumer (a copied spinner SVG or a page-local animation is exactly the
 * divergence this component exists to prevent).
 *
 * Decorative by default (aria-hidden); pass `label` to expose it as a live
 * status. For a page/section loader use McLoadingState instead.
 */
const props = withDefaults(defineProps<{
  /** Diameter in pixels */
  size?: number
  /** Accessible label; when set the spinner is announced (role="status") instead of decorative */
  label?: string
}>(), { size: 32 })

const COUNT = 12

// Leading dot fully opaque, trailing dots fade around the ring.
const dots = computed(() =>
  Array.from({ length: COUNT }, (_, i) => ({
    angle: (360 / COUNT) * i,
    opacity: 0.12 + 0.88 * ((i + 1) / COUNT),
  })),
)
const radius = computed(() => props.size * 0.38)
const dotSize = computed(() => Math.max(2, props.size * 0.16))
</script>

<template>
  <div
    class="mc-spinner"
    :style="{ width: `${size}px`, height: `${size}px` }"
    :role="label ? 'status' : undefined"
    :aria-label="label || undefined"
    :aria-hidden="label ? undefined : true"
  >
    <span
      v-for="(d, i) in dots"
      :key="i"
      class="mc-spinner__dot"
      :style="{
        width: `${dotSize}px`,
        height: `${dotSize}px`,
        opacity: d.opacity,
        transform: `translate(-50%, -50%) rotate(${d.angle}deg) translateY(-${radius}px)`,
      }"
    />
  </div>
</template>

<style scoped>
.mc-spinner {
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
  animation: mc-spin 1.1s linear infinite;
}
.mc-spinner__dot {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  background: var(--mc-color-blue, #1560a8);
}
@keyframes mc-spin {
  to { transform: rotate(360deg); }
}
/* Keep the motion cue but slow it right down for reduced-motion users. The
 * global base.css rule neutralizes animations; this keeps a usable indicator. */
@media (prefers-reduced-motion: reduce) {
  .mc-spinner {
    animation-duration: 2.2s !important;
    animation-iteration-count: infinite !important;
  }
}
</style>
