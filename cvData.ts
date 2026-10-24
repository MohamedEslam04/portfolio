// Define types for CV data structure
export interface Education {
    institution: string
    degree: string
    field: string
    startDate: string
    endDate: string
    description?: string
    location?: string
}

export interface WorkExperience {
    company: string
    website?: string
    position: string
    startDate: string
    endDate: string | 'Present'
    description: string
    location?: string
    achievements?: string[]
    technologies?: string[]
}

export interface Skill {
    name: string
    level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
    category?: 'Frontend' | 'Backend' | 'DevOps' | 'Design' | 'Other'
}

export interface Language {
    name: string
    proficiency: 'Native' | 'Fluent' | 'Professional' | 'Intermediate' | 'Basic'
}

export interface Certification {
    name: string
    issuer?: string
    date?: string
    url?: string
    description?: string
}

export interface PersonalInfo {
    name: string
    title: string
    email: string
    phone?: string
    location: string
    website?: string
    github?: string
    linkedin?: string
    npm?: string
    bio: string
    avatar?: string
}

export interface Project {
    id: string
    name: string
    description: string
    html_url: string
    homepage?: string
    siteStatus?: boolean
    topics: string[]
    created_at: string
    updated_at: string
    language: string
    stargazers_count: number
    forks_count: number
    open_issues_count: number
    background?: string
    owner?: {
        login: string
        avatar_url: string
        html_url: string
    }
}

// Main CV data interface
export interface CVData {
    personalInfo: PersonalInfo
    summary: string
    workExperience: WorkExperience[]
    education: Education[]
    skills: Skill[]
    languages: Language[]
    certifications: Certification[]
    interests?: string[]
    projects: Project[]
}

