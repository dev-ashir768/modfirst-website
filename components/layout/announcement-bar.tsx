"use client";

import React from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";

const AnnouncementBar = () => {
    const [isVisible, setIsVisible] = React.useState(true);

    if (!isVisible) return null;
    return (
        <>
            <AnimatePresence>
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-primary text-primary-foreground relative"
                >
                    <div className="container flex items-center justify-center min-h-[36px]">
                        <p className="text-xs md:text-sm font-medium">
                            "10% Off On All Products - Limited Time Offer. Shop Now!"
                        </p>

                        <Button size="icon-xs" variant="ghost" className="absolute right-4" onClick={() => setIsVisible(false)}>
                            <X />
                        </Button>
                    </div>
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default AnnouncementBar
