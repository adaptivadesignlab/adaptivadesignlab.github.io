---
title: Typography
layout: guidelines
type: guideline
meta: Typography guidelines for designing with the Adaptiva brand
permalink: /guidelines/typography
navclass: ondark
typekit: load
---
We chose fonts that we believe accurately reflect the spirit of Adaptiva. The fonts are clean, strong, and well, we just like them. They’re cool fonts.

For the sake of web performance and _convenience_ (see the [introduction]({{site.baseurl}}/guidelines)), the rest of this site is using a Google web font that we thought looked good for this specific, isolated use case.

**Warning**: If you use the wrong fonts in branded materials, I will _hunt you down_ and lecture you while I check your system to make sure you've installed our typefaces.

## Typefaces

<h3 style="font-family: 'museo-sans', 'Poppins', sans-serif;">Museo Sans</h3>
Museo Sans is our primary font, which we use for pretty much everything. It's refined, scalable and legible, and ugh, the kerning is beautiful. We use font weights 300, 500, and 700, and `letter-spacing`/tracking is always `0`.

<h3 style="font-family: 'futura-pt', 'Poppins', sans-serif; letter-spacing: 3px;"><strong>FUTURA PT</strong></h3>
Futura PT Heavy is our alternative font. It's bold, honest, and demands attention. We don't use it often — mostly for illustrations, video/animation, and the occasional one-off print project, but never on the web. Futura PT Heavy is always used in all caps, with the tracking set to 100-200. We use the font weight "Heavy" most of the time, but "Book" is also a viable option.

<h3 style="font-family: 'Segoe UI', 'Poppins', sans-serif; font-weight: normal;">Segoe UI</h3>
This isn't really our brand font, but it's what we use in Microsoft Office documents that aren't exported to PDF, such as Word templates, product documentation, PowerPoint presentations, etc. It's a system font that the vast majority of our customer base already has, and it's not too far off from Museo Sans. Thanks, Microsoft!
<div>
<a class="button purple" href="https://adaptiva.sharepoint.com/TeamSite/_layouts/15/guestaccess.aspx?guestaccesstoken=98fQQ%2fBDEeUzjRftY1mssxJ2Q0TI%2bYoM5nGeGcrEL0Q%3d&docid=2_077fd491fba314732a26a5d1a539a9d0c&rev=1" target="_blank">Download Brand Fonts</a>
</div>
**Note**: The above download link is restricted to Adaptiva staff and requires authentication. We have licensed Museo Sans and Futura PT for our use only, so do _not_ distribute brand fonts outside the company. Since Segoe UI is a system font, we don't have a license for it, so it's not distributable anyway.

## Type Scale
Our type scale is based on the golden ratio (~1.618) and a starting point of `10px` for print, and `16px` for web.

{% for type in site.data.type-scale %}
<div class="j-row j-col j-col-12 wrap type vertical-center-row">
<div class="j-col j-col-6" style="padding-left: 0;"><span style="font-size: {{type.scale}}; font-weight: {% if type.display-weight %}{{type.display-weight}}{% else %}{{type.font-weight}}{% endif %}; font-family: {{type.font-family}};">{{type.title}}</span></div>
<div class="j-col j-col-2"><code style="font-size: 10px;">font-weight</code><br><span style="font-weight: {% if type.display-weight %}{{type.display-weight}}{% else %}{{type.font-weight}}{% endif %};">{{type.font-weight}}</span></div>
<div class="j-col j-col-2"><code style="font-size: 10px;">font-size</code><br>{{type.font-size}}</div>
<div class="j-col j-col-2"><code style="font-size: 10px;">scale</code><br><code>{{type.scale}}</code></div>
</div>
{% endfor %}
<span style="color: #ccc;">* Heading 3 is an exception to the Golden Ratio rule

Font sizes can extend beyond "Giant" for large print files or special cases in illustrations, but do your best to stick to size values that adhere to the 1.618 scale.
