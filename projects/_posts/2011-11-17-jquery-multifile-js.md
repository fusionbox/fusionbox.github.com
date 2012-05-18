---
title: jquery-multifile
layout: post
tagline: HTML file inputs suck...
github: http://github.com/fusionbox/jquery-multifile
image: /image/project_jquery.png
---
## The Problem
HTML file inputs suck... it is difficult to upload more than one file at a
time.  HTML5 brought the multiple attribute, but this is still a poor interface
because it doesn't allow for files from different directories to be selected
and it's just not a good experience.

## The Solution
`jquery.multifile.js` tries to resolved this problem by creating multiple file
inputs.  When one file input is filled out, it is hidden and a new one appears.
It gives the user an editable list of files entered so far.  It supports

* IE7 (maybe even 6)
* file input multiple attribute
* templating, you could even add thumbnails if you want (using the [File API])

`jquery.multifile.js` can use the File API, but it doesn't need it to work.
You can use it in any browser, even IE.

## Example
### HTML
    <input class="multifile" type="file" name="files[]">
### JavaScript
    $('.multifile').multifile();


### Try it yourself

<input multiple="multiple" type="file" name="files[]"/>
<script type="text/javascript" src="https://raw.github.com/fusionbox/jquery-multifile/master/jquery.multifile.js">
/* prevent this tag from being closed xml style, not allowed in html */
</script>
<script type="text/javascript">
    jQuery('input[type=file][multiple]').multifile();
</script>

[File API]: https://developer.mozilla.org/en/DOM/File#getAsDataURL()
