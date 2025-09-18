# Ease Kids Ebook Landing Page

This is a landing page for an ebook targeted at children, focusing on the human brain. It features a hero section, book preview, book details, author information, reviews, and a purchase section.

## Features

- **Interactive Hero Section**: Engaging introduction to the ebook.
- **Book Preview**: Glimpse into the book's content.
- **Detailed Book Information**: Key features and benefits.
- **Author Spotlight**: Information about the author, Dr. Santiago Ramón y Cajal.
- **Customer Reviews**: Testimonials from parents, teachers, and children.
- **Purchase Options**: Different formats (E-book, Hardcover, Audiobook) with pricing.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (for icons)

## Getting Started

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Authority98/ease-kids-ebook-landing-page.git
   cd ease-kids-ebook-landing-page
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to see the application.

### Building for Production

```bash
npm run build
```

This will create a `dist` folder with the production-ready build.

## Project Structure

```
.bolt/
.gitignore
dist/
eslint.config.js
index.html
package-lock.json
package.json
postcss.config.js
public/
src/
├── App.tsx
├── components/
│   ├── Author.tsx
│   ├── BookDetails.tsx
│   ├── BookPreview.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── PurchaseSection.tsx
│   └── Reviews.tsx
├── index.css
├── main.tsx
└── vite-env.d.ts
tailwind.config.js
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

## Recent Updates

- Hidden header and footer components (can be re-enabled in `src/App.tsx`).
- Moved background image from Hero section to Book Preview and Book Details sections.
- Replaced the flipbook with brain illustrations in the "Was du entdecken wirst" section of `BookDetails.tsx` with a single `book-cover.png` image.
- Reverted the page flip effect in the "Blättere durch das Buch" section of `BookPreview.tsx` back to an iframe embed code.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.