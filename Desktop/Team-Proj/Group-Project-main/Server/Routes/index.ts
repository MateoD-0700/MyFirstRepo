import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type index controller
import { DisplayAboutPage, DisplayNewTourneyPage, DisplayHomePage, DisplayActiveTourneyPage, DisplayServicesPage } from '../Controllers/index';

/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/about', DisplayAboutPage);

/* GET projects page. */
router.get('/activetourney', DisplayActiveTourneyPage);

/* GET services page. */
router.get('/services', DisplayServicesPage);

/* GET new tourney page. */
router.get('/newtourney', DisplayNewTourneyPage);
//module.exports = router;

/* GET view tourney page. */
