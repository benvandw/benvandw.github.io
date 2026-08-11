---
layout: default
title: Home
---
# Hey, I'm Ben
I'm a cybersecurity engineering student and Researcher in Wellington, New Zealand,
currently working on satellite security — I'm Deputy Director of
[Project Kororā](https://projectkorora.space), VUW's first student-led CubeSat
initiative. My interest is in satellite security: how these
systems get attacked, and how you'd actually defend something with
no physical access and a painfully thin power/comms budget.

Outside of that I run a homelab, tinker with random tech, and occasionally
write about whatever I've broken or fixed that week.

Get in Touch 
Signal : ajax.405

Email : ben[at]vandw[dot]xyz

---

### Posts:

<ul class="post-list">
{% for post in site.posts %}
  <li>
    <span class="date">{{ post.date | date: "%Y-%m-%d" }}</span>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>

---

<p align="center"><img src="/assets/img/sar.jpg" alt="Spacecraft above Earth" class="footer-img"></p>