// Export the CV data
export const cvData: CVData = {
    personalInfo: {
        name: "Mohamed Eslam",
        title: "Software Engineer",
        email: "mohamedeslam0419@gmail.com",
        phone: "01280024800",
        location: "Cairo, Egypt",
        website: "https://mohamed-eslam-portfolio.vercel.app/",
        github: "https://github.com/MohamedEslam04",
        linkedin: "https://www.linkedin.com/in/mohamed-eslam-41a3492a4/",
        npm: "https://www.npmjs.com/~mohamedeslam0419",
        bio: "Software Engineer with a strong frontend background, specializing in building scalable, high-performance full-stack web applications using Next.js, React, TypeScript, and Laravel. Experienced in integrating RESTful APIs and delivering production-ready SaaS and ERP systems. Adept at leveraging AI-assisted development tools like Claude Code to rapidly architect and implement robust backend solutions.",
        avatar: "/profile pic.jpg"
    },
    summary: "Software Engineer with a strong frontend background, specializing in building scalable, high-performance full-stack web applications using Next.js, React, TypeScript, and Laravel. Experienced in integrating RESTful APIs and delivering production-ready SaaS and ERP systems. Adept at leveraging AI-assisted development tools like Claude Code to rapidly architect and implement robust backend solutions.",
    workExperience: [
        {
            company: "Velents.ai",
            website: "https://velents.ai",
            position: "Full-Stack Engineer",
            startDate: "2026-01",
            endDate: "Present",
            location: "Riyadh, Saudi Arabia",
            description: "Full Time · Remote. Collaborated with cross-functional teams in a professional environment.",
            achievements: [
                "Developed and maintained full-stack production features using Next.js for the frontend and Laravel for the backend.",
                "Leveraged AI-assisted coding tools (Claude Code) to accelerate backend implementation and optimize workflows.",
                "Built scalable, reusable UI components with a focus on performance and user experience.",
                "Contributed Nuxt & Vue.js expertise as an added value across internal modules."
            ],
            technologies: [
                "Next.js", "Laravel", "React", "TypeScript", "Claude Code", "Vue.js", "Nuxt.js"
            ]
        },
        {
            company: "Amar Benaa",
            website: "https://www.amar-benaa.com",
            position: "Front-End Engineer",
            startDate: "2025-04",
            endDate: "Present",
            location: "Riyadh, Saudi Arabia",
            description: "Part Time · Freelance. Delivering ERP frontend solutions for digital transformation.",
            achievements: [
                "Delivered ERP frontend solutions to assist in digital transformation."
            ],
            technologies: [
                "Vue.js", "TypeScript", "Tailwind CSS"
            ]
        },
        {
            company: "ATW",
            website: "https://atw.ltd",
            position: "Software Engineer",
            startDate: "2024-07",
            endDate: "2026-01",
            location: "El-Mohandsin, Cairo, Egypt",
            description: "Full Time · On Site. Developed dynamic web solutions.",
            achievements: [
                "Developed dynamic, mobile-first user interfaces using Nuxt.js, Vue, and Tailwind CSS.",
                "Optimized application performance and ensured cross-browser compatibility.",
                "Collaborated closely with designers and backend engineers to deliver scalable, user-friendly features."
            ],
            technologies: [
                "Nuxt.js", "Vue 3", "Tailwind CSS", "TypeScript", "JavaScript"
            ]
        }
    ],
    education: [
        {
            institution: "Cairo University",
            degree: "B.S.",
            field: "Computers and Artificial Intelligence",
            startDate: "2019-09",
            endDate: "2023-09",
            location: "Cairo, Egypt",
            description: "Focused on computer science and artificial intelligence principles."
        }
    ],
    skills: [
        { name: "JavaScript", level: "Expert", category: "Frontend" },
        { name: "TypeScript", level: "Advanced", category: "Frontend" },
        { name: "HTML / CSS / Sass", level: "Expert", category: "Frontend" },
        { name: "Vue.js / Nuxt 4", level: "Expert", category: "Frontend" },
        { name: "React.js / Next.js", level: "Advanced", category: "Frontend" },
        { name: "Laravel / PHP", level: "Advanced", category: "Backend" },
        { name: "Tailwind CSS v4", level: "Expert", category: "Frontend" },
        { name: "Bootstrap 5", level: "Advanced", category: "Frontend" },
        { name: "shadcn/ui", level: "Advanced", category: "Frontend" },
        { name: "TanStack / Pinia / Zustand", level: "Advanced", category: "Frontend" },
        { name: "Drizzle ORM", level: "Intermediate", category: "Backend" },
        { name: "PostgreSQL / Redis", level: "Intermediate", category: "Backend" },
        { name: "AI SDK / Gemini", level: "Intermediate", category: "Backend" },
        { name: "Playwright / Puppeteer", level: "Intermediate", category: "DevOps" },
        { name: "REST APIs / Swagger", level: "Advanced", category: "Backend" },
        { name: "Docker / CI/CD", level: "Intermediate", category: "DevOps" },
        { name: "NPM Package Development", level: "Advanced", category: "Frontend" },
        { name: "AI-Assisted Development (Claude Code)", level: "Advanced", category: "Other" }
    ],
    languages: [
        { name: "Arabic", proficiency: "Native" },
        { name: "English", proficiency: "Intermediate" }
    ],
    certifications: [
        {
            name: "@eslamdevui/ui NPM Package",
            description: "A fully accessible, performant UI component library for Vue 3 & Nuxt 3 based on Tailwind CSS & Tailwind Variants. Built and published a UI framework inspired by Nuxt UI v3.",
            url: "https://www.npmjs.com/package/@eslamdevui/ui"
        },
        {
            name: "vue-directives-kit NPM Package",
            description: "Developed and published a Vue.js directives utility package to enhance development efficiency.",
            url: "https://www.npmjs.com/package/vue-directives-kit"
        },
        {
            name: "vercel/next.js #93757 Bug Report",
            description: "Identified and reported a critical Next.js bug in image optimization LRU cache. Provided root-cause analysis across 3 source files and 4 suggested fixes.",
            url: "https://github.com/vercel/next.js/issues/93757"
        }
    ],
    interests: [
        "Web Development",
        "UI/UX Design",
        "Cybersecurity",
        "AI-Assisted Coding"
    ],
    projects: [
        {
            id: 'local-safha-archive',
            name: 'Safha Archive',
            description: "Developed Laravel backend API with Passport auth and built Next.js 16 frontend with React 19 and TypeScript. Integrated Typesense for system-wide search and Gemini for semantic embeddings. Managed state via TanStack Query and Zustand.",
            html_url: 'https://safha-archive-test.velents.ai',
            homepage: 'https://safha-archive-test.velents.ai',
            siteStatus: true,
            topics: ['nextjs', 'laravel', 'typesense', 'gemini', 'react19', 'typescript', 'zustand'],
            created_at: '2026-01-01',
            updated_at: new Date().toISOString(),
            language: 'Next.js + Laravel',
            stargazers_count: 0,
            forks_count: 0,
            open_issues_count: 0,
            background: '/projects/safha-archive.webp',
            owner: {
                login: 'mohamedeslam0419',
                avatar_url: 'https://avatars.githubusercontent.com/u/default',
                html_url: 'https://github.com/mohamedeslam0419'
            }
        },
        {
            id: 'local-safha-ai',
            name: 'SAFHA – AI-Powered Document & Invoice Management System',
            description: "Built scalable Next.js frontend with multi-tenant architecture and RBAC. Developed admin dashboards and automated document processing workflows (upload, AI extraction, validation). Created an advanced PDF review experience with highlighted OCR fields and rule-based validation.",
            html_url: 'https://platform.safha-ai.com',
            homepage: 'https://platform.safha-ai.com',
            siteStatus: true,
            topics: ['nextjs', 'laravel', 'ocr', 'playwright', 'typescript', 'tailwind'],
            created_at: '2026-01-01',
            updated_at: new Date().toISOString(),
            language: 'Next.js + Laravel',
            stargazers_count: 0,
            forks_count: 0,
            open_issues_count: 0,
            background: '/projects/safha-ai.webp',
            owner: {
                login: 'mohamedeslam0419',
                avatar_url: 'https://avatars.githubusercontent.com/u/default',
                html_url: 'https://github.com/mohamedeslam0419'
            }
        },
        {
            id: 'local-ai-penetration-tester',
            name: 'AI-Powered Penetration Tester',
            description: "Built an AI security dashboard with Nuxt 4, Vue 3, and Tailwind CSS. Implemented autonomous AI pentesting workflows with real-time scan updates via SSE. Developed an AI chat assistant for interactive security analysis.",
            html_url: 'https://dev-ai-pen.atwdemo.com',
            homepage: 'https://dev-ai-pen.atwdemo.com',
            siteStatus: true,
            topics: ['nuxt4', 'vue3', 'ai-sdk', 'postgresql', 'drizzle', 'redis', 'puppeteer'],
            created_at: '2025-10-01',
            updated_at: new Date().toISOString(),
            language: 'Nuxt 4',
            stargazers_count: 0,
            forks_count: 0,
            open_issues_count: 0,
            background: '/projects/ai-penetration-tester.webp',
            owner: {
                login: 'mohamedeslam0419',
                avatar_url: 'https://avatars.githubusercontent.com/u/default',
                html_url: 'https://github.com/mohamedeslam0419'
            }
        },
        {
            id: 'local-eapd',
            name: 'EAPD - Egyptian Agency of Partnership for Development',
            description: "Developed professional institutional website featuring dynamic content sections, statistics display, news integration, and project categorization system. Implemented responsive design with smooth animations and modern UI components using custom component library.",
            html_url: 'https://www-deveapd.atwdemo.com',
            homepage: 'https://www-deveapd.atwdemo.com',
            siteStatus: true,
            topics: [
                'nuxt4', 'vue3', 'typescript', '@eslamdevui/ui', 'tailwind', 'pinia', 'chart.js'
            ],
            created_at: '2025-07-01',
            updated_at: new Date().toISOString(),
            language: 'Nuxt 4',
            stargazers_count: 0,
            forks_count: 0,
            open_issues_count: 0,
            background: '/projects/eapd.webp',
            owner: {
                login: 'mohamedeslam0419',
                avatar_url: 'https://avatars.githubusercontent.com/u/default',
                html_url: 'https://github.com/mohamedeslam0419'
            }
        },
        {
            id: 'local-expert-system',
            name: 'Expert System',
            description: 'Developed the Seller Portal (POS) and Analytics Portal using Vue.js. Implemented modular design patterns (HMVC, SOA) for scalability and maintainability. Integrated E-commerce APIs, Messaging Module, and Safe & HR Modules using DDD (Domain-Driven Design).',
            html_url: 'https://expert-system.atwdemo.com/',
            homepage: 'https://expert-system.atwdemo.com/',
            siteStatus: true,
            topics: ['vue3', 'laravel', 'tailwind', 'typescript', 'pinia', 'chart.js'],
            created_at: '2025-01-01',
            updated_at: new Date().toISOString(),
            language: 'Vue 3 + Laravel',
            stargazers_count: 0,
            forks_count: 0,
            open_issues_count: 0,
            background: '/projects/expert-system.webp',
            owner: {
                login: 'mohamedeslam0419',
                avatar_url: 'https://avatars.githubusercontent.com/u/default',
                html_url: 'https://github.com/mohamedeslam0419'
            }
        },
        {
            id: 'local-shomoa-dubai',
            name: "Shomoa Dubai",
            description: "Developed a fully functional lighting products e-commerce website featuring a product catalog with category filters, a blog, and contact page. Delivered a responsive design using Nuxt.js, Vue 3, Tailwind CSS, and Swiper.",
            html_url: 'https://shomoa-dubai.com/',
            homepage: 'https://shomoa-dubai.com/',
            siteStatus: true,
            topics: ['nuxt3', 'vue3', 'pinia', 'tailwind', 'typescript', 'i18n', 'swiper'],
            created_at: '2024-12-01',
            updated_at: new Date().toISOString(),
            language: 'Nuxt 3',
            stargazers_count: 0,
            forks_count: 0,
            open_issues_count: 0,
            background: '/projects/shomoa-dubai.webp',
            owner: {
                login: 'mohamedeslam0419',
                avatar_url: 'https://avatars.githubusercontent.com/u/default',
                html_url: 'https://github.com/mohamedeslam0419'
            }
        },
        {
            id: 'local-mini-games',
            name: 'Mini-Games',
            description: 'An interactive platform for cognitive development through games.',
            html_url: 'https://e-book.eventiadv.com/',
            homepage: 'https://e-book.eventiadv.com/',
            siteStatus: false,
            topics: ['vue3', 'nuxt3', 'tailwind', 'javascript', 'typescript'],
            created_at: '2024-11-01',
            updated_at: '2024-11-30',
            language: 'Nuxt 3',
            stargazers_count: 0,
            forks_count: 0,
            open_issues_count: 0,
            background: '/projects/mini-games.webp',
            owner: {
                login: 'mohamedeslam0419',
                avatar_url: 'https://avatars.githubusercontent.com/u/default',
                html_url: 'https://github.com/mohamedeslam0419'
            }
        },
        {
            id: 'local-onclub',
            name: 'ONClub-EF',
            description: 'A project to create a comprehensive sports news platform.',
            html_url: '#',
            homepage: '#',
            siteStatus: false,
            topics: ['nuxt3', 'vue3', 'html', 'scss', 'css', 'javascript'],
            created_at: '2024-08-01',
            updated_at: '2024-11-01',
            language: 'Nuxt 3',
            stargazers_count: 0,
            forks_count: 0,
            open_issues_count: 0,
            background: '/projects/onClub.webp',
            owner: {
                login: 'mohamedeslam0419',
                avatar_url: 'https://avatars.githubusercontent.com/u/default',
                html_url: 'https://github.com/mohamedeslam0419'
            }
        }
    ]
};