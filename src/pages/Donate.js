import React, { useState } from 'react'
import '../components/static/css/donate.css'

import CommentsForm from '../components/CommentsForm';

export default function Donate() {

    const [ourInterestIsOpen, openOurInterest] = useState(true)
    const [faqIsOpen, openFAQ] = useState(false)
    const [updatesIsOpen, openUpdates] = useState(false)

    const moneyGoal = 30000
    const moneyProgress = 24900

    const moneyPorcentage = (moneyProgress / moneyGoal) * 100
    console.log(moneyPorcentage)

    return (
        <section className="donate">
            <section className="reasontodonate">
                <article className="photo">
                    <img src="//a6e8z9v6.stackpathcdn.com/chariti/demo1/wp-content/uploads/sites/2/2016/06/larm-rmah-AEaTUnvneik-unsplash-1200x755.jpg" alt="Razon a donar"/>
                </article>
                <section className="data">
                    <article className="title">
                        <h1>Mejorar el alcance y espacio de nuestro servicio</h1>
                        <p>The legal definition of a charitable organization (and of charity) varies between countries</p>
                    </article>
                    <div className="progress">
                        <div className="progress-bar"></div>
                        <strong>83% donado</strong>
                        <p>Goal: $30,000.00</p>
                    </div>
                    <article className="donors">
                        <p><strong>115<br/></strong>Donadores</p>
                        <p><strong>$24,900.00<br/></strong>Donado</p>
                    </article>
                    <article className="social">
                    <div className="social">
                        <a href="https://facebook.com/">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1" stroke="#333" fill="#333" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com/">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="#333" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <rect x="4" y="4" width="16" height="16" rx="2" />
                                <line x1="8" y1="11" x2="8" y2="16" />
                                <line x1="8" y1="8" x2="8" y2="8.01" />
                                <line x1="12" y1="16" x2="12" y2="11" />
                                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                            </svg>
                        </a>
                        <a href="https://twitter.com/">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1" stroke="#333" fill="#333" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                            </svg>
                        </a>
                        <a href="https://instagram.com/">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="#333" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <rect x="4" y="4" width="16" height="16" rx="4" />
                                <circle cx="12" cy="12" r="3" />
                                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                            </svg>
                        </a>
                    </div>
                    </article>
                    <article className="buttons">
                        <button className="gotodonate">DONAR AHORA</button>
                        <button className="follow">♥ SEGUIR</button>
                    </article>
                </section>
            </section>
            <section className="tabs">
                <article className="tabs-handler">
                    <ul className="tab-buttons">
                        <li className={ourInterestIsOpen ? "tablinks active" : "tablinks"} onClick={() => {openOurInterest(true); openFAQ(false); openUpdates(false)}}>Nuestra interes</li>
                        <li className={faqIsOpen ? "tablinks active" : "tablinks"} onClick={() => {openOurInterest(false); openFAQ(true); openUpdates(false)}}>FAQ</li>
                        <li className={updatesIsOpen ? "tablinks active" : "tablinks"} onClick={() => {openOurInterest(false); openFAQ(false); openUpdates(true)}}>Actualizaciones</li>
                    </ul>
                </article>
                <section className={ourInterestIsOpen ? "ourinterest shown" : "ourinterest"}>
                    <article className="explanation">
                        <h2>Por que capto nuestra atencion?</h2>
                        <p>During the 19th century a profusion of charitable organizations emerged to alleviate the awful conditions of the working className in the slums. The Labourer’s Friend Society, chaired by Lord Shaftesbury in the United Kingdom in 1830, aimed to improve working-className conditions. It promoted, for example, the allotment of land to labourers for “cottage husbandry” that later became the allotment movement. In 1844 it became the first Model Dwellings Company.
                        <br/>
                        <br/>
                        There was strong growth in municipal charities. The Brougham Commission led on to the Municipal Corporations Act 1835, which reorganized multiple local charities by incorporating them into single entities under supervision from local government.</p>
                    </article>
                    <hr/>
                    <article className="motivation">
                        <h3>Alimentar familias, sanar, y motivar la educacion son necesidades basicas para un ambiente saludable y una vida productiva</h3>
                        <div className="data">
                            <div className="data-item">
                                <img className="img" src="https://a6e8z9v6.stackpathcdn.com/chariti/demo1/wp-content/uploads/sites/2/2020/02/cause-icon-menwomen.png" alt=""/>
                                <h4>100K</h4>
                                <p>Niños Asistidos</p>
                            </div>
                            <div className="data-item">
                                <img className="img" src="https://a6e8z9v6.stackpathcdn.com/chariti/demo1/wp-content/uploads/sites/2/2020/02/cause-icon-hand.png" alt=""/>
                                <h4>18000</h4>
                                <p>Voluntarios Por el Mundo</p>
                            </div>
                            <div className="data-item">
                                <img className="img" src="https://a6e8z9v6.stackpathcdn.com/chariti/demo1/wp-content/uploads/sites/2/2020/02/cause-icon-clush.png" alt=""/>
                                <h4>$100M</h4>
                                <p>Ingresos Obtenidos</p>
                            </div>
                        </div>
                    </article>
                    <p>During the 19th century a profusion of charitable organizations emerged to alleviate the awful conditions of the working className in the slums. The Labourer’s Friend Society, chaired by Lord Shaftesbury in the United Kingdom in 1830, aimed to improve working-className conditions.</p>
                    <ul className="reasons">
                        <li className="action-item"><CircleCheck/> Provide long-term campaign planning</li>
                        <li className="action-item"><CircleCheck/> Reduce our long term administration costs</li>
                        <li className="action-item"><CircleCheck/> Remain fiercely independent and unbiased</li>
                        <li className="action-item"><CircleCheck/> Regular updates on what's happening in our priority campaigns</li>
                        <li className="action-item"><CircleCheck/> Invitations to events and other exciting opportunities to take action</li>
                    </ul>
                </section>
                <section className={faqIsOpen ? "FAQ shown" : "FAQ"}>
                    Preguntas Frecuentes
                </section>
                <section className={updatesIsOpen ? "updates shown" : "updates"}>
                    Actualizaciones
                </section>
                <section className="donate-by-phone">
                    <article className="by-phone-content">
                        <strong>Queres donar por telefono?</strong>
                        <p>Sin problema, llamanos ahora <br/><strong>1800-12455-1245</strong></p>
                        <p>O envianos un mail: <br/><strong className="mail">nahueltecnicomdp@gmail.com</strong></p>
                    </article>
                    <article className="by-phone-security">
                        <div className="https"> 
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#7bc62d" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <rect x="5" y="11" width="14" height="10" rx="2" />
                                <circle cx="12" cy="16" r="1" />
                                <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                            </svg><span>https://</span>
                        </div>

                        <h3>Donaciones seguras</h3>

                        <p>El protocolo de pago esta encriptado y transmitido seguramente con un protocolo SSL</p>
                    </article>
                </section>
            </section>
            
            <CommentsForm/>
        </section>
    )
}

function CircleCheck() {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-check" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#a905b6" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="9" />
            <path d="M9 12l2 2l4 -4" />
        </svg>
    )
}