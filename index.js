require("dotenv").config();
const express = require("express");
const trips = require("./models/dbHelpers");

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

app.post("/edittrip", (req, res) => {
    trips.addTrip(req.body).then(trip => {
        res.status(200).json(trip);
    })
    .catch(error => {
        res.status(500).json({message: "cannot add trip"});
    });
});

app.get("/trips", (req, res) => {
    trips.find().then(trip => {
        res.status(200).json(trip);
    })
    .catch(error => {
        res.status(500).json({message: "unable to retrieve trips"});
    });
});

app.get("/trips/:id", (req, res) => {
    const {id} = req.params;

    trips.findTripById(id).then(trip => {
        if(trip) {
            res.status(200).json(trip);
        } else {
            res.status(404).json({message: "trip not found"});
        }
    })
    .catch(error => {
        res.status(500).json({message: "cannot find trip"});
    });
});

app.delete("/edittrip/:id", (req, res) => {
    const {id} = req.params;

    trips.deleteTrip(id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({message: "successfully deleted"});
        } else {
            res.status(404).json({message: "trip not found"});
        };
    })
    .catch(error => {
        res.status(500).json({message: "unable to delete trip"});
    });
});

app.patch("/edittrip/:id", (req, res) => {
    const {id} = req.params;
    const changes = req.body;

    trips.updateTrip(id, changes)
    .then(trip => {
        if (trip) {
            res.status(200).json(trip);
        } else {
            res.status(404).json({message: "trip not found"});
        }
    })
    .catch(error => {
        res.status(500).json({message: "unable to update trip"});
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});