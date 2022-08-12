import './Botao.css'

// eslint-disable-next-line no-unused-vars
const Botao = (props) => {
  return (
    <button className="botao">{props.children}</button>
  )
}

export default Botao