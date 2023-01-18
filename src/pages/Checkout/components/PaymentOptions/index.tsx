import { Money, CreditCard, Bank} from 'phosphor-react'
import { PaymentOptionsContainer } from './styles'
import { useFormContext } from 'react-hook-form'
import { PaymentInput } from './PaymentInput'

export const paymentMethod = {
  credit: {
    label: 'Cartão de Crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Cartão de Débito',
    icon: <Bank size={16} />,
  },
  cash: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
}

export function PaymentOptions() {
  const {register, formState: {errors}} = useFormContext()
  const paymentMethodError = errors?.paymentMethod?.message as unknown as string
  return (
    <PaymentOptionsContainer>
{Object.entries(paymentMethod).map(([key, { label, icon}]) => (
  <PaymentInput
  key={label}
  id={key}
  icon={icon}
  label={label}
  value={key}
  {...register('paymentMethod')}
  />
))}
      {paymentMethodError && <p>{paymentMethodError}</p>}  
  </PaymentOptionsContainer>
  )
}