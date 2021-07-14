"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessAddPage = exports.ProcessEditPage = exports.DisplayAddPage = exports.DisplayEditPage = exports.DisplayCompetitorListPage = void 0;
const competitor_1 = __importDefault(require("../Models/competitor"));
function DisplayCompetitorListPage(req, res, next) {
    competitor_1.default.find(function (err, competitorCollection) {
        if (err) {
            return console.error(err);
        }
        res.render('index', { title: 'Competitor List', page: 'competitor-list', competitor: competitorCollection });
    });
}
exports.DisplayCompetitorListPage = DisplayCompetitorListPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    console.log(id);
    competitor_1.default.findById(id, {}, {}, (err, competitorItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Edit', page: 'edit', competitor: competitorItemToEdit });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function DisplayAddPage(req, res, next) {
    res.render('index', { title: 'Add', page: 'edit', competitor: '' });
}
exports.DisplayAddPage = DisplayAddPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedCompetitorItem = new competitor_1.default({
        "_id": id,
        "fullname": req.body.fullname,
        "description": req.body.description
    });
    competitor_1.default.updateOne({ _id: id }, updatedCompetitorItem, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/competitor-list');
    });
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessAddPage(req, res, next) {
    let newCompetitor = new competitor_1.default({
        "fullname": req.body.fullname,
        "description": req.body.description
    });
    competitor_1.default.create(newCompetitor, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/competitor-list');
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    competitor_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/competitor-list');
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=competitor.js.map