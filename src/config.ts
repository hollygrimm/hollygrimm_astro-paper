export const SITE = {
  website: "https://hollygrimm.com/", // replace this with your deployed domain
  author: "Holly Grimm",
  profile: "https://hollygrimm.com/",
  desc: "Artist and Software Engineer",
  title: "Holly Grimm",
  ogImage: "og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Suggest Changes",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "America/Denver", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
