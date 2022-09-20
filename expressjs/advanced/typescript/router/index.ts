import { Router } from "express";

// Create Router
const router = Router();

// Add routes
router.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});

// Export router
export default router;