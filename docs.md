## `tt-loop`
Used for a wide range of uses,

style files: `somethingelse.hbs`

used in: `something.hbs`
```
{{> "tt-loop"}}
{{> "tt-loop" omit="!showonlythistag"}}
{{> "tt-loop" latest="true"}}
```

## `tt-tag`
Works exactly the same as tt-post does,
switches tag style files based on tag info.

style files: `tt-tag-default.hbs`,`tt-tag-somethingelse.hbs`

used in: `tag.hbs`
```
{{> "tt-tag"}}
```

## `tt-post`
The core partial for tagtypes, switches post style file on a tag basis.

style files: `tt-post-*.hbs`

used in: `post.hbs`
```
{{> "tt-post"}}
```
## `tt-tags`
Works similar to tt-tag in the sense that it hides unwanted tags, but on the looping level.

style files: `tt-tags.hbs`

used in: `tt-post-*.hbs`,`tt-loop-*.hbs`,`tt-tag-*.hbs`
```
{{> "tt-tags"}}
```
