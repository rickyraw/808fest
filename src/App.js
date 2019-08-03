import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import logo from "./808fest_outline_vector-04.png";
import heroImage from "./808FEST-2019-FLYER.png";
import detailsImage from "./808fest-details.png";
import egyptianLover from "./808fest-egyptian-lover-web.jpg";
import baauer from "./BAAUER-808-FEST.jpg";
import blockParty from "./808fest-block-party.jpg";
import customDivider from "./808fest-atlanta-music-fest-underline.png";
import ticketwinIcon from "./Ticketwin-icon-black.png";
import blackTieLogo from "./blackTieLogo.png";
import "./App.css";

const mailChimpUrl =
  "https://facebook.us16.list-manage.com/subscribe/post?u=b7fd608fb43b7ab36223401b0&amp;id=5fba3b9adf";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#e72c35"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contast with palette.primary.main
    },
    secondary: {
      light: "#f4a06c",
      main: "#F1813C",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00"
    }
    // error: will use the default color
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">A celebration of all things BASS!</h1>
          </header>
          <div className="wrapper">
            <a
              href="https://www.eventbrite.com/e/808-fest-3-day-pass-2019-tickets-61452785937"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={heroImage} className="heroImage" />
              <h2 className="fourDayPass">4 DAY PASS</h2>
              <p>( $100 value )</p>
              <Button
                variant="contained"
                color="primary"
                className="mainTicketsButton"
              >
                <FontAwesome name="ticket" />
                &nbsp;Get Tickets&nbsp;
                <FontAwesome name="ticket" />
              </Button>
            </a>
            <a
              href="https://www.ticketfly.com/purchase/event/1859355?utm_medium=bks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={egyptianLover}
                className="heroImage"
                alt="egyptianLover"
              />
            </a>
            <a
              href="https://www.eventbrite.com/e/baauer-district-atlanta-tickets-61872340837"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={baauer} className="heroImage" alt="baauer" />
            </a>
            <a
              href="https://www.eventbrite.com/e/subtle-presents-a-block-party-warehouse-experience-2pm-4am-tickets-62549786094?aff=efbeventtix&fbclid=IwAR3zlzHzyEydL_QkDYOnC9UtCmdU_Mb-BUnO5gM2_6SfpgkBBicdQz8vuO0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={blockParty} className="heroImage" alt="blockParty" />
            </a>
            <img src={customDivider} className="customDivider" alt="logo" />
            <h2>
              <FontAwesome name="calendar" /> Schedule
            </h2>

            <Grid container spacing={24} className="centerGrid">
              <Grid item xs={12} sm={6}>
                <Card className="cardBorderYellow">
                  <CardContent>
                    <Typography color="textSecondary">AISLE 5</Typography>
                    <Typography variant="headline" component="h2">
                      THURSDAY
                      <br />
                      AUGUST 8, 2019
                    </Typography>
                    <Typography component="p">
                      EGYPTIAN LOVER PERFORMS LIVE WITH HIS TR-808! LOCAL
                      SUPPORT FROM REE DE LA VEGA AND MORE!
                    </Typography>
                  </CardContent>
                  <CardActions style={{ justifyContent: "center" }}>
                    <a
                      href="https://www.ticketfly.com/purchase/event/1859355?utm_medium=bks"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="small" color="secondary">
                        <FontAwesome name="ticket" />
                        &nbsp;Get Tickets&nbsp;
                        <FontAwesome name="ticket" />
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card className="cardBorderOrange">
                  <CardContent>
                    <Typography color="textSecondary">DISTRICT</Typography>
                    <Typography variant="headline" component="h2">
                      FRIDAY
                      <br />
                      AUGUST 9, 2019
                    </Typography>
                    <Typography component="p">
                      LIQUIFIED, RSVPATL & 808 FEST PRESENT: BAAUER + LOCAL
                      SUPPORT!
                    </Typography>
                  </CardContent>
                  <CardActions style={{ justifyContent: "center" }}>
                    <a
                      href="https://www.eventbrite.com/e/baauer-district-atlanta-tickets-61872340837"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="small" color="secondary">
                        <FontAwesome name="ticket" />
                        &nbsp;Get Tickets&nbsp;
                        <FontAwesome name="ticket" />
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Card className="cardBorderRed">
                  <CardContent>
                    <Typography color="textSecondary">
                      WESTSIDE CULTURAL ARTS CENTER
                    </Typography>
                    <Typography variant="headline" component="h2">
                      SATURDAY
                      <br />
                      AUGUST 10, 2019
                    </Typography>
                    <Typography component="p">
                      SUB.TLE & 808 FEST PRESENT: KILL FRENZY • SKOBER • VNSSA •
                      DATELESS VS BOT • AGENT ORANGE • STEADY ROCK + LOCAL
                      SUPPORT
                    </Typography>
                  </CardContent>
                  <CardActions style={{ justifyContent: "center" }}>
                    <a
                      href="https://www.eventbrite.com/e/subtle-presents-a-block-party-warehouse-experience-2pm-4am-tickets-62549786094?aff=efbeventtix&fbclid=IwAR233GW28D5qo6KZCgvYUJuA5Ds4upLiyowU20z9k0FW6RZnYFaCLUuN1DQ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="small" color="secondary">
                        <FontAwesome name="ticket" />
                        &nbsp;Get Tickets&nbsp;
                        <FontAwesome name="ticket" />
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card className="cardBorderYellow">
                  <CardContent>
                    <Typography color="textSecondary">
                      THE MUSIC ROOM & EDGEWOOD SPKEZ
                    </Typography>
                    <Typography variant="headline" component="h2">
                      SUNDAY
                      <br />
                      AUGUST 11, 2019
                    </Typography>
                    <Typography component="p">
                      EDGEWOOD SPKEZ @ 4PM • ARCHMAGE • JOHNNY GOODTIME • KAF •
                      MICKY & WICKY • NONJAKID • TIM C • RICKY RAW
                      <hr />
                      THE MUSIC ROOM @ 8PM • DAKOTA DESHON • ARMANNI REIGN •
                      ERVIN MITCHELL • PROTÉJAY • JSTELLA • LINZ PRAG • FRSHMNYR
                    </Typography>
                  </CardContent>
                  <CardActions style={{ justifyContent: "center" }}>
                    <a
                      href="https://www.eventbrite.com/e/808-fest-404-audio-access-dnb-tickets-66815598253"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="small" color="secondary">
                        <FontAwesome name="ticket" />
                        &nbsp;Get Tickets&nbsp;
                        <FontAwesome name="ticket" />
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>

            <img src={customDivider} className="customDivider" alt="logo" />

            <h2>
              <FontAwesome name="users" /> Social
            </h2>
            <Grid container spacing={24} className="centerGrid">
              <Grid item xs={3}>
                <a
                  href="mailto:808fest@gmail.com?subject=Contact%20808Fest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialIconLinks"
                >
                  <FontAwesome
                    name="envelope"
                    size="2x"
                    className="socialIcons"
                  />
                </a>
              </Grid>
              <Grid item xs={3}>
                <a
                  href="https://www.facebook.com/808fest/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialIconLinks"
                >
                  <FontAwesome
                    name="facebook-official"
                    size="2x"
                    className="socialIcons"
                  />
                </a>
              </Grid>
              <Grid item xs={3}>
                <a
                  href="https://www.instagram.com/808fest/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialIconLinks"
                >
                  <FontAwesome
                    name="instagram"
                    size="2x"
                    className="socialIcons"
                  />
                </a>
              </Grid>
              <Grid item xs={3}>
                <a
                  href="https://twitter.com/808fest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialIconLinks"
                >
                  <FontAwesome
                    name="twitter"
                    size="2x"
                    className="socialIcons"
                  />
                </a>
              </Grid>
            </Grid>

            <div id="mc_embed_signup">
              <div id="mc_embed_signup_scroll">
                <label>
                  <FontAwesome name="envelope" /> Subscribe to our mailing list
                </label>
                <MailchimpSubscribe url={mailChimpUrl} />
              </div>
            </div>
            <img src={customDivider} className="customDivider" alt="logo" />

            <div>Sponsored by:</div>
            <a
              className="blacktiecbdLink"
              href="https://blacktiecbd.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={blackTieLogo} className="heroImage" />
            </a>
          </div>
          <footer className="App-footer">
            <div>
              <img src={logo} className="App-footer-logo" alt="logo" />
            </div>
            <a
              className="ticketwinLink"
              href="http://ticketw.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>Website by Ticketwin</div>
              <div>
                <img src={ticketwinIcon} className="ticketwinIcon" />
              </div>
            </a>
          </footer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

// 808 Fest + Liquified Present
// BAAUER
// tDISTRICT
// Fri, Aug 9, 2019, 10:00 PM –
// Sat, Aug 10, 2019, 3:00 AM EDT
// District Atlanta
// 269 Armour Drive Northeast
// Atlanta, GA 30324
// Https://Www.Eventbrite.Com/E/Baauer-District-Atlanta-Tickets-61872340837
