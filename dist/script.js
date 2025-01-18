// Toggle the dropdown menu visibility
function toggleDropdown(event) {
  const dropdownMenu = document.getElementById("dropdown-language-currency");
  const chevronIcon = document.querySelector(
    ".fa-chevron-down , .fa-chevron-up"
  );
  const button = event.currentTarget;
  const spans = button.querySelectorAll("span");

  // Toggle the visibility of the dropdown
  dropdownMenu.classList.toggle("hidden");

  // Toggle the button class
  if (dropdownMenu.classList.contains("hidden")) {
    spans.forEach((span) => span.classList.remove("text-main"));
    spans.forEach((span) => span.classList.add("text-neutral-700"));
    chevronIcon.classList.remove("fa-chevron-up");
    chevronIcon.classList.add("fa-chevron-down");
  } else {
    spans.forEach((span) => span.classList.add("text-main"));
    spans.forEach((span) => span.classList.remove("text-neutral-700"));
    chevronIcon.classList.remove("fa-chevron-down");
    chevronIcon.classList.add("fa-chevron-up");
  }

  // Prevent event propagation
  event.stopPropagation();
}

// Close dropdown when clicking outside
window.addEventListener("click", function () {
  const dropdownMenu = document.getElementById("dropdown-language-currency");
  const chevronIcon = document.querySelector(
    ".fa-chevron-down, .fa-chevron-up"
  );
  const button = document.querySelector(
    "button[onclick='toggleDropdown(event)']"
  );
  const spans = button.querySelectorAll("span");

  if (!dropdownMenu.classList.contains("hidden")) {
    dropdownMenu.classList.add("hidden");
    spans.forEach((span) => span.classList.remove("text-main"));
    spans.forEach((span) => span.classList.add("text-neutral-700"));
    chevronIcon.classList.remove("fa-chevron-up");
    chevronIcon.classList.add("fa-chevron-down");
  }
});

// Close dropdown when clicking on any <li>
const listItems = document.querySelectorAll("#dropdown-language-currency li");
listItems.forEach((item) => {
  item.addEventListener("click", function () {
    const dropdownMenu = document.getElementById("dropdown-language-currency");
    const chevronIcon = document.querySelector(
      ".fa-chevron-down, .fa-chevron-up"
    );

    // Close the dropdown
    dropdownMenu.classList.add("hidden");

    // Reset styles
    chevronIcon.classList.remove("fa-chevron-up");
    chevronIcon.classList.add("fa-chevron-down");

    const spans = document.querySelector("button").querySelectorAll("span");
    spans.forEach((span) => span.classList.remove("text-main"));
    spans.forEach((span) => span.classList.add("text-neutral-700"));
  });
});

// Prevent closing the dropdown when interacting with it
document
  .getElementById("dropdown-language-currency")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event from reaching the window listener
  });

// Function to switch between Language and Currency tabs
function switchTab(tab) {
  const languageTab = document.getElementById("language-tab");
  const currencyTab = document.getElementById("currency-tab");
  const languageTabBtn = document.getElementById("language-tab-btn");
  const currencyTabBtn = document.getElementById("currency-tab-btn");

  if (tab === "language") {
    // Show Language tab, hide Currency tab
    languageTab.classList.remove("hidden");
    currencyTab.classList.add("hidden");
    // Update active styles for Language tab button
    languageTabBtn.classList.add("text-main", "border-b", "border-b-main");
    languageTabBtn.classList.remove("text-neutral-600");
    // Update inactive styles for Currency tab button
    currencyTabBtn.classList.remove("text-main", "border-b", "border-b-main");
    currencyTabBtn.classList.add("text-neutral-600");
  } else if (tab === "currency") {
    // Show Currency tab, hide Language tab
    currencyTab.classList.remove("hidden");
    languageTab.classList.add("hidden");
    // Update active styles for Currency tab button
    currencyTabBtn.classList.add("text-main", "border-b", "border-b-main");
    currencyTabBtn.classList.remove("text-neutral-600");
    // Update inactive styles for Language tab button
    languageTabBtn.classList.remove("text-main", "border-b", "border-b-main");
    languageTabBtn.classList.add("text-neutral-600");
  }
}

// Initialize default tab (Language) on page load
document.addEventListener("DOMContentLoaded", function () {
  switchTab("language");
  document
    .getElementById("language-tab-btn")
    .addEventListener("click", () => switchTab("language"));
  document
    .getElementById("currency-tab-btn")
    .addEventListener("click", () => switchTab("currency"));
});

// Toggle light and dark mode
function toggleTheme() {
  const htmlElement = document.documentElement;
  const themeIcon = document.getElementById("theme-icon");

  if (htmlElement.classList.contains("dark")) {
    // Switch to Light Mode
    htmlElement.classList.remove("dark");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    localStorage.setItem("theme", "light");
  } else {
    // Switch to Dark Mode
    htmlElement.classList.add("dark");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    localStorage.setItem("theme", "dark");
  }
}

// Initialize theme on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const htmlElement = document.documentElement;
  const themeIcon = document.getElementById("theme-icon");

  if (savedTheme === "dark") {
    htmlElement.classList.add("dark");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    htmlElement.classList.remove("dark");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
});
