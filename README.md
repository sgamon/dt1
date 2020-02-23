# dt1

## Helpers for playing Death Test 1

The context is almost too long to tell - This is a web-based helper system for a 
solo paper-and-pencil FRPG. You may be familiar with it... or not.


I played the 
[original](https://boardgamegeek.com/boardgameexpansion/17729/death-test) 
back in 1981. Great stuff! I was hooked!

However, this helper will be for the 
[new version](https://rpggeek.com/image/4378771/fantasy-trip-legacy-edition).


Development Plan:

* Generate enemies from the random tables.
* Paragraph number breadcrumbs.
* Room contents/status.
* Party stats/inventory.
* Dynamic map.

### Work Notes

####  2/22/2020

Breadcrumbs

I got temporarily hung up on ideas for gold-plating the breadcrumbs. For 
example, there should (eventually) be a way to persist breadcrumbs so they 
survive sessions. I decided not to implement anything beyond the most basic 
stuff.

And yet, there is a fixed starting paragraph, which I started out hard-coding.
Then I realized I really want to pass in this value using an attribute. Which 
led to me learning about how to sync attributes and properties. So more 
learning after all.

####  2/15/2020

Dice!

I added the dice panel tonight, which was mostly straight-forward, except for 
rendering the svgs. I didn't want to load svg files, because (for some reason) 
it _feels_ right to keep everything inside of the components, or at least a 
declared import. 

I puttered with various solutions, and ended up with base64 images. But... it 
felt (that word again) wrong to convert the svg and plop the base64 string 
inline. So I put the svg strings in the component code (well, a model) and 
convert to base64 on the fly. This means, theoretically, that I could swap in
new svgs one day. Is that an actual advantage?

But... at this very late moment in javascript history, there is still no good
built-in base64 encoder/decoder! Worse, I found nothing on NPM that smoothly
imported (in pure-browser terms). Frustrated at something that should be easy in
2020, I cribbed a sample off a website and wrapped it in the export code that 
turns it into a module.

So... it's done, and I'm happy with it. But I would have saved hours by just 
direct-loading the svgs (ie, \<img src="some.svg" />). Sigh.


####  1/18/2020
Among other things, this is an experiment in using W3C web components, and 
vanilla browser javascript. There is no webpack, or babel, or typescript - for 
better and for worse. I'm finding it very nice to develop in this environment.
The module system works fine, you can follow its work in the chrome network
tab. Native js can be inspected in the chrome debugger, which is wonderful. It
is easy to reason about the code.

I'm puzzling out how to organize a web app without the benefit of a framework. 
I'm sure I'm getting lots of things wrong, but finding that out is the fun
part.






