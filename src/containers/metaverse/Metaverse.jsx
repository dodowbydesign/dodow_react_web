import React from "react";

import "./metaverse.css"
import masquerade_logo from "../../asset/img/masqueradeballlogo.png";
import anouiz_logo from "../../asset/img/anouizlogo.png";

const Metaverse = () => {
    return(
        <main id="metaverse">
            <h1>My metaverse</h1>
            <p>My interest and passion pushed and aspired me to approach and create differently through the NFT's and the Metaverse.</p>
            <p>You can check my follow work and collections.</p>
            <div id="display">
            <section>
                <img src={masquerade_logo} alt="masquerade_logo" id="masquerade_logo"/>
                <a>
                    <h3>The Masquerade Ball</h3>
                </a>
            </section>
            <section>
                <img src={anouiz_logo} alt="anouiz_logo" id="anouiz"/>
                <a>
                    <h3>MAISON ANOUIZ</h3>
                </a>
            </section>
            </div>


        </main>
    )
}

export default Metaverse;