---
title: jquery-nearest
layout: post
tagline: finding an element made even simpler
github: http://github.com/fusionbox/jquery-nearest
---
## The Problem
You get your HTML from the designer, and you start plugging your buttons
together with jquery.  Eventually, you'll have a situation where you have *lots*
of similar items on a page (like "remove" buttons on every row of a table).

You could give them all unique ids, like `row_1_button` and `row_3_container`,
but really what you want is to say `$(my_row).closest('.button')` or
`$(my_row).parent().children()`, or some sort of DOM traversal that doesn't involve
special ids all over the place.

(or maybe you like ids, I dunno - if you do, stop reading and go back to how you
are doing things already)

Now, though, you've got dependencies between *design* and *code*.  Eek, to say the least!
Instead, you probably have a "container", or could easily define one, and you can do
searches against it, e.g. `$(my_row).closest('.container').find('.remove_button')`.  **Now**
we're talkin’!

And that's where `jquery.nearest` is your friend.

## The Solution
`jquery.nearest.js` Is just a quick way to go up the DOM, and back down it, finding the "nearest"
match.  If you hand it a container selector, it will start there, in which case it is *pretty much*
a substitution for `$(start).closest(container).find(search)`, except it will return the container
itself if it matches your `search` selector.  `find()` does not.

## Example

### HTML

```jinja
<div class="container">
{% for book in books %}
  <div class="book">
    <span class="label">Book:</span>
    <div class="information">
      <span class="title">{{ book.title }}</span>
    </div>
    <div class="actions">
      <span class="remove">remove</span>
      <span class="edit">edit</span>
    </div>
  </div>
{% endfor %}
</div>
```

### JavaScript

```javascript
$('.remove').click(function()
{
  // why are we only removing .information?  I have no idea.
  $(this).nearest('.information').remove();
  // if you want to limit the search:
  $(this).nearest('.information', '.book').remove();
})
```
