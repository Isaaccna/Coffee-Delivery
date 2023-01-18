import { PaymentButton, PaymentButtonContainer } from "../styles";
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'

type PaymentInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

export const PaymentInput = forwardRef<HTMLInputElement, PaymentInputProps>(({ id, icon, label, ...props }, ref) => {
  return (
   
      <PaymentButtonContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <PaymentButton>
        {icon}
          {label}
        </PaymentButton>
        </label>
      </PaymentButtonContainer>
  )
})