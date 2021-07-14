import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type competitor controller
import { DisplayAddPage, DisplayCompetitorListPage, DisplayEditPage, ProcessAddPage, ProcessEditPage, ProcessDeletePage } from '../Controllers/competitor';

// Display the Competitor-List Page
router.get('/', DisplayCompetitorListPage); // default route

/* GET - display /competitor-list/add page. */
router.get('/add', DisplayAddPage);

// Display the Edit page by id
router.get('/edit/:id', DisplayEditPage);

// Display the Add page
router.post('/add', ProcessAddPage);

/* POST - process /competitor-list/edit/:id page */
router.post('/edit/:id', ProcessEditPage);

/* GET - process /competitor-list/delete/:id */
router.get('/delete/:id', ProcessDeletePage);