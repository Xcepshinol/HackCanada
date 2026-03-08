# SnowShare Platform

SnowShare is a platform designed to connect individuals in need of assistance with those willing to help. This project is built using Next.js and Tailwind CSS, providing a modern and responsive user experience.

## Features

- User authentication (login and registration)
- Dashboard for users to view nearby requests
- Listings of requests for help
- Detailed view of individual requests
- User profile management
- Booking functionality for requests

## Folder Structure

```
snowshare
├── src
│   ├── app
│   │   ├── head.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── dashboard
│   │   │   └── page.tsx
│   │   ├── listings
│   │   │   ├── page.tsx
│   │   │   └── [id]
│   │   │       └── page.tsx
│   │   ├── rentals
│   │   │   └── page.tsx
│   │   ├── bookings
│   │   │   └── page.tsx
│   │   ├── profile
│   │   │   └── page.tsx
│   │   └── auth
│   │       ├── login
│   │       │   └── page.tsx
│   │       └── register
│   │           └── page.tsx
│   ├── components
│   │   ├── layout
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Sidebar.tsx
│   │   ├── ui
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Input.tsx
│   │   ├── listings
│   │   │   ├── ListingCard.tsx
│   │   │   └── ListingFilters.tsx
│   │   └── forms
│   │       ├── ListingForm.tsx
│   │       └── BookingForm.tsx
│   ├── styles
│   │   └── globals.css
│   ├── lib
│   │   ├── api.ts
│   │   ├── auth.ts
│   │   └── db.ts
│   ├── hooks
│   │   ├── useAuth.ts
│   │   └── useInfiniteListings.ts
│   ├── context
│   │   └── AuthContext.tsx
│   ├── types
│   │   └── index.ts
│   └── utils
│       ├── format.ts
│       └── validators.ts
├── src
│   └── app
│       └── api
│           ├── auth
│           │   └── route.ts
│           └── listings
│               └── route.ts
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── .eslintrc.json
├── .gitignore
└── README.md
```

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd snowshare
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.