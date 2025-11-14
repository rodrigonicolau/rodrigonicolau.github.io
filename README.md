# Academic Website

This is a personal academic website built with [Hugo](https://gohugo.io/) using the [Bear Blog theme](https://github.com/janraasch/hugo-bearblog).

## Features

- **Minimal and fast**: Clean, distraction-free design
- **Academic sections**: Research, Publications, Blog, About, and Contact pages
- **Dark mode support**: Automatic dark mode based on browser preferences
- **GitHub Pages deployment**: Automatically builds and deploys using GitHub Actions

## Local Development

### Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) (v0.139.3 or later)
- Git

### Setup

1. Clone this repository with submodules:
   ```bash
   git clone --recursive https://github.com/rodrigonicolau/rodrigonicolau.github.io.git
   cd rodrigonicolau.github.io
   ```

2. If you've already cloned without submodules, initialize them:
   ```bash
   git submodule update --init --recursive
   ```

### Running Locally

Start the Hugo development server:

```bash
hugo server -D
```

Visit `http://localhost:1313` to see your site.

## Customization

### Site Configuration

Edit `hugo.toml` to customize:
- Site title and description
- Base URL
- Menu items
- Author information

### Content

- **Home page**: Edit `content/_index.md`
- **About page**: Edit `content/about.md`
- **Research**: Edit `content/research.md`
- **Publications**: Edit `content/publications.md`
- **Contact**: Edit `content/contact.md`
- **Blog posts**: Add new posts in `content/blog/`

### Creating New Blog Posts

```bash
hugo new blog/my-new-post.md
```

Then edit the file in `content/blog/my-new-post.md`.

## Deployment

The site automatically deploys to GitHub Pages when you push to the main branch. The GitHub Actions workflow (`.github/workflows/hugo.yml`) handles the build and deployment.

### GitHub Pages Setup

1. Go to your repository Settings → Pages
2. Under "Build and deployment", select:
   - Source: **GitHub Actions**
3. The site will be available at `https://rodrigonicolau.github.io/`

## Theme Documentation

For more information about the Bear Blog theme, see the [official documentation](https://github.com/janraasch/hugo-bearblog).

## License

Content is yours. Theme is MIT licensed (see theme repository).
