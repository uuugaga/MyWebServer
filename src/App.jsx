import "./App.css";

import { createSignal } from "solid-js";

function SearchCategory() {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);
  const [selectedCategory, setSelectedCategory] = createSignal('全部');

  const categories = ['全部', '漫畫', '輕小說'];

  return (
    <div class="top-menu-category-dropdown" onMouseEnter={() => setIsMenuOpen(true)} onMouseLeave={() => setIsMenuOpen(false)}>
      <div class="menu-label" onClick={() => setIsMenuOpen(!isMenuOpen())}>{selectedCategory()}</div>
      {isMenuOpen() && (
        <div class="sub-menu">
          {categories.map(category => (
            <div class="sub-menu-item" onClick={() => setSelectedCategory(category)}>
              {category}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Top(){

  const [searchValue, setSearchValue] = createSignal("");
  const [selectedCategory, setSelectedCategory] = createSignal("全部");

  return(
  <div class="top-menu-container" style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        {/* Placeholder for the website logo/title */}
        <a href="http://localhost:3000/">
          <img src="" alt="Website Logo" style={{ marginRight: "10px" }} />
        </a>
        
        <div class="search-container">
          {/* Dropdown for category selection */}
          <SearchCategory />

          {/* Search input */}
          <input
              class="top-menu-search-input"
              type="text"
              value={searchValue()}
              onInput={(e) => setSearchValue(e.target.value)}
              placeholder="Search..."
          />
        </div>

        {/* Placeholder icons with links */}
        <a href="#bookshelf" style={{ marginRight: "10px" }}>📚</a>
        <a href="#favorites" style={{ marginRight: "10px" }}>❤️</a>
        <a href="#notifications" style={{ marginRight: "10px" }}>🔔</a>
        <a href="#cart" style={{ marginRight: "10px" }}>🛒</a>
        <a href="#profile">👤</a>
      </div>
  )
}

function MangaHome() {
  

  return (
    <div>
      
      <Top />
      <div class="class-menu-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div class="dropdown">
          <a href="#comic_strip">條漫</a>
          <div class="dropdown-content">
            <a href="#sub_category_1">子分類1</a>
            <a href="#sub_category_2">子分類2</a>
          </div>
        </div>
        <div class="dropdown">
          <a href="#manga">漫畫</a>
          <div class="dropdown-content">
            <a href="#sub_category_1">子分類1</a>
            <a href="#sub_category_2">子分類2</a>
          </div>
        </div>
        <div class="dropdown">
          <a href="#light_novel">輕小說</a>
          <div class="dropdown-content">
            <a href="#sub_category_1">子分類1</a>
            <a href="#sub_category_2">子分類2</a>
          </div>
        </div>
        <div class="dropdown">
          <a href="#literature">文學</a>
          <div class="dropdown-content">
            <a href="#sub_category_1">子分類1</a>
            <a href="#sub_category_2">子分類2</a>
          </div>
        </div>
      </div>
    </div>
  );
}


export default MangaHome;