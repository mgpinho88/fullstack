// WRITE YOUR CODE IN HERE:
// Original solution
// document.querySelectorAll("ul li").forEach(li => {
//     let value = li.classList;
//     if (value.contains("highlight")) {
//         value.remove("highlight");
//     } else {
//         value.add("highlight");
//     }
// });

// After looking at the provided solutions here is a more concise solution
document.querySelectorAll("li").forEach(li => li.classList.toggle('highlight'));