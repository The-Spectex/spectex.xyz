import React from 'react'
import { Metadata } from 'next'
import Nav from '@/components/Nav/Nav'
import Newsletter from '@/components/Newsletter/Newsletter'
import Footer from '@/components/Footer/Footer'
import MCUTILS from '@/components/MCUTILS/MCUTILS'
import OTHERPROJECTS from '@/components/OTHERPROJECTS/OTHERPROJECTS'

export const meta: Metadata = {
    title: 'Spectex | Projects',
    description: 'Spectex is a company that is building a better future. We are currently working a few projects. that will help you. Such as Minecraft Utilities, Typescript Learning, and more.',
    keywords: ['Spectex', 'IT', 'Software', 'Internet', 'IT Company', 'Web Development', 'Web Developer', 'Software Development', 'SEO', 'Graphics Designing', 'Software', 'IT Solutions', 'Minecraft Utilities', 'Typescript', 'Projects', 'Spectex Projects' ],
    authors: [{ name: 'Spectex', url: 'https://spectex.xyz/projects' }],
    publisher: 'Spectex',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://spectex.xyz/projects',
        title: 'Spectex | Projects',
        siteName: 'Spectex',
        description: 'Spectex is a company that is building a better future. We are currently working a few projects. that will help you. Such as Minecraft Utilities, Typescript Learning, and more.',
        images: [
            {
                url: 'https://cdn.spectex.xyz/images/web/og-projects.png',
                width: 1200,
                height: 630,
                alt: 'Spectex | Projects',
            },
        ],
        countryName: 'Bangladesh',
    },
    viewport: 'width=device-width, initial-scale=1.0',
    twitter: {
        card: 'summary_large_image',
        title: 'Spectex | Projects',
        description: 'Spectex is a company that is building a better future. We are currently working a few projects. that will help you. Such as Minecraft Utilities, Typescript Learning, and more.',
        creator: '@spectexofficial',
        creatorId: '',
        images: ['https://cdn.spectex.xyz/images/web/og-projects.png'],
    },
    category: 'technology',
    robots: 'index, follow',
}

export default function Projects() {
    return (
        <div className='bg-gradient-to-b from-blue-background-start via-blue-background-mid to-blue-background-stop'>
            <Nav />
            <MCUTILS />
            <hr
                className="h-px my-12 border-t-0 bg-blue-button-primary shadow-button-glow" />
            <OTHERPROJECTS />
            <hr
                className="h-px my-12 border-t-0 bg-blue-button-primary shadow-button-glow" />
            <Newsletter />
            <hr
                className="h-px my-4 border-t-0 bg-blue-button-primary shadow-button-glow" />
            <Footer />
        </div>
    )
}