const fs = require("fs");
const path = require("path");

// Get all HTML files in the src directory
const srcDir = path.join(__dirname, "src");
const htmlFiles = fs
  .readdirSync(srcDir)
  .filter((file) => file.endsWith(".html"));

// Process each HTML file
htmlFiles.forEach((file) => {
  const filePath = path.join(srcDir, file);
  let content = fs.readFileSync(filePath, "utf8");

  // Replace all references to "../public/" with "./public/"
  content = content.replace(/\.\.\/public\//g, "./public/");

  // Replace all references to "../dist/style.css" with "./style.css"
  content = content.replace(/\.\.\/dist\/style\.css/g, "./style.css");

  // Replace all references to "./custom.css" with "./custom.css" (unchanged)

  // Write the modified content back to the file
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`Fixed paths in ${file}`);
});

console.log("All paths fixed successfully!");
