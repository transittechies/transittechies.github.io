---
layout: event
title: 'Transit Techies NYC #10: Tenth Avenue Elevated'
eventdate: '2019-09-04T18:30-05:00'
location: Intersection
address: '10 Hudson Yards, New York, NY 10001'
published: true
---

## Details

- RSVP: [Click to go to meetup.com to RSVP](https://www.meetup.com/Transit-Techies-NYC/events/263684513/)
- Date: {% if page.eventdate %}{{ page.eventdate | date: "%A, %B %-d, %Y" }}{% endif %}
- Time: 6:30 PM to 8:30 PM
- Where: {% if page.location %}{{ page.location }}{% endif %}, {% if page.address %}{{ page.address }}{% endif %}

Indraneel Purohit will discuss the work that SharedStreets has been doing, and focus specifically on their open-source Road Closures tool for cities to produce data on road closures easily and consistently.

Melody Starling will present on the rollout of SEPTA of Philadelphia Key cards and how transit cards can be embedded into random objects. They will demonstrate how these embedded objects can be read with Android readers!	

Evan Otero will be presenting Pigeon, the newest crowdsourced transit app for New Yorkers. Pigeon provides real-time information for commuters--helping them avoid delays, crowds and disruptions. Pigeon is made up of a community of New Yorkers who want to make the ride better together (while commiserating over shared commuting experiences, such as being packed in a hot subway car, or finding surprising ease from dogs tucked in bags).

Leo Frachet of MobilityData will share his work maintaining and improving the GTFS specification, specifically the introduction of GTFS Pathways and how they have been used to model station layouts for MTA New York City Transit.

As always, after the speakers we'll open the floor to announcements anyone might have!

## Speakers and Links

- Indraneel Purohit
  - An overview of the [SharedStreets road closures](https://sharedstreets.io/incidents-construction-closures/) tool and how it can match streets from different base maps using the [SharedStreets Referencing System](https://sharedstreets.io/getting-started-with-the-sharedstreets-referencing-system/).
  - [Video](https://www.youtube.com/watch?v=LUbZs_Kv-Pg)
- Melody Starling
  - SEPTA Key Cards: How they were rolled out, how the program has changed over time, and how their RFID readers can be embedded in plush toys or even sandwiches!
  - [Slides](/presentations/2019-09-04_Starling_TransitCardz.pdf)
  - [Video](https://www.youtube.com/watch?v=nd4rCXkuAI8)
- Evan Otero
  - How Pigeon is making commuting in NYC more data driven and social.
  - [iOS App](https://apps.apple.com/us/app/pigeon-nyc-public-transit/id1318928385)
- Leo Frachet
  - The structure of [MobilityData](https://mobilitydata.org/), the creation of [GTFS-Pathways](https://github.com/google/transit/pull/143), and what a pathway graph can be used to describe 5 Av/53 St and Court St MTA stations.
  - [Video](https://www.youtube.com/watch?v=IwfaRlTxibM)
