<script setup lang="ts">
import { shelves, manifest } from './data';
</script>

<template lang="fumi">
  <main class="page">
    <header class="hero">
      <div class="naming">
        <div class="lockup">
          <h1 class="mark" aria-label="息壤 Xirang">
            <span class="glyph" aria-hidden="true">息</span><span
              class="glyph two"
              aria-hidden="true"
            >壤</span>
          </h1>
          <p class="latin" aria-hidden="true"><span>X</span> <span>i</span> <span>R</span> <span>a</span> <span>n</span> <span>g</span></p>
        </div>
        <p class="lead">硬件按件装配。<br />一套规范，一个包管理器。</p>
      </div>

      <pre class="manifest"><code>{% for line in manifest, :key="line" %}<span
        class="row"
      >{{ line }}</span>{% endfor %}</code></pre>
    </header>


    <hr class="rule" />

    <section class="shelves" aria-label="目录">
      {% for s in shelves, :key="s.key" %}
      <div class="shelf">
        <h2>{{ s.name }}</h2>
        <p>{{ s.note }}</p>
      </div>
      {% endfor %}
    </section>

    <footer class="foot">
      <a href="https://github.com/Tape-Out">源码在 GitHub</a>
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

// 汉字定宽，拉丁在同一个框里撑满：改字号不用重调字距
.lockup
  display inline-block

.mark
  margin 0
  font-family var(--song)
  font-weight 300
  font-size clamp(4.2rem, 14vw, 7.6rem)
  line-height 1
  letter-spacing 0

.glyph
  display inline-block

.latin
  display block
  width 100%
  margin 1.1rem 0 0
  padding 0 .7rem
  font-family var(--serif)
  font-size .82rem
  font-weight 300
  color var(--soft)
  text-align justify
  text-align-last justify

  span
    display inline-block

.lead
  margin 2.6rem 0 0
  font-size clamp(1.15rem, 2.4vw, 1.4rem)
  line-height 1.85
  max-width 22em

.manifest
  margin 0
  overflow-x auto
  font-family var(--mono)
  font-size .72rem
  line-height 2.05
  color var(--soft)

  @media (min-width: 46rem)
    font-size .78rem

  @media (min-width: 62rem)
    padding-top 2.1rem

  code
    font-family inherit

.row
  display block
  white-space pre

.rule
  width 6rem
  margin 4.4rem 0 0
  border 0
  border-top 1px solid var(--glaze)

.shelves
  display grid
  gap 2.9rem 3.5rem
  margin-top 3.4rem
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
  font-size .9rem

  a
    color var(--soft)
    text-decoration none
    border-bottom 1px solid transparent
    transition border-color .2s, color .2s

    &:hover,
    &:focus-visible
      color var(--ink)
      border-bottom-color var(--glaze)
</style>
