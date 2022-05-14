/**
 * Implements the title bar with the bride and groom names and the wedding date.
 *
 * id (string): Identifier for the element
 */

'use strict';

import React from 'react';

class TitleBar extends React.Component {

    render() {
        return (
            <header id={this.props.id} className="titlebar">
                <span className="groom-name">Gabi</span>
                <span className="groom-name">&nbsp;
                    <span>&amp;</span> Vitor
                </span>
                <div className="wedding-date">Rio de Janeiro, 03 de Setembro de 2022</div>
            </header>
        );
    }
}

export default TitleBar;
