---
layout: blog-post
title: MMS 2017 Pac-Man Website
meta: UI/UX design and development for an online Pac-Man scoreboard at MMS 2017 at Mall of America.
posted: June 19 2017
category: blog
author: Jesse Rogers
author_img: jesse-rogers.jpg
author_link_ext: "jesse"
image: 2017-06-19-mms-pac-man-scoreboard-ui-ux.jpg
navclass: ondark
featured: true
---
Wow, Q2 has been crazy this year. We built this website, all excited to share what the Design Lab is up to, and then we haven't had a spare second to write any posts. Such is life on a small team, I suppose.

Anyway, in May of this year, we sponsored an event called the Midwest Management Summit (MMS for short), at which we had a huge, four-player Pac-Man gaming system. We held a formal competition, complete with a trophy and a $100 Amazon gift card. It was expensive, it was crowded, and it was awesome.

It also presented some needs from the Design Lab.

## The Problem
MMS attendees who wanted to compete for the champion title would want to track their scores and rank. The booths at this tradeshow were small—six-foot tables and a backdrop, so we wanted to avoid having a crowd of people checking their scores at the booth, as the excess traffic could impede actual sales leads from speaking to our staff.

*We needed a solution that could be accessed easily and remotely, and ideally, from any device.*

## The Solution
I proposed that we leverage the Design Lab website's Jekyll-based platform to create an online leaderboard that attendees could access from their phones and laptops.

The website would store player scores and intelligently display them on the front end in order of rank. Since the Design Lab site is built on Github, it would be easy for Adaptiva employees to input scores into a `_data` file through Github's online interface.

In addition to the leaderboard, we realized that this site would also be the best means of distributing documentation on the competition rules and schedule, information on prizes, and any marketing stuff we wanted them to see while they're checking scores.

## The Product
In a little under three weeks, we designed, coded, and shipped a simple but beautiful, fully responsive, three-page website with a tabbed navigation to show the three main purposes of the site: the Pac-Man leaderboard, information on prizes, and information on rules and scheduling.
<div class="j-row j-col j-col-12" style="margin: 2em 0; overflow: hidden;">
<img src="{{site.baseurl}}/assets/img/posts/pacman-homepage.png" alt="Desktop display of MMS 2017 Pac-Man leaderboard" style="display: block; margin: 0 0 1.618em; box-shadow: 6px 6px 0 0 rgba(0,0,0,0.2);">
</div>
The mobile version was designed to resemble a native mobile device app, with the three tabs fixed to the bottom for convenient, ergonomic navigation.
<div class="j-row" style="margin: 2em 0; overflow: hidden;">
<div class="j-col j-col-4" style="margin-left: auto; margin-right: auto; float: none;"><img src="{{site.baseurl}}/assets/img/posts/pacman-homepage-m.png" alt="Mobile display of MMS 2017 Pac-Man leaderboard" style="display: block; margin: 0 0 1.618em; box-shadow: 6px 6px 0 0 rgba(0,0,0,0.2);"></div>
</div>
Each score entry is interactive. Users can click/tap on their score to expand their row, showing a personalized message and a click-to-tweet button, unique to their current score and rank.
<div class="j-row" style="margin: 2em 0; overflow: hidden;">
<div class="j-col j-col-9"><img src="{{site.baseurl}}/assets/img/posts/pacman-tweet.png" style="display: block; margin: 0 0 1.618em; box-shadow: 6px 6px 0 0 rgba(0,0,0,0.2);" alt="Desktop display of MMS 2017 Pac-Man leaderboard tweet functionality"></div>
<div class="j-col j-col-3"><img src="{{site.baseurl}}/assets/img/posts/pacman-tweet-m.png" style="display: block; margin: 0 0 1.618em; box-shadow: 6px 6px 0 0 rgba(0,0,0,0.2);" alt="Desktop display of MMS 2017 Pac-Man leaderboard tweet functionality"></div>
</div>
The next tab showcased information on prizes that attendees could win by competing. We created vector illustrations and exported them as optimized SVGs. Utilizing Jekyll's include function, we were able to put in complex SVGs into the page without cluttering our markup.

The hero image up top (the isometric Pac-Man maze) is also SVG. We leveraged SVG wherever possible and kept raster images to a minimum, and performance benefits are noticeable.

**This whole site is ridiculously fast. Like**
<div class="j-row" style="margin: 2em 0; overflow: hidden;">
<div class="j-col j-col-9"><img src="{{site.baseurl}}/assets/img/posts/pacman-prizes.png" style="display: block; margin: 0 0 1.618em; box-shadow: 6px 6px 0 0 rgba(0,0,0,0.2);" alt="Desktop display of MMS 2017 Pac-Man leaderboard tweet functionality"></div>
<div class="j-col j-col-3"><img src="{{site.baseurl}}/assets/img/posts/pacman-prizes-m.png" style="display: block; margin: 0 0 1.618em; box-shadow: 6px 6px 0 0 rgba(0,0,0,0.2);" alt="Desktop display of MMS 2017 Pac-Man leaderboard tweet functionality"></div>
</div>
The last tab displayed the schedule of gameplay, competition rules, general info on Adaptiva's event presence, and free content from our marketing department. There was a lot of text, so I thought it best we use jQuery's `.slideToggle()` function to easily create collapsible sections to make the content more manageable for the user.
<div class="j-row" style="margin: 2em 0; overflow: hidden;">
<div class="j-col j-col-9"><img src="{{site.baseurl}}/assets/img/posts/pacman-info.png" style="display: block; margin: 0 0 1.618em; box-shadow: 6px 6px 0 0 rgba(0,0,0,0.2);" alt="Desktop display of MMS 2017 Pac-Man leaderboard tweet functionality"></div>
<div class="j-col j-col-3"><img src="{{site.baseurl}}/assets/img/posts/pacman-info-m.png" style="display: block; margin: 0 0 1.618em; box-shadow: 6px 6px 0 0 rgba(0,0,0,0.2);" alt="Desktop display of MMS 2017 Pac-Man leaderboard tweet functionality"></div>
</div>
The community at MMS seemed to really enjoy our Pac-Man championship, and it was a good challenge to throw together an online solution that checked all the boxes in such a short amount of time.

The site will stay up indefinitely, so you can see the live code here: [adaptiva.com/pacman](http://adaptiva.com/pacman)

Thanks for reading! We're making all sorts of other cool stuff right now, and we'll try to keep this blog updated.

To receive notifications of new Design Lab entries, subscribe to the Design Lab blog here:

<iframe src="http://www2.adaptiva.com/l/139131/2017-04-24/223dw4" width="100%" height="250" type="text/html" frameborder="0" allowTransparency="true" style="border: 0"></iframe>
