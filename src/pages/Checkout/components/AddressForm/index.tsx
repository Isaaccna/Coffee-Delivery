import { HalfSizeInput, InputBase, InputContainer, InputDiv, InputMiddleSize, LargerSizeInput, SmallSizeInput } from "./styles"
import { useFormContext } from 'react-hook-form'

export function AddressForm() {
  const { register }= useFormContext()

  return (
   
    <InputDiv>
    <InputMiddleSize 
    type="number"
     placeholder='CEP' 
     id='zipcode'
     {...register('zipcode')}
     />
    <InputBase 
    type="text" 
    placeholder='Rua' id='street'
    {...register('street')}
    />
 <InputContainer>
 
    <InputMiddleSize 
    type="number" 
    placeholder='Número' 
    id='number'
    {...register('number')}/>
    <LargerSizeInput 
    type="text" 
    placeholder='Complemento' 
    id='complement'
    {...register('complement')}
    
    />
    </InputContainer>
    
    <InputContainer>
    <InputMiddleSize 
    type="text" 
    placeholder='Bairro' 
    id='neighborhood'
    {...register('neighborhood')}/>
    <HalfSizeInput 
    type="text"
     placeholder='Cidade' 
     id='city'
     {...register('city')}
     />
    <SmallSizeInput 
    type="text" 
    placeholder='UF'
     id='state'
      maxLength={2} 
      minLength={2}
      {...register('state')}/>
    </InputContainer>
 
    </InputDiv>
 
 
  )
}