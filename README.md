## Website Performance Optimization portfolio project

This repo includes optimizations made for Project 4 of Udacity's [Front End Nanodegree](https://www.udacity.com/nanodegree).

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html
#####Setup:
* Clone repo
* From command line, run `npm install`
* Next run `grunt` to optimize CSS & JS
* Make modifications as desired. CSS & JS will be automatically compiled due to `watch` Grunt task. 

#####Optimizations Made:
* CSS minified using [Less Grunt plugin](https://github.com/gruntjs/grunt-contrib-less)
* CSS critical for rendering created using Filamentgroup's [CriticalCSS](https://www.npmjs.com/package/grunt-criticalcss) and embedded in index.html
* Primary styles.css and fonts added via window's load event.
* Async attribute added to Google Analytics script
* JS minified using Uglify
* All CSS & JS minified using Grunt taskrunner.

####Part 2: Optimize Frames per Second in pizza.html
#####Optimizations Made:
* Duplicate DOM lookups eliminated and stored in a variable
* Style changes moved out of loop that included layout lookups
* requestAnimationFrame used to optimize updating on scrolling

### Optimization Tips and Tricks
* FPS Counter/HUD Display in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>
