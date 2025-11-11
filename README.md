# Dr. Mohamed Belila Dental Center Website

A modern, responsive dental clinic website built with React, TypeScript, and Tailwind CSS.

## Features

### 🏠 Home Page
- **Hero Section**: Eye-catching introduction with call-to-action
- **About Section**: Information about the dental center
- **Team Section**: Showcase of all doctors with interactive slider
- **Smile Gallery**: Before/after transformations
- **Reviews Section**: Patient testimonials with animated carousel
- **Contact Section**: Contact information and location

### 👨‍⚕️ Individual Doctor Pages
- **Dynamic Routing**: Each doctor has their own detailed page (`/doctor/:id`)
- **Hero Section**: Doctor's photo and information
- **Before/After Cases**: Showcase of the doctor's work
- **Patient Reviews**: Specific reviews for each doctor
- **Back Navigation**: Easy return to home page

### 🌐 Bilingual Support
- **Arabic & English**: Full support for both languages
- **RTL/LTR**: Automatic text direction switching
- **Font Support**: Cairo font for Arabic, Montserrat for English

### ✨ Modern Features
- **Responsive Design**: Works perfectly on all devices
- **Smooth Animations**: Modern transitions and hover effects
- **Interactive Elements**: Sliders, carousels, and navigation
- **SEO Optimized**: Proper meta tags and structure

## New Features Added

### 1. Reviews Section
- **Location**: Added between Smile Gallery and Contact sections
- **Features**:
  - Animated carousel with patient testimonials
  - Star ratings display
  - Auto-rotation every 5 seconds
  - Manual navigation with dots
  - Statistics section (500+ patients, 4.9 rating, 98% satisfaction)
  - Modern gradient background with decorative elements

### 2. Individual Doctor Pages
- **Access**: "See More" button on each doctor card in Team section
- **Features**:
  - Hero section with doctor's photo and details
  - Before/after cases carousel
  - Doctor-specific patient reviews
  - Back button for easy navigation
  - Responsive design matching main site aesthetic

### 3. Enhanced Team Section
- **New Feature**: "See More" button on each doctor slide
- **Functionality**: Navigates to individual doctor pages
- **Design**: Yellow button with arrow icon, RTL support for Arabic

## Technical Implementation

### Routing
- **React Router**: Implemented for single-page application navigation
- **Dynamic Routes**: `/doctor/:id` for individual doctor pages
- **Nested Routes**: Proper route structure with main page and doctor details

### Components
- **Reviews.tsx**: New component for patient testimonials
- **DoctorDetail.tsx**: New component for individual doctor pages
- **Enhanced Team.tsx**: Added navigation functionality

### Data Structure
- **Mock Data**: Comprehensive doctor information including cases and reviews
- **Bilingual Content**: All text available in Arabic and English
- **Extensible**: Easy to add more doctors and content

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## File Structure

```
src/
├── components/
│   ├── Reviews.tsx          # New: Patient reviews section
│   ├── DoctorDetail.tsx     # New: Individual doctor pages
│   ├── Team.tsx            # Enhanced: Added "See More" buttons
│   └── ...                 # Other existing components
├── contexts/
│   └── LanguageContext.tsx  # Enhanced: Added review translations
└── App.tsx                 # Enhanced: Added routing and Reviews section
```

## Customization

### Adding New Doctors
1. Add doctor data to the `doctors` array in `Team.tsx`
2. Add corresponding data in `DoctorDetail.tsx`
3. Include cases and reviews for each doctor

### Modifying Reviews
1. Edit the `reviews` array in `Reviews.tsx`
2. Update statistics in the stats section
3. Modify carousel timing in `useEffect`

### Styling
- All components use Tailwind CSS classes
- Consistent color scheme: blue (#01479e), yellow (#fbbf24)
- Responsive breakpoints: mobile-first approach

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- RTL support for Arabic language

## Performance
- Lazy loading for images
- Optimized animations
- Efficient routing with React Router
- Minimal bundle size
