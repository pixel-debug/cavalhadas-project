import { Checkbox } from "@/components/common/checkbox";
import { InputField } from "@/components/common/form/inputField";
import { Toggle } from "@/components/common/form/toogle";
import { TextArea } from "@/components/common/textArea";

export const fieldComponents = {
  input: InputField,
  date: InputField,
  number: InputField,
  textarea: TextArea,
  checkbox: Checkbox,
  toggle: Toggle,
};

export type FieldType = keyof typeof fieldComponents;
