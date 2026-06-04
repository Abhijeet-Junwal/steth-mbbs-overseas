export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Optional: hide private folders if you have any
    },
    sitemap: 'https://stetheducation.com/sitemap.xml',
  }
}