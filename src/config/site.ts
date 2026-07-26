const links = {
  x: "https://twitter.com/sample",
  github: "https://github.com/sample/furniture",
  githubAccount: "https://github.com/sample",
  discord: "https://discord.com/users/sample",
};

export const siteConfig = {
  name: "Laurnit",
  description: "An Industry Leading Education Platform",
  mainNav: [
    {
      title: "Feature",
      card: [
        {
          title: "Profile",
          href: "/profile",
          description: "View Your Profile",
        },
        {
          title: "Instructors",
          href: "/products/bamboo",
          description: "Inspiring Laurnit's instructors",
        },
        {
          title: "Courses",
          href: "/courses",
          description: "Explore innovative courses on Laurnit",
        },
      ],
      menu: [
        {
          title: "About Us",
          href: "/aboutus",
        },
      ],
    },
  ],
  footerNav: [
    {
      title: "Explore",
      items: [
        {
          title: "Profile",
          href: "/types/seating",
          external: true,
        },
        {
          title: "Partnership University",
          href: "/types/lying",
          external: true,
        },
        {
          title: "Courses",
          href: "/types/entertainment",
          external: true,
        },
        {
          title: "Instructors",
          href: "/types/tables",
          external: true,
        },
        {
          title: "Storage",
          href: "/types/storage",
          external: true,
        },
      ],
    },
    {
      title: "Help",
      items: [
        {
          title: "About",
          href: "/aboutus",
          external: false,
        },
        {
          title: "Contact",
          href: "/contact",
          external: false,
        },
        {
          title: "Terms",
          href: "/terms",
          external: false,
        },
        {
          title: "Privacy",
          href: "/privacy",
          external: false,
        },
      ],
    },
    {
      title: "Social",
      items: [
        {
          title: "X",
          href: links.x,
          external: true,
        },
        {
          title: "GitHub",
          href: links.githubAccount,
          external: true,
        },
        {
          title: "Discord",
          href: links.discord,
          external: true,
        },
      ],
    },
    {
      title: "Partner",
      items: [
        {
          title: "Stam Organization",
          href: "https://shoppy.com",
          external: true,
        },
        {
          title: "Tech Myanmar",
          href: "https://techmm.com",
          external: true,
        },
        {
          title: "Loot",
          href: "https://llot.com",
          external: true,
        },
        {
          title: "Yangon Youth Tech",
          href: "https://ygnyouthtech.com",
          external: true,
        },
      ],
    },
  ],
};
