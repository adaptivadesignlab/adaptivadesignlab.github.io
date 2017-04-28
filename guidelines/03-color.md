---
title: Color
layout: guidelines
type: guideline
meta: Guidelines for using the Adaptiva color palette
permalink: /guidelines/color
navclass: ondark
---
Our brand colors are an essential factor in communicating Adaptiva’s friendly culture and personality. They’re strong, bright, and they stand out — just like us.

Below is a list of our colors, in order of common use. Note that white, gray, and black colors are listed at the end, despite our abundant use of white space and monochromatic design. The rest of the colors function largely as accents to our clean, minimal design aesthetic.

<div class="j-col j-col-12 colors">
{% for color in site.data.color %}
  <div class="j-col j-col-3 color">
    <div class="color-sample" style="background: {{color.hex}}; {% if color.border %}border: {{color.border}};{% endif %}">
    </div>
    <div class="color-meta">
      <h3 style="color: {{color.hex}}; {% if color.title_color %}color: {{color.title_color}};{% endif %}">{{color.title}}</h3>
      <p>{{color.hex}}<br>{{color.rgb}}<br>{{color.var}}</p>
    </div>
  </div>
{% endfor %}
</div>

## Gradients

We use a fair amount of gradients, and they've grown to be a substantial visual cue for our brand. Gradients should strictly use the Adaptiva color palette and should be smooth, with minimal banding.

The primary use case for gradients is for background fills. This introduces a lot of performance benefits: since Adaptiva gradients are smooth and _look good_, they can serve as a suitable replacement for background images.

When mixing Adaptiva colors for gradients, well, use common sense. Some colors don't look good when they blend into each other. `$orange` and `$green`? Gross!

Feel free to experiment with gradients, but when in doubt, stick to the ones we use most:

<div class="j-col j-col-12 colors">
{% for gradient in site.data.gradients %}
  <div class="j-col j-col-12 gradient">
    <div class="gradient-sample" style="background-color: {{gradient.end}}; background-image: radial-gradient(circle farthest-side at right top, {{gradient.start}}, {{gradient.end}} 125%);"></div>
    <div class="gradient-meta">
      <h3>{{gradient.title}}</h3>
      <code>{{gradient.start}} to {{gradient.end}}</code>
{% highlight css %}
background-color: {{gradient.end}};
background-image: -webkit-radial-gradient(circle farthest-side at right top, {{gradient.start}}, {{gradient.end}} 125%);
background-image: radial-gradient(circle farthest-side at right top, {{gradient.start}}, {{gradient.end}} 125%);
{% endhighlight %}
    </div>
  </div>
{% endfor %}
</div>

### Creating Adaptiva gradients in Photoshop

To replicate the above CSS gradients in Photoshop, we use a Solid Color adjustment layer, set to the ending color, then create a blank layer on top of it, named "Gradient Start". Then, we use the Gradient Tool (G) to drag a radial gradient, set to the starting color, from one corner of the canvas to the opposite corner. Finally, add a Photoshop Noise Filter to Gradient Start, set to 1%, Gaussian, and Monochromatic. This percentage value will vary depending on the dimensions of the project. Use best judgment and common sense when adding noise filters to gradients on large print files.
