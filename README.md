# NextLevel Food

- Developed by mohammadreza mirzai


- How to contact me: [linkedin](https://www.linkedin.com/in/mohammadrezamirzai/),[github](https://github.com/Mohammadrezamirzai)

A modern web application for food enthusiasts to share and discover delicious recipes. Built with Next.js, this platform allows users to browse meals, share their favorite recipes, and connect with other food lovers.

## Features

- 🍽️ Browse a collection of delicious meals
- 📝 Share your own recipes with the community
- 👥 Connect with other food enthusiasts
- 🎨 Modern and responsive UI
- ⚡ Fast page loads with Next.js
- 📱 Mobile-friendly design

## Tech Stack

- **Framework**: Next.js 14
- **Database**: SQLite (better-sqlite3)
- **Styling**: CSS Modules
- **Images**: Next.js Image Optimization
- **Icons**: Custom SVG icons

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 18 or higher)
- npm or yarn

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

2. **Initialize the database**

   ```bash
   node initdb.js
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Visit `http://localhost:3000` to see the application.

## Project Structure

```
foodie/
├── app/                    # Next.js app directory
│   ├── community/         # Community page
│   ├── meals/            # Meals pages
│   └── page.js           # Home page
├── components/            # React components
│   ├── images/           # Image components
│   ├── meals/            # Meal-related components
│   └── main-header/      # Header components
├── lib/                   # Utility functions
├── public/               # Static files
│   └── images/          # Image assets
└── styles/              # Global styles
```

## Features in Detail

### Meal Browsing

- View a grid of available meals
- Each meal card shows:
  - Meal image
  - Title
  - Creator
  - Summary
  - Link to detailed view

### Community Features

- Join the food lovers community
- Share your favorite recipes
- Connect with other food enthusiasts

### Image Handling

- Optimized image loading
- Responsive image sizing
- Local image storage
