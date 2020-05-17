import React from 'react';

import Header from '../../components/header/Header';
import PromoContainer from '../../components/promoContainer/PromoContainer';

const MainPage = () => {
    return (
        <div className="main">
            <section className="movie-card">
                <div className="movie-card__bg">
                    <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
                </div>
                <h1 className="visually-hidden">WTW</h1>
                <Header />
                <PromoContainer />
            </section>
        </div>
    );
};

export default React.memo(MainPage);
