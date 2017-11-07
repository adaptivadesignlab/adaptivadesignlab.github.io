---
layout: blog-post
title: Adaptiva Website Redesign
meta: We built an entire adaptiva.com from scratch. Here's the nitty-gritty.
posted: November 07 2017
category: blog
author: Jesse Rogers
author_img: jesse-rogers.jpg
author_link_ext: "jesse"
image: 2017-11-07-new-adaptiva-website.png
navclass: ondark
featured: true
---
It's finally done! When Anne, my boss and Adaptiva VP of Marketing, came on board in 2015, we immediately agreed that a radical redesign of the Adaptiva website was a top priority. Of course, a million things came up that required both of our immediate attention (for multiple years), but in 2017, we finally got it done.

Now that I'm no longer swimming in code every day, and the site has been up long enough to gather some data, let's nerd out about design and evaluate!

<div class="j-row" style="margin-bottom: 1.618rem;">
<div class="j-col j-col-8 push-2 collapsible-section" style="padding: 1rem; background: #f9f9f9;">
<h2 class="collapsible-title">Summary</h2>
<div class="collapsible-section--content" style="display: none;">
<p>In three months or less, I built a <a href="https://adaptiva.com" rel="noopener" target="_blank" title="New Adaptiva website">new website</a>, leveraging a custom HTML/SCSS/jQuery framework and component library that I created both for the new website and future Adaptiva front-end web use.</p>

<p>User engagement is up across the board after the first month, and users are apparently finding it easier to learn about the products because contact/demo form submissions are up <strong>over 100%</strong>.</p>
</div>
</div>
</div>

## The old website
When I first started at Adaptiva in early 2014, the website looked... dated. Granted, 2014 is a long time ago in design years, so it didn't look _quite_ as dated back then, but yeah, it needed an update.

<div class="j-row">
<div class="j-col j-col-8 push-2">
<img src="{{site.baseurl}}/assets/img/posts/2017-11-07-adaptiva-website-2014.jpg" style="display: block; margin: 0 0 1.618em; box-shadow: 6px 6px 0 0 rgba(0,0,0,0.2);" alt="Adaptiva website in 2014" />
</div>
<p style="color:#aaa">adaptiva.com in 2014</p>
</div>

## The problems
After spending a couple weeks looking over analytical data, conducting stakeholder interviews, and diving into design research, I found four key issues on the site.

### 1. Visual fragmentation

Over the last couple years, we've rolled out incremental improvements to the site. More full-width sections, some cool hover animations, slick illustrations, etc.

<div class="j-row">
<div class="j-col j-col-8 push-2">
<img src="{{site.baseurl}}/assets/img/posts/2017-11-07-adaptiva-website-2017.jpg" style="display: block; margin: 0 0 1.618em; box-shadow: 6px 6px 0 0 rgba(0,0,0,0.2);" alt="Adaptiva website in 2017" />
</div>
<p style="color:#aaa">adaptiva.com in early 2017</p>
</div>

These small changes _were_ improvements, but they ended up creating fragmentation in the site's look and feel. Illustration standards were changing rapidly, causing friction between contrasting styles. Colors were all over the place, buttons competed against each other, and visual hiearchy was nonexistent in some places.

### 2. Information overload
Some of the metrics we saw room for improvement in were time on site and bounce rate. It was apparent that many users were abandoning their search for information. Why? Probably **cognitive overload**.

<div class="j-row">
<div class="j-col j-col-8 push-2">
<img src="{{site.baseurl}}/assets/img/posts/2017-11-07-information-overload.jpg" style="display: block; margin: 0 0 1.618em; box-shadow: 6px 6px 0 0 rgba(0,0,0,0.2);" alt="Information overload on the old Adaptiva website" />
</div>
<p style="color:#aaa">Yo, that's a <em>lot</em> of text for an "introduction."</p>
</div>

We were hitting users with too much content, and too _technical_ of content too fast, and they were getting overwhelmed and bailing.

### 3. Poor navigational structure
This part was really frustrating because there's actually a pretty cool "story" around the Adaptiva technological platform, but it wasn't being told well at all. Users had to go on a wild goose chase to find the content they wanted, and once they did, they had to go back to square one to find new content.

