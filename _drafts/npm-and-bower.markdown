---
layout: "post"
title: "Npm and Bower"
date: "2016-01-29 00:54"
---
I spent a lot of this week trying to understand npm and bower, the differences between them, and how to implement them. I just could not grasp the usefulness of either, when to use each one, or which one is considered better.

>How can searching their package lists be any easier than searching for the libraries' websites on Google or their files on a CDN?
Why are there so many package managers that do the same thing?
Why can't I find a blog post or Stack Overflow answer that told me best practices?

At the end of the week, I have no additional features to show for it, but I finally believe I grasp the two primary solutions for front-end dependency management. And since I couldn't find a decent writeup anywhere, I decided I should make one that would have helped me.

## [Npm][1]
>The package manager of many names

There's a lot of misinformation about npm on the Internet. Contrary to what many people think or thought, [npm is **not** just for Node packages][].

To use npm modules in the browser, you need a tool like [browserify][].

Nested dependency tree

## [Bower][]
>"The package manager for the web"

Unlike npm, bower was designed specifically for the browser.

Flat dependency list

## CDNs ([cdnjs][], [Google CDN][])
>The old hotness

## What worked for me
In this instance, I was working on a traditional Laravel site which is really more of a website than a webapp. I needed to write JavaScript directly into views to pass PHP variables to JavaScript.

The JavaScript codebase for the site is not large or complex. It's used to retrieve JSON data and manipulate the DOM with [jQuery][], create some [Bootstrap][] elements, mark up data tables with [DataTables][], draw charts with [Chart.js][], and enhance input fields with [select2][] and [multiselect][]. Essential logic is being done server-side with PHP, and I'm pretty far away from dependency hell.

Until this point, I had been using CDNs to include the libraries I was using.

## Conclusion
It essentially comes down to this:

Bower will make it easy and simple to download JavaScript and CSS libraries and integrate them with your website. You tell it what packages to install, and you include them in your pages in the same way JavaScript and CSS has always worked.

Npm will require more work to integrate it with the browser. You need a translator like browserify or [webpack][]. Your JavaScript will be cleaner, safer, and more efficient. But it's harder to integrate with an existing site, doesn't play quite as well with traditional view-based webpages, and might not be worth it if your project is relatively small.

Bower is the package manager for the current web, npm is the package manager for the future one.

[1]: https://www.npmjs.com/
[]: http://bower.io/
[]: https://cdnjs.com/
[]: https://developers.google.com/speed/libraries/
