# Menston Preschool website

Static copy of menstonpreschool.org, taken from the GoDaddy Website Builder site on 20 November 2026, for hosting on GitHub Pages.

- Plain HTML, CSS and files in `assets/`. No build step.
- GoDaddy's JavaScript runtime has been removed. `assets/site.js` and `assets/site.css` replace the nav dropdowns, mobile menu and gallery behaviour.
- The contact form opens the visitor's email client addressed to office@menstonpreschool.org. Replace it with a form service if a real form is wanted.
- The unlinked `test` and `funding-&-fees-backup` pages were not copied.

## Publishing

Repository Settings, Pages, deploy from a branch, root folder. For a custom domain add a `CNAME` file and update the DNS at GoDaddy.
