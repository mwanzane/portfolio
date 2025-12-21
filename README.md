# Portfolio Site

This is a responsive portfolio site built with Next.js and Tailwind CSS for product marketing professionals.

## Setup Instructions

1. **Install Node.js and npm** (if not already installed):
   - Download from [nodejs.org](https://nodejs.org/) or use your package manager.

2. **Clone or navigate to the project directory**:
   - cd /path/to/redkitecandy

3. **Install dependencies**:
   - npm install

4. **Run the development server**:
   - npm run dev
   - Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **For production build**:
   - npm run build
   - npm start

## Features

- **Responsive Design**: Works on all devices using Tailwind CSS.
- **SEO Optimized**: Includes meta tags and Open Graph for social sharing.
- **Accessible**: Uses semantic HTML, ARIA attributes, and proper contrast.
- **Fast Loading**: Optimized images with Next.js Image component, lazy loading.

## Customization

- **Images**: Replace `/placeholder-image.jpg` with actual images in the `public` folder.
- **Personal Information**: Update name, email, and content in the pages.
- **Styles**: Modify `globals.css` and component classes for custom styling.
- **Content**: Edit the case study and about sections with your real information.

## Project Structure

- `src/app/`: Next.js app router pages
  - `layout.tsx`: Root layout
  - `page.tsx`: Homepage
  - `about/page.tsx`: About page
  - `case-study/page.tsx`: Case study page
- `public/`: Static assets (add your images here)
- `package.json`: Dependencies and scripts
- `tailwind.config.js`: Tailwind configuration

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- ESLint# portfolio
