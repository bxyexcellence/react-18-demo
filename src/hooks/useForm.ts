
import { useState, useEffect, useRef } from 'react';
import Schema from 'async-validator';
const useForm = (initformDate: object, valitales: object) => {
  const [formDate, setFormDate] = useState({} as any)
  const [errors, setErrors] = useState({} as any)
  const formRef = useRef(null)
  const validatorsRef = useRef({})

  const initForm = () => {
    validatorsRef.current = new Schema(valitales as any)
    formRef.current = JSON.parse(JSON.stringify(initformDate))
    setFormDate(JSON.parse(JSON.stringify(initformDate)))
    setErrors(Object.keys(valitales).reduce((prev, curr)=>  ({
      ...prev,
      [curr]: ''
    }), {}))
  }
  useEffect(() => {
    initForm()
  }, [initformDate, valitales])

  const handleValitale = (valitaleData: object) => {
    validatorsRef.current.validate(valitaleData, (error, filed) => {
      //console.log({error, filed});
     const newErrors =  Object.keys(valitaleData).reduce((prev, curr) => {
        const message = error && error.find(item => item.field === curr)?.message
        prev[curr] = message || ''
        return prev
      }, {})
      setErrors({
        ...errors,
        ...newErrors
      })
    })
  }


  const setFiledValue = (key: string, value:any) => {
    //debugger
    setFormDate({
      ...formDate,
      [key]: value
    })
  }
  const reSetForm = () => {
    setFormDate(JSON.parse(JSON.stringify(formRef.current)))
    setErrors(Object.keys(errors).reduce((prev, curr)=> ({
      ...prev,
      [curr]: ''
    }), {}))
  }

  return {
    formDate, errors, setFiledValue, handleValitale, reSetForm
  }
}

export default useForm