import express from "express";
const router = express.Router();
import { addOrderItems, getOrderById } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrderById);
// router.route('/myorders').get(protect, getMyOrders)

// router.route('/:id/pay').put(protect, updateOrderToPaid)
// router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)

export default router;