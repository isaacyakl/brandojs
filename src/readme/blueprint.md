<!-- prettier-ignore-start -->
<p align="center">
<img src="{{ screencap.src }}" alt="demo screencap" width="{{ screencap.width }}" height="auto"/>
</p>
<h1 align="center"><img src="{{ logo.src }}" alt="" width="{{ logo.width }}" height="auto" /> {{ pkg.details.stylizedName }}.js</h1>
<h2 align="center"><sub>{{ pkg.details.subtitle }}</sub></h2>
 
{{ load:./src/readme/badges.md }}
<p align="center">
  <b>{{ pkg.description }}</b><br>
</p>
<p align="center">
  <b>Compatibility:</b> ✔️Vanilla JavaScript ❌React.js (<a href="#-to-do">Coming soon</a>)<br>
  <b>Demo:</b> <a href="{{ pkg.homepage }}">{{ pkg.homepage }}</a>
</p>
<p align="center">
  <a href="https://twitter.com/{{ socialHandles.twitter }}"><img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/{{ socialHandles.twitter }}?style=social"></a> <a href="https://github.com/{{ socialHandles.github }}"><img alt="GitHub followers" src="https://img.shields.io/github/followers/{{ socialHandles.github }}?style=social"></a><br>
  <sub>Created by: <a href="https://github.com/{{ socialHandles.github }}">{{ pkg.details.nickName }}</a></sub>
<p>
<details>
<summary>📖 Table of Contents</summary>
{{ template:toc }}
</details>

{{ load:./src/readme/intro.md }}

## Approach

{{pkg.details.stylizedName}}.js utilizes the pseudo-element [::after](https://developer.mozilla.org/en-US/docs/Web/CSS/::after) and [CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) to facilitate smooth transitions. A background changer instance follows this approach:

1. It creates an ::after style definition with CSS variables and your chosen transition settings in order to update ::after backgrounds.
2. It sets backgrounds on both the select element(s) and corresponding ::after('s) in an alternating manner.
3. It simultaneously toggles the opacity of the ::after element(s) to switch between the ::after and element backgrounds.

{{ load:./src/readme/installation-usage.md }}

## API Documentation

[Full documentation]({{ pkg.homepage }}/docs/)

{{ load:./src/readme/todo.md }}

## Issues

Found a 🐛? Create a [new issue](https://github.com/{{ socialHandles.github }}/{{ pkg.name }}/issues/new/choose) or propose a fix by creating a pull request.

{{ template:license }}

<!-- prettier-ignore-end -->
