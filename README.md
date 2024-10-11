# GROWI 'Convert to file-link' Plugin

This is a GROWI's plugin.
Convert a URL whose 'href' attribute in the anchor tag begins with 'http[s]://file.link/' to a file link.

# Install

Install a plugin in admin panel.

# Usage

If you want to use file links in GROWI, write

```
[test](https://file.link/test-server/test-directory)

or

<a href="https://file.link/test-server/test-directory">test</a>
```

Then it will be converted and rendered as follows.

```
<a href="file://test-server/test-directory">test</a>
```

## License

MIT
