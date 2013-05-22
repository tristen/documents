Prose allows you to include a `prose.yml` file to your project making it easy to configure a project managed in prose. If your project was built using [Jekyll](https://github.com/mojombo/jekyll) you can also add configurable options to `_config.yml`. To get started add the following line to either file:

	prose:

The following is a list of the currently supported configuration options. 

| Setting | Config | Specific to Jekyll | Description |
| ---- | ---- | ---- | ---- |
| Root URL | `rooturl: "DIRECTORY"` | No | Restricts authoring access to a certain directory | 
| Site URL | `siteurl: "http://domain-name.com/"` | No | Turns on Jekyll layout previews. Domain name of the live version of the site. `siteurl` is also used to derive a permalink in the settings sidebar if specified. | 
| Site Object | `site:` | Yes | Attributes of the site object used for previews specified as URLS. At previe time, these urls will be requested to populate the site tags. Particularly useful for building site.tags and site.categories to fill out preview layouts. |
| Metadata defaults | [See options below](#metadata) | Yes | Removes editing yml front matter to provide clean dropdown forms to select default options |

### <a id='metadata'>Metadata Configuration</a>

#### Sample configuration for metadata
```
prose:
  metadata:
    _posts:
      - name: "layout"
        field:
          element: "text"
          label: "Layout"
          value: "default"
      - name: "item"
        field:
          element: "select"
          label: "Item"
          placeholder: "Select an Item"
          options:
            - name: "Item 1"
              value: "item1"
            - name: "Item 2"
              value: "item2"
          selected: "item2"
```

#### directory
Define default metadata editor fields for a given directory, subdirectories will inherit these default fields.

##### name
String representing the YAML frontmatter key to be added.

##### field
Form element for entering or selecting a YAML frontmatter value matching `name` key.

##### element

| Metadata Editor Element | Value | HTML |
| ---- | ---- | --- |
| `button` | `boolean` |
| `checkbox` | `boolean` | `<input type="checkbox" checked="checked" />` |
| `text` | `string` | `<input type="text" name="name" value="value" />` |
| `select` | `string` | `<select name="name">`<br />`<option value="item1">Item 1</option>`<br />`<option value="item2">Item 2</option>`<br />`</select>` |
| `multiselect` | `[string, string]` | `<select name="name" multiple>`<br />`<option value="item1">Item 1</option>`<br />`<option value="item2">Item 2</option>`<br />`</select>` |
  
##### label
`<label for="name">label</label>`

##### placeholder
Placeholder text for `select` dropdowns.

##### options
`<option value="value">name</option>` elements for `select` dropdowns.
```
- name: "Item 1"
  value: "item1"
- name: "Item 2"
  value: "item2"
```

##### selected
- pre-selected `value` from `options` for `select` dropdowns.

##### value
- `true`/`false` for `button` and `checkbox` form elements
- default value for `text` fields
