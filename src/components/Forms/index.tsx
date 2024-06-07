import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import Button from '../Button'
import { RootReducer } from '../../store'
import { changeView, close } from '../../store/reducers/sideBar'
import { usePostPurchaseMutation } from '../../services/restaurantApi'
import { clear } from '../../store/reducers/cart'
import { totalPrice } from '../../utils/totalPrice'
import { formatPrice } from '../../utils/formatPrice'
import * as S from './styles'

const Forms = () => {
  const [deliveryButtonDisabled, setDeliveryButtonDisabled] = useState(true)
  const [paymentButtonDisabled, setPaymentButtonDisabled] = useState(true)
  const validFields = useMemo(() => {
    const map = new Map<string, boolean>()
    map.set('reciever', false)
    map.set('address', false)
    map.set('city', false)
    map.set('zipCode', false)
    map.set('houseNumber', false)
    map.set('cardOwnerName', false)
    map.set('cardNumber', false)
    map.set('cardSecurityCode', false)
    map.set('expiresMonth', false)
    map.set('expiresYear', false)
    return map
  }, [])
  const { view } = useSelector((store: RootReducer) => store.sideBar)
  const { items } = useSelector((store: RootReducer) => store.cart)
  const [postPurchase, { data, isSuccess, isLoading }] =
    usePostPurchaseMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const form = useFormik({
    initialValues: {
      reciever: '',
      address: '',
      city: '',
      zipCode: '',
      houseNumber: '',
      complement: '',
      cardOwnerName: '',
      cardNumber: '',
      cardSecurityCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      reciever: Yup.string().required('Este campo é obrigatório'),
      address: Yup.string().required('Este campo é obrigatório'),
      city: Yup.string().required('Este campo é obrigatório'),
      zipCode: Yup.string()
        .min(9, 'O campo precisa ter os 8 digítos de seu CEP')
        .max(9, 'O campo precisa ter os 8 digítos de seu CEP')
        .required('Este campo é obrigatório'),
      houseNumber: Yup.string()
        .min(1, 'Deve conter pelo menos 1 número')
        .required('Este campo é obrigatório'),
      cardOwnerName: Yup.string().required('Este campo é obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'O campo precisa ter os 16 dígitos de seu cartão')
        .max(19, 'O campo precisa ter os 16 dígitos de seu cartão')
        .required('Este campo é obrigatório'),
      cardSecurityCode: Yup.string()
        .min(
          3,
          'O campo precisa ter os 3 dígitos do código de segurança do cartão'
        )
        .max(
          3,
          'O campo precisa ter os 3 dígitos do código de segurança do cartão'
        )
        .required('Este campo é obrigatório'),
      expiresMonth: Yup.number()
        .min(1, 'O mês deve estar entre 1 (Janeiro) e 12 (dezembro)')
        .max(12, 'O mês deve estar entre 1 (Janeiro) e 12 (dezembro)')
        .required('Este campo é obrigatório'),
      expiresYear: Yup.number()
        .min(new Date().getFullYear(), 'O ano de expiração inválido')
        .max(9999, 'O ano de expiração inválido')
        .required('Este campo é obrigatório')
    }),
    onSubmit: (values) => {
      postPurchase({
        delivery: {
          receiver: values.reciever,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.houseNumber),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardOwnerName,
            number: values.cardNumber,
            code: Number(values.cardSecurityCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  useEffect(() => {
    if (
      validFields.get('reciever') &&
      validFields.get('address') &&
      validFields.get('city') &&
      validFields.get('zipCode') &&
      validFields.get('houseNumber')
    ) {
      setDeliveryButtonDisabled(false)
    } else {
      setDeliveryButtonDisabled(true)
    }

    if (
      validFields.get('cardOwnerName') &&
      validFields.get('cardNumber') &&
      validFields.get('cardSecurityCode') &&
      validFields.get('expiresMonth') &&
      validFields.get('expiresYear')
    ) {
      setPaymentButtonDisabled(false)
    } else {
      setPaymentButtonDisabled(true)
    }
  }, [validFields, form])

  const checkForErrors = (fieldName: string) => {
    const touched = fieldName in form.touched
    const invalid = fieldName in form.errors

    const error = touched && invalid

    if (!invalid && touched) {
      validFields.set(fieldName, true)
    } else {
      validFields.set(fieldName, false)
    }

    return error
  }

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(changeView('confirm'))
    }
  }, [dispatch, isSuccess, data])

  const finishPurchase = () => {
    dispatch(close())
    dispatch(changeView('cart'))
    dispatch(clear())
    form.resetForm()
    navigate({ pathname: '/' })
  }

  return (
    <S.FormsContainer onSubmit={form.handleSubmit}>
      <S.FormSection className={view === 'delivery' ? 'show' : ''}>
        <h3>Entrega</h3>
        <S.InputField>
          <label htmlFor="reciever">Quem irá receber</label>
          <input
            type="text"
            name="reciever"
            id="reciever"
            value={form.values.reciever}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkForErrors('reciever') ? 'error' : ''}
          />
        </S.InputField>
        <S.InputField>
          <label htmlFor="address">Endereço</label>
          <input
            type="text"
            name="address"
            id="address"
            value={form.values.address}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkForErrors('address') ? 'error' : ''}
          />
        </S.InputField>
        <S.InputField>
          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            name="city"
            id="city"
            value={form.values.city}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkForErrors('city') ? 'error' : ''}
          />
        </S.InputField>
        <S.InputField $maxWidth="155px">
          <label htmlFor="zipCode">CEP</label>
          <InputMask
            type="text"
            name="zipCode"
            id="zipCode"
            value={form.values.zipCode}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkForErrors('zipCode') ? 'error' : ''}
            mask="99999-999"
            maskChar={null}
          />
        </S.InputField>
        <S.InputField $maxWidth="155px">
          <label htmlFor="houseNumber">Número</label>
          <input
            type="text"
            name="houseNumber"
            id="houseNumber"
            value={form.values.houseNumber}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkForErrors('houseNumber') ? 'error' : ''}
          />
        </S.InputField>
        <S.InputField>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input
            type="text"
            name="complement"
            id="complement"
            value={form.values.complement}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </S.InputField>
        <div className="buttons-container">
          <Button
            type="button"
            title="Clique para continuar com as informações de pagamento"
            width="full"
            onClick={() => dispatch(changeView('payment'))}
            disabled={deliveryButtonDisabled}
          >
            Continuar com o pagamento
          </Button>
          <Button
            type="button"
            title="Clique para voltar para ao carrinho"
            width="full"
            onClick={() => dispatch(changeView('cart'))}
          >
            Voltar para o carrinho
          </Button>
        </div>
      </S.FormSection>
      <S.FormSection className={view === 'payment' ? 'show' : ''}>
        <h3>Pagamento - Valor a pagar {formatPrice(totalPrice(items))}</h3>
        <S.InputField>
          <label htmlFor="cardOwnerName">Nome no cartão</label>
          <input
            type="text"
            name="cardOwnerName"
            id="cardOwnerName"
            value={form.values.cardOwnerName}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkForErrors('cardOwnerName') ? 'error' : ''}
          />
        </S.InputField>
        <S.InputField $maxWidth="228px">
          <label htmlFor="cardNumber">Numero no cartão</label>
          <InputMask
            type="text"
            name="cardNumber"
            id="cardNumber"
            value={form.values.cardNumber}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkForErrors('cardNumber') ? 'error' : ''}
            mask="9999 9999 9999 9999"
            maskChar={null}
          />
        </S.InputField>
        <S.InputField $maxWidth="87px">
          <label htmlFor="cardSecurityCode">CVV</label>
          <InputMask
            type="text"
            name="cardSecurityCode"
            id="cardSecurityCode"
            value={form.values.cardSecurityCode}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkForErrors('cardSecurityCode') ? 'error' : ''}
            mask="999"
            maskChar={null}
          />
        </S.InputField>
        <S.InputField $maxWidth="155px">
          <label htmlFor="expiresMonth">Mês de vencimento</label>
          <input
            type="number"
            name="expiresMonth"
            id="expiresMonth"
            min={1}
            max={12}
            step={1}
            value={form.values.expiresMonth}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkForErrors('expiresMonth') ? 'error' : ''}
          />
        </S.InputField>
        <S.InputField $maxWidth="155px">
          <label htmlFor="expiresYear">Ano de vencimento</label>
          <input
            type="number"
            name="expiresYear"
            id="expiresYear"
            min={new Date().getFullYear()}
            step={1}
            value={form.values.expiresYear}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkForErrors('expiresYear') ? 'error' : ''}
          />
        </S.InputField>
        <div className="buttons-container">
          <Button
            type="submit"
            title="Clique para finalizar o pagamento"
            width="full"
            onClick={form.handleSubmit}
            disabled={paymentButtonDisabled || isLoading}
          >
            {isLoading ? 'Realizando pagamento...' : 'Finalizar pagamento'}
          </Button>
          <Button
            type="button"
            title="Clique para voltar para a edição de endereço"
            width="full"
            onClick={() => dispatch(changeView('delivery'))}
          >
            Voltar para a edição de endereço
          </Button>
        </div>
      </S.FormSection>
      <S.FormSection className={view === 'confirm' ? 'show' : ''}>
        <h3>Pedido realizado - {`${data?.orderId}`}</h3>
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
          <Button
            type="button"
            title="Clique para concluir a compra"
            width="full"
            onClick={finishPurchase}
          >
            Concluir
          </Button>
        </div>
      </S.FormSection>
    </S.FormsContainer>
  )
}

export default Forms
