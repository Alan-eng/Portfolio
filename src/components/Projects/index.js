import React, { Component, Fragment } from "react";
import ScrollableAnchor from "react-scrollable-anchor"
import Modal from '../Modal';
import * as alfaAfisha from './alfaAfisha';
import * as kassir from './kassir';
import * as adminKassir from './adminKassir';
import * as widget from './widget';
import * as superkassa from './superkassa';
import * as runes from './runesOfNorse';
import tensesGeneratorImg from './tensesGenerator.jpg';
import tensesGenerator1Img from './tensesGenerator1.jpg';
import tensesGenerator2Img from './tensesGenerator2.jpg'; import style from './index.css';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { modal: false };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    };

    showModal(name) {
        this.setState({ modal: name });
        this.props.stopScrolling(true)
    };

    hideModal() {
        this.setState({ modal: '' });
        this.props.stopScrolling(false)
        window.scrollTo(0, document.body.scrollHeight);
    };

    render() {
        return (
            <section className={style.projects}>
                <ScrollableAnchor id={'projects'}>
                    <h1 className={style.header}>My recent Projects</h1>
                </ScrollableAnchor>
                <div className={style.card}>
                    <img src={alfaAfisha.img1} className={style.projectImg} alt="alfaAfisha site" />
                    <div className={style.overlay}>
                        <p className={style.titleCard}>alfaAfisha</p>
                        <button
                            className={style.btnCard}
                            type="button"
                            onClick={() => this.showModal('alfaAfisha')}
                        >
                            SHOW
                        </button>
                    </div>
                </div>
                <div className={style.card}>
                    <img src={kassir.img1} className={style.projectImg} alt="kassir site" />
                    <div className={style.overlay}>
                        <p className={style.titleCard}>Kassir</p>
                        <button
                            className={style.btnCard}
                            type="button"
                            onClick={() => this.showModal('kassir')}
                        >
                            SHOW
                        </button>
                    </div>
                </div>
                <div className={style.card}>
                    <img src={adminKassir.img1} className={style.projectImg} alt="adminKassir site" />
                    <div className={style.overlay}>
                        <p className={style.titleCard}>admin Kassir</p>
                        <button
                            className={style.btnCard}
                            type="button"
                            onClick={() => this.showModal('adminKassir')}
                        >
                            SHOW
                        </button>
                    </div>
                </div>
                <div className={style.card}>
                    <img src={widget.img1} className={style.projectImg} alt="widget for partners site" />
                    <div className={style.overlay}>
                        <p className={style.titleCard}>Widget for partners</p>
                        <button
                            className={style.btnCard}
                            type="button"
                            onClick={() => this.showModal('widgetForPartners')}
                        >
                            SHOW
                        </button>
                    </div>
                </div>
                <div className={style.card}>
                    <img src={superkassa.img1} className={style.projectImg} alt="superkassa site" />
                    <div className={style.overlay}>
                        <p className={style.titleCard}>superkassa</p>
                        <button
                            className={style.btnCard}
                            type="button"
                            onClick={() => this.showModal('superkassa')}
                        >
                            SHOW
                        </button>
                    </div>
                </div>
                <div className={style.card}>
                    <img src={runes.img1} className={style.projectImg} alt="nord runes site" />
                    <div className={style.overlay}>
                        <p className={style.titleCard}>nord runes</p>
                        <button
                            className={style.btnCard}
                            type="button"
                            onClick={() => this.showModal('runes')}
                        >
                            SHOW
                        </button>
                    </div>
                </div>
                <div className={style.card}>
                    <img src={tensesGeneratorImg} className={style.projectImg} alt="english tenses site" />
                    <div className={style.overlay}>
                        <p className={style.titleCard}>English tenses generator</p>
                        <button
                            className={style.btnCard}
                            type="button"
                            onClick={() => this.showModal('tenses')}
                        >
                            SHOW
                        </button>
                    </div>
                </div>

                {{
                    alfaAfisha: <Modal
                        images={[
                            <img src={alfaAfisha.img2} alt="alfa site" />,
                            <img src={alfaAfisha.img3} alt="alfa site" />,
                            <img src={alfaAfisha.img4} alt="alfa site" />,
                            <img src={alfaAfisha.img5} alt="alfa site" />,
                            <img src={alfaAfisha.img6} alt="alfa site" />,
                        ]}
                        show={this.state.modal} handleClose={this.hideModal}
                    >
                        <div className={style.contentInModal}>
                            <h2>Alfabank.ru</h2>
                            <h4 className={style.achievementsHeader}>Event tickets sale</h4>
                            <p>A section within a major Russian bank's app for purchasing tickets to museums, exhibitions, and concerts. Integration of a ticketing system within a banking application
                            </p>

                            <h4 className={style.achievementsHeader}>My achievements:</h4>
                            <ul>
                                <li><span className={style.technologyWord}>Modular Design:</span>  I broke down the interface into small, reusable components and connected them to the backend</li>
                                <li><span className={style.technologyWord}>State Management:</span>  I used the built-in React Context API mechanism for application state management</li>
                                <li><span className={style.technologyWord}>Navigation:</span>  Implemented using React Router for seamless user experience.</li>
                                <li><span className={style.technologyWord}>Form Validation:</span>  I used react-hook-form</li>
                                <li><span className={style.technologyWord}>Type Safety:</span>  Fully typed with TypeScript to enhance code quality and maintainability</li>
                            </ul>
                            <a className={style.linkProject1} href='https://alfabank.ru/apps/' target='_blank'>Alfabank.ru</a>

                        </div>
                    </Modal>,

                    kassir: <Modal
                        images={[
                            <img src={kassir.img2} alt="kassir site" />,
                            <img src={kassir.img3} alt="kassir site" />,
                            <img src={kassir.img4} alt="kassir site" />,
                            <img src={kassir.img5} alt="kassir site" />,
                            <img src={kassir.img6} alt="kassir site" />,
                            <img src={kassir.img7} alt="kassir site" />,
                            <img src={kassir.img8} alt="kassir site" />,
                            <img src={kassir.img9} alt="kassir site" />,
                        ]}
                        show={this.state.modal} handleClose={this.hideModal}
                    >
                        <div className={style.contentInModal}>
                            <h2>Kassir.ru</h2>
                            <h4 className={style.achievementsHeader}>Event tickets sale</h4>
                            <p>One of the largest ticket operators KASSIR.RU provides booking and ticket sales for all events in Saint Petersburg, Moscow, and other cities.</p>

                            <h4 className={style.achievementsHeader}>Stack: Nuxt3, Vue3, Pinia, Taiwind</h4>
                            <ul>
                                <li><span className={style.technologyWord}>Modular Design:</span>  I implemented layouts from Figma using Tailwind for cards, inputs, and blocks using Vue3, Composition API</li>
                                <li><span className={style.technologyWord}>State Management:</span>  Together with the team, I logically divided the application into stores in Pinia</li>
                                <li><span className={style.technologyWord}>Improved SEO:</span>  I used Nuxt SSR mode to provide easier crawling and indexing of web pages</li>
                                <li><span className={style.technologyWord}>Type Safety:</span>  I typed the code in TypeScript, improving reliability and maintainability</li>
                                <li><span className={style.technologyWord}>Manual Testing:</span>  I improved the purchasing experience by testing through web inspector for iPhone</li>
                                <li><span className={style.technologyWord}>Code quality:</span>  I reviewed colleagues' code through GitLab</li>
                            </ul>
                            <a className={style.linkProject1} href='https://msk.kassir.ru/' target='_blank'>Kassir.ru</a>

                        </div>
                    </Modal>,

                    adminKassir: <Modal
                        images={[
                            <img src={adminKassir.img2} alt="adminKassir site" />,
                            <img src={adminKassir.img3} alt="adminKassir site" />,
                            <img src={adminKassir.img4} alt="adminKassir site" />,
                            <img src={adminKassir.img5} alt="adminKassir site" />,
                            <img src={adminKassir.img6} alt="adminKassir site" />,
                            <img src={adminKassir.img7} alt="adminKassir site" />,
                        ]}
                        show={this.state.modal} handleClose={this.hideModal}
                    >
                        <div className={style.contentInModal}>
                            <h2>admin Kassir.ru</h2>
                            <h4 className={style.achievementsHeader}>Admin panel to manage events and activities in different cities on the site</h4>
                            <h4 className={style.achievementsHeader}>Stack: Vue2, VueX, Vuetify</h4>
                            <ul>
                                <li><span className={style.technologyWord}>Modular Design:</span>  I created pages of the panel using Vuetify library</li>
                                <li><span className={style.technologyWord}>Routing: </span> I implemented Routing with Vue Router</li>
                                <li><span className={style.technologyWord}>State Management:</span>   I improved the manageability of the application by using VueX</li>
                                <li><span className={style.technologyWord}>Code quality:</span>   I Improved part of the old adminis functionality on JQuery</li>
                            </ul>
                            <a className={style.linkProject1} href='https://msk.kassir.ru/' target='_blank'>Kassir.ru</a>

                        </div>
                    </Modal>,

                    widgetForPartners: <Modal
                        images={[
                            <img src={widget.img2} alt="widget for site" />,
                            <img src={widget.img3} alt="widget for site" />,
                            <img src={widget.img4} alt="widget for site" />,
                            <img src={widget.img5} alt="widget for site" />,
                            <img src={widget.img6} alt="widget for site" />,
                        ]}
                        show={this.state.modal} handleClose={this.hideModal}
                    >
                        <div className={style.contentInModal}>
                            <h2>Widget for partners</h2>
                            <h4 className={style.achievementsHeader}>Ticket sales on partner sites</h4>
                            <h4 className={style.achievementsHeader}>Stack: Preact, PostCSS</h4>
                            <ul>
                                <li><span className={style.technologyWord}>Localization:</span> I added English localization of widget</li>
                                <li><span className={style.technologyWord}>Customising: </span> I added the ability to customize a widget using CSS file</li>
                                <li><span className={style.technologyWord}>UX:</span>  I implemented new order fields via RestAPI</li>
                                <li><span className={style.technologyWord}>Code quality:</span>  I modified and refactored the order checkout page</li>
                                <li><span className={style.technologyWord}>Documentation:</span>  I created part of the documentation for the program</li>
                            </ul>
                            <a className={style.linkProject1} href='https://crocus-hall.ru/events/stas-pekha/' target='_blank'>Ticket Widget</a>

                        </div>
                    </Modal>,

                    superkassa: <Modal
                        images={[
                            <img src={superkassa.img2} alt="superkassa site" />,
                            <img src={superkassa.img3} alt="superkassa site" />,
                            <img src={superkassa.img4} alt="superkassa site" />,
                            <img src={superkassa.img5} alt="superkassa site" />,
                            <img src={superkassa.img6} alt="superkassa site" />,
                            <img src={superkassa.img7} alt="superkassa site" />,
                            <img src={superkassa.img8} alt="superkassa site" />,
                        ]}
                        show={this.state.modal} handleClose={this.hideModal}
                    >
                        <div className={style.contentInModal}>
                            <h2>Superkassa.ru</h2>
                            <h4 className={style.achievementsHeader}>Stack: React, Redux, Redux-Saga</h4>
                            <p>Airtickets agency which works with Aviasales and Skyskanner and helps search thousands of cheap tickets and cheap flight offers to your favorite.
                            </p>

                            <h4 className={style.achievementsHeader}>My achievements:</h4>
                            <ul>
                                <li>built fast and robust UI using <span className={style.technologyWord}>React</span></li>
                                <li>made predictable state management of the whole application with <span className={style.technologyWord}>Redux</span></li>
                                <li>wrote asynchronous things easier to manage with <span className={style.technologyWord}>Redux-Saga</span></li>
                                <li>made client-server communication with <span className={style.technologyWord}>Node.js</span></li>
                            </ul>
                            <a className={style.linkProject1} href='https://superkassa.ru' target='_blank'>Superkassa.ru</a>

                        </div>
                    </Modal>,

                    runes: <Modal
                        images={[
                            <img src={runes.img2} alt="nordic runes site" />,
                            <img src={runes.img3} alt="nordic runes site" />,
                            <img src={runes.img4} alt="nordic runes site" />,
                            <img src={runes.img5} alt="nordic runes site" />,
                            <img src={runes.img6} alt="nordic runes site" />
                        ]}
                        show={this.state.modal} handleClose={this.hideModal}
                    >
                        <div className={style.contentInModal}>
                            <h2>Runes of norse</h2>
                            <h4>Education website</h4>
                            <p>Helps people to begin to study the runes (fascinating and mysterious symbols from the ancient Norse/Germanic world) </p>
                            <h4 className={style.achievementsHeader}>I've done:</h4>
                            <ul>
                                <li>design concept using <span className={style.technologyWord}>Photoshop</span></li>
                                <li>layout coding with <span className={style.technologyWord}>HTML+CSS</span></li>
                                <li>page animations using <span className={style.technologyWord}>jQuery</span></li>
                            </ul>
                            <a className={style.linkProject1} href='https://alan-eng.github.io/runes/' target='_blank'>Runes of norse</a>

                        </div>
                    </Modal>,

                    tenses: <Modal
                        images={[
                            <img src={tensesGeneratorImg} className={style.imgInModal} alt="superkassa site" />,
                            <img src={tensesGenerator1Img} className={style.imgInModal} alt="superkassa site" />,
                            <img src={tensesGenerator2Img} className={style.imgInModal} alt="superkassa site" />
                        ]}
                        show={this.state.modal} handleClose={this.hideModal}
                    >
                        <div className={style.contentInModal}>
                            <h2>English tenses generator</h2>
                            <h4>interactive table</h4>

                            <p>Help English language learners with grammar.</p>
                            <h4 className={style.achievementsHeader}>I've done:</h4>
                            <ul>
                                <li>material design components <span className={style.technologyWord}>Material UI + React</span></li>
                                <li>layout coding with <span className={style.technologyWord}>HTML+CSS</span></li>
                            </ul>

                            <a className={style.linkProject1} href='https://alan-eng.github.io/english-tenses-generator/' target='_blank'>Tenses-generator</a>

                        </div>
                    </Modal>
                }[this.state.modal]}
            </section>
        )
    }
};

export default Projects;