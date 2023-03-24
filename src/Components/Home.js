import { useNavigate  } from "react-router-dom"

export const Home = () => {
  const navigation =useNavigate()
  return (
    <div>
      <div><h1></h1></div>
      <button onClick={()=>navigation('navigation')}>operate me</button>
    </div>
  )
}
