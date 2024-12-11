<template>
    <nav class="navbar">
  <a href="#" class="browse-btn">
    <svg class="browse-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
    Browse All Categories
    <svg class="chevron-down" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </a>
  <RouterLink to="/categories/:categoryId">
      <ul class="nav-links">
        <li><a href="#" class="nav-link">Hot Deals</a></li>
        <li><a href="#" class="nav-link">Home</a></li>
        <li>
          <a href="#" class="nav-link">
            Food
            <svg class="chevron-down" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
        </li>
        <li>
          <a href="#" class="nav-link">
            Vegetables
            <svg class="chevron-down" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
        </li>
        <li><a href="#" class="nav-link">Drink</a></li>
        <li><a href="#" class="nav-link">Cookies</a></li>
        <li>
          <a href="#" class="nav-link">
            Meat & Seafood
            <svg class="chevron-down" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
        </li>
        <li><a href="#" class="nav-link">Bakery</a></li>
      </ul>
  </RouterLink>

  <div class="support">
    <i class="ri-customer-service-fill" style="font-size: 40px; color: black;"></i>
    <div class="support-info">
      <p class="support-phone">099 777 888</p>
      <p class="support-text">24/7 Support Center</p>
    </div>
  </div>
</nav>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
    name: 'MenuItemComponent',
    components: {
        RouterLink
    }
}
</script>

<style>
    .navbar {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    background: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    font-family: system-ui, -apple-system, sans-serif;
}

.browse-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: #00b853;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: none;
    margin-right: 1.5rem;
}

.browse-icon {
    width: 20px;
    height: 20px;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
    flex: 1;
}

.nav-link {
    color: #1a1a1a;
    text-decoration: none;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.nav-link:hover {
    color: #00b853;
}

.support {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    position: absolute;
    right:40px;
}

.support-icon {
    width: 24px;
    height: 24px;
    color: #1a1a1a;
}

.support-info {
    text-align: right;
}

.support-phone {
    color: #00b853;
    font-weight: 600;
    font-size: 0.875rem;
    margin: 0;

}
.support-text {
    color: #666;
    font-size: 0.75rem;
    margin: 0;
}

.chevron-down {
    width: 16px;
    height: 16px;
    opacity: 0.5;
}
</style>