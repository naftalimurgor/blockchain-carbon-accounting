import { PropsWithChildren } from "react";
import { FloatingLabel, Form } from "react-bootstrap";


type GenericForm = {
  [P in string]: string
}

type FormInpuRowProps<T extends GenericForm, T2 extends Partial<T>> = {
  form: T,
  setForm: React.Dispatch<React.SetStateAction<T>>,
  field: keyof T & string,
  label: string
  type?: 'input' | 'number'
  min?: number,
  max?: number,
  step?: number | 'any',
  placeholder?: string,
  required?: boolean,
  errors?: T2
};

type FormSelectRowProps<T extends GenericForm, T2 extends Partial<T>> = FormInpuRowProps<T,T2> & {
  values: {
    value: string
    label: string
  }[] | string[]
}

export const FormInputRow = <T extends GenericForm, T2 extends Partial<T>,>({ form, setForm, field, label, placeholder, type, min, max, step, required, errors }:PropsWithChildren<FormInpuRowProps<T,T2>>) => {
  return <FloatingLabel className="mb-3" controlId={field} label={label}>
    <Form.Control
      type={type||"input"}
      min={min}
      max={max}
      step={step}
      placeholder={placeholder||label}
      value={form[field] as string}
      onChange={e=>{ setForm({...form, [field]: e.currentTarget.value })}}
      onFocus={e=>e.currentTarget.select()}
      required={required}
      />
    <Form.Control.Feedback type="invalid">
      {(errors && errors[field]) || "This value is required"}
    </Form.Control.Feedback>
  </FloatingLabel>
}

export const FormSelectRow = <T extends GenericForm, T2 extends Partial<T>,>({ form, setForm, field, label, placeholder, values, required, errors }:PropsWithChildren<FormSelectRowProps<T,T2>>) => {
  return <FloatingLabel className="mb-3" controlId={field} label={label}>
    <Form.Select aria-label={label}
      value={form[field] as string}
      onChange={e=>{ setForm({...form, [field]: e.currentTarget.value })}}
      required={required}
    >
      <option value="">{placeholder || `Select ${label}`}</option>
      {values.map((o,i)=> typeof o === 'string' ? <option key={i} value={o}>{o}</option> :
        <option key={i} value={o.value}>{o.label}</option>
      )}
    </Form.Select> 
    <Form.Control.Feedback type="invalid">
      {(errors && errors[field]) || "This value is required"}
    </Form.Control.Feedback>
  </FloatingLabel>
}

