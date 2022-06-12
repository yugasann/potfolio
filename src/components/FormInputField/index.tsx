import React from 'react'
import { UseForm, FormField } from 'hooks/useForm'
export type UITypes = 'checkbox' | 'radio' | 'text' | 'select'

export type PropsBase<T> = {
  form: UseForm<T>
  name: FormField<T>
  type?: UITypes
}

export type OnChangeEvent = React.ChangeEvent<HTMLInputElement> | unknown

export type Value<T> = Exclude<T[keyof T] | string, boolean>

export type RenderProps<T> = Omit<PropsBase<T>, 'form'> & {
  onChange: (e: OnChangeEvent) => void
  isChecked?: boolean | undefined
  value?: Value<T>
}
export type InputProps<T> = Pick<RenderProps<T>, 'onChange'> & {
  value?: Exclude<T[keyof T] | string, boolean>
}
export type CheckInputProps<T> = Pick<
  RenderProps<T>,
  'onChange' | 'isChecked' | 'value'
>

type AllRenderProp<T> = RenderProps<T> | InputProps<T> | CheckInputProps<T>

export type Props<T> = PropsBase<T> & {
  render: (props: AllRenderProp<T>) => JSX.Element
  value?: T[keyof T]
}

function Component<T>(props: Props<T>) {
  const { form, name, type, render } = props
  const value = props.value as Value<T>

  const renderProps: RenderProps<T> = {
    type,
    name,
    value,
    onChange: (inputValue) => {
      form.onChange(name, inputValue)
    },
  }

  if (type === 'checkbox') {
    renderProps.isChecked = !!form.values[name]
    if (typeof form.values[name] !== 'boolean') {
      renderProps.isChecked = form.values[name] === value
    }

    renderProps.onChange = (event: OnChangeEvent) => {
      form.onChange(
        name,
        (event as React.ChangeEvent<HTMLInputElement>).target.checked,
      )
    }
  } else if (type === 'radio') {
    renderProps.isChecked = form.values[name] === value
    renderProps.onChange = () => form.onChange(name, value)
  } else if (type === 'text' || type === 'select') {
    renderProps.value =
      typeof form.values[name] === 'undefined'
        ? ''
        : form.values[name] === null
        ? ''
        : String(form.values[name])
    renderProps.onChange = (event: OnChangeEvent) => {
      form.onChange(
        name,
        (event as React.ChangeEvent<HTMLInputElement>).target.value,
      )
    }
  } else {
    renderProps.value = form.values[name] as Value<T>
    renderProps.onChange = (inputValue) => {
      form.onChange(name, inputValue)
    }
  }
  return render(renderProps)
}

export const FormInputField = Component
