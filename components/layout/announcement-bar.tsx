"use client";

import React from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";

const AnnouncementBar = () => {
    const [isVisible, setIsVisible] = React.useState(true);

    if (!isVisible) return null;
    return (
        <AnimatePresence>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="bg-primary text-primary-foreground relative"
            >
                <div className="container flex items-center justify-center min-h-[40px] py-2">
                    <p className="text-xs md:text-sm font-medium text-center px-8">
                        "10% Off On All Products - Limited Time Offer. Shop Now!"
                    </p>

                    <Button 
                        size="icon" 
                        variant="ghost" 
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-white/20 text-white" 
                        onClick={() => setIsVisible(false)}
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default AnnouncementBar;
