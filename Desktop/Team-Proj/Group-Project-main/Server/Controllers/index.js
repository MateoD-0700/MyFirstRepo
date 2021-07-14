"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayNewTourneyPage = exports.DisplayServicesPage = exports.DisplayActiveTourneyPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'About Us', page: 'about' });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayActiveTourneyPage(req, res, next) {
    res.render("index", { title: "Active Tournaments", page: "activetourney" });
}
exports.DisplayActiveTourneyPage = DisplayActiveTourneyPage;
function DisplayServicesPage(req, res, next) {
    res.render('index', { title: 'Our Services', page: 'services' });
}
exports.DisplayServicesPage = DisplayServicesPage;
function DisplayNewTourneyPage(req, res, next) {
    res.render('index', { title: 'Create New A Tournament', page: 'newtourney' });
}
exports.DisplayNewTourneyPage = DisplayNewTourneyPage;
//# sourceMappingURL=index.js.map