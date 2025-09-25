# Ease Kids Ebook Landing Page

This is a modern, interactive landing page for an educational ebook targeted at children, focusing on the human brain. The page features a comprehensive user experience with video previews, interactive modals, and a complete purchase flow.

## Features

- **Interactive Hero Section**: Engaging introduction with bestseller book element and call-to-action buttons.
- **Video Preview Modal**: Professional video popup with enhanced styling, backdrop blur, and improved UX.
- **Book Preview**: Interactive glimpse into the book's content with iframe integration.
- **Detailed Book Information**: Key features and benefits with styled book element from hero section.
- **Author Spotlight**: Information about the authors, Dr. Pablo José Barrecheguren Manero, Isa Loureiro, and Teresa Ruiz Rosas.
  - **Customer Reviews**: Testimonials from parents, teachers, and children, including new content and German translations.
  - **Complete Payment System**: Secure payment modal with form validation and success flow.
  - **Purchase Options**: Hardcover format with pricing.
  - **Download Functionality**: Ebook download feature after successful purchase.
- **Video Preview**: Video preview with a thumbnail and play button, replacing the interactive flipbook.

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
│   ├── CustomerNotification.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── PaymentModal.tsx
│   ├── PurchaseSection.tsx
│   ├── Reviews.tsx
│   ├── ThankYouPopup.tsx
│   ├── TopBar.tsx
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

### Latest Enhancements (Current Session)

- **Author Section Update**:
  - Updated author information for Dr. Pablo José Barrecheguren Manero, Isa Loureiro, and Teresa Ruiz Rosas.
  - Added new images for each author.

- **Testimonials Section Update**:
  - Replaced all existing testimonials with new ones from various Instagram accounts.
  - Translated English testimonials to German.

- **Video Preview Section Update**:
  - Replaced the interactive flipbook with a video preview.
  - Implemented a video thumbnail with a play button overlay.
  - Adjusted the video box to a 16:9 aspect ratio.
  - Made the play button and overlay permanently visible.

- **Purchase Section Adjustments**:
  - Removed the E-book card from the pricing section.
  - Centered the Hardcover section.

- **Top Bar Removal**:
  - Removed the promotional top bar displaying "Begrenztes Angebot 25% SPAREN Endet in 5:00".






## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.