import { IMaskInput } from "react-imask";
import { forwardRef } from "react";
import { TextMaskCustomProps } from "../../interfaces/pages/components";

// Componente de mascara, inserido nos campos de telefone da aplicação, no formato (00) 00000-0000.

export const TextMaskCustom = forwardRef<HTMLElement, TextMaskCustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <IMaskInput
        {...other}
        mask="(00) 00000-0000"
        definitions={{
          "#": /[1-9]/,
        }}
        onAccept={(value: unknown) =>
          onChange({ target: { name: props.name, value: `${value}` } })
        }
        overwrite
      />
    );
  }
);
