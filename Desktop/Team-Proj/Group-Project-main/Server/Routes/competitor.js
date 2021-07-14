"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const competitor_1 = require("../Controllers/competitor");
router.get('/', competitor_1.DisplayCompetitorListPage);
router.get('/add', competitor_1.DisplayAddPage);
router.get('/edit/:id', competitor_1.DisplayEditPage);
router.post('/add', competitor_1.ProcessAddPage);
router.post('/edit/:id', competitor_1.ProcessEditPage);
router.get('/delete/:id', competitor_1.ProcessDeletePage);
//# sourceMappingURL=competitor.js.map