import React, {useState, useEffect} from 'react';
import Layout from '../components/Layout.js';
import {Button, Container, Row,Image} from 'react-bootstrap';

export default function Home() {
    const [inputs, setInputs] = useState({
        A:"",
        B:"",
        C:""
    })
    const[stateA, setA] = useState('')
    const[stateB, setB] = useState('')
    const[stateC, setC] = useState('')
    const[resutaldo, setResultado] = useState(0)
    function calcularDelta(a,b,c){
        return b * b - 4 * a * c;
    }
    const handleOnChage = (e) =>{
        setInputs({...inputs, [e.target.name]: e.target.value})
        if(e.target.name === 'A'){
            setA(e.target.value)
        }
        if(e.target.name === 'B'){
            setB(e.target.value)
        }
        if(e.target.name === 'C'){
            setC(e.target.value)
        }
        console.log(e.target.value , e.target.name)
    }

    const handleSubmit = () => {
      if (!stateA || !stateB || !stateC) {
        alert("Ingrese todos los campos");
        return;
      } else if (stateA == 0) {
        alert("no se puede dividir por 0");
        return;
      }
      let delta = calcularDelta(stateA, stateB, stateC);
      if (delta < 0) {
        alert("Sin raices reales");
        return;
      }
      let x1 = (-stateB + Math.sqrt(delta)) / (2 * stateA);
      let x2 = (-stateB - Math.sqrt(delta)) / (2 * stateA);
      setResultado({ resA: x1, resB: x2 });
    }

    const limpiar = () => {setResultado(0)}
    return (
      <>
        <Layout>
            <section id='inicio' className=' mb-5 hero d-flex align-items-center'>
                <div className='bg-secondary formulario sombra' >
                        <div className='d-flex justify-content-center mb-4'>
                            <h2 className='text-dark text-center'>Formula de Bhaskara</h2>
                        </div>
                        <Row>
                            <div className='col-lg-4 col-12'>
                                <div className='d-flex justify-content-center text-center'>
                                    <p className='text-white text-center font-weight-bold'>Valor de A</p>
                                </div>
                                <div className='text-center'>
                                <input
                                  placeholder='A'
                                  name='A'
                                  className='text'
                                  id='stateA'
                                  value={inputs.A}
                                  onChange={(e) => {
                                  handleOnChage(e);
                                  }}
                                  />
                                </div>
                            </div>
                            <div className='col-lg-4 col-12'>
                                <div className='d-flex justify-content-center text-center'>
                                    <p className='text-white text-center font-weight-bold'>Valor de B</p>
                                </div>
                                <div className='text-center'>
                                <input
                                    placeholder='B'
                                    name='B'
                                    className='text'
                                    id='stateB'
                                    value={inputs.B}
                                    onChange={(e) => {
                                    handleOnChage(e);
                                    }}
                                  />
                                </div>
                            </div>
                            <div className='col-lg-4 col-12'>
                                <div className='d-flex justify-content-center text-center'>
                                    <p className='text-white text-center font-weight-bold'>Valor de C</p>
                                </div>
                                <div className='text-center'>
                                <input
                                  placeholder='C'
                                  name='C'
                                  className='text'
                                  id='stateC'
                                  value={inputs.C}
                                  onChange={(e) => {
                                  handleOnChage(e);
                                  }}/>
                                </div>
                            </div>
                            </Row>
                        <Row className='mt-4 d-flex justify-content-center'>
                            <div className='col-lg-4 col-6 text-center'>
                              <button className='btn btn-dark'  type='button' onClick={() => handleSubmit()}>
                                Mandar
                              </button>
                            </div>
                            <div className='col-lg-4 col-6 text-center'>
                              <button className='btn btn-dark' type='button' onClick={() => limpiar()}>
                                Limpiar
                              </button>
                            </div>
                        </Row>
                        <Row className='mt-4 d-flex justify-content-center'>
                          <div className='col-lg-4 col-12 text-center'>
                            <h5>El resultado con + es: {resutaldo.resA}</h5>
                          </div>
                          <div className='col-lg-4 col-12 text-center'>
                            <h5>El resultado con - es:{resutaldo.resB}</h5>
                          </div>
                        </Row>
                    </div>
            </section>
            <section>
              <Container id='mas-info' className='mb-5 mt-5'>
                <Row>
                  <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center'>
                    <div>
                      <h4 className='text-center'>La Formula de Bhaskara permite determinar las raíces de un polinomio de segundo grado, fue deducida por el famoso matemático indio Bhaskaracharya, más conocido como Bhaskara II. </h4>
                    </div>
                  </div>
                  <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center'>
                    <div>
                      <Image alt="Bhaskara" src='/assets/Baskara.png' width={375} height={375} layout='intrinsic'></Image>
                    </div>
                  </div>
                  <div className='d-flex justify-content-center mt-5 text-center'><h1>La formula de Bhaskara es la siguiente:</h1></div>
                </Row>
                <Row>
                  <div className='d-flex justify-content-center'>
                  <Image alt="Formula" src='/assets/formula.png' width={375} height={150} layout='intrinsic'></Image>
                  </div>
                </Row>
              </Container>
            </section>
        </Layout>
      </>
    );
}
