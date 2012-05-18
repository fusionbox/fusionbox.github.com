---
title: django-fusionbox
layout: post
tagline: Common Django tools and patterns
github: http://github.com/fusionbox/django-fusionbox
logo: /image/project_django.png
---
We wrote django-fusionbox to keep common Django patterns in one place.
Currently features include a convenient static-template serving middleware, a
framework for adding behaviors to models, and template tags.

## Middleware
We sometimes have templates that need no special processing from a view,
especially during development. Instead of writing a urlpattern and using
[TemplateView] for every instance, [GenericTemplateFinderMiddleware] can be used
to find and render a template based on the request path.

## Model Behaviors
Model behaviors are packets of functionality to be installed on models. Using
a behavior is as simple as having your model class inherit from it. Behaviors
use a metaclass to provide an interesting method of customization --- an inner
class, assigned to the behavior's name, is used to customize the behavior:

{% highlight python %}
from fusionbox.behaviors import SEO
class SomeModel(SEO): # SEO behavior adds title, description, and keywords
                      # columns, and a method to format them as html.
    class SEO:
        title = 'name' # change the SEO title column name to 'name'
{% endhighlight %}


## Template tags
`highlight_here` is just about the coolest tag ever for HTML generation. It
parses HTML output and adds 'here' classes to anchors where their href's are
considered related to the current request url. See [examples] in the
documentation.


## Installation

    pip install -r git://github.com/fusionbox/django-fusionbox.git#egg=django_fusionbox

 * Read the [django-fusionbox documentation]
 * Get the [source]


[TemplateView]: https://docs.djangoproject.com/en/dev/ref/class-based-views/#django.views.generic.base.TemplateView
[django-fusionbox documentation]: http://fusionbox.github.com/django-fusionbox/
[examples]: http://fusionbox.github.com/django-fusionbox/templatetags.html#examples
[source]: http://github.com/fusionbox/django-fusionbox
[GenericTemplateFinderMiddleware]: http://fusionbox.github.com/django-fusionbox/middleware.html#fusionbox.middleware.GenericTemplateFinderMiddleware
