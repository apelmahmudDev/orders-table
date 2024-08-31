# Next.js Orders Table

This project is a Next.js application that displays a table of 1000 orders. The table is fully responsive and styled with Tailwind CSS, featuring dynamic filtering, search, date range selection, and navigation. The design is based on a Figma prototype.

## Features

- **Data Loading:** Import and display 1000 orders from a JSON file.
- **Dynamic Table:** A fully responsive table that matches the Figma design.
- **Filtering:** Implemented dynamic filtering functionality.
- **Search:** Search through the orders with ease.
- **Date Range:** Select and filter orders by date range.
- **Navigation:** Smooth navigation across different pages.
- **Styling:** Styled entirely with Tailwind CSS.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/nextjs-orders-table.git
   cd nextjs-orders-table
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. The orders table will load with all 1000 orders.
2. Use the filters and search bar to dynamically update the displayed data.
3. Select a date range to filter orders by date.
4. Navigate through different pages using the provided navigation buttons.

## Technologies Used

- **Next.js:** React framework for server-rendered applications.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **JavaScript/TypeScript:** For component logic.
- **JSON:** Data format for orders.

## Project Structure

```plaintext
/
├── app/
│   ├── page.js          # Main page component
│   ├── layout.js        # Layout component
├── public/              # Public assets
├── components/          # Reusable components (e.g., Table, Filters)
├── styles/              # Global styles
├── data/                # JSON file with 1000 orders
├── README.md            # Project documentation
└── tailwind.config.js   # Tailwind CSS configuration
```

## Deployment

The project is hosted online and can be accessed at the following links:

- **Live Demo:** [https://your-live-demo-link.com](https://your-live-demo-link.com)
- **GitHub Repo:** [https://github.com/yourusername/nextjs-orders-table](https://github.com/yourusername/nextjs-orders-table)