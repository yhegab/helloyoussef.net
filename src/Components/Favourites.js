import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});
class Favourites extends Component {
  render() {
    return (
      <div>
        <p>
          I&apos;ve found that I
          <b> really</b>
          {' '}
          enjoy making lists of things that I like so I thought I&apos;d put some of them here.
        </p>
        <div className="books">
          <h3>{'Albums'}</h3>
          <ul>
          <li>Getz/Gilberto by Stan Getz &amp; Joao Gilberto (1964)</li>
          <li>El Atlal by Umm Kulthum (1966)</li>
          <li>Ode To Quetzalcoatl by Dave Bixby (1969)</li>
          <li>Aghany Film Aby Fawk El Shogara by Abdul Halim Hafez (1969)</li>
          <li>Tell Me This Is a Dream by The Delfonics (1972)</li>
          <li>Colour Green by Sybille Baker (1973)</li>
          <li>I Want You by Marvin Gaye (1976)</li>
          <li>Brasil by Joao Gilberto (1981)</li>
          <li>Purple Rain by Prince (1984)</li>
          <li>Habibi Funk 018 by Hamid El Shaeri (1988)</li>
          <li>Either Or by Elliot Smith (1997)</li>
          <li>The Miseducation of Lauryn Hill by Lauryn Hill (1998)</li>
          <li>Voodoo by D'Angelo (2001)</li>
          <li>The Glow Pt. 2 by The Microphones (2001)</li>
          <li>MTV Unplugged No.20 by Lauryn Hill (2002)</li>
          <li>Frank by Amy Winehouse (2003)</li>
          <li>For Lovers by Lamp (2004)</li>
          <li>MM...FOOD by MF DOOM (2004)</li>
          <li>Amy Winehouse by Back to Black (2006)</li>
          <li>Donuts by J Dilla (2006)</li>
          <li>New Moon by Elliot Smith (2007)</li>
          <li>For Emma, Forever Ago by Bon Iver (2008)</li>
          <li>House of Balloons by The Weeknd (2010)</li>
          <li>Bon Iver by Bon Iver (2011)</li>
          <li>Helplessness Blues by Fleet Foxes (2011)</li>
          <li>James Blake by James Blake (2011)</li>
          <li>channel ORANGE by Frank Ocean (2012)</li>
          <li>Kaleidescope Dream by Miguel (2012)</li>
          <li>Trick by Alex G (2012)</li>
          <li>Bait Ones by Jai Paul (2013)</li>
          <li>Overgrown by James Blake (2013)</li>
          <li>Bury Me at Makeout Creek by Mitski (2014)</li>
          <li>Stay Up by Abhi/Dijon (2014)</li>
          <li>Yume by Lamp (2014)</li>
          <li>On Your Own Love Again by Jessica Pratt (2014)</li>
          <li>Carrie and Lowell by Sufjan Stevens (2015)</li>
          <li>Hiatus Kaiyote by Choose Your Weapon (2015)</li>
          <li>To Pimp a Butterfly by Kendrick Lamar (2015)</li>
          <li>Blonde by Frank Ocean (2016)</li>
          <li>Endless by Frank Ocean (2016)</li>
          <li>Puberty 2 by Mitski (2016)</li>
          <li>Telefone by Noname (2016)</li>
          <li>Needle Paw by Nai Palm (2017)</li>
          <li>Process by Sampha (2017)</li>
          <li>Steve Lacy's Demos by Steve Lacy (2017)</li>
          <li>I Need to Start a Garden by Haley Heynderickx (2018)</li>
          <li>Atlanta Millionaires Club by Faye Webster (2019)</li>
          <li>CTRL by SZA (2019)</li>
          <li>BUBBA by Kaytranada (2019)</li>
          <li>MAN ALIVE! by King Krule (2020)</li>
          <li>Punisher by Phoebe Bridgers (2020)</li>
          <li>Texas Sun by Khruangbin &amp; Leon Bridges (2020)</li>
          <li>Absolutely by Dijon (2021)</li>
          <li>Gemini Rights by Steve Lacy (2022)</li>
          <li>Texas Moon by Khruangbin &amp; Leon Bridges (2022)</li>
          </ul>
        </div>
        <div className="movies">
          <h3>Movies</h3>
          <ul>
            <li>Back to the Future (1985)</li>
            <li>The Breakfast Club (1985)</li>
            <li>Die Hard (1988)</li>
            <li>Dead Poet&apos;s Society (1989)</li>
            <li>Schindler&apos;s List (1993)</li>
            <li>Jurassic Park (1993)</li>
            <li>Pulp Fiction (1994)</li>
            <li>The Lion King (1994)</li>
            <li>Forrest Gump (1994)</li>
            <li>Jumanji (1995)</li>
            <li>Good Will Hunting (1997)</li>
            <li>The Truman Show (1998)</li>
            <li>Toy Story 2 (1999)</li>
            <li>The Matrix (1999)</li>
            <li>Monsters, Inc. (2001)</li>
            <li>Spirited Away (2001)</li>
            <li>Holes (2003)</li>
            <li>Finding Nemo (2003)</li>
            <li>Eternal Sunshine of the Spotless Mind (2004)</li>
            <li>The Pursuit of Happyness (2006)</li>
            <li>Ratatouille (2007)</li>
            <li>Superbad (2007)</li>
            <li>Wall-E (2008)</li>
            <li>Up (2009)</li>
            <li>Coraline (2009)</li>
            <li>Inglorious Basterds (2009)</li>
            <li>Inception (2010)</li>
            <li>La La Land (2016)</li>
            <li>Doctor Strange (2016)</li>
            <li>Get Out (2017)</li>
            <li>Logan (2017)</li>
            <li>Into the Spider-Verse (2018)</li>
            <li>BlackKklansman (2018)</li>
            <li>Everything, Everywhere, All At Once (2022)</li>
          </ul>
        </div>
        <div className="shows">
          <h3>TV Shows</h3>
          <ul>
            <li>Friends (1994-2004)</li>
            <li>Arrested Development (2003-2019)</li>
            <li>The Office (2005-2013)</li>
            <li>Breaking Bad (2008-2013)</li>
            <li>Community (2009-2015)</li>
            <li>Parks and Recreation (2009-2015)</li>
            <li>Black Mirror (2011-)</li>
            <li>BoJack Horseman (2014-2020)</li>
            <li>Master of None (2015-2017)</li>
            <li>Better Call Saul (2015-)</li>
            <li>The People v. O. J. Simpson (2016)</li>
            <li>Atlanta (2016-)</li>
            <li>The Good Place (2016-2020)</li>
            <li>You (2018-)</li>
            <li>The Last Dance (2020)</li>
            <li>The Queen's Gambit (2020)</li>
            <li>Ted Lasso (2020-)</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Favourites);
