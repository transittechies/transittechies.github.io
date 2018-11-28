---
layout: default
title: Transit Techies NYC
permalink: /talks
---

<header>
  <h1 class="mb1 px3 pt2 section-title">Previous Talks</h1>
  <amp-youtube data-videoid="Roc-U1eG5ow" layout="responsive" width="480" height="270"></amp-youtube>
</header>

<section id="past-talks">
  {% capture my-include %}{% include_relative talks-content.md %}{% endcapture %} {{ my-include | markdownify }}
</section>