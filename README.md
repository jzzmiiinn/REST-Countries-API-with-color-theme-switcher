# REST Countries Explorer

A responsive country explorer built with React, TypeScript, Tailwind CSS, and TanStack Query. Browse countries around the world, search by name, filter by region, and view detailed country information with a light and dark theme.

## Features

- **Browse Countries:** Explore countries with their flags and essential information.
- **Search:** Find countries by name.
- **Region Filter:** Filter countries by geographic region.
- **Country Details:** View native names, population, region, subregion, capital, top-level domains, currencies, and languages.
- **Dark and Light Mode:** Switch between themes using the Context API.
- **Responsive Design:** Adapt to desktop and mobile screen sizes.
- **Type Safety:** Define country data structures using TypeScript interfaces.
- **Data Management:** Use TanStack Query to manage country data.

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- TanStack Query
- Vite
- pnpm

## Project Structure

```text
rest-countries-api-with-color-theme-switcher-master/
├── design/                  # Desktop and mobile design references
├── public/
├── src/
│   ├── api/
│   │   └── countries.ts     # Country data handling
│   ├── assets/
│   ├── components/
│   │   ├── countryCard.tsx
│   │   ├── filter.tsx
│   │   ├── header.tsx
│   │   └── search.tsx
│   ├── context/
│   │   └── ThemeContext.tsx # Theme state and toggling
│   ├── pages/
│   │   ├── Countries.tsx    # Country listing and filtering
│   │   └── CountryDetail.tsx
│   ├── types/
│   │   └── country.ts       # TypeScript interfaces
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── data.json                # Local country dataset
├── package.json
├── pnpm-lock.yaml
├── vite.config.ts
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jzzmiiinn/REST-Countries-API-with-color-theme-switcher.git
   ```

2. Navigate to the project directory:

   ```bash
   cd REST-Countries-API-with-color-theme-switcher
   ```

3. Install the dependencies:

   ```bash
   pnpm install
   ```

4. Start the development server:

   ```bash
   pnpm run dev
   ```

5. Open the local URL shown in your terminal.

### Build for Production

```bash
pnpm run build
```

## What I Learned

- Building reusable components with React and TypeScript.
- Managing global theme state using the Context API.
- Implementing dark mode with Tailwind CSS.
- Using TanStack Query to manage data within a React application.
- Implementing search and region-based filtering.
- Passing props between components and defining TypeScript interfaces.
- Creating responsive layouts for different screen sizes.

## Future Improvements

- Persist the selected theme using local storage.
- Add navigation between countries through their border countries.
- Improve accessibility and keyboard navigation.
- Add more interactive features to the country detail page.

## Acknowledgments

This project is based on the [REST Countries API challenge](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-8oWwfP1a8) from Frontend Mentor.

## Author

**Yasmin Ali**

- GitHub: [@jzzmiiinn](https://github.com/jzzmiiinn)
- LinkedIn: [Yasmin Ali](https://www.linkedin.com/in/yasmin-ali-96360a339/)

---

Built as part of my journey to improve my React and TypeScript skills.
