---
title: moment-isocalendar
layout: post
tagline: ISO Week Date support for Moment
github: http://github.com/fusionbox/moment-isocalendar
logo: /image/project_javascript.png
---
We were creating a cool Backbone-powered weekly calendar application for a
client and we decided to and we needed a library to deal with dates in
JavaScript.  There are several date libraries available for JavaScript because
the native Date support is very difficult to work with.  We chose to use
[MomentJS](http://momentjs.com) because it is lightweight, has an excellent API,
and is easily extensible.

Because we are suckers for standards and for the robustness it gave our
calendar, we decided to use the [ISO week
date](http://en.wikipedia.org/wiki/ISO_week_date) system to define our dates on
the JavaScript side.  Basically instead of using months and days of the months
to define a day, it defines the day by the weeks and day of week.  For example,
2012 April 2 is can also be expressed as Year 2012 Week 14 Day 1.  If you are
writing a week calendar, this is a very useful representation because it is
already defined in weeks.  Monday will always be 1, so if you want to copy the
data from one Monday to the next, the only thing you need to change is week
number.

At first we used the
[Underscore.date](https://github.com/Flamefork/underscore.date) library
(unrelated to Moment, which also used to be called underscore.date) to convert
dates from Date objects to ISO week dates and back.  Having to work with
JavaScript Date objects for some things when we had the pleasure of using Moment
in code right next to it was frustrating and the Underscore.date library just
was not meeting our needs, so we decided to write our own.


## Introducing moment-isocalendar
Inspired by Python's
[isocalendar](http://docs.python.org/library/datetime.html#datetime.date.isocalendar)
method for date objects, we decided to write some functions to convert Moment
objects to ISO week dates and back.  These functions have come together to form
the [moment-isocalendar](https://github.com/fusionbox/moment-isocalendar) plugin
for MomentJS.

moment-isocalendar provides two functions to convert from different
representations.

`moment.fn.isocalendar()`
:   Converts a Moment object into its ISO week date representation.  It returns
    an array in the format of `[year, week_of_year, day_of_week,
    minutes_since_midnight]`.

`moment.fromIsocalendar(Array)`
:   Takes an ISO week date array and returns a Moment date object.


## Example Usage
You can take a normal date and transform it into an ISO week date.

{% highlight javascript %}
var my_date = moment([2012, 3, 2, 11, 30]);
// 2012 April 2, 11:30 AM

my_date.isocalendar();
// [2012, 14, 1, 690]
{% endhighlight %}

Alternatively, you could take an ISO week date representation and convert it
into a Moment object.

{% highlight javascript %}
var my_date = moment.fromIsocalendar([2012, 14, 1, 690]);
// 2012 April 2, 11:30 AM
{% endhighlight %}
