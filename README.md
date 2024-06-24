# Country Search Application

## Overview

The Country Search Application is a simple web application that allows users to search for countries and view detailed information about them. The application fetches data from the REST Countries API and displays relevant information such as the country's official name, native name, currencies, capital, region, bordering countries, population, and more. The application is built using Next.js and Tailwind CSS for styling.

## Features

- **Search Interface**: Allows users to type in a country name and displays a list of matching countries as the user types.
- **Country Details**: Allows users to select a country from the list and view detailed information about it on a new page.
- **Responsive Design**: The application is responsive and works on both mobile and desktop devices.
- **Clean and Intuitive UI**: The design is clean, using a minimalistic approach with Tailwind CSS for styling.

## Deployment

This section explains how to deploy the Country Search Application using Vercel.

### Prerequisites

- Node.js and npm installed on your local machine.
- A GitHub account.
- A Vercel account.

### Steps to Deploy

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/your-username/visto-tech-test-nextjs.git
    cd visto-tech-test-nextjs
    ```

2. **Install Dependencies**:
    ```sh
    npm install
    ```

3. **Run the Application Locally**:
    ```sh
    npm run dev
    ```
    This will start the development server on `http://localhost:3000`.

4. **Push to GitHub**:
    Ensure your local changes are committed and push them to your GitHub repository.
    ```sh
    git add .
    git commit -m "Initial commit"
    git push origin main
    ```



## Project Structure

visto-tech-test-nextjs/
├── .next/
├── node_modules/
├── public/
│ ├── assets/
│ │ └── logo.svg
├── src/
│ ├── components/
│ │ ├── Footer.tsx
│ │ ├── Header.tsx
│ │ ├── SearchBar.tsx
│ ├── context/
│ │ └── CountryContext.tsx
│ ├── pages/
│ │ ├── _app.tsx
│ │ ├── _document.tsx
│ │ ├── country/
│ │ │ └── [countryCode]/
│ │ │ └── about.tsx
│ │ └── index.tsx
│ ├── styles/
│ │ ├── globals.css
│ │ ├── styles.css
│ └── types/
├── .gitignore
├── LICENSE
├── next-env.d.ts
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.js


