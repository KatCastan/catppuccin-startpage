// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = frappe;
const preferredDarkTheme = macchiato;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Los Angeles",
    scale: "F",
  },
  clock: {
    format: "k:i p",
    icon_color: palette.maroon,
  },
  additionalClocks: [
    {
      label: "UA",
      timezone: "Europe/Kyiv",
      format: "h:i",
      icon_color: palette.peach,
    },
  ],
  search: {
    engines: {
      p: ["https://www.perplexity.ai/search/?q=", "PerplexityAI"],
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
    default: "d",
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: true,
  localFonts: true,
  fastlink: "https://github.com/KatCastan/catppuccin-startpage/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "自分",
      background_url: "src/img/banners/banner_14.gif",
      categories: [
        {
          name: "お気に入り",
          links: [
            {
              name: "amazon",
              url: "https://amazon.com",
              icon: "brand-amazon",
              icon_color: palette.peach,
            },
            {
              name: "temu",
              url: "https://www.temu.com/",
              icon: "square-letter-t",
              icon_color: palette.peach,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/",
              icon: "brand-youtube",
              icon_color: palette.red
            },
          ],
        },
        {
          name: "仕事・大学",
          links: [
                        {
              name: "sso",
              url: "https://myapps.microsoft.com/",
              icon: "school",
              icon_color: palette.blue,
            },
            {
              name: "canvas",
              url: "https://csulb.instructure.com/",
              icon: "circle-dashed",
              icon_color: palette.red,
            },
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "生活力",
          links: [
            {
              name: "brain.fm",
              url: "https://my.brain.fm/",
              icon: "headphones",
              icon_color: palette.mauve,
            },
            {
              name: "focumon",
              url: "https://www.focumon.com/",
              icon: "cat",
              icon_color: palette.yellow,
            },
            {
              name: "structured",
              url: "https://web.structured.app/",
              icon: "circle-check",
              icon_color: palette.pink,
            },
            {
              name: "notion",
              url: "https://www.notion.so/Home-Dashboard-78c2e175735743289e7544aa2de1d867",
              icon: "square-letter-n",
              icon_color: palette.text,
            },
          ],
        },
      ],
    },
    {
      name: "プログラム",
      background_url: "src/img/banners/banner_17.gif",
      categories: [
        {
          name: "ツール・勉強",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.text,
            },
            {
              name: "coursera",
              url: "https://www.coursera.org/",
              icon: "circle-letter-c",
              icon_color: palette.blue,
            },
            {
              name: "udacity",
              url: "https://www.udacity.com/",
              icon: "letter-u",
              icon_color: palette.blue,
            },
            {
              name: "claude",
              url: "https://claude.ai/login",
              icon: "asterisk",
              icon_color: palette.peach,
            },
            {
              name: "edx",
              url: "https://www.edx.org/",
              icon: "square-letter-x",
              icon_color: palette.green,
            },
            {
              name: "codecademy",
              url: "https://www.codecademy.com/",
              icon: "terminal-2",
              icon_color: palette.green,
            },
            {
              name: "deepseek",
              url: "https://chat.deepseek.com/",
              icon: "fish",
              icon_color: palette.blue,
            },
            {
              name: "developer roadmaps",
              url: "https://roadmap.sh/",
              icon: "square-letter-r",
              icon_color: palette.blue,
            },
            {
              name: "collab",
              url: "https://colab.research.google.com",
              icon: "notebook",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "チャレンジ",
          links: [
            {
              name: "kaggle",
              url: "https://www.kaggle.com",
              icon: "brain",
              icon_color: palette.green,
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.peach,
            },
            {
              name: "codesignal",
              url: "https://codesignal.com",
              icon: "dog",
              icon_color: palette.blue,
            },
            {
              name: "exercism",
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: palette.red,
            },
            {
              name: "aoc",
              url: "https://adventofcode.com",
              icon: "brand-linktree",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "リソース",
          links: [
            {
              name: "r/learnprogramming",
              url: "https://www.reddit.com/r/learnprogramming/",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "休み",
      background_url: "src/img/banners/banner_15.gif",
      categories: [
        {
          name: "SNS",
          links: [
            {
              name: "tumblr",
              url: "https://www.tumblr.com/",
              icon: "brand-tumblr",
              icon_color: palette.blue,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
            {
              name: "bluesky",
              url: "https://bsky.app/",
              icon: "IconBrandBluesky",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "ホビー",
          links: [
            {
              name: "infiniteBacklog",
              url: "https://infinitebacklog.net",
              icon: "device-gamepad",
              icon_color: palette.green,
            },
            {
              name: "drawabox",
              url: "https://drawabox.com/",
              icon: "box",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "その他",
          links: [
            {
              name: "patreon",
              url: "https://www.patreon.com",
              icon: "brand-patreon",
              icon_color: palette.text,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.blue);


