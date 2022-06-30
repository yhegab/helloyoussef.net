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
        <div className="movies">
          <h3>Movies</h3>
          <ul>
            <li>UNDER CONSTRUCTION</li>
            {/*
            <li>12 Angry Men (1957)</li>
            <li>Taxi Driver (1976)</li>
            <li>The Shining (1980)</li>
            <li>Raiders of the Lost Ark (1981)</li>
            <li>Ghostbusters (1984)</li>
            <li>Karate Kid (1984)</li>
            <li>The Terminator (1985)</li>
            <li>Back to the Future (1985)</li>
            <li>The Breakfast Club (1985)</li>
            <li>The Goonies (1985)</li>
            <li>Ferris Bueller&apos;s Day Off (1986)</li>
            <li>The Castle in the Sky (1986)</li>
            <li>Stand by Me (1986)</li>
            <li>Die Hard (1988)</li>
            <li>Big (1988)</li>
            <li>My Neighbour Totoro (1988)</li>
            <li>Dead Poet&apos;s Society (1989)</li>
            <li>Total Recall (1990)</li>
            <li>Awakenings (1990) </li>
            <li>The Silence of the Lambs (1991) </li>
            <li>Reservoir Dogs (1992)</li>
            <li>Schindler&apos;s List (1993)</li>
            <li>Jurassic Park (1993)</li>
            <li>Groundhog Day (1993)</li>
            <li>Shawshank Redemption (1994)</li>
            <li>Pulp Fiction (1994)</li>
            <li>The Lion King (1994)</li>
            <li>Forrest Gump (1994)</li>
            <li>Apollo 13 (1994)</li>
            <li>Jumanji (1995)</li>
            <li>Good Will Hunting (1997)</li>
            <li>Saving Private Ryan (1998)</li>
            <li>The Truman Show (1998)</li>
            <li>The Green Mile (1999)</li>
            <li>Toy Story 2 (1999)</li>
            <li>Fight Club (1999)</li>
            <li>The Matrix (1999)</li>
            <li>Memento (2000)</li>
            <li>Cast Away (2000)</li>
            <li>O Brother, Where art thou? (2000)</li>
            <li>Gladiator (2000)</li>
            <li>Donnie Darko (2001)</li>
            <li>The Lord of the Rings (2001)</li>
            <li>Shrek (2001)</li>
            <li>Monsters, Inc. (2001)</li>
            <li>Spirited Away (2001)</li>
            <li>Spider-Man (2002)</li>
            <li>Signs (2002)</li>
            <li>Holes (2003)</li>
            <li>Finding Nemo (2003)</li>
            <li>Big Fish (2003)</li>
            <li>I, Robot (2004)</li>
            <li>Finding Neverland (2004)</li>
            <li>The Incredibles (2004)</li>
            <li>Eternal Sunshine of the Spotless Mind (2004)</li>
            <li>The Dark Knight trilogy (2005)</li>
            <li>Coach Carter (2005)</li>
            <li>War of the Worlds (2005)</li>
            <li>The Prestige (2006)</li>
            <li>The Departed (2006)</li>
            <li>Blood Diamond (2006)</li>
            <li>The Pursuit of Happyness (2006)</li>
            <li>Ratatouille (2007)</li>
            <li>Gone Baby Gone (2007)</li>
            <li>No Country for Old Men (2007)</li>
            <li>The Mist (2007)</li>
            <li>Superbad (2007)</li>
            <li>Slumdog Millionaire (2008)</li>
            <li>Iron Man (2008)</li>
            <li>Wall-E (2008)</li>
            <li>The Informant! (2009)</li>
            <li>Up (2009)</li>
            <li>Coraline (2009)</li>
            <li>Inglorious Basterds (2009)</li>
            <li>Inception (2010)</li>
            <li>Shutter Island (2010)</li>
            <li>The Other Guys (2010)</li>
            <li>The Lincoln Lawyer (2011) </li>
            <li>Moneyball (2011)</li>
            <li>Life of Pi (2012)</li>
            <li>Looper (2012)</li>
            <li>Django Unchained (2012)</li>
            <li>21 Jump Street (2012)</li>
            <li>The Conjuring</li>
            <li>The Grand Budapest Hotel (2014)</li>
            <li>John Wick (2014)</li>
            <li>Guardians of the Galaxy (2014)</li>
            <li>Gone Girl (2014)</li>
            <li>Edge of Tomorrow</li>
            <li>The Hateful Eight (2015)</li>
            <li>The Martian (2015)</li>
            <li>The Big Short (2015)</li>
            <li>Le Petit Prince (2015)</li>
            <li>Ant-Man (2015)</li>
            <li>La La Land (2016)</li>
            <li>Doctor Strange (2016)</li>
            <li>Don&apos;t Breathe (2016)</li>
            <li>Zootopia (2016)</li>
            <li>Wonder Woman (2017)</li>
            <li>Get Out (2017)</li>
            <li>It (2017)</li>
            <li>Logan (2017)</li>
            <li>Into the Spider-Verse (2018)</li>
            <li>BlackKklansman (2018)</li>
            <li>A Quiet Place (2018)</li>
            <li>A Simple Favour (2018)</li>
            <li>Game Night (2018)</li>
            <li>Freaks (2018)</li>
            <li>Shazam (2019)</li>
            <li>I am Mother (2019)</li>
            <li>Once Upon A Time in Hollywood (2019)</li>
            <li>Joker (2019)</li>
            <li>Parasite (2019)</li>
            <li>Klaus (2019)</li>
            <li>Tenet (2020)</li>
            <li>His House (2020)</li>
            <li>The Social Dilemma (2020)</li>
            <li>A Quiet Place 2 (2021)</li>
            <li>Luca (2021)</li>
            <li>Jungle Cruise (2021)</li>
            <li>Dune (2021)</li>
            <li>Free Guy (2021)</li>
            <li>Spider-Man: No Way Home (2021) </li>
            <li>Scream (2022)</li>
            <li>Nightmare Alley (2022) </li>
            <li>The Batman (2022)</li>
            <li>Everything, Everywhere, All At Once (2022)</li>
            <li>Men (2022)</li>*/}
          </ul>
        </div>
        <div className="shows">
          <h3>TV Shows</h3>
          <ul>
            {/*<li>The Twilight Zone (1959-1964)</li>
            <li>Friends (1994-2004)</li>
            <li>Firefly (2002-2003)</li>
            <li>Avatar (2003-2008)</li>
            <li>Arrested Development (2003-2019)</li>
            <li>Lost (2004-2010)</li>
            <li>Deadwood (2004-2006)</li>
            <li>The Office (2005-2013)</li>
            <li>30 Rock (2006-2013)</li>
            <li>Mad Men (2007-2015)</li>
            <li>Breaking Bad (2008-2013)</li>
            <li>Community (2009-2015)</li>
            <li>Parks and Recreation (2009-2015)</li>
            <li>Justified (2010-2015)</li>
            <li>Game of Thrones (2011-2019)</li>
            <li>Black Mirror (2011-)</li>
            <li>Veep (2012-2019)</li>
            <li>Key & Peele (2012-2015)</li>
            <li>Brooklyn Nine-Nine (2013-)</li>
            <li>Rick and Morty (2013-)</li>
            <li>BoJack Horseman (2014-2020)</li>
            <li>Master of None (2015-2017)</li>
            <li>Narcos (2015-2016)</li>
            <li>Better Call Saul (2015-)</li>
            <li>Schitt's Creek (2015-)</li>
            <li>Stranger Things (2016-)</li>
            <li>Fleabag (2016-2019)</li>
            <li>The People v. O. J. Simpson (2016)</li>
            <li>Atlanta (2016-)</li>
            <li>The Crown (2016-)</li>
            <li>The Good Place (2016-2020)</li>
            <li>Letterkenny (2016-)</li>
            <li>The Tick (2016-2019)</li>
            <li>Santa Clarita Diet (2017-2019)</li>
            <li>The Marvelous Mrs. Maisel (2017-)</li>
            <li>Big Mouth (2017-)</li>
            <li>Big Little Lies (2017-2019)</li>
            <li>Imposters (2017-2018)</li>
            <li>The Haunting of Hill House (2018-)</li>
            <li>Maniac (2018)</li>
            <li>You (2018-)</li>
            <li>Sabrina (2018-2021)</li>
            <li>Barry (2018-)</li>
            <li>Altered Carbon (2018-)</li>
            <li>Death, Love, and Robots (2019)</li>
            <li>The Umbrella Academy (2019-)</li>
            <li>Chernobyl (2019)</li>
            <li>The Boys (2019-)</li>
            <li>Undone (2019-)</li>
            <li>The Witcher (2019-)</li>
            <li>Watchmen (2019-)</li>
            <li>Dead to Me (2019-)</li>
            <li>The Last Dance (2020)</li>
            <li>Upload (2020-)</li>
            <li>Mrs. America (2020)</li>
            <li>The Queen's Gambit (2020)</li>
            <li>Solar Opposites (2020-)</li>
            <li>Ted Lasso (2020-)</li>
            <li>Invincible (2021-)</li>
            <li>WandaVision (2021)</li>*/}
          </ul>
        </div>

        <div className="books">
          <h3>{'Music'}</h3>
          <ul>
            <li>Getz/Gilberto by Stan Getz and Joao Gilberto(1964)</li>
            <li>El Atlal by Umm Kulthum(1966)</li>
            <li>Ode To Quetzalcoatl by Dave Bixby(1969)</li>
            <li>Aghany Film Aby Fawk El Shogara by Abdul Halim Hafez(1969)</li>
            <li>Tell Me This Is a Dream by The Delfonics(1972)</li>
            <li>Colour Green by Sybille Baker(1973)</li>
            <li>I Want You by Marvin Gaye(1976)</li>
            <li>Brasil by Joao Gilberto(1981)</li>
            <li>Purple Rain by Prince(1984)</li>
            <li>Habibi Funk 018 by Hamid El Shaeri(1988)</li>
            <li>Either Or by Elliot Smith(1997)</li>
            <li>The Miseducation of Lauryn Hill by Lauryn Hill(1998)</li>
            <li>Voodoo by D'Angelo(2001)</li>
            <li>The Glow Pt. 2 by The Microphones(2001)</li>
            <li>MTV Unplugged No.20 by Lauryn Hill(2002)</li>
            <li>Frank by Amy Winehouse(2003)</li>
            <li>For Lovers by Lamp(2004)</li>
            <li>MM...FOOD by MF DOOM(2004)</li>
            <li>Amy Winehouse by Back to Black(2006)</li>
            <li>Donuts by J Dilla(2006)</li>
            <li>New Moon by Elliot Smith(2007)</li>
            <li>For Emma Forever Ago by Bon Iver(2008)</li>
            <li>House of Balloons by The Weeknd(2010)</li>
            <li>Bon Iver by Bon Iver(2011)</li>
            <li>Helplessness Blues by Fleet Foxes(2011)</li>
            <li>James Blake by James Blake(2011)</li>
            <li>channel ORANGE by Frank Ocean(2012)</li>
            <li>Kaleidescope Dream by Miguel(2012)</li>
            <li>Trick by Alex G(2012)</li>
            <li>Bait Ones by Jai Paul(2013)</li>
            <li>Overgrown by James Blake(2013)</li>
            <li>Bury Me at Makeout Creek by Mitski(2014)</li>
            <li>Stay Up by Abhi Dijon(2014)</li>
            <li>Yume by Lamp(2014)</li>
            <li>On Your Own Love Again by Jessica Pratt(2014)</li>
            <li>Carrie and Lowell by Sufjan Stevens(2015)</li>
            <li>Hiatus Kaiyote by Choose Your Weapon(2015)</li>
            <li>To Pimp a Butterfly by Kendrick Lamar(2015)</li>
            <li>Blonde by Frank Ocean(2016)</li>
            <li>Endless by Frank Ocean(2016)</li>
            <li>Puberty 2 by Mitski(2016)</li>
            <li>Telefone by Noname(2016)</li>
            <li>Needle Paw by Nai Palm(2017)</li>
            <li>Process by Sampha(2017)</li>
            <li>Steve Lacy's Demos by Steve Lacy(2017)</li>
            <li>I Need to Start a Garden by Haley Heynderickx(2018)</li>
            <li>Atlanta Millionaires Club by Faye Webster(2019)</li>
            <li>CTRL by SZA(2019)</li>
            <li>BUBBA by Kaytranada(2019)</li>
            <li>MAN ALIVE! by King Krule(2020)</li>
            <li>Punisher by Phoebe Bridgers(2020)</li>
            <li>Texas Sun by Khruangbin and Leon Bridges(2020)</li>
            <li>Absolutely by Dijon(2021)</li>
            <li>Gemini Rights by Steve Lacy(2022)</li>
            <li>Texas Moon by Khruangbin and Leon Bridges(2022)</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Favourites);
