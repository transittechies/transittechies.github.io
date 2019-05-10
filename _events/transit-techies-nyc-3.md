---
layout: event
title: 'Transit Techies NYC #3: sudo touch third_rail'
eventdate: '2018-08-29T18:30-04:00'
location: Intersection
address: '10 Hudson Yards, New York, NY 10001'
published: true
---

## Details

- RSVP: [Click to go to meetup.com to RSVP](https://www.meetup.com/Transit-Techies-NYC/events/252950626/)
- Date: {% if page.eventdate %}{{ page.eventdate | date: "%A, %B %-d, %Y" }}{% endif %}
- Time: 6:30 PM to 8:30 PM
- Where: {% if page.location %}{{ page.location }}{% endif %}, {% if page.address %}{{ page.address }}{% endif %}

Kate Chanba and David Emory of Conveyal will explore TransitiveJS, a library to produce transit map schematics. Kate will discuss using it for cartographic design, and David will explore its use with TriMet.

Ray Cha will show his Open Transit Data Toolkit, a project funded by TransitCenter which helps analyze and visualize transit data.

Noah Greenbaum of Coord will show their recently-launched Bikeshare API and demonstrate use-cases complete with API calls.

## Written Recap

Recap by [Michael Zhang](https://twitter.com/mzhang13) on [Medium](https://medium.com/@mzhang13/three-projects-helping-to-build-better-transit-tools-for-the-future-bb3176c0f47b).

## Speakers and Links

- Kate Chanba [@kchanba](https://twitter.com/kchanba) and David Emory [@martarider](https://twitter.com/martarider)
  - Design and technical challenges with producing programmatically generated transit schematic maps in [transitive.js](https://github.com/conveyal/transitive.js/).
  - [Slides](/presentations/2018-08-29_ChanbaEmory_transitivejs.pdf)
- Ray Cha [@weatherpattern](https://twitter.com/weatherpattern)
  - Getting started developing with open data using the [Open Transit Data Toolkit](https://transitdatatoolkit.com/).
  - Coverage from [project blog](https://transitdatatoolkit.com/2018/10/08/recent-presentations/).
  - [Slides](https://weatherpattern.github.io/transit-techies-180829/#/)
- Noah Greenbaum
  - How Coord consolidated bike share APIs across the country to create their unified [Bike Share API](https://coord.co/docs/bike) and it can be queried.
  - [Slides](/presentations/2018-08-29_Greenbaum_Coord.pdf)
