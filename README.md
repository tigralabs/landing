# TigraLabs Landing Page

A modern, responsive landing page for TigraLabs built with Next.js 13, TypeScript, and Tailwind CSS. The site showcases IT services, outsourcing solutions, digital transformation, and automation services.

## Features

- 🎨 Modern UI with dark/light mode support
- 📱 Fully responsive design
- ⚡ Built with Next.js 13 and App Router
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 🎭 Radix UI components
- 🎨 Framer Motion animations
- 📝 SEO optimized
- 🔍 Fast page loads

## Tech Stack

- **Framework:** Next.js 13.5.8
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Animations:** Framer Motion
- **Form Handling:** React Hook Form
- **Validation:** Zod
- **Icons:** Lucide React
- **Theme:** next-themes

## Environment Variables

The application uses the following environment variables:

- `NEXT_PUBLIC_SHOW_TEAM_INFO` (default: `false`) - Controls whether the team section is displayed on the About page. Set to `"true"` to show the team section.

To enable the team section, create a `.env.local` file in the root directory and add:

```
NEXT_PUBLIC_SHOW_TEAM_INFO=true
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/tigralabs-landing.git
cd tigralabs-landing
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js 13 app directory
│   ├── about/             # About page
│   ├── cases/             # Case studies page
│   ├── contact/           # Contact page
│   ├── services/          # Services pages
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # UI components
│   └── sections/         # Page sections
├── lib/                   # Utility functions
├── public/               # Static assets
└── styles/              # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- Website: https://tigralabs.com
