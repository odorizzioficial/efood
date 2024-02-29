import Header from '../../Components/Header'
import RestList from '../../Containers/RestaurantList'

import { useGetRestaurantsQuery } from '../../Services/api'

const Home = () => {
  const { data: restaurante } = useGetRestaurantsQuery()

  if (restaurante) {
    return (
      <>
        <Header></Header>
        <RestList restaurants={restaurante}></RestList>
      </>
    )
  }

  return <h3>CARREGANDO...</h3>
}

export default Home
