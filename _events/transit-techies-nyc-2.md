---
layout: event
title: "Transit Techies NYC 2: Second Avenue Segfaults"
date: "2018-07-11T18:30-04:00"
location: "Intersection"
address: "10 Hudson Yards, New York, NY 10001"
---

## Meetup information

- RSVP: [Click to go to meetup.com to RSVP](https://www.meetup.com/Transit-Techies-NYC/events/252950626/)
- Date: {% if page.eventdate %}{{ page.eventdate | date: "%A, %B %-d, %Y" }}{% endif %}
- Time: 6:30 PM to 8:30 PM
- Where: {% if page.location %}{{ page.location }}{% endif %}, {% if page.address %}{{ page.address }}{% endif %}

Will Fisher of MTA will discuss his work with Long Island Rail Road digital projects.

Assel Dmitriyeva of NYU Tandon will demo a microtransit tool, which acts as a destination recommender system for mobility-on-demand services.

Mary Buchanan from TransitCenter will explore how they built the busturnaround.nyc API and the analysis that underlies the bus report cards.

Alex Hill, David Bromwich, and Josselin Philippe of Motivate will talk about building Bike Inspector, their app for tracking Citi Bike repair activity. They will cover how Bike Inspector works today to validate bike assets improve the flow of work orders.

## Written recap

Recap by [Pranav Badami](https://twitter.com/Pranav_Badami) on [HackerNoon](https://hackernoon.com/four-projects-improving-transportation-in-new-york-city-905fb4cd8bac).

## Speakers and links

- Will Fisher [@wafisher](https://twitter.com/wafisher), MTA Long Island Rail Road
  - How to convert LIRR track schematics into a graph to inform passengers of real-time train data.
- Assel Dmitriyeva, NYU Tandon
  - Methods for building a microtransit tool, which acts as a destination recommender system for mobility-on-demand services.
  - Coverage from [C2SMART](http://c2smart.engineering.nyu.edu/2018/07/13/c2smart-student-presents-at-transit-techies-nyc/) at NYU Tandon.
- Mary Buchanan [@Mary_LBee](https://twitter.com/Mary_LBee), TransitCenter
  - Results from the GTFS-realtime data cleaning (by Neil Freeman [@fitnr](https://twitter.com/fitnr)) to produce the bus report cards for [Bus Turnaround](http://busturnaround.nyc).
  - [Slides](presentations/2018-07-11_Buchanan_BusTurnaround.pdf)
- Alex Hill, David Bromwich, and Josselin Philippe, Motivate
  - What inspired the building of Bike Inspector, the Motivate app for tracking Citi Bike repair activity, and how it works to validate bike assets to improve the flow of work orders.