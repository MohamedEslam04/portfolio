export default defineAppConfig({
  global: {
    picture: {
      dark: "https://i.postimg.cc/zG5DgGqC/profile-pic.png",
      light: "https://i.postimg.cc/zG5DgGqC/profile-pic.png",
      alt: "Mohamed Eslam - Frontend Developer",
    },
    meetingLink: "https://cal.com/mohamed-eslam-sf7gxj",
    email: "mohamedeslam0419@gmail.com",
    available: true,
  },
  ui: {
    colors: {
      primary: "blue",
      neutral: "neutral",
    },
  },
  uiPro: {
    pageHero: {
      slots: {
        container: "py-18 sm:py-24 lg:py-32",
        title: "mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl",
        description:
          "mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted",
      },
    },
  },
  footer: {
    credits: `Copyright © ${new Date().getFullYear()} Mohamed Eslam. All rights reserved.`,
    colorMode: false,
    links: [
      {
        icon: "i-simple-icons-github",
        to: "https://github.com/MohamedEslam04",
        target: "_blank",
        "aria-label": "Mohamed Eslam on GitHub",
      },
      {
        icon: "i-simple-icons-linkedin",
        to: "https://www.linkedin.com/in/mohamed-eslam-41a3492a4/",
        target: "_blank",
        "aria-label": "Mohamed Eslam on LinkedIn",
      },
      {
        icon: "i-simple-icons-npm",
        to: "https://www.npmjs.com/~mohamedeslam0419",
        target: "_blank",
        "aria-label": "Mohamed Eslam on NPM",
      },
      {
        icon: "clarity:email-solid",
        to: "mailto:mohamedeslam0419@gmail.com",
        target: "_blank",
        "aria-label": "Email Mohamed Eslam",
      },
    ],
  },
});
