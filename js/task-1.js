const categories = document.getElementById("categories");
const categoriesChildren = categories.children;
console.log(`Number of categories: ${categoriesChildren.length}`);
const values = [...categoriesChildren];
values.forEach((element) => {
  const categoryName = element.querySelector("h2");
  const categoryItems = element.querySelectorAll("li");

  console.log(`Category: ${categoryName.textContent}`);
  console.log(`Elements: ${categoryItems.length}`);
});
