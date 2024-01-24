# # REST COUNTRIES API WITH COLOR THEME SWITCHER

## Description

This project utilizes the Rest Countries API to create a web application that provides information about various countries. The application is built using Next.js, TypeScript, and Tailwind CSS, with a focus on enhancing performance and user experience. The use of semantic HTML5 markup ensures a clear and structured document outline.

## Technologies Used

- **Next.js:** The project is built using the Next.js framework, which offers server-side rendering, static site generation, and other performance optimizations.

- **TypeScript:** TypeScript is employed to bring static typing to the project, enhancing code quality and developer productivity.

- **Tailwind CSS:** The utility-first CSS framework, Tailwind CSS, is utilized to streamline styling and ensure a responsive and visually appealing design.

- **Next Theme:** Next-theme is used to manage styles and themes, ensuring a consistent and visually pleasing user interface. Special care has been taken to avoid hydration errors.

## Performance Optimization

- **Server Components:** Next.js server components are incorporated to enhance performance by efficiently rendering components on the server side.

- **Server Actions:** Data fetching is optimized using server actions, contributing to a faster and more responsive user experience.

- **GetStaticParams:** To improve performance, the application uses Next.js' `GetStaticParams` to statically generate all pages at build time, reducing the need for runtime data fetching.

- **Pagination:** The application employs pagination to load a limited number of items initially and dynamically load more as the user scrolls, optimizing the rendering of content.

## Features

- **Filter by Region:** Users can filter countries by region, providing a more focused and personalized browsing experience.

- **Search by Country:** The application includes a search functionality allowing users to find specific countries quickly and easily.

- **Switch Themes:** The application provides the ability to switch between themes for a customized visual experience.

- **Country Details Page:**
  - Click on a country to access its details page.
  - The details page includes information about the selected country.
  - Use the back button on the details page to return to the homepage.

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the development server using `npm run dev`.
4. Access the application in your browser at `http://localhost:3000`.

## Usage

- Navigate to the homepage to explore a list of countries.
- Click on a country to access its details page.
  - The details page includes information about the selected country.
  - Use the back button on the details page to return to the homepage.
- Utilize the region filter to narrow down countries based on geographical regions.
- Use the search feature to find specific countries by name.
- Explore different visual themes using the "Switch Themes" feature.

## Hosted on Vercel

This project is hosted on Vercel. Access the live version [here](https://zyda-task-iota.vercel.app/).

## Contributions

Contributions are welcome! Feel free to open issues or pull requests to improve the project.
