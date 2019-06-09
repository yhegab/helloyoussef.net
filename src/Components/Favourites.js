import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
//import Grid from '@material-ui/core/Grid'; 
 
const styles = theme => ({
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
        <p>I've found that I <b>really</b> enjoy making lists of things that I like so I thought I'd put some (all?) of them here. <b>Bolded</b> means work in progress. Last updated February 2019.</p>

        {/* <div className="root">
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className="paper">This is a movie</Paper>
          </Grid>
        </Grid>
        </div> */}
        <div className="movies">
        <h3>Movies</h3>
        <ul>
          <li>12 Angry Men (1957)</li>
          <li>The Shining (1980)</li>
          <li><b>E.T. the Extra-Terrestrial</b> (1982)</li>
          <li>Back to the Future (1985)</li>
          <li>The Breakfast Club (1985)</li>
          <li><b>The Goonies</b> (1985)</li>
          <li>Ferris Bueller's Day Off (1986)</li>
          <li>Die Hard (1988)</li>
          <li>Dead Poet's Society (1989)</li>
          <li><b>Silence of the Lambs</b> (1991)</li>
          <li>Reservoir Dogs (1992)</li>
          <li>Schindler's List (1993)</li>
          <li>Jurassic Park (1993)</li>
          <li><b>Groundhog Day</b> (1993)</li>
          <li>Shawshank Redemption (1994)</li>
          <li>The Lion King (1994)</li>
          <li>Forrest Gump (1994)</li>
          <li>Apollo 13 (1994)</li>
          <li>Jumanji (1995)</li>
          <li><b>Heat</b> (1995)</li>
          <li>Good Will Hunting (1997)</li>
          <li>Saving Private Ryan (1998)</li>
          <li>The Truman Show (1998)</li>
          <li><b>The Big Lebowski</b> (1998)</li>
          <li><b>The Insider</b> (1999)</li>
          <li>The Green Mile (1999)</li>
          <li>Toy Story 2 (1999)</li>
          <li>Fight Club (1999)</li>
          <li>The Matrix (1999)</li>
          <li><b>American Beauty</b> (1999)</li>
          <li><b>Memento</b> (2000)</li>
          <li>Cast Away (2000)</li>
          <li>O Brother, Where art thou? (2000)</li>
          <li>Gladiator (2000)</li>
          <li>Donnie Darko (2001)</li>
          <li>The Lord of the Rings (2001)</li>
          <li>Spider-Man (2002)</li>
          <li>Holes (2003)</li>
          <li>Finding Nemo (2003)</li>
          <li>Big Fish (2003)</li>
          <li><b>Kill Bill</b> (2004)</li>
          <li>I, Robot (2004)</li>
          <li>Finding Neverland (2004)</li>
          <li>The Incredibles (2004)</li>
          <li>Eternal Sunshine of the Spotless Mind (2004)</li>
          <li>The Dark Knight trilogy (2005)</li>
          <li>Coach Carter (2005)</li>
          <li><b>The New World</b> (2005)</li>
          <li>The Prestige (2006)</li>
          <li>Ratatouille (2007)</li>
          <li>Gone Baby Gone (2007)</li>
          <li>Slumdog Millionaire (2008)</li>
          <li>Iron Man (2008)</li>
          <li>Wall-E (2008)</li>
          <li>The Informant! (2009)</li>
          <li>Up (2009)</li>
          <li>Inception (2010)</li>
          <li>Life of Pi (2012)</li>
          <li>Django Unchained (2012)</li>
          <li>21 Jump Street (2012)</li>
          <li><b>12 Years a Slave</b> (2013)</li>
          <li>The Grand Budapest Hotel (2014)</li>
          <li>John Wick (2014)</li>
          <li>Gardians of the Galaxy (2014)</li>
          <li>Gone Girl (2014)</li>
          <li>The Hateful Eight (2015)</li>
          <li>The Martian (2015)</li>
          <li>The Big Short (2015)</li>
          <li>Le Petit Prince (2015)</li>
          <li>Ant-Man (2015)</li>
          <li>La La Land (2016)</li>
          <li>Doctor Strange (2016)</li>
          <li>Wonder Woman (2017)</li>
          <li>Get Out (2017)</li>
          <li>It (2017)</li>
          <li>Into the Spider-Verse (2018)</li>
          <li>BlackKklansman (2018)</li>
          <li>A Quiet Place (2018)</li>
          <li>A Simple Favour (2018)</li>
          <li>Game Night (2018)</li>
          <li>Shazam (2019)</li>
          <li>I am Mother (2019)</li>
        </ul>
        </div>
        <div className="shows">
        <h3>TV Shows</h3>
          <ul>
            <li><b>The Twilight Zone</b> (1959-1964)</li>
            <li>Friends (1994-2004)</li>
            <li>Firefly (2002-2003)</li>
            <li>Avatar: The Last Airbender (2003-2008)</li>
            <li>Lost (2004-2010)</li>
            <li>The Office (2005-2013)</li>
            <li>Mad Men (2007-2015)</li>
            <li>Breaking Bad (2008-2013)</li>
            <li>Community (2009-2015)</li>
            <li>Justified (2010-2015)</li>
            <li>Game of Thrones (2011-2019)</li>
            <li>Black Mirror (2011-)</li>
            <li>Brooklyn Nine-Nine (2013-)</li>
            <li>Rick and Morty (2013-)</li>
            <li>Narcos (2015-2016)</li>
            <li><b>Better Call Saul</b> (2015-)</li>
            <li>Stranger Things (2016-)</li>
            <li>Atlanta (2016-)</li>
            <li>The Good Place (2016-)</li>
            <li>Santa Clarita Diet (2017-)</li>
            <li>Imposters (2017-2018)</li>
            <li>The Haunting of Hill House (2018-)</li>
            <li>Maniac (2018)</li>
            <li>You (2018-)</li>
            <li>Sabrina (2018-)</li>
            <li>Death, Love, and Robots (2019)</li>
            <li>The Umbrella Academy (2019)</li>
            <li><b>Chernobyl</b> (2019)</li>
          </ul>
        </div>

        <div className="games">
        <h3>Video Games</h3>
        <ul>
          <li>Spider-Man</li>
          <li>Breath of the Wild</li>
          <li>The Last of Us</li>
          <li>Infamous 2</li>
          <li>GTA IV</li>
          <li>God of War III</li>
          <li>God of War (PS4)</li>
          <li>Portal</li>
          <li>Portal 2</li>
          <li>BioShock Infinite</li>
          <li>Borderlands 2</li>
          <li>CoD: Black Ops 1/2</li>
          <li>Rocket League</li>
          <li>FIFA</li>
          <li>Until Dawn</li>
          <li>Super Smash Bros Ultimate</li>
          <li>Mario Kart 8</li>
          <li>Mortal Kombat Armageddon</li>
          <li>Mortal Kombat 11</li>
          <li>Dead by Daylight</li>
          <li>Cuphead</li>
          <li>Celeste</li>
          <li>Uncharted 2</li>
          <li><b>Red Dead Redemption</b></li>
          <li><b>GTA V</b></li>
          <li><b>Horizon Zero Dawn</b></li>
          </ul>
          
          {/* <h3>Board Games</h3>
          <ul>
          <li>The Resistance: Avalon</li>
          <li>Coup</li>
          <li>Codenames</li>
          <li>Bang</li>
          <li>Exploding Kittens</li>
          </ul> */}
        </div>

        <div className="books">
        <h3>Books</h3>
        <ul>
          <li>Le Petit Prince (Saint-Exupéry)</li>
          <li>Le Compte de Monte-Cristo (Dumas)</li>
          <li>Kingkiller Chronicles (Rothfuss)</li>
          <li>Mistborn Trilogy (Brandon Sanderson)</li>
          <li>Small Steps (Louis Sachar)</li>
          <li>To Kill a Mockingbird (Harper Lee)</li>
          <li>The Qur'an</li>
          <li>The Circle (Dave Eggers)</li>
          <li>1984 (George Orwell)</li>
          <li>Brave New World (Aldous Huxley)</li>
          <li>The Mazerunner (James Dashner)</li>
          <li>Lord of the Flies (Golding)</li>
          <li>Ender's Game (Orson Scott Card)</li>
          <li>City of Ember (Jeanne DuPrau)</li>
        </ul>
        </div>
      </div>
    );
  }
}
 
export default withStyles(styles)(Favourites);
