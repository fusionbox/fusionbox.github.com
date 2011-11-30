---
title: placenoun
layout: post
tagline: Making placeholder images more fun
github: https://github.com/aaronmerriam/Placenoun
---

When I started at fusionbox, I was delighted to find my first set of wireframes
filled with pictures of kittens.  Our designers tend to use
[Placekitten.com](http://www.placekitten.com) for easy to embed placeholder
images filled with kitty cuteness.

![Placekitten.com example](http://placekitten.com/515/325)

Step back a few weeks to a misfortunately named, but excellent site that popped
up on reddit.  [F\*\*\*YeahNouns.com](http://fuckyeahnouns.com/) is an excellent
use of the image search API.  At a minimum it is entertaining for a few minutes
and can quickly digress into seeing which dirty words produce the funniest
results. *(F\*\*\*YeahNouns.com seems to be a little bit broken at the time of
this writing.)*

My brain immediately put the two ideas together and the idea for Placenoun was
born.  As much as I love kittens, there is a soft spot in my heart for
unicorns, and there seemed to be room in the placeholder image market for
something a bit more robust.

This is where I take a second to be embarrassed about showing off code I wrote
months ago.  I inevitably hate most code I wrote as long ago as yesterday so
you can imagine how much it bothers me that people might look at the source
linked below.

Site Link: [Placenoun](http://www.placenoun.com/)

Github Link: [Source](https://github.com/aaronmerriam/Placenoun)

I used both Google and Bing image search API.  Surprisingly, the Bing API
turned out to be drastically more useful and robust than the Google API.
Google had a hard limit of 64 images that would be returned for a single query,
where as Bing set this limit at 1000.  Both services appeared to return similar
quality results so being able to get up to 1000 images for a single query was
very appealing.

I tried to focus on scalability.  Assuming the site ever got popular, I wanted
to be sure that lookups were fast and the images returned were the best match I
could provide.  I was at the mercy of Google and Bing for relevancy of images
as they related to search terms, but I also was really opposed to serving up
images that were badly distorted due to resizing.  Ideally whatever image I
served needed to be as close to the same aspect ratio as possibly which made it
a strange KNN search.  If you think about an image as just being a width and a
height, then the width can be thought of as the x coordinate and the height as
the 7 coordinate.  In most KNN searches, you would want to find whatever
neighbor had the shortest euclidian distance from your target point.  However,
in this setup, I needed an image which had an aspect ratio most closely
matching the target image, AND which was larger so that resampling it would not
cause the image to become pixelated.

The biggest tenant that I tried to follow was that it always serves up an image
and the best match it can find.  Whenever the site finds an image which has a
matching aspect ratio and is larger or equal to the desired size, it then
continues to serve that image forever.  Each time it cannot find an exact
match, it serves the best match it can make, and does another search through
the image search API to gather up a few more images to choose from.  Some quick
hashing of the images ensures that the images it gathers are at least unique at
the file level.

Last but not least was server side Google Analytics.  Since the site serves a
file for 99% of the requests that come in, there is no chance to insert the
standard analytics javascript.  I have a soft spot for data so launching a site
I could not track was out of the question.  In the future, I am hoping to find
time to port the code I used in Placenoun to do server side tracking over to a
legitimate middleware.

No promises on how work safe the images you get will end up being, but if you
want placeholder unicorns, or any noun for that matter, give Placenoun a try.

![Placenoun.com example](http://placenoun.com/unicorn/515/380/)
