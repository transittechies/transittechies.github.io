<h1 class="mb1 px3 pt2 section-title">Presentations</h1>
<p>A library of slides and demos from past presenters.</p>

<section id="presentation-markdown">
  {% capture my-include %}{% include_relative archive.md %}{% endcapture %} {{ my-include | markdownify }}
</section>
