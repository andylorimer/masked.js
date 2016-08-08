# masked.js
A free and simple set of transitions using a mask effect.

Created using jQuery and CSS transitions.

Install
--------------
The easiest way to initialize Masked.js is to include the minified js file as shown below.

```html
<script src="src/masked.min.js"></script>
```

**Remember to include the latest version of jQuery along with the `masked.js` file.**

Usage
--------------
  1. Simply include the `masked.min.js` file and wrap a selection of elements in the `mask` class as seen below.
  
  ```html
  <div class="mask"><div class="your-element"></div></div>
  ```
  
  2. Then include the `data-mask-transition` of your choice from the list below:
      * `fromTop`
      * `fromRight`
      * `fromBottom`
      * `fromLeft`

Full Example
--------------
```html
<div class="mask" data-mask-transition="fromBottom"><div class="your-element"></div></div>
```

Other Examples
--------------
```html
<div class="mask" data-mask-transition="fromLeft"><span class="your-element">This</span></div>
<div class="mask" data-mask-transition="fromTop"><span class="your-element">is</span></div>
<div class="mask" data-mask-transition="fromRight"><span class="your-element">a</span></div>
<div class="mask" data-mask-transition="fromBottom"><span class="your-element">mask</span></div>
```

```html
<div class="mask" data-mask-transition="fromLeft"><span class="your-element"></span></div>
```
