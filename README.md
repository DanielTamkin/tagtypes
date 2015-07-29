
<p align="center">
  <img alt="tagtypes - for ghost" width="600" src="screenshots/tagtypes-logo.png"/>
</p>

<p align="center">
  selective tagging & post types
</p>

---
if you've seen a bug or think that tagtypes could be better in any way, [create a new issue](https://github.com/DanielTamkin/Evergreen/issues) or Tweet me [@CodeHands](https://twitter.com/CodeHands).
### What is it?
 tagtypes is my solution to the very simple problem with ghost: "where the heck are post types?" you see it in almost every other CMS, wordpress is a great example. Sure ghost is "a blogging platform", but maybe *I* want to have the power to change my bland old looking post, to something diffrent... tagtypes does just that.
### Installation
 1. clone tagtypes to your theme your working on
 2. drag all the `partials` for tagtypes into your `partials` folder
 3. edit tagtypes how you'd like, using the guidelines below.

# guidelines
tagtypes can be used in many ways. from choosing which post makes the cut for you loop to what type of post you want to show.
### `tt-loop`
default loop script for tagtypes.

_syntax_
```
{{#foreach posts}}
  {{#has tag="!other"}}
    {{> "loop-other"}}
  {{else}}
    {{> "loop-default"}}
  {{/has}}
{{/foreach}}
```
### `tt-post`
used to determine what post template to utilize, simply provide the partial
and tagtypes does the rest.
_syntax_
```
{{#has tag="!other"}}
  {{> "tt-post-other"}}
{{else}}
  {{> "tt-post-default"}}
{{/has}}
```
### `tt-tag`
when you dont want to show any special tags, use this partial to show only valid tags.

_syntax_
```
{{#has tag="!other"}}
  {{! dont show anything this is special}}
{{else}}
  {{> "tt-show"}}
{{/has}}

```
### `tt-tag-show`
tag script for loop.

_syntax_
```
{{#if tags}}
  {{#foreach tags}}
    {{! style how you would like to show the tags}}
    , {{name}}
  {{/foreach}}
{{/if}}

```


</br>
##### by the way...
- tagtypes is **not** a ghost theme.
- you dont need to be experienced in handlebars to reek tagtypes powers.
- if used right, tagtypes can be super powerful for your next theme.


---
<p align="center">
  if you already use tagtypes, or in the process of developing a theme built with it,
  tag on this cool looking graphic to spread the word.
</p>
<p align="center">
  <img alt="tagtypes - for ghost" width="400" src="screenshots/tagtypes-builtwith.png"/>
</p>
