const express = require('express');
const Master = require('./Message');
const Data = require('./Data');
const app = express();
app.use(express.json());


app.post("/add", async (req, res) => {
    const {IMEI, LAT, LONG, ASN_11} = req.body;
    try {
        const result = await Master.create({IMEI, LAT, LONG, ASN_11})
        return res.send({
            info : result
        })
    } catch (error) {
        return res.status(400).send({
            error : error.message
        })
    }
})

app.get("/generate", async (req, res) => {
    try {
      // Get the date from the query parameter (e.g., ?date=2023-07-18)
      const queryDate = new Date(req.query.date);
  
      // Ensure that the queryDate is valid
      if (isNaN(queryDate.getTime())) {
        return res.status(400).send({ error: "Invalid date format." });
      }
  
      // Define the start time (6 AM) and end time (12 AM)
      const startTime = new Date(queryDate);
      startTime.setHours(6, 0, 0, 0);
      const endTime = new Date(queryDate);
      endTime.setHours(12, 0, 0, 0);
  
      // Create intervals with a 10-minute gap
      const interval = 10 * 60 * 1000; // 10 minutes in milliseconds
      let currentTime = startTime;
  
      while (currentTime < endTime) {
        console.log(currentTime)
        // Iterate through Master documents and copy fields
        const masterDocs = await Master.find();
        for (const masterDoc of masterDocs) {
          const dataDoc = new Data({
            IMEI: masterDoc.IMEI,
            LAT: masterDoc.LAT,
            LONG: masterDoc.LONG,
            ASN_11: masterDoc.ASN_11,
            DATE: currentTime.toISOString().split('T')[0], // Set DATE to only the date part
            TIMESTAMP: currentTime.toISOString(),// Set TIMESTAMP for the current interval
          });
  
          // Save the Data document to the database
          await dataDoc.save();
        }
  
        // Move to the next interval
        currentTime.setTime(currentTime.getTime() + interval);
      }
  
      return res.send({ message: "Data documents generated successfully." });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  });


app.listen(4004, ()=> console.log("FINE"))