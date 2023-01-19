import { InputHTMLAttributes, forwardRef } from "react"
import { ErrorText, HalfSizeInput, InputBase, InputContainer, InputDiv, InputFullSize, InputMiddleSize, LargerSizeInput, SmallSizeInput } from "./styles"
import { useFormContext } from 'react-hook-form'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  rightText?: string

}

export function AddressForm ()  {
  const { register, formState:{errors} } = useFormContext()

  const zipcodeError = errors?.zipcode?.message as unknown as string

  const streetError = errors?.street?.message as unknown as string

  const numberError = errors?.number?.message as unknown as string

  const neighborhoodError = errors?.neighborhood?.message as unknown as string

  const cityError = errors?.city?.message as unknown as string

  const stateError = errors?.state?.message as unknown as string

  return (
   
    <InputDiv>
    <div>
    <InputMiddleSize 
    type="number"
     placeholder='CEP' 
     id='zipcode'
     {...register('zipcode')}
     />
     {zipcodeError && <ErrorText>{zipcodeError}</ErrorText>}
    </div>
  <div>
  <InputFullSize 
    type="text" 
    placeholder='Rua' id='street'
    {...register('street')}
    />
      {streetError && <ErrorText>{streetError}</ErrorText>}
  </div>
   
 <InputContainer>
 <div>
 <InputMiddleSize 
    type="number" 
    placeholder='Número' 
    id='number'
    {...register('number')}/>
    {numberError && <ErrorText>{numberError}</ErrorText>}
 </div>
   
    <LargerSizeInput 
    type="text" 
    placeholder='Complemento' 
    id='complement'
    {...register('complement')} 
    />
    
    </InputContainer>
    
    <InputContainer>
    <div>
    <InputMiddleSize 
    type="text" 
    placeholder='Bairro' 
    id='neighborhood'
    {...register('neighborhood')}/>
    {neighborhoodError && <ErrorText>{neighborhoodError}</ErrorText>}
    </div>
    <div>
    <HalfSizeInput 
    type="text"
     placeholder='Cidade' 
     id='city'
     {...register('city')}
     />
     {cityError && <ErrorText>{cityError}</ErrorText>}
    </div>
  
  <div>
  <SmallSizeInput 
    type="text" 
    placeholder='UF'
     id='state'
      maxLength={2} 
      minLength={2}
      {...register('state')}/>
      {stateError && <ErrorText>{stateError}</ErrorText>}
  </div>
    
    </InputContainer>
 
    </InputDiv>
 
 
  )
}