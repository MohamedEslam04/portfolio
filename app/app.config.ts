export default defineAppConfig({
  // global: {
  //   picture: {
  //     dark: "https://i.postimg.cc/zG5DgGqC/profile-pic.png",
  //     light: "https://i.postimg.cc/zG5DgGqC/profile-pic.png",
  //     alt: "Mohamed Eslam - Frontend Developer",
  //   },
  //   meetingLink: "https://cal.com/mohamed-eslam-sf7gxj",
  //   email: "mohamedeslam0419@gmail.com",
  //   available: true,
  // },
  ui: {
    colors: {
      primary: 'primary',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-8xl',
        description:
          'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    },
    pageLogos: {
      slots: {
        root: 'relative overflow-auto'
      }
    }
  }
})
