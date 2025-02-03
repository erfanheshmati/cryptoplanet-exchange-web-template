// Toggle the language-currency dropdown menu visibility
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
    spans.forEach((span) =>
      span.classList.remove("text-main", "dark:text-main")
    );
    spans.forEach((span) => span.classList.add("text-neutral-700"));
    chevronIcon.classList.remove("fa-chevron-up");
    chevronIcon.classList.add("fa-chevron-down");
  } else {
    spans.forEach((span) => span.classList.add("text-main", "dark:text-main"));
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
    spans.forEach((span) =>
      span.classList.remove("text-main", "dark:text-main")
    );
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
    spans.forEach((span) =>
      span.classList.remove("text-main", "dark:text-main")
    );
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
    languageTabBtn.classList.add(
      "text-main",
      "dark:text-main",
      "border-b-2",
      "dark:border-b-2",
      "border-b-main",
      "dark:border-b-main"
    );
    languageTabBtn.classList.remove("text-neutral-600");
    // Update inactive styles for Currency tab button
    currencyTabBtn.classList.remove(
      "text-main",
      "dark:text-main",
      "border-b-2",
      "dark:border-b-2",
      "border-b-main",
      "dark:border-b-main"
    );
    currencyTabBtn.classList.add("text-neutral-600");
  } else if (tab === "currency") {
    // Show Currency tab, hide Language tab
    currencyTab.classList.remove("hidden");
    languageTab.classList.add("hidden");
    // Update active styles for Currency tab button
    currencyTabBtn.classList.add(
      "text-main",
      "dark:text-main",
      "border-b-2",
      "dark:border-b-2",
      "border-b-main",
      "dark:border-b-main"
    );
    currencyTabBtn.classList.remove("text-neutral-600");
    // Update inactive styles for Language tab button
    languageTabBtn.classList.remove(
      "text-main",
      "dark:text-main",
      "border-b-2",
      "dark:border-b-2",
      "border-b-main",
      "dark:border-b-main"
    );
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

// **********************************************************

// Toggle light and dark mode in desktop
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

// Toggle light and dark mode in mobile
function toggleThemeMobile() {
  const htmlElement = document.documentElement;
  const themeIcon = document.getElementById("theme-icon-mobile");

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
  const themeIconMobile = document.getElementById("theme-icon-mobile");

  if (savedTheme === "dark") {
    htmlElement.classList.add("dark");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    themeIconMobile.classList.remove("fa-moon");
    themeIconMobile.classList.add("fa-sun");
  } else {
    htmlElement.classList.remove("dark");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    themeIconMobile.classList.remove("fa-sun");
    themeIconMobile.classList.add("fa-moon");
  }
});

// ********************************************************

// Handle main page slider
const slider = document.getElementById("slider");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

function updateSlider(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle("bg-gray-300", i !== index);
    dot.classList.toggle("bg-main", i === index);
  });
}

dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    currentIndex = parseInt(e.target.getAttribute("data-index"));
    updateSlider(currentIndex);
  });
});

// Initialize the first dot as active
updateSlider(currentIndex);

// ******************************************************

// Toggle mobile menu
const menuToggle = document.getElementById("menuToggle");
const menuIcon = document.getElementById("menuIcon");
const fullscreenMenu = document.getElementById("fullscreenMenu");

menuToggle.addEventListener("click", () => {
  if (fullscreenMenu.classList.contains("hidden")) {
    fullscreenMenu.classList.remove("hidden"); // Show the menu
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark"); // Change to "close" icon
  } else {
    fullscreenMenu.classList.add("hidden"); // Hide the menu
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.remove("text-white"); // Reset icon color
    menuIcon.classList.add("fa-bars"); // Change to "menu" icon
  }
});

// *****************************************************

// Toggle accordion (Language | Currency) in mobile menu
function toggleAccordion(element) {
  const title = element.querySelector("#accordion-title-mobile"); // Get the accordion title
  const icon = element.querySelector(".accordion-icon-mobile"); // Get the accordion icon
  const content = element.nextElementSibling; // Get the accordion content
  const chevron = element.querySelector(".chevron i"); // Get the chevron icon

  // Toggle content visibility
  content.classList.toggle("hidden");

  // Change chevron direction
  if (content.classList.contains("hidden")) {
    chevron.classList.remove("fa-chevron-up", "text-main", "dark:text-main");
    chevron.classList.add("fa-chevron-right", "text-neutral-500");
    title.classList.remove("text-main", "dark:text-main");
    title.classList.add("text-neutral-500");
    icon.classList.remove("fill-main", "dark:fill-main");
    icon.classList.add("fill-neutral-500");
  } else {
    chevron.classList.remove("fa-chevron-right", "text-neutral-500");
    chevron.classList.add("fa-chevron-up", "text-main", "dark:text-main");
    title.classList.remove("text-neutral-500");
    title.classList.add("text-main", "dark:text-main");
    icon.classList.remove("fill-neutral-500");
    icon.classList.add("fill-main", "dark:fill-main");
  }
}

// Switch Tabs
function switchTabMobile(tab) {
  // Remove active class from all tab buttons
  document.querySelectorAll(".tab-btn-mobile").forEach((btn) => {
    btn.classList.remove(
      "text-main",
      "dark:text-main",
      "border-b-2",
      "dark:border-b-2",
      "border-b-main",
      "dark:border-b-main"
    );
    btn.classList.add("text-neutral-600", "dark:text-neutral-500");
  });

  // Add active class to clicked tab button
  document
    .getElementById(`${tab}-tab-btn-mobile`)
    .classList.add(
      "text-main",
      "dark:text-main",
      "border-b-2",
      "dark:border-b-2",
      "border-b-main",
      "dark:border-b-main"
    );
  document
    .getElementById(`${tab}-tab-btn-mobile`)
    .classList.remove("text-neutral-600", "dark:text-neutral-500");

  // Hide all tab content
  document.querySelectorAll(".tab-content-mobile").forEach((content) => {
    content.classList.add("hidden");
    content.classList.remove("block");
  });

  // Show the selected tab's content
  document.getElementById(`${tab}-tab-mobile`).classList.remove("hidden");
  document.getElementById(`${tab}-tab-mobile`).classList.add("block");
}

// Set the default tab to be language when the page loads
document.addEventListener("DOMContentLoaded", function () {
  switchTabMobile("language");
});

// *****************************************************
