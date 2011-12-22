---
title: How Smart is Googlebot?
layout: post
author: Rick Ramos
email: ramos@fusionbox.com
---

Google is constantly making changes that effect the quality of the search results you see when searching for things in their search engine. These changes are intended to improve search quality, limit spam and find better, faster ways to find, crawl, index and rank Web pages.

This week a Distilled.net blog post drifted past my Twitter timeline that was the result of some research into how Googlebot is crawling and indexing Web pages. It is a follow-up to another post speculating about Google Chrome being a consumer-controlled indexing utility (read as: it's a passanger in your web surfing “car”.) Seriously? Yes, seriously. They have found evidence that Google Chrome may be an indexing utility that can support JavaScript, CSS, DOM Access and even index dynamic content like AJAX.
We have known for some time that Googlebot can see JavaScript. One of the first things to look at when auditing a site for search engine effectiveness is how JavaScript is being used and how the site can limit code bloat to improve rankings. We also know that Googlebot gained the ability to execute AJAX and JavaScript; however, we did not know to what extent.
To create an example, the author found a URL that uses a JavaScript redirect to shoot the user to another page. Google is not supposed to be able to see JavaScript redirects like this. In fact, SEOs would use JavaScript to hide outbound links, so Googlebot can not see them. This allowed pagerank sculpting even after Google announced that it still spends pagerank on rel=nofollow links, even though the linked-to pages do not receive any of that rank. 

This is what he observed:
>The indexed text and Instant Preview being displayed \[in Google's SERP\] ended up matching the redirect destination, while the URL displayed matched the source of the redirect.
>This suggests that not only is GoogleBot executing JavaScript, it seems to be following JavaScript Redirects and treating them as 302 Redirect. This isn’t the most interesting part though; it seems Bing is doing this too!
>http://www.distilled.net/blog/seo/google-stop-playing-the-jig-is-still-up-guest-post/

Fusionbox sites are built with usability as a much higher priority than individual keyword rankings and doesn't put a lot of salt in questionable, albeit snappy, little tricks like masking links using JavaScript. 
It's safe to say that sites built by us don't need to be worried about these kinds of things potentially harming our clients. Still, this is a pretty big revelation that will change the way that SEO is done throughout most of the industry.
Professional SEOs: Will this theory change the way you think about or do your job?
