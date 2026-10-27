# 🎬 ReelScout — Movie Search & Discovery Platform

ReelScout is a modern, responsive web application designed for seamless movie discovery, real-time search, and watchlist management powered by the official **The Movie Database (TMDB) API**.

Built with a dark, cinematic visual identity, ReelScout provides real-time data, official YouTube trailers, cast carousels, detailed film metrics, dynamic genre tagging, and localized persistent watchlists without unnecessary clutter or fake statistics.

---

## ✨ Features

* **Cinematic Dark UI/UX**: Designed with a refined deep charcoal (`#0f1015`) aesthetic, warm white typography, responsive grid layouts, and zero distraction elements.
* **Real-time TMDB API Integration**:
  * **Hero Showcase**: Automatically showcases top trending movies with dynamic backdrop media and quick action controls.
  * **Categorized Browsing**: Explore Trending, Popular, Top Rated, and Upcoming movies.
  * **Genre Pills**: Dynamic genre filtering populated directly from TMDB's live taxonomy.
* **Instant Live Search**: Debounced search input with instant result updates, query clearing, and keyboard accessibility (press `/` to search).
* **Deep Movie Details Drawer**:
  * Original titles, taglines, overviews, runtime, release dates, and vote metrics.
  * Live horizontal cast carousels with actor avatars and character details.
  * Embedded official YouTube movie trailers.
  * Production companies and recommended titles.
* **Local Watchlist Management**:
  * One-click bookmarking to save movies.
  * Persistent storage via `localStorage`.
  * Dedicated Watchlist view to manage saved content.
* **Sorting Options**: Sort movie listings by Popularity, Rating, Release Date, or Title.
* **Legal & TMDB Compliance**: Includes mandatory TMDB attribution notices, Privacy Policy, and Terms of Use modals.

---

## 🛠️ Technology Stack

* **Frontend**: HTML5, Modern JavaScript (ES6+), Tailwind CSS (via CDN)
* **API Integration**: TMDB API v3 (REST endpoints)
* **Fonts & Icons**: Inter (Google Fonts), FontAwesome 6
* **State Management**: Browser `localStorage` for API key & Watchlist persistence

---

## 🚀 Getting Started

### Prerequisites
* A web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).
* A free **TMDB API Key** (v3 auth).

---

### Local Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone [https://github.com/your-username/reelscout.git](https://github.com/your-username/reelscout.git)
   cd reelscout
