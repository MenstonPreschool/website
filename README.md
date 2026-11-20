# Menston Preschool website

The site for menstonpreschool.org, hosted on GitHub Pages. GitHub builds it automatically (Jekyll), so there is nothing to install to edit it.

## Editing a page

Open the page file on GitHub, click the pencil icon, edit, and commit. The site updates within a minute or two.

| Page | File |
| --- | --- |
| Home | `index.html` |
| About Us, Admissions, Policies, Learning, Funding, Term Dates, Clothing, Safeguarding, SENCO, Committee, News & Events, Privacy | the `.md` file with the same name |
| Contact | `contact.html` |

Pages are written in Markdown: `## Heading`, `- bullet`, `**bold**`, `[link text](address)`. The block between the `---` lines at the top is the page title and description. Do not delete it.

## Things you will want to change

| To change | Edit |
| --- | --- |
| Menu | `_data/navigation.yml` |
| Phone, email, address, charity number, social links (Instagram is ready to switch on) | `_data/site.yml` |
| Colours, fonts, spacing | the variables at the top of `assets/css/site.css` |
| Footer text | `_includes/footer.html` |

The footer copyright year updates itself.

## Adding things

- **A picture beside the text:** upload it to `assets/images/`, then add
  `{% raw %}{% include figure.html src="assets/images/your-picture.jpg" alt="What the picture shows" %}{% endraw %}`
  where you want it. Add `caption="..."` for a caption. Keep pictures under about 1000 pixels wide.
- **A downloadable file:** upload it to `assets/files/`, then add
  `{% raw %}{% include download.html title="Name (PDF)" url="assets/files/your-file.pdf" %}{% endraw %}`
- **A button:** `[Button text](address){: .button}`
- **A new page:** copy an existing `.md` file, change the top block and text, then add it to `_data/navigation.yml`.
- **Term dates each year:** edit `term-dates.md`, replace the PDF in `assets/files/`, and update `assets/files/menston-preschool-term-dates-2026-27.ics`.

## Notes

- The contact form opens the visitor's email app. It can be replaced with a Microsoft Forms embed.
- `about-us-1.html`, `admissions-and-attendance-1.html`, `senco-1.html` and `funding-&-fees.html` are redirects from the old GoDaddy addresses.
- On a custom domain, add a `CNAME` file containing the domain name, then update DNS at GoDaddy.

## Previewing locally (optional)

```
bundle install
bundle exec jekyll serve
```
