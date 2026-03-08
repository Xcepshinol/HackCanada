# SnowShare Web Application

Welcome to the SnowShare web application! This project is built using Next.js and styled with Tailwind CSS. Below is an overview of the project's structure and how to get started.

## Project Structure

```
snowshare-web
├── src
│   ├── app
│   │   ├── layout.tsx        # Main layout of the application
│   │   ├── page.tsx          # Main entry point for the application
│   │   └── globals.css       # Global CSS styles
│   ├── components
│   │   ├── NavBar.tsx        # Navigation bar component
│   │   ├── Footer.tsx        # Footer component
│   │   └── ui
│   │       ├── Button.tsx    # Reusable button component
│   │       └── Icon.tsx      # Reusable icon component
│   ├── styles
│   │   ├── tailwind.css      # Tailwind CSS styles
│   │   ├── shared.css        # Shared styles across components
│   │   ├── colors.css        # Color variables and utility classes
│   │   └── fonts.css         # Font styles and custom font imports
│   ├── lib
│   │   └── api.ts            # API functions for data fetching
│   ├── hooks
│   │   └── useAuth.ts        # Custom hook for authentication
│   └── types
│       └── index.ts          # TypeScript types and interfaces
├── package.json               # npm configuration file
├── tsconfig.json              # TypeScript configuration file
├── next.config.js             # Next.js configuration settings
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
└── README.md                  # Project documentation
```

## Getting Started

To get started with the SnowShare web application, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd snowshare-web
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the development server:**
   ```
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Contributing

If you'd like to contribute to the SnowShare project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments

Thank you for checking out the SnowShare web application! We hope you find it useful.