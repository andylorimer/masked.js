# masked.js
A free and simple set of transitions using a mask effect.

Install
--------------
```html
<script src="src/masked.min.js"></script>
```

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
