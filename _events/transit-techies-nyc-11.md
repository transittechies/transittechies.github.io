---
layout: event
title: 'Transit Techies NYC #11: Three Train'
eventdate: '2019-10-30T18:30-05:00'
location: Intersection
address: '10 Hudson Yards, New York, NY 10001'
published: true
---

## Details

- RSVP: [Click to go to meetup.com to RSVP](https://www.meetup.com/Transit-Techies-NYC/events/265431268/)
- Date: {% if page.eventdate %}{{ page.eventdate | date: "%A, %B %-d, %Y" }}{% endif %}
- Time: 6:30 PM to 8:30 PM
- Where: {% if page.location %}{{ page.location }}{% endif %}, {% if page.address %}{{ page.address }}{% endif %}

Aleksey Bilogur will present his `gtfs-tripify` library and how you can use it to create a historical record of arrival times from a GTFS-realtime feed.

Myung Cha and Marcio Lima from Snap will show how an AR experience created and can be triggered with an MTA card, using Snap Lens.

As always, after the speakers we'll open the floor to announcements anyone might have!

## Speakers and Links

- Aleksey Bilogur
  - Building historical MTA arrivals datasets using `gtfs-tripify`, as described in ["Parsing subway rides with gtfs-tripify"](https://www.residentmar.io/2018/01/29/gtfs-tripify.html) and ["Building an MTA historical train arrival application"](https://www.residentmar.io/2018/08/29/subway-explorer.html).
  - [GitHub Repo](https://github.com/ResidentMario/gtfs-tripify)
  - [Video](https://www.youtube.com/watch?v=Mw6syE_fHrQ)
- Myung Cha and Marcio Lima (Snap)
  - Triggering an Lens AR experience with your MTA Metrocard using Snap Lens.
  - [Video](https://www.youtube.com/watch?v=0aBVVSyhIYU)
