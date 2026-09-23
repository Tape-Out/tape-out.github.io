<script setup lang="ts">
import { shelves, manifest } from './data';
</script>

<template>
  <main class="page">
    <header class="hero">
      <div class="naming">
        <h1 class="mark" aria-label="息壤">
          <span class="glyph" aria-hidden="true">息</span><span
            class="glyph two"
            aria-hidden="true"
          >壤</span>
        </h1>
        <p class="latin">Xirang</p>
        <p class="lead">把硬件做成能搭的积木。<br />一套规范，一个包管理器。</p>
      </div>

      <pre class="manifest"><code><span
        v-for="line in manifest"
        :key="line"
        class="row"
      >{{ line }}</span></code></pre>
    </header>

    <section class="shelves" aria-label="目录">
      <div v-for="s in shelves" :key="s.key" class="shelf">
        <h2>{{ s.name }}</h2>
        <p>{{ s.note }}</p>
      </div>
    </section>

    <footer class="foot">
      <p>这一版只钉技术栈。目录还是写死的，成品由工具导出生成。</p>
    </footer>
  </main>
</template>

<style scoped lang="stylus">
.page
  max-width 62rem
  margin 0 auto
  padding 6rem 1.75rem 4rem

.hero
  display grid
  gap 3.5rem
  align-items start

  @media (min-width: 62rem)
    grid-template-columns minmax(0, 1.05fr) minmax(0, .95fr)
    gap 4rem

.mark
  margin 0
  font-family var(--song)
  font-weight 300
  font-size clamp(4.5rem, 15vw, 8.5rem)
  line-height .96
  letter-spacing .04em

.glyph
  display inline-block

.latin
  margin 1rem 0 0
  font-family var(--serif)
  font-style italic
  font-size 1.15rem
  color var(--soft)

.lead
  margin 2.4rem 0 0
  font-size clamp(1.15rem, 2.4vw, 1.4rem)
  line-height 1.85
  max-width 22em

.manifest
  margin 0
  overflow-x auto
  font-family var(--mono)
  font-size .72rem
  line-height 2.05

  @media (min-width: 46rem)
    font-size .78rem
  color var(--soft)

  @media (min-width: 62rem)
    padding-top 2.1rem

  code
    font-family inherit

.row
  display block
  white-space pre

.shelves
  display grid
  gap 2.9rem 3.5rem
  margin-top 5rem
  align-content start

  @media (min-width: 46rem)
    grid-template-columns repeat(2, minmax(0, 1fr))

.shelf
  h2
    margin 0
    font-family var(--song)
    font-weight 600
    font-size 1.05rem
    letter-spacing .04em

  p
    margin .7rem 0 0
    color var(--soft)
    font-size .95rem
    line-height 1.95
    max-width 26em

.foot
  margin-top 4.5rem
  color var(--soft)
  font-size .85rem

  p
    margin 0
</style>
