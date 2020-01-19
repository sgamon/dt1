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






