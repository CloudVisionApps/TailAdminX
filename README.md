# TailAdmin React - Free React Tailwind Admin Dashboard Template

TailAdmin is a free and open-source admin dashboard template built on **React and Tailwind CSS**, providing developers
with everything they need to create a comprehensive, data-driven back-end,
dashboard, or admin panel solution for upcoming web projects.

With TailAdmin, you get access to all the necessary dashboard UI components, elements, and pages required to build a
feature-rich and complete dashboard or admin panel. Whether you're building dashboard or admin panel for a complex web
application or a simple website, TailAdmin is the perfect solution to help you get up and running quickly.

![TailAdmin React.js Dashboard Preview](./banner.png)

## Overview

TailAdmin provides essential UI components and layouts for building feature-rich, data-driven admin dashboards and
control panels. It's built on:

- React 19
- TypeScript
- Tailwind CSS v4

### Quick Links

- [✨ Visit Website](https://tailadmin.com)
- [📄 Documentation](https://tailadmin.com/docs)
- [⬇️ Download](https://tailadmin.com/download)
- [🖌️ Figma Design File (Community Edition)](https://www.figma.com/community/file/1214477970819985778)
- [⚡ Get PRO Version](https://tailadmin.com/pricing)

### Demos

- [Free Version](https://free-react-demo.tailadmin.com/)
- [Pro Version](https://react-demo.tailadmin.com)

### Other Versions

- [HTML Version](https://github.com/TailAdmin/tailadmin-free-tailwind-dashboard-template)
- [Next.js Version](https://github.com/TailAdmin/free-nextjs-admin-dashboard)
- [Vue.js Version](https://github.com/TailAdmin/vue-tailwind-admin-dashboard)
- [Angular Version](https://github.com/TailAdmin/free-angular-tailwind-dashboard)
- [Laravel Version](https://github.com/TailAdmin/tailadmin-laravel)

## Installation

### Prerequisites

To get started with TailAdmin, ensure you have the following prerequisites installed and set up:

- Node.js 18.x or later (recommended to use Node.js 20.x or later)

### Cloning the Repository

Clone the repository using the following command:

```bash
git clone https://github.com/TailAdmin/free-react-tailwind-admin-dashboard.git
```

> Windows Users: place the repository near the root of your drive if you face issues while cloning.

1. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

2. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Components

TailAdmin is a pre-designed starting point for building a web-based dashboard using React.js and Tailwind CSS. The
template includes:

- Sophisticated and accessible sidebar
- Data visualization components
- Prebuilt profile management and 404 page
- Tables and Charts(Line and Bar)
- Authentication forms and input elements
- Alerts, Dropdowns, Modals, Buttons and more
- FAQ & Accordion, Testimonials, and Carousels
- Can't forget Dark Mode 🕶️

All components are built with React and styled using Tailwind CSS for easy customization.

## Library Usage Example

Import styles once in your app entry:

```tsx
import "@cloudvisionapps/tailadminx/styles.css";
```

Basic component import:

```tsx
import { Button, Modal, InputField } from "@cloudvisionapps/tailadminx";
```

Configurable layout example (custom logo, links, and menu items):

```tsx
import {
  AppLayout,
  type SidebarNavItem,
  defaultMainMenuItems,
  defaultSecondaryMenuItems,
} from "@cloudvisionapps/tailadminx";

const mainMenuItems: SidebarNavItem[] = [
  ...defaultMainMenuItems,
  {
    name: "Docs",
    path: "/docs",
    icon: <span>D</span>,
  },
];

export default function DashboardShell() {
  return (
    <AppLayout
      headerProps={{
        brandLink: "/dashboard",
        brand: <span>My Admin</span>,
        searchPlaceholder: "Search users, reports, settings...",
      }}
      sidebarProps={{
        mainMenuItems,
        secondaryMenuItems: defaultSecondaryMenuItems,
        brandLink: "/dashboard",
        brandFull: <img src="/logo-full.svg" alt="My Admin" />,
        brandCompact: <img src="/logo-mini.svg" alt="MA" />,
      }}
    />
  );
}
```

### Tailwind CSS Discovery in Consumer Apps

By default, import the package CSS and you are done:

```tsx
import "@cloudvisionapps/tailadminx/styles.css";
```

If your app also runs Tailwind and you want Tailwind to discover classes from this package for your own build pipeline:

- Tailwind v4: add `@source` for the package in your app stylesheet.
- Tailwind v3: include the package path in `content` in your `tailwind.config`.

Tailwind v4 example:

```css
@import "tailwindcss";
@source "../node_modules/@cloudvisionapps/tailadminx/dist-lib/**/*.{js,cjs}";
```

Tailwind v3 example:

```js
// tailwind.config.js
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@cloudvisionapps/tailadminx/dist-lib/**/*.{js,cjs}",
  ],
};
```

Note: this package already ships compiled CSS (`@cloudvisionapps/tailadminx/styles.css`). Use discovery only when your app needs Tailwind to scan package markup for your own utility generation strategy.

## Feature Comparison

### Free Version

- 1 Unique Dashboard
- 35+ dashboard components
- 50+ UI elements
- Basic Figma design files
- Community support

### Pro Version

- 7 Unique Dashboards: Analytics, Ecommerce, Marketing, CRM, SaaS, Stocks, Logistics (more coming soon)
- 500+ dashboard components and UI elements
- Complete Figma design file
- Email support

To learn more about pro version features and pricing, visit our [pricing page](https://tailadmin.com/pricing).

## Changelog

### Version 2.1.3 - [Apr 21, 2026]

- Added full library exports for components, layouts, hooks, and providers.
- Made layout modules configurable (menus, logos, links, header and auth layout sections).
- Improved package outputs for external usage with generated TypeScript declarations.

### Version 2.1.0 - [Dec 30, 2025]

- Resolved Date Picker positioning and input issues in Charts.

### Version 2.0.2 - [March 25, 2025]

- Upgraded to React 19
- Included overrides for packages to prevent peer dependency errors.
- Migrated from react-flatpickr to flatpickr package for React 19 support

### Version 2.0.1 - [February 27, 2025]

#### Update Overview

- Upgraded to Tailwind CSS v4 for better performance and efficiency.
- Updated class usage to match the latest syntax and features.
- Replaced deprecated class and optimized styles.

#### Next Steps

- Run npm install or yarn install to update dependencies.
- Check for any style changes or compatibility issues.
- Refer to the Tailwind CSS v4 [Migration Guide](https://tailwindcss.com/docs/upgrade-guide) on this release. if needed.
- This update keeps the project up to date with the latest Tailwind improvements. 🚀

### Version 2.0.0 - [February 2025]

A major update with comprehensive redesign and modern React patterns implementation.

#### Major Improvements

- Complete UI redesign with modern React patterns
- New features: collapsible sidebar, chat, and calendar
- Improved performance and accessibility
- Updated data visualization using ApexCharts

#### Key Features

- Redesigned dashboards (Ecommerce, Analytics, Marketing, CRM)
- Enhanced navigation with React Router integration
- Advanced tables with sorting and filtering
- Calendar with drag-and-drop support
- New UI components and improved existing ones

#### Breaking Changes

- Updated sidebar component API
- Migrated charts to ApexCharts
- Revised authentication system

[Read more](https://tailadmin.com/docs/update-logs/react) on this release.

### Version 1.3.7 - [June 20, 2024]

#### Enhancements

1. Remove Repetition of DefaultLayout in every Pages
2. Add ClickOutside Component for reduce repeated functionality in Header Message, Notification and User Dropdowns.

### Version 1.3.6 - [Jan 31, 2024]

#### Enhancements

1. Integrate flatpickr in [Date Picker/Form Elements]
2. Change color after select an option [Select Element/Form Elements].
3. Make it functional [Multiselect Dropdown/Form Elements].
4. Make best value editable [Pricing Table One/Pricing Table].
5. Rearrange Folder structure.

### Version 1.2.0 - [Apr 28, 2023]

- Add Typescript in TailAdmin React.

### Version 1.0.0 - Initial Release - [Mar 13, 2023]

- Initial release of TailAdmin React.

## Publishing to GitHub Packages

This repository is now configured to publish the library package to GitHub Packages.

### Publish flow

1. Bump the version in package.json.
2. Commit and push to main.
3. Create and push a tag matching the version, for example:

```bash
git tag v2.1.1
git push origin v2.1.1
```

4. GitHub Actions will build the app, build the library, publish the package, and attach release artifacts.

### Install from GitHub Packages

First configure your npm client to use the GitHub registry for the CloudVisionApps scope:

```bash
echo "@cloudvisionapps:registry=https://npm.pkg.github.com" >> ~/.npmrc
echo "//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN" >> ~/.npmrc
```

Then install the package:

```bash
npm install @cloudvisionapps/tailadminx
```

Using npm install without the GitHub registry configuration will query the public npm registry and return 404.

If the publish job reports a package permission error, enable read and write workflow permissions in the repository settings or add a repository secret named GH_PACKAGES_TOKEN with package write access.

## License

TailAdmin React.js Free Version is released under the MIT License.

## Support

If you find this project helpful, please consider giving it a star on GitHub. Your support helps us continue developing
and maintaining this template.
