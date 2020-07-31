const express = require('express');
const router = express.Router();
const startup = require('../../middleware/startup');

// @route  GET /api/users
// @desc   Get current users profile 
// @access Puplic
router.get('/users', startup, async (request, response) => {
    try {
        // TODO: Call service implementation here
        const mockData = [{
                id: 1,
                name: "Leanne Graham",
                username: "Bret",
                email: "Sincere@april.biz",
                address: {
                    street: "Kulas Light",
                    suite: "Apt. 556",
                    city: "Gwenborough",
                    zipcode: "92998-3874",
                    geo: {
                        lat: "-37.3159",
                        lng: "81.1496"
                    }
                },
                phone: "1-770-736-8031 x56442",
                website: "hildegard.org",
                company: {
                    name: "Romaguera-Crona",
                    catchPhrase: "Multi-layered client-server neural-net",
                    bs: "harness real-time e-markets"
                }
            }]
        
         response.json(mockData);

    } catch (error) {
        console.error(error.message);
        return response.status(500).send('Server error');
    }
});

module.exports = router;