For example, on the old [OneSite](https://adaptiva.com/products/#onesite) page, users had to scroll for like ten minutes to get to a certain product feature, go to a feature page, then go back in their browser, scroll for another ten minutes, then click on another feature, then repeat.

<div class="j-row">
<div class="j-col j-col-8 push-2">
<img src="{{site.baseurl}}/assets/img/posts/2017-11-07-poor-navigation.jpg" style="display: block; margin: 0 0 1.618em; box-shadow: 6px 6px 0 0 rgba(0,0,0,0.2);" alt="Poor navigational structure on the old Adaptiva website" />
</div>
<p style="color:#aaa">Frustrating OneSite feature page experience</p>
</div>

We found that most users who went through the trouble of navigating this mess were just looking for a brochure or datasheet to download anyway.

### 4. Slow. Slow. Slow.
The old site was hosted on WordPress, and it's no secret that most WordPress sites are burdened with thousands of lines of bloat, unnecessary HTTP requests, and all sorts of performance issues. WordPress sites tend to rely on several third-party plugins, so you're trusting rando developers from the internet to treat your users' precious bandwidth responsibly.

This problem also exacerbated the navigational issue.

The old site forced users to load too many pages just to see basic information, and since each page load was painfully slow, the experience got worse the longer the user stayed on the site. Yikes.

## Goals for the new site
Adaptiva is a company that exists to sell its innovate software. Thus, the sole purpose of the company website is to make it easy for potential customers to educate themselves on the products, make a decision, and eventually request a demo and move down the path toward purchase.

In order to better facilitate these kinds of user paths, I centered my design and development efforts around five key goals.
1. Convey our message clearly
2. Encourage interaction
3. Add more humanity
4. Improve performance dramatically
5. Unify look and feel

### 1. Convey our message clearly

Less text overall with a focus on what matters to the user. More succinct, high-level, and easy-to-understand copy. Sounds so obvious in retrospect, but the "obvious" choice is always the [better one](https://www.lukew.com/ff/entry.asp?1962).

<div class="j-row">
<div class="j-col j-col-8 push-1">
<img src="{{site.baseurl}}/assets/img/posts/2017-11-07-clear-messaging.jpg" style="display: block; margin: 0 0 1.618em; box-shadow: 6px 6px 0 0 rgba(0,0,0,0.2);" alt="Broader, easier to understand copy" />
</div>
<div class="j-col j-col-3">
<img src="{{site.baseurl}}/assets/img/posts/2017-11-07-clear-messaging--mobile.jpg" style="display: block; margin: 0 0 1.618em; box-shadow: 6px 6px 0 0 rgba(0,0,0,0.2);" alt="Broader, easier to understand copy in mobile" />
</div>
</div>
<p style="color:#aaa">Succinct messaging to help users figure out what we actually <em>do</em></p>

**"What do you want to do?"**

This time around, we want to let the user take their own path toward a purchase decision, educating themselves at their own pace, and making downloadable collateral easily available at every point, whenever the user wants to deep dive.

Adaptiva's products are complex, so instead of beating the user over the head with 10 paragraphs of highly technical feature content, we opted to present the products as solutions for the common problems they were designed to solve: distributing software, deploying Windows 10, and automating endpoint security.

The user can navigate through an intuitive interface that takes them through an overview, _key_ features, comparison info, and a demo/free trial prompt. They can download collateral each step of the way to dive deeper into the tech at their own discretion.

### 2. Encourage interaction

There's a pretty high standard for interaction design on the web in 2017. I mean, maybe not as much in the IT Software industry, but generally, when I look at what people are doing on Dribbble, I start to feel very attacked about my own work.

So I put particular effort into designing interfaces that are intuitive, purposeful, easy to use, built with components from my framework that are filled with slick animations and visual treatments that make them _fun_ to click around on.

<div class="j-row">
<div class="j-col j-col-8 push-1">
<img src="{{site.baseurl}}/assets/img/posts/2017-11-07-tertiary-nav.jpg" style="display: block; margin: 0 0 1.618em; box-shadow: 6px 6px 0 0 rgba(0,0,0,0.2);" alt="New Adaptiva tertiary nav component" />
</div>
<div class="j-col j-col-3">
<img src="{{site.baseurl}}/assets/img/posts/2017-11-07-tertiary-nav--mobile.jpg" style="display: block; margin: 0 0 1.618em; box-shadow: 6px 6px 0 0 rgba(0,0,0,0.2);" alt="New Adaptiva tertiary nav component on mobile" />
</div>
</div>
<p style="color:#aaa">The tertiary navigation component is common in the new site</p>
For example, the tertiary nav component shown above allows the user to choose what information is shown to them by clicking. Clicking triggers a cool, snappy animation that might make them want to click on something else.

The more things the user clicks on, the more they end up learning about Adaptiva.

There's tons of other cool compononents on the [site](https://adaptiva.com), many that support swipe gestures and other slick experiences.

### 3. Add more humanity

People need to be able to relate to brands these days. If a brand doesn't feel "human" enough, potential customers are less likely to trust it and its products.

Research shows that video content with people speaking to the credibility of a brand goes a long way. Adaptiva has done a good job getting real, authentic customer testimonial videos up on the website in the past, but that presented a problem as well.

We found that our users loved those videos, but became more familiar with our customers' faces than any of ours.

On the new [homepage](https://adaptiva.com), we have some cool videos with our CEO Jim Souders (shot with [Adam]({{site.url}}/about/adam/)), talking to the core purposes of Adaptiva. We hope these videos will get our customers and potential customers more familiar with Adaptiva itself, so they can feel comfortable with the brand and trust us to continue to deliver reliable software they depend on for years to come.

<div class="j-row">
<div class="j-col j-col-8 push-2">
<img src="{{site.baseurl}}/assets/img/posts/2017-11-07-jim-souders.jpg" style="display: block; margin: 0 0 1.618em; box-shadow: 6px 6px 0 0 rgba(0,0,0,0.2);" alt="Adaptiva CEO Jim Souders" />
</div>
<p style="color:#aaa">Jim looks cool</p>
</div>

### 4. Improve performance dramatically

TL;DR: we did it fam.

The first and probably most important decision I made to help site performance was getting the majority of this site off WordPress.

We really don't have a bunch of a dynamic content (or the need for it), so a CMS with a big ol' database is overkill. Plus, we have in-house web dev, so why not just code a site from scratch and host static HTML?

**Answer**: idk, that sounds really good, actually.

I chose to go with GitHub Pages (again) and built this site on the Jekyll/Liquid platform because it's fast, flexible, and I still hate writing PHP.

Between GitHub's solid server infrastructure and the statically generated content, the pageload speed difference was already noticeable. Performance minded dev could only make this better.

I also routed the site through [CloudFlare](https://cloudflare.com) to take advantage of their CDN, free SSL, and HTTP/2. Thanks, CloudFlare!

Jekyll's include feature is really handy and easy to use, so we stored a ton of SVG assets as raw code and just use an `include` whenever we need to call a vector graphic. This cuts HTTP requests down dramatically.

On the old site, we had **268 HTTP requests** on the homepage. On the new homepage, we have **76 requests**, most of which are because of Vimeo `iframe` elements that I can do nothing about. Otherwise, it'd be less than 20. Sigh.

In addition to a bunch of other boring image optimization stuff, I also wrote a service worker to cache crucial JavaScript and CSS assets in order to speed pageload for engaged users, as well as protect the appearance and function of the site in the event that the user loses connection.

The results here are dramatic indeed. Google's PageSpeed Insights rated our homepage performance at **90/100**, as opposed to **61/100** on the old one. That's a **48% performance increase**. High fives all around.

### 5. Unify look and feel

As I mentioned before, incremental changes over years of evolving brand standards doesn't end well. By creating a framework and component system for this project, I was able to quickly a consistent look and feel across the site and ensure cohesion for future pages created with the same design system.

I placed restrictions on the use of our color palette, setting a heavy focus on the blue and grayscale sections.

Buttons pretty much only exist in blue and white now, and orange is almost nonexistent now! Yeah, it was kind of a hard call, but the consistency in the new interface doesn't lie.

<div class="j-row">
<div class="j-col j-col-8 push-1">
<img src="{{site.baseurl}}/assets/img/posts/2017-11-07-look-and-feel.jpg" style="display: block; margin: 0 0 1.618em; box-shadow: 6px 6px 0 0 rgba(0,0,0,0.2);" alt="Big photographic assets on new homepage" />
</div>
<div class="j-col j-col-3">
<img src="{{site.baseurl}}/assets/img/posts/2017-11-07-look-and-feel--mobile.jpg" style="display: block; margin: 0 0 1.618em; box-shadow: 6px 6px 0 0 rgba(0,0,0,0.2);" alt="Big photographic assets on new homepage on mobile" />
</div>
</div>
<p style="color:#aaa">The new homeapge — big pictures!</p>

We've also reduced the number of illustrative assets on the site. Illustration is limited to iconography and the occasional blog feature image now.

While illustration is highly effective on social media, we found that we needed more polished, photographic visual assets to achieve the professional, high-end feel we wanted.

## The results

Okay, so the new site is faster, better looking, easier to use, and easier to understand. Cool. But is it _working_?

Why, yes. Yes, it is.

At month end after launch, compared the previous equivalent period, numbers are pretty much up across the board.

We recorded a **31.56% increase** in total pageviews, a **26.18% increase** in pages per session, a **29.68% increase** in session duration, and a **12.69% decrease** in bounce rate.

If you're not a marketing or UX nerd, basically, this means that users are spending more time on the site, viewing more pages, and dropping off less frequently.

And how about product demo requests? Those are up too, by **over a 100% increase** compared to the previous month.

The design decisions we made to give the user the freedom to explore and learn at their own pace certainly paid off. Users are learning more up front through the simplified copy, then downloading collateral when they're ready.

Able to digest this content at their own pace, they click the ubiquitous demo button and fill out the form with confidence, going into the demo with their own expectations built on their experience with Adaptiva so far.

It appears to be a good system. We'll continue to add features and attempt to improve upon the user experience, but overall, we're very satisfied with these results.

## Thanks for reading!

There's a _lot_ more that went into this and tons of pages, designs, interactions, and content I totally skipped over (didn't talk much about mobile, but don't worry it looks/works awesome on mobile), but this post is already getting unreasonably long.

I'm really happy with how this site turned out. More importantly, my bosses and the users seem to be happy with it as well.

I encourage you to check it out and see the [new site](https://adaptiva.com) for yourself. Especially the new [Adaptiva Academy](https://adaptiva.com/academy) and its much improved experience.

If you need me, I'll be rewriting the entire brand book because this site launch and the changes it made to the brand identity have rendered a lot of it inaccurate.

Don't forget to sign up to receive notifications on new Design Lab content:
<iframe src="http://www2.adaptiva.com/l/139131/2017-04-24/223dw4" width="100%" height="250" type="text/html" frameborder="0" allowTransparency="true" style="border: 0"></iframe>
