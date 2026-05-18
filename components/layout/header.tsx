
"use client";

import React from 'react'
import { Logo } from '../shared/logo'
import { UserRoundIcon, SearchIcon, ShoppingCartIcon, MenuIcon } from 'lucide-react';
import { Button } from '../ui/button';
import AnnouncementBar from './announcement-bar';

const Header = () => {
    return (
        <>
            <header className='w-full fixed z-30'>
                <AnnouncementBar />
                <nav className='w-full h-16 shadow-lg bg-background'>
                    <div className='container py-2 w-full h-full flex items-center justify-between'>
                        <Button size="icon" variant="ghost">
                            <MenuIcon />
                        </Button>
                        <Logo variant="dark" />
                        <div className='flex items-center'>
                            <Button size="icon" variant="ghost">
                                <UserRoundIcon />
                            </Button>
                            <Button size="icon" variant="ghost">
                                <SearchIcon />
                            </Button>
                            <Button size="icon" variant="ghost">
                                <ShoppingCartIcon />
                            </Button>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
