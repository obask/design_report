---
layout: page
title: Hello World!
tagline: Supporting tagline
---

Read [Jekyll Quick Start](http://jekyllbootstrap.com/usage/jekyll-quick-start.html)

Complete usage and documentation available at: [Jekyll Bootstrap](http://jekyllbootstrap.com)

## Update Author Attributes

In `_config.yml` remember to specify your own data:
    
    title : My Blog =)
    
    author :
      name : Name Lastname
      email : blah@email.test
      github : username
      twitter : username

The theme should reference these variables whenever needed.
    
## Sample Posts

This blog contains sample posts which help stage pages and blog data.
When you don't need the samples anymore just delete the `_posts/core-samples` folder.

    $ rm -rf _posts/core-samples

Here's a sample "posts list".


<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> xxx <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

<button class='btn btn-large btn-success' id='btn'> Result: </button>

<div id='res'> ... </div>

<div id='epiceditor'> Hello! </div>

<button class='btn btn-large' id='send'> Send! </button>


<script src="{{ BASE_PATH }}/assets/js/jquery.min.js"> ololo </script>
<script src="{{ BASE_PATH }}/assets/js/prettify.js"> ololo </script>
<script src='{{ BASE_PATH }}/assets/epiceditor/js/epiceditor.js'> ololo </script>


<script src="my_editor.js" type='text/javascript' />




