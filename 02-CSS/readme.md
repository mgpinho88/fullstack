# CSS
## Table of Content
- 01 :: The Very Basics
    - [Coding Exercises](https://github.com/mgpinho88/fullstack/tree/main/02-CSS/01-Basics/CodingExercises)
- 02 :: Selectors
    - [Coding Exercises](https://github.com/mgpinho88/fullstack/tree/main/02-CSS/02-Selectors/CodingExercises)
- 03 :: Box Model
    - [Coding Exercises](https://github.com/mgpinho88/fullstack/tree/main/02-CSS/03-BoxModel/CodingExercises)
- 04 :: Useful Properties
    - [Coding Exercises](ttps://github.com/mgpinho88/fullstack/tree/main/02-CSS/04-UsefulProperties/CodingExercises)
- 05 :: Responsive CSS & Flexbox
    - [Coding Exercises](https://github.com/mgpinho88/fullstack/tree/main/02-CSS/05-Responsive%26FlexBox/CodingExercises)
- 06 :: Frameworks (Bootstrap)
    - [Coding Exercises](https://github.com/mgpinho88/fullstack/tree/main/02-CSS/06-Frameworks(Bootstrap)/CodingExercises)
- Project 01   :: [Pricing Panel](https://github.com/mgpinho88/fullstack/tree/main/02-CSS/Project01-PricingPanel)
- Project 01.5 :: [Museum Of Candy](https://github.com/mgpinho88/fullstack/tree/main/02-CSS/Project01.5-MuseumOfCandy)

you can center an element on your page using the `margin` property and the value `auto`. 
```css
(./#)element {
    margin: 0px auto;
}
```
The above CSS will center the selected element in the center of the page.

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

## 03 :: Box Model
Everything in CSS is a box with several properties including margin, padding, border, width & height. 
    
- margin - this is the space bewteen each box
- border - this is the edge of the box
    - boarders have several properties as well including:
        - border-width
        - border-color
        - border-style
- padding - this is the space between the edge of the box and the content
- width - the width of the content area in the box
- height - the height of the content area in the box

You can adjust the sizes of the box with a variety of units. The base size unit is called a "pixel" or "px". Although this is the most common unit in CSS it is generally not recommended to use for modern more responsive websites. Units can be broken down into two distinct categories of "Relative" and "Absolute".

**Relative** nits includes but is not limited to:
- `em`
- `rem`
- `vh`
- `vw`
- `%`

**Absolute** Units Includes:
- `px`
- `pt`
- `cm`
- `in`
- `mm`

## 05 :: Additional Useful Properties
### Alpha Channel
**rgba**(red, green blue `alpha`) where the "alpha" refers to how transparent you want.

### Position
- relative -> relative to the current position of the parent
- absolute -> positions the selected element in a specified location within the page
- fixed -> positions the selected element in a specified location within the window

### Transition
You can use the CSS property `transition` when you want to animate specified elements within your web page. For example, suppose you have an element selected such as `div` with properties already assigned, followed by a `:hover` pseudo-class (`div:hover`) is triggered by an event then the `transition` property can be used to gradually make the change. `transition` can setup as follows:

```css
(./#)element {
    /* styles here */
    transition: property-name duration easing function delay;
}

(./)element:hover {
    /* more styles */
}
```
- transition-behavior
- transition-delay
- transition-duration
- transition-property
transition-timing-function

within the transition property of the selected element. For a better and more through explanation please see [MDN :: transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) documentation.
        
For example if you have a mouse event such as hover, when you set the CSS property `transition` in the parent element to the `:hover` pseudo-class then the trasition between the element and the event will take place according to the `transition` property set.

### Transform
The CSS property `transform` will "move" or "scale" the selected element. If you would like to change the position or size of the selected element then use the `transform` properties:
- `matrix()`
- `translate()`
- `scale()`
- `rotate()`
- `skew()`

Please see [MDN :: transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) documentation for more details and examples.
You can also mix different `transform` properties together. As an example you could do:
```css
(./#)element {
    transform: matrix() scale() rotate();
}
```
(Couple this with `transitions` to make interesting affects)

## 06 :: Responsive CSS & Flexbox
Display
Direction 
Justify ↔
Align ↕
Wrap

## 07 :: Frameworks(Bootstrap)