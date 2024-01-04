
import html from '../assets/icons/html.jpg'
import css from '../assets/icons/css.png'
import tailwind from '../assets/icons/tailwind.jpg'
import javascript from '../assets/icons/javascript.png'
import typscript from '../assets/icons/typscript.png'
import python from '../assets/icons/python.png'



import my_portfolio from  '../assets/my_portfolio.png'
import eduForbes from  '../assets/eduForbes.png'
import travel from  '../assets/travel.png'
import levelUp from  '../assets/levelUp.png'
import Fintekk from  '../assets/Fintekk.png'
import geritch from  '../assets/geritch.png'
import addhomes from  '../assets/addhomes.png'


export const skills = [
    {
        name: 'HTML',
        icons: html
    },
    {
        name: 'CSS',
        icons: css
    },
    {
        name: 'TAILWIND',
        icons: tailwind
    },
    {
        name: ' JAVASCRIPT',
        icons: javascript
    },
    {
        name: 'TYPESCRIPT',
        icons: typscript
    },
    {
        name: 'PYTHON',
        icons: python
    },
    {
        name: 'REACT',
        icons: javascript
    },
    {
        name: 'JAVA',
        icons: javascript
    },
]

export const projects = [
    {
        id: 1,
        title: 'Portfolio Project',
        imgUrl: my_portfolio,
        gitHubLink: 'https://google.com',
        liveDemo: 'https://google.com',
        desc: "This is my personal portfolio project that showcases what I'm capable of offering to your wonderful company",

        stack: ['React ', 'Tailwindcss']
    },
    {
        id: 2,
        title: 'Add Homes',
        imgUrl: addhomes,
        gitHubLink: 'https://google.com',
        liveDemo: 'https://google.com',
        desc: "This is a real estate application that allows user to list rental for potential buyers or tenants",
        stack: ['React ', 'Tailwindcss', ' Firebase']
    },
    {
        id: 3,
        title: 'Geritch Resturant',
        imgUrl: geritch,
        gitHubLink: 'https://google.com',
        liveDemo: 'https://google.com',
        desc: "A landing page built for a resturant  that showcases their products and services.",
        stack: ['React ', ' Tailwindcss']
    },
    {
        id: 4,
        title: 'LevelUp Shopify',
        imgUrl: levelUp,
        gitHubLink: 'https://google.com',
        liveDemo: 'https://google.com',
        desc: "This is a product built to challenge myself. I'm to create an exact replica of a figma design with the neccesary functionalities.",
        stack: ['HTML', ' CSS', ' JavaScript']
    },
    {
        id: 5,
        title: 'Edu Forbes',
        imgUrl: eduForbes,
        gitHubLink: 'https://google.com',
        liveDemo: 'https://google.com',
        desc: "Educational Website display product and services it offers to potential users.",
        stack: ['HTML', ' CSS', ' JavaScript']
    },
    {
        id: 6,
        title: 'Travel Website',
        imgUrl: travel,
        gitHubLink: 'https://google.com',
        liveDemo: 'https://google.com',
        desc: "A travel Website",
        stack: ['HTML', ' CSS', ' JavaScript']

    },
    {
        id: 7,
        title: 'Fintekk',
        imgUrl: Fintekk,
        gitHubLink: 'https://google.com',
        liveDemo: 'https://google.com',
        desc: "Fintekk",
        stack: ['HTML', ' CSS', ' JavaScript']

    },
]