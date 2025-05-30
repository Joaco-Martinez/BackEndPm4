"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = void 0;
const order_service_1 = require("../services/order.service");
const catchedController_1 = require("../utils/catchedController");
exports.createOrder = (0, catchedController_1.catchedController)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { products } = req.body;
    const userId = req.body.userId;
    const newOrder = yield (0, order_service_1.createOrderService)({ userId, products });
    res.send(newOrder);
}));
