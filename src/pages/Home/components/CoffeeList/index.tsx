import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { CoffeeCard } from '../CoffeeCard'
import { MainContainer } from './styles'

const ourCoffees = [
  {
    id: uuidv4(),
    picture: 'src/assets/coffee-images/expresso-tradicional.png',
    feature: ['tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9
  },
  {
    id: uuidv4(),
    picture: 'src/assets/coffee-images/expresso-americano.png',
    feature: ['tradicional'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9
  },
  {
    id: uuidv4(),
    picture: 'src/assets/coffee-images/expresso-cremoso.png',
    feature: ['tradicional'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9
  },
  {
    id: uuidv4(),
    picture: 'src/assets/coffee-images/expresso-gelado.png',
    feature: ['tradicional', 'gelado'],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9
  },
  {
    id: uuidv4(),
    picture: 'src/assets/coffee-images/cafe-com-leite.png',
    feature: ['tradicional', 'com leite'],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9
  },
  {
    id: uuidv4(),
    picture: 'src/assets/coffee-images/latte.png',
    feature: ['tradicional', 'com leite'],
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9
  },
  {
    id: uuidv4(),
    picture: 'src/assets/coffee-images/capuccino.png',
    feature: ['tradicional', 'com leite'],
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9
  },
  {
    id: uuidv4(),
    picture: 'src/assets/coffee-images/macchiato.png',
    feature: ['tradicional', 'com leite'],
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9
  },
  {
    id: uuidv4(),
    picture: 'src/assets/coffee-images/mocaccino.png',
    feature: ['tradicional', 'com leite'],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9
  },
  {
    id: uuidv4(),
    picture: 'src/assets/coffee-images/chocolate-quente.png',
    feature: ['especial', 'com leite'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9
  },
  {
    id: uuidv4(),
    picture: 'src/assets/coffee-images/cubano.png',
    feature: ['especial', 'alcoólico', 'gelado'],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9
  },
  {
    id: uuidv4(),
    picture: 'src/assets/coffee-images/havaiano.png',
    feature: ['especial'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9
  },
  {
    id: uuidv4(),
    picture: 'src/assets/coffee-images/arabe.png',
    feature: ['especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9
  },
  {
    id: uuidv4(),
    picture: 'src/assets/coffee-images/irlandes.png',
    feature: ['especial', 'alcoólico'],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9
  }
]

export function CoffeeList() {
  const [coffees, setCoffees] = useState(ourCoffees)

  return (
    <MainContainer>

      <h1>Nossos cafés</h1>
<div className='grid grid-cols-4 m-auto'>

        {coffees.map(coffee => {
          return (
            <CoffeeCard
              key={coffee.id}
              id={coffee.id}
              picture={coffee.picture}
              feature={coffee.feature}
              title={coffee.title}
              description={coffee.description}
              price={coffee.price}
            />
          )
        })}
      </div>

    </MainContainer>
  )
}
