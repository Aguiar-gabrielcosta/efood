import { useSelector } from 'react-redux'
import Button from '../Button'
import { Form, FormsContainer, InputField } from './styles'
import { RootReducer } from '../../store'

const Forms = () => {
  const { view } = useSelector((store: RootReducer) => store.sideBar)

  return (
    <FormsContainer>
      <Form className={view === 'delivery' ? 'show' : ''}>
        <h3>Entrega</h3>
        <InputField>
          <label htmlFor="clientName">Quem irá receber</label>
          <input type="text" name="clientName" id="clientName" />
        </InputField>
        <InputField>
          <label htmlFor="address">Endereço</label>
          <input type="text" name="address" id="address" />
        </InputField>
        <InputField>
          <label htmlFor="city">Cidade</label>
          <input type="text" name="city" id="city" />
        </InputField>
        <InputField $maxWidth="155px">
          <label htmlFor="zipCode">CEP</label>
          <input type="text" name="zipCode" id="zipCode" />
        </InputField>
        <InputField $maxWidth="155px">
          <label htmlFor="houseNumber">Número</label>
          <input type="text" name="houseNumber" id="houseNumber" />
        </InputField>
        <InputField>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input type="text" name="complement" id="complement" />
        </InputField>
        <div className="buttons-container">
          <Button type="button" width="full">
            Continuar com o pagamento
          </Button>
          <Button type="button" width="full">
            Voltar para o carrinho
          </Button>
        </div>
      </Form>
      <Form className={view === 'payment' ? 'show' : ''}>
        <h3>Pagamento - Valor a pagar R$ 190,90</h3>
        <InputField>
          <label htmlFor="cardOwnerName">Nome no cartão</label>
          <input type="text" name="cardOwnerName" id="cardOwnerName" />
        </InputField>
        <InputField>
          <label htmlFor="cardNumber">Numero no cartão</label>
          <input type="text" name="cardNumber" id="cardNumber" />
        </InputField>
        <InputField>
          <label htmlFor="cardSecurityCode">CVV</label>
          <input type="text" name="cardSecurityCode" id="cardSecurityCode" />
        </InputField>
        <InputField $maxWidth="155px">
          <label htmlFor="expiresMonth">Mês de vencimento</label>
          <input type="text" name="expiresMonth" id="expiresMonth" />
        </InputField>
        <InputField $maxWidth="155px">
          <label htmlFor="expiresYear">Ano de vencimento</label>
          <input type="text" name="expiresYear" id="expiresYear" />
        </InputField>
        <div className="buttons-container">
          <Button type="submit" width="full">
            Finalizar pagamento
          </Button>
          <Button type="button" width="full">
            Voltar para a edição de endereço
          </Button>
        </div>
      </Form>
      <Form className={view === 'confirm' ? 'show' : ''}>
        <h3>Pedido realizado - {`{ORDER_ID}`}</h3>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
        <div className="buttons-container">
          <Button type="button" width="full">
            Concluir
          </Button>
        </div>
      </Form>
    </FormsContainer>
  )
}

export default Forms
