import { NextResponse } from "next/server";

const avatarList = [
    {
        image: "/images/avatar/avatar_1.jpg",
        title: "Sarah Johnson"
    },
    {
        image: "/images/avatar/avatar_2.jpg",
        title: "Olivia Miller"
    },
    {
        image: "/images/avatar/avatar_3.jpg",
        title: "Sophia Roberts"
    },
    {
        image: "/images/avatar/avatar_4.jpg",
        title: "Isabella Clark"
    },
];

const statsFactData = {
    number: '01',
    name: "Stats & facts",
    heading: "High quality web design solutions you can trust.",
    description: "When selecting a web design agency, it's essential to consider its reputation, experience, and the specific needs of your project.",
    scoreData: [
        {
            number: 300,
            // numberValue: 'K',
            scoreDescp: "Total Audits"
        },
        {
            number: 238,
            scoreDescp: "Trusted by Company"
        },
        {
            number: 3,
            numberValue: 'M',
            scoreDescp: "Assets Tokenization"
        },
    ]
};

const servicesData = {
    number: '03',
    name: "Services",
    heading: "Transform Your Business",
    description: "A glimpse into our creativity—exploring innovative designs, successful collaborations, and transformative digital experiences.",
    data: [
        {
            id: 1,
            image: "/images/home/services/s1.png",
            heading: "Smart Contract Developement",
            descp: "Smart contracts are like self-executing agreements where the terms are coded directly onto a blockchain like Ethereum or EOS."
        },
        {
            id: 2,
            image: "/images/home/services/s2.png",
            heading: "Smart Contract Audit",
            descp: "A thorough examination of your smart contract to identify and address potential vulnerabilities, ensuring its security and reliability in blockchain applications."
        
        },
        {
            id: 3,
            image: "/images/home/services/s3.png",
            heading: "Web development",
            descp: "At dotBlockers, we specialize in building fast, secure, and scalable websites that drive business results. Whether you're a startup looking for a stunning landing page or an enterprise in need of a full-scale platform, our team delivers tailored web solutions that meet your goals" 
        },
        {
            id: 4,
            image: "/images/home/services/s4.jpg",
            heading: "Real-Time Monitoring",
            descp: "Stay ahead with dotBlockers Real-Time Monitoring for smart contracts and websites. Detect vulnerabilities, track uptime, and receive instant alerts to safeguard your digital assets. Trusted by industry leaders for blockchain security and website performance optimization."
        },
    ]
};

const testimonialData = {
    data_1: {
        preTitle: "Hear from them",
        title: "ERC1155 smart contract for deployment on the Lisk (OP stack) platform done succefully. I look forward to working with him again",
        author: "Ahren Posthumus",
        company: "From United Kingdom",
        image: "/images/avatar/prof.jpg",
    },
    data_2: {
        preTitle: "Hear from them",
        title: "I wholeheartedly endorse Umair for his unwavering commitment to long-term projects and the exceptional quality of his work. Umair's dedication to seeing projects through to completion, no matter how lengthy or challenging, is truly commendable. His attention to detail and commitment to delivering top-notch results are consistently impressive.",
        author: "Joshua Freedman",
        company: "President of the Freedman capital group",
        image: "/images/avatar/about1.png",
    },
    data_3: {
        preTitle: "Hear from them",
        title: "Succesfully Completed the Smart Contract for Safiah Project.",
        author: "obad",
        company: "CEO Safiah",
        image: "/images/avatar/prof.jpg",
    },
};

const teamData = {
    number: '06',
    data: [
        {
            image: "/images/home/team/t1.png",
            name: "Umair Riaz",
            position: "Founder & CEO",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
        {
            image: "/images/home/team/t2.png",
            name: "Nabila Imtiaz",
            position: "Staff Head",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
        {
            image: "/images/home/team/t3.png",
            name: "Arsalan Riaz",
            position: "Lead Designer",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
    ]
};

const pricingData = {
    data: [
        {
            planName: "Launch",
            planPrice: "$699",
            planDescp: "Ideal for startups and small businesses taking their first steps online.",
            planIncludes: ["Competitive research & insights","Wireframing and prototyping","Basic tracking setup (Google Analytics, etc.)","Standard contact form integration"]
        },
        {
            planName: "Scale",
            tag: "Most popular",
            planPrice: "$1,699",
            cancelPrice: "$2,199",
            planDescp: "Perfect for growing brands needing more customization and flexibility.",
            planIncludes: ["Everything in the Launch Plan","Custom design for up to 10 pages","Seamless social media integration","SEO enhancements for key pages"]
        },
        {
            planName: "Elevate",
            planPrice: "$3,499",
            planDescp: "Best suited for established businesses wanting a fully tailored experience.",
            planIncludes: ["Everything in the Scale Plan","E-commerce functionality (if needed)","Branded email template design","Priority support for six months after launch"]
        },
    ],
    partnerLogo: [
        { light: "/images/home/pricing/partner-1.svg", dark: "/images/home/pricing/partner-dark-1.svg" },
        { light: "/images/home/pricing/partner-2.svg", dark: "/images/home/pricing/partner-dark-2.svg" },
        { light: "/images/home/pricing/partner-3.svg", dark: "/images/home/pricing/partner-dark-3.svg" },
        { light: "/images/home/pricing/partner-4.svg", dark: "/images/home/pricing/partner-dark-4.svg" },
        { light: "/images/home/pricing/partner-5.svg", dark: "/images/home/pricing/partner-dark-5.svg" },
      ],
};

const faqData = {
    data: [
        {
            faq_que: "What services does your agency offer?",
            faq_ans: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.'
        },
        {
            faq_que: "How long does a typical project take?",
            faq_ans: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.'
        },
        {
            faq_que: "Do you offer custom designs, or do you use templates?",
            faq_ans: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.'
        },
        {
            faq_que: "What’s the cost of a project?",
            faq_ans: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.'
        },
        {
            faq_que: "Do you provide ongoing support after project completion?",
            faq_ans: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.'
        }
    ]
};
const contactData = {
    keypoint:["Always-On Customer Support","Service Across the Globe"],
    managerProfile:{
        image:"/images/home/team/t2.png",
        name:"Nabila Imtiaz",
        position:"Manager"
    }
}

const aboutusStats = [
    {
        number: 45,
        postfix:"+",
        title: 'Presence in global markets',
        descp: "Expanding reach across international regions with localized expertise and worldwide impact."
    },
    {
        number: 10,
        // prefix: "$",
        postfix: "+",
        title: 'Avg number of bugs in smart contracts',
        descp: "Every protocol on every chain can be the target of exploits. Security is an interoperable standard."
    },
    {
        number: 1,
        prefix: "$",
        postfix: "B",
        title: 'TVL stolen',
        descp: "DeFi protocols lose millions of dollars every year from exploits due to insufficient security practices."
    },
]

const servicesSliderData = [
    "Web development","Smart Contract Development","Security Audit","DeFi","Branding", "Agency","Content creation","SaaS"
]



export const GET = async () => {
    return NextResponse.json({
        avatarList,
        statsFactData,
        servicesData,
        testimonialData,
        teamData,
        pricingData,
        faqData,
        contactData,
        aboutusStats,
        servicesSliderData
    });
};