# CSS
## Table of Content
- 01 :: The Very Basics
    - [Coding Exercises](https://github.com/mgpinho88/fullstack/tree/main/02-CSS/01-Basics/CodingExercises)
- 02 :: Selectors
    - [Coding Exercises](https://github.com/mgpinho88/fullstack/tree/main/02-CSS/02-Selectors/CodingExercises)
- 03 :: Box Model
    - [Coding Exercises]()
- 04 :: Useful Properties
    - [Coding Exercises]()
- 05 :: Responsive CSS & Flexbox
    - [Coding Exercises]()
- 06 :: Frameworks (Bootstrap)
    - [Coding Exercises]()
- Project 01   :: [Pricing Panel](https://github.com/mgpinho88/fullstack/tree/main/02-CSS/Project01-PricingPanel)
- Project 01.5 :: [Museum Of Candy](https://github.com/mgpinho88/fullstack/tree/main/02-CSS/Project01.5-MuseumOfCandy)

## 02 :: Selectors
Before we begin discussing selectors we need to remember that this is a "cascading" document. When the browser is reading the document it does do line by line. The first line is read followed by the second then third and so on and so forth. 

One exception to the cascading rule is "specificity" meaning that some elements take precidence when there may be conflicts in your `.css` file. The more specific the selector the higher it will rank when the browser finds a conflict in your file.

### PSEUDO CLASSES
Special keywords are reserved in CSS to give state to the selected elements. To use the pseudo class you would use the syntax `:<action>`. Below are some examples of pseudo classes:
- :active
- :checked
- :first
- :first-child
- :hover
- :not()
- :nth-child()
- :nth-of-type()
For a full list of **pseudo classes** please see [Pseudo-classes - CSS: Cascading Style Sheets | MDN] https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

### PSEUDO ELEMENTS
**Because not many browsers use pseudo elements it is not recommended to use pseudo elements in production; *in other words use at your own risk***. Similar to pseudo classes these are used to select parts of the elements you are targeting. 