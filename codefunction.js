const https = require('https');
/**
 * Responds to any HTTP request with the appropriate events
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.getEvents = (req, res) => {
  let errorMessage = {error: 'Error retrieving data from meetup'};
  let resultList = [];
  res.set('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
  } else {
    res.set('Access-Control-Allow-Origin', '*');
  }

  let meetupUrl = ''; // Set as empty for now

  if (req.query.status === 'past') {
    meetupUrl = '<URL_GOES_HERE>';
  } else if (req.query.status === 'upcoming') {
    meetupUrl = '<URL_GOES_HERE>';
  } else { // Get both past and upcoming
    meetupUrl = '<URL_GOES_HERE>';
  }
  
  https.get(meetupUrl, (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      parsedData = JSON.parse(data);
      for (i = 0; i < parsedData.length; i++) { 
        var theDate = new Date(parsedData[i].time);
        var formattedDate = theDate.toLocaleString('en-us', { month: 'long' , day: 'numeric', year: 'numeric'});
        var eventInstance = {
          name: parsedData[i].name,
          status: parsedData[i].status,
          link: parsedData[i].link,
          local_date: parsedData[i].local_date,
          local_time: parsedData[i].local_time,
          venue_name: parsedData[i].venue.name,
          venue_address_1: parsedData[i].venue.address_1,
          venue_city: parsedData[i].venue.city,
          formatted_date: formattedDate
        };

        resultList.push(eventInstance);
      }

      var finalResult = {items: resultList};
      res.status(200).send(JSON.stringify(finalResult));
      
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
    res.status(500).send(JSON.stringify(errorMessage));
  });
};