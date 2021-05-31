# Input

An `Input` consists of a `<label>` (if given) and an `<input>` wrapped in a `<div>`. All properties passed into the component are passed to the `<input>` unless other wise noted in the Properties table below.

## Properties

| Name | Type | Required | Default Value | Description |
| --- | --- | --- | --- | --- |
| id | string | No | None | If provided with a `label` property, is passed to the `<label>` as the `htmlFor` property. |
| label | string | No | None | Renders a `<label>` with the given text. |
| style | json | No | None | Passed along to the containing `<div>` as the `style` property. |
| containerClassName | json | No | None | Passed along to the containing `<div>` as the `className` property. |
| inputClassName | json | No | None | Passed along to the `<input>` as the `className` property. |
| labelClassName | json | No | None | Passed along to the containing `<label>` as the `className` property. |

## Accessibility

If a `label` is given, it is important to also give an `id` to associate the `<label>` and the `<input>`. Without an `id`, the `<input>` is presented by a screenreader only as "edit text" which is uninformative to the screenreader user. When the `id` and `label` are both provided, the `<input>` is presented as "<your label text> edit text". So, if the `label` given is "First name", then the `<input>` will be presented as "First name edit text".

## Usage examples

This is not an exhaustive list. These examples are to show how to use the properties described above.

### With the `id` and `label` properties

```jsx
<Input id="first-name" label="First name" />
```

### With the `style` property

```jsx
<Input id="first-name" label="First name" style={{ border: '1px solid black', padding: 24 }} />
```

### With the `containerClassName`, `inputClassName`, and `labelClassName` properties

`example.css`

```css
.input-container {
  max-width: 500px;
}

.custom-input {
  border: 2px solid blueviolet;
  border-radius: 4px;
  font-size: 1rem;
  padding: :4px;
}

.custom-label {
  font-family: sans-serif;
  font-size: 0.9rem;
  margin-bottom: 4px;
}
```

```jsx
<Input
  id="first-name"
  label="First name"
  containerClassName="input-container"
  inputClassName="custom-input"
  labelClassName="custom-label"
/>
```
