import { NextResponse } from "next/server";

const MenuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Projects",
    path: "/projects",
    newTab: false,
  },
  // {
  //   id: 4,
  //   title: "Blog",
  //   path: "/blog",
  //   newTab: false,
  // },
  {
    id: 5,
    title: "Services",
    path: "/#services",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  // {
  //   id: 7,
  //   title: "Docs",
  //   path: "/documentation",
  //   newTab: false,
  // }
];


const footerData = {
    name: "Dot Blockers",
    tagline: "Build something together?",
    info: [
        {
            icon: "/images/footer/email-arrow.svg",
            link: "dotblockers@gmail.com",
            href: "https://mail.google.com/mail/",
            phone: "+92 315 7600895",
            // pico:"<i class="fa-solid fa-phone" style="color: #7cfd72;"></i>"
        },
        {
            icon: "/images/footer/Location.svg",
            link: "Lahore, Pakistan",
            href: "https://maps.app.goo.gl/aFK7T1Hsgw3dQJUN8"
        }
    ],
    links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/#services" },
        { name: "Work", href: "/projects" },
        // { name: "Terms", href: "/terms-and-conditions" },
        // { name: "Privacy Policy", href: "/privacy-policy" },
        // { name: "Error 404", href: "/not-found" }
    ],
    socialLinks: [
        { name: "Facebook", href: "https://www.facebook.com/" },
        { name: "Instagram", href: "https://www.instagram.com/" },
        { name: "Twitter", href: "https://x.com/" }
    ],
    copyright: "© Dot Blockers copyright 2025"
};

export const GET = async () => {
    return NextResponse.json({
        footerData,
        MenuData
    });
};