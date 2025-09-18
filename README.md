# Ease Kids Ebook Landing Page

This is a modern, interactive landing page for an educational ebook targeted at children, focusing on the human brain. The page features a comprehensive user experience with video previews, interactive modals, and a complete purchase flow.

## Features

- **Interactive Hero Section**: Engaging introduction with bestseller book element and call-to-action buttons.
- **Video Preview Modal**: Professional video popup with enhanced styling, backdrop blur, and improved UX.
- **Book Preview**: Interactive glimpse into the book's content with iframe integration.
- **Detailed Book Information**: Key features and benefits with styled book element from hero section.
- **Author Spotlight**: Information about the author, Dr. Santiago Ramón y Cajal.
- **Customer Reviews**: Testimonials from parents, teachers, and children.
- **Complete Payment System**: Secure payment modal with form validation and success flow.
- **Purchase Options**: Different formats (E-book, Hardcover, Audiobook) with pricing.
- **Download Functionality**: Ebook download feature after successful purchase.

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
│   ├── PaymentModal.tsx
│   ├── PurchaseSection.tsx
│   ├── Reviews.tsx
│   └── VideoPopup.tsx
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

### Version 2.0 - Complete Interactive Experience
- **PaymentModal Component**: Added comprehensive payment modal with:
  - Personal information form (name, email)
  - Secure payment details form (card number, expiry, CVV)
  - Billing address collection
  - Form validation and formatting
  - Payment processing simulation
  - Success screen with download functionality
  - Professional styling with animations and transitions

- **Enhanced Video Modal**: Improved VideoPopup component with:
  - Better visual design and backdrop blur effects
  - Enhanced UX with smooth animations
  - Professional header with icons and branding
  - Integrated buy button connected to payment modal
  - Improved responsive design

- **Hero Section Enhancements**: 
  - Connected buy button to payment modal
  - Maintained bestseller book element styling
  - Improved call-to-action functionality

- **BookDetails Improvements**:
  - Replaced simple book cover image with styled book element from hero section
  - Added bestseller tag and hover animations
  - Enhanced visual consistency across components

### Previous Updates
- Hidden header and footer components (can be re-enabled in `src/App.tsx`).
- Moved background image from Hero section to Book Preview and Book Details sections.
- Replaced the flipbook with brain illustrations in the "Was du entdecken wirst" section of `BookDetails.tsx` with a single `book-cover.png` image.
- Reverted the page flip effect in the "Blättere durch das Buch" section of `BookPreview.tsx` back to an iframe embed code.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.