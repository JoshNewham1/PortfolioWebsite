# Portfolio Website Code

A portfolio website using the following technologies and Netlify to host:

- Next.js v12
- Tailwind v3.0
- Built-in MDX v1 support
- Includes modern design with dark & light themes

## Running
- `npm run dev` runs a development build
- Deployed to Netlify from the `main` branch through their front-end

## Environment variables
| Variable | Description | Options
| --- | --- | --- |
| `BLOG_NAME` | the name of your blog, displayed below the avatar ||
| `BLOG_TITLE` | the main header (`h1`) on the home page ||
| `BLOG_FOOTER_TEXT`| the text in the footer ||
| `BLOG_THEME` | the theme to pass to Tailwind | default |
| `BLOG_FONT_HEADINGS` | the font-family for all HTML headings, from `h1` to `h6`| sans-serif (default), serif, monospace|
| `BLOG_FONT_PARAGRAPHS` | the font-family for all other HTML elements | sans-serif (default), serif, monospace|
