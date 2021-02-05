import React from 'react';
import {Header} from '../../components/Header/Header';
import './page.css'


export const Page: React.FC = () => (
    <article>
        <Header title='Rrepo'>
            <div className="example-links">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
        </Header>

        <section>
            <h2>Simple page</h2>
            <p>
                Just simple page that contains Header component for demo purpose and feel how to use it!
            </p>
            <p>
                Header component accepts children, as example we passed some links.
            </p>
        </section>
    </article>
);
