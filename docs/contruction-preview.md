<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>CONSTRUCTO | Design-Build</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500;600&amp;family=Inter:wght@400&amp;family=Montserrat:wght@600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "surface-container-low": "#f3f3f3",
                        "on-tertiary": "#ffffff",
                        "surface-container": "#eeeeee",
                        "on-surface": "#1a1c1c",
                        "on-secondary-container": "#6c5000",
                        "surface": "#f9f9f9",
                        "secondary-fixed-dim": "#f9bd00",
                        "primary-fixed": "#d4e3ff",
                        "tertiary-container": "#302b2c",
                        "surface-tint": "#3f608b",
                        "surface-container-high": "#e8e8e8",
                        "tertiary": "#1b1718",
                        "secondary": "#785a00",
                        "inverse-surface": "#2f3131",
                        "on-primary-fixed-variant": "#254872",
                        "surface-container-lowest": "#ffffff",
                        "tertiary-fixed-dim": "#cdc4c5",
                        "outline": "#73777f",
                        "on-primary": "#ffffff",
                        "on-primary-container": "#7596c4",
                        "inverse-primary": "#a7c8fa",
                        "primary": "#001833",
                        "on-tertiary-fixed": "#1e1b1c",
                        "inverse-on-surface": "#f1f1f1",
                        "error-container": "#ffdad6",
                        "on-surface-variant": "#43474e",
                        "surface-bright": "#f9f9f9",
                        "on-tertiary-fixed-variant": "#4b4546",
                        "surface-dim": "#dadada",
                        "error": "#ba1a1a",
                        "surface-container-highest": "#e2e2e2",
                        "primary-container": "#002d56",
                        "primary-fixed-dim": "#a7c8fa",
                        "on-error": "#ffffff",
                        "secondary-container": "#fdc008",
                        "outline-variant": "#c3c6d0",
                        "on-error-container": "#93000a",
                        "background": "#f9f9f9",
                        "on-tertiary-container": "#999293",
                        "tertiary-fixed": "#e9e0e1",
                        "on-secondary-fixed": "#251a00",
                        "on-primary-fixed": "#001c39",
                        "secondary-fixed": "#ffdf9d",
                        "on-background": "#1a1c1c",
                        "surface-variant": "#e2e2e2",
                        "on-secondary-fixed-variant": "#5b4300",
                        "on-secondary": "#ffffff"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "base": "8px",
                        "grid-gutter": "24px",
                        "section-gap-mobile": "64px",
                        "section-gap-desktop": "120px",
                        "container-max": "1440px"
                    },
                    "fontFamily": {
                        "headline-lg": ["Montserrat"],
                        "headline-sm": ["Montserrat"],
                        "label-sm": ["IBM Plex Sans"],
                        "label-lg": ["IBM Plex Sans"],
                        "headline-md": ["Montserrat"],
                        "headline-lg-mobile": ["Montserrat"],
                        "body-md": ["Inter"],
                        "body-lg": ["Inter"],
                        "display-lg": ["Montserrat"]
                    },
                    "fontSize": {
                        "headline-lg": ["48px", { "lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "700" }],
                        "headline-sm": ["24px", { "lineHeight": "1.4", "fontWeight": "600" }],
                        "label-sm": ["12px", { "lineHeight": "1.2", "fontWeight": "500" }],
                        "label-lg": ["14px", { "lineHeight": "1.2", "letterSpacing": "0.1em", "fontWeight": "600" }],
                        "headline-md": ["32px", { "lineHeight": "1.3", "fontWeight": "700" }],
                        "headline-lg-mobile": ["32px", { "lineHeight": "1.2", "fontWeight": "700" }],
                        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
                        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
                        "display-lg": ["72px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800" }]
                    }
                }
            }
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .text-gradient {
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    </style>
</head>
<body class="bg-background text-on-background font-body-md min-h-screen flex flex-col">
<!-- TopAppBar -->
<header class="bg-surface dark:bg-primary text-primary dark:text-inverse-primary sticky top-0 w-full z-50 border-b border-outline-variant dark:border-outline shadow-sm">
<div class="flex justify-between items-center px-6 py-4 max-w-container-max mx-auto">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined cursor-pointer hover:bg-secondary-container hover:text-on-secondary-container transition-colors duration-300 md:hidden" data-icon="menu">menu</span>
<span class="font-headline-md text-headline-md font-bold tracking-tighter text-primary dark:text-on-primary">CONSTRUCTO</span>
</div>
<nav class="hidden md:flex items-center gap-8 font-label-lg text-label-lg uppercase tracking-widest">
<a class="text-on-surface dark:text-on-primary-container hover:bg-secondary-container hover:text-on-secondary-container transition-colors duration-300 px-3 py-2 rounded" href="#">Current Projects</a>
<a class="text-on-surface dark:text-on-primary-container hover:bg-secondary-container hover:text-on-secondary-container transition-colors duration-300 px-3 py-2 rounded" href="#">Our Services</a>
<a class="text-on-surface dark:text-on-primary-container hover:bg-secondary-container hover:text-on-secondary-container transition-colors duration-300 px-3 py-2 rounded" href="#">Safety Standards</a>
<a class="text-on-surface dark:text-on-primary-container hover:bg-secondary-container hover:text-on-secondary-container transition-colors duration-300 px-3 py-2 rounded" href="#">Case Studies</a>
<a class="text-on-surface dark:text-on-primary-container hover:bg-secondary-container hover:text-on-secondary-container transition-colors duration-300 px-3 py-2 rounded" href="#">Contact Us</a>
</nav>
<button class="bg-secondary-container text-on-secondary-container font-label-lg text-label-lg uppercase tracking-widest px-6 py-3 rounded-none hover:opacity-90 transition-opacity cursor-pointer active:opacity-80">
                INQUIRE
            </button>
</div>
</header>
<main class="flex-grow">
<!-- Hero Section -->
<section class="relative h-[819px] min-h-[600px] flex items-center">
<div class="absolute inset-0 z-0">
<div class="w-full h-full bg-cover bg-center" data-alt="A massive, complex construction site at dusk, viewed from a high vantage point. Heavy machinery, including towering cranes, silhouetted against a dramatic, colorful sky transitioning from deep orange to dark navy blue. Structural steel framework of a large skyscraper is prominent. Cinematic lighting, highly detailed, photorealistic industrial architectural photography conveying scale and engineering precision." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBi-_ViYnGACaph3d8-iunCasPYbNI6Ol8tFuchaWiogQeZGKPlSI6almY4WRpw4Y0ViNxAlvZs6k_-FVKwBJZBut-q4f8HP7jqekiJ2i_7WUlnQ8hC9Wv8cthnF1yIbZMBE8_QcbXApr8c465T9BD45pO7tDB0buhsKPtmKQ-Nu0dRTe_gSpqIl3CdGAfCvgqAPHFZ72_WsG_kofw1_JLk-75uNGkJlKwkS4EW8npEHjL91a6kvmWfWg')"></div>
<div class="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>
</div>
<div class="relative z-10 max-w-container-max mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-grid-gutter w-full">
<div class="col-span-1 md:col-span-8 lg:col-span-7 flex flex-col gap-8 text-on-primary">
<h1 class="font-display-lg text-display-lg text-on-primary">Experience a Better Way to Build.</h1>
<p class="font-body-lg text-body-lg text-on-primary/90 max-w-2xl">
                        Unwavering commitment to architectural excellence, precision engineering, and rigorous safety standards. We bring complex visions to life at scale.
                    </p>
<div class="flex flex-wrap gap-4 mt-4">
<button class="bg-primary-container text-on-primary px-8 py-4 font-label-lg text-label-lg uppercase tracking-widest border border-primary-container hover:bg-secondary hover:text-on-secondary transition-colors rounded-none">EXPLORE PROJECTS</button>
<button class="bg-transparent text-on-primary px-8 py-4 font-label-lg text-label-lg uppercase tracking-widest border-2 border-on-primary hover:bg-on-primary hover:text-primary transition-colors rounded-none">OUR SERVICES</button>
</div>
</div>
</div>
</section>
<!-- Performance Metrics -->
<section class="bg-surface py-section-gap-mobile md:py-section-gap-desktop border-b border-outline-variant">
<div class="max-w-container-max mx-auto px-6">
<div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-grid-gutter">
<div class="flex flex-col gap-4 items-start">
<span class="font-display-lg text-display-lg text-primary">45+</span>
<div class="h-1 w-16 bg-secondary-container"></div>
<span class="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant">Years Experience</span>
</div>
<div class="flex flex-col gap-4 items-start">
<span class="font-display-lg text-display-lg text-primary">2.5k</span>
<div class="h-1 w-16 bg-secondary-container"></div>
<span class="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant">Projects Completed</span>
</div>
<div class="flex flex-col gap-4 items-start">
<span class="font-display-lg text-display-lg text-primary">98%</span>
<div class="h-1 w-16 bg-secondary-container"></div>
<span class="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant">Repeat Customers</span>
</div>
</div>
</div>
</section>
<!-- The Constructo Advantage -->
<section class="py-section-gap-mobile md:py-section-gap-desktop">
<div class="max-w-container-max mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-grid-gutter">
<div class="col-span-1 lg:col-span-5 flex flex-col gap-6">
<h2 class="font-headline-lg text-headline-lg text-primary">The Constructo Advantage.</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant">
                        Our methodology integrates design, engineering, and construction into a singular, cohesive process. We prioritize structural integrity and operational efficiency, ensuring every project is delivered with uncompromising quality from foundation to finish.
                    </p>
</div>
<div class="col-span-1 lg:col-span-6 lg:col-start-7 flex flex-col gap-8 justify-center">
<div class="flex gap-6 items-start p-6 bg-surface-container-low border border-outline-variant rounded-none">
<span class="material-symbols-outlined text-secondary-container text-4xl" style="font-variation-settings: 'FILL' 1;">architecture</span>
<div class="flex flex-col gap-2">
<h3 class="font-headline-sm text-headline-sm text-primary">Precision Engineering</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Advanced modeling and exacting standards guarantee structural perfection in every component.</p>
</div>
</div>
<div class="flex gap-6 items-start p-6 bg-surface-container-low border border-outline-variant rounded-none">
<span class="material-symbols-outlined text-secondary-container text-4xl" style="font-variation-settings: 'FILL' 1;">health_and_safety</span>
<div class="flex flex-col gap-2">
<h3 class="font-headline-sm text-headline-sm text-primary">Uncompromising Safety</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Industry-leading protocols and continuous training ensure a zero-incident culture on all sites.</p>
</div>
</div>
</div>
</div>
</section>
<!-- Visual Break -->
<section class="h-[614px] min-h-[400px] w-full relative">
<div class="w-full h-full bg-cover bg-center" data-alt="Close-up abstract architectural detail of a modern glass and steel facade. Sharp geometric lines, reflecting the clear blue sky and adjacent buildings. High contrast between the dark structural steel beams and the highly reflective, pristine glass panels. Professional architectural photography highlighting precision and modern building materials." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBNPneMP37zrSeU4iv7ceEhCXWq959pp6_5lGAne83Bp6anc30K93Gk0UkJ8YCDYnkeGvI6ogPDHRGycBgIbieTw0j8pjniDFZhbL4FQyecHCvv0Cv5xhpY6IheF4pKLbR5NPQrlhMIcQSOtHhdMmaaZ0vgtj5HO8tDtDefgmD0bWozOQuA9OST-MFMXvZu_8MSH6iwjYLlRDOe9ZaESdYc6xhylznhjARzplVW0bXdFLxtU9jYem_grA')"></div>
<div class="absolute inset-0 bg-primary/20"></div>
</section>
<!-- Featured Projects -->
<section class="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-low">
<div class="max-w-container-max mx-auto px-6">
<div class="flex justify-between items-end mb-12">
<h2 class="font-headline-lg text-headline-lg text-primary max-w-2xl">Featured Project: Apex Financial Tower</h2>
<a class="hidden md:flex items-center gap-2 font-label-lg text-label-lg uppercase tracking-widest text-primary hover:text-secondary-container transition-colors" href="#">
                         VIEW ALL PROJECTS <span class="material-symbols-outlined">arrow_forward</span>
</a>
</div>
<div class="relative h-[600px] w-full group overflow-hidden border border-outline-variant">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A towering, modern commercial skyscraper constructed of steel and reflective glass, seen from a low angle against a clear sky. The building features a unique, angular geometric design. The setting is a bustling urban financial district. High-resolution architectural photography showcasing monumental scale and contemporary corporate aesthetic." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDDqELCanctqw2y40mqpdgSLu3gfsQqxFV5Xp5hId1FGwkkLQb10fK_NKmICIHSfF95vGxonS4qYiG2mrTaJKjkjN_irTZNqryI7_sXJmaBk3CvlCjbHFyg5ZIIm4GbBcB-q6g4XWMLRXeGX-H2yMtafQzGKCThHOnQxbSPzI1-KcKqSl3DYIuXProR_kBtx4vpy3wi_W3ltX1HNe0_9xhXiTRh2-HpXM6eorQ7CzC2p9Zh1TEWQIFWrw')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3 flex flex-col gap-4">
<div class="h-1 w-20 bg-secondary-container mb-2"></div>
<h3 class="font-headline-md text-headline-md text-on-primary">Apex Financial Tower</h3>
<p class="font-body-lg text-body-lg text-on-primary/80">A 65-story commercial monolith redefining the urban skyline through sustainable engineering and advanced glass facades.</p>
<button class="mt-4 bg-transparent border border-on-primary text-on-primary px-6 py-3 font-label-lg text-label-lg uppercase tracking-widest w-fit hover:bg-on-primary hover:text-primary transition-colors">VIEW CASE STUDY</button>
</div>
</div>
<a class="md:hidden mt-8 flex items-center justify-center gap-2 font-label-lg text-label-lg uppercase tracking-widest text-primary hover:text-secondary-container transition-colors w-full text-center border border-primary p-4" href="#">
                     VIEW ALL PROJECTS <span class="material-symbols-outlined">arrow_forward</span>
</a>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container font-body-md w-full mt-section-gap-desktop border-t-4 border-secondary-container">
<div class="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter px-6 py-section-gap-desktop max-w-container-max mx-auto">
<div class="col-span-1 md:col-span-4 flex flex-col gap-6">
<span class="font-headline-lg text-headline-lg text-secondary-container">CONSTRUCTO</span>
<p class="opacity-80 max-w-sm">Building the future with uncompromising integrity, precision engineering, and a commitment to architectural excellence.</p>
<div class="flex gap-4 mt-4">
<span class="material-symbols-outlined cursor-pointer hover:text-secondary-container transition-colors" data-icon="share">share</span>
<span class="material-symbols-outlined cursor-pointer hover:text-secondary-container transition-colors" data-icon="language">language</span>
</div>
</div>
<div class="col-span-1 md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
<div class="flex flex-col gap-4">
<h4 class="font-label-lg text-label-lg uppercase tracking-widest text-secondary-container">Legal</h4>
<a class="text-on-primary-container dark:text-on-tertiary-container opacity-80 hover:text-secondary-container transition-colors" href="#">Privacy Policy</a>
<a class="text-on-primary-container dark:text-on-tertiary-container opacity-80 hover:text-secondary-container transition-colors" href="#">Terms of Service</a>
<a class="text-on-primary-container dark:text-on-tertiary-container opacity-80 hover:text-secondary-container transition-colors" href="#">Accessibility</a>
</div>
<div class="flex flex-col gap-4">
<h4 class="font-label-lg text-label-lg uppercase tracking-widest text-secondary-container">Company</h4>
<a class="text-on-primary-container dark:text-on-tertiary-container opacity-80 hover:text-secondary-container transition-colors" href="#">Licensing</a>
<a class="text-on-primary-container dark:text-on-tertiary-container opacity-80 hover:text-secondary-container transition-colors" href="#">Careers</a>
<a class="text-on-primary-container dark:text-on-tertiary-container opacity-80 hover:text-secondary-container transition-colors" href="#">About Us</a>
</div>
<div class="flex flex-col gap-4 col-span-2 md:col-span-1">
<h4 class="font-label-lg text-label-lg uppercase tracking-widest text-secondary-container">Contact</h4>
<p class="opacity-80">1-800-555-BUILD</p>
<p class="opacity-80">inquiries@constructo.com</p>
<p class="opacity-80">400 Industrial Way, Suite 100<br/>Metropolis, NY 10001</p>
</div>
</div>
<div class="col-span-1 md:col-span-12 mt-12 pt-8 border-t border-on-primary/20 flex flex-col md:flex-row justify-between items-center gap-4">
<p class="font-label-sm text-label-sm opacity-60">© 2024 CONSTRUCTO DESIGN-BUILD. ALL RIGHTS RESERVED.</p>
</div>
</div>
</footer>
</body></html>