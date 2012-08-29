---
title: rubymotion-sugarcube
layout: post
tagline: Extensions to built-in Ruby class to make Rubymotion development more idiomatic
github: http://github.com/rubymotion/sugarcube
image: /image/project_rubymotion.png
---
Fusionbox is excited about the announcement of [Rubymotion][], and to celebrate
we are providing a small library of extensions to the Ruby built-in classes
that make it a little easier - and hopefully more "rubyesque" - to work in
Cocoa.

For comparison, take a look at the following Ruby code.  This is some very
vanilla cocoa programming.  Grabbing an image from the `resources/` folder,
creating a font object of a certain size, loading a custom font from
`resources/`, and assigning text alignment to a `UILabel`.

{% highlight ruby %}
label = UILabel.alloc.init
label.frame = [[0, 0], [320, 40]]
label.font = UIFont.systemFontOfSize(30)
label.text = "I'm a pretty label."
label.alignment = UITextAlignmentCenter
label.textColor = UIColor.blueColor
view.addSubview(label)

label = UILabel.alloc.init
label.frame = [[40, 0], [320, 30]]
label.font = UIFont.fontWithName("Inconsolata", size:20)
label.text = "I'm a pretty label."
label.textColor = UIColor.colorWithRed(0.411765, green:0.411765, blue:0.411765, alpha:1.0)  # roughly 0x696969
view.addSubview(label)

image_up = UIImage.imageNamed 'pretty_image_up.png'
image_down = UIImage.imageNamed 'pretty_image_down.png'
ok_button = UIButton.buttonWithType(UIButtonTypeCustom)
button.setImage(image_up, forState:UIControlStateNormal)
button.setImage(image_down, forState:UIControlStateHighlighted)
{% endhighlight %}

Oof, that's a mouthful.  You would hardly know it was Ruby!

## Sweeten it up!  How many lumps?

Here's the same code, using `sugarcube`:

{% highlight ruby %}
label = UILabel.alloc.init
label.frame = [[0, 0], [320, 40]]
label.font = :system.uifont(30)
label.text = "I'm a pretty label."
label.alignment = :center.uialignment
label.textColor = :blue.uicolor
view << label

label = UILabel.alloc.init
label.frame = [[40, 0], [320, 30]]
label.font = "Inconsolata".uifont(20)
label.text = "I'm a pretty label."
label.textColor = :dimgray.uicolor  # 0x696969.uicolor also works!
view << label

image_up = 'pretty_image_up.png'.uiimage
image_down = 'pretty_image_down.png'.uiimage
ok_button = UIButton.buttonWithType(:custom.uibuttontype)
button.setImage(image_up, forState: :normal.uicontrolstate)
button.setImage(image_down, forState: :highlighted.uicontrolstate)
{% endhighlight %}

Maybe that doesn't mean much to you, but to me, not having to bother with
`UIAllThoseConstants` really pretties-up this snippet of code.

The [teacup][] framework inspired the creation of these snippets.  I ([Colin
Thomas-Arnold][]) am an active member of that project, and I hope that we can
benefit from sugarcube!  Who doesn't like a little sugar in their tea ;-)

## SugarCube is now a Rubymotion Community project!

The SugarCube project has gained a lot of traction in the Rubymotion community,
so much so that we are moving the official repo into the rubymotion community
repository, <https://github.com/rubymotion/sugarcube>.

[Rubymotion]: http://rubymotion.com
[teacup]: http://rubymotion.github.com/teacup
[Colin Thomas-Arnold]: https://colinta.com/
