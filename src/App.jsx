import "./App.css";

// REACT
import { useState, useEffect } from "react";

// UI COMPONENTS
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CloudIcon from "@mui/icons-material/Cloud";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

// LIBRARIES
import { useTranslation } from "react-i18next";
import moment from "moment/min/moment-with-locales";
moment.locale("ar");

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "./weatherApiSlice";

const theme = createTheme({
  typography: {
    fontFamily: "IBM",
  },
});

function App() {
  // REDUX USE
  const temp = useSelector((state) => {
    return state.weatherApi.weather
  })
  const dispatch = useDispatch();
  const loader = useSelector((state) => {
    return state.weatherApi.isLoading;
  });
  // === REDUX USE ===

  const { t, i18n } = useTranslation();

  // STATES

  const [dateAndTime, setDateAndTime] = useState("");
  const [locale, setLocale] = useState("ar");

  // ==== STATES ====

  // EVENT HANDLERS

  function handleLanguageChange() {
    if (locale == "en") {
      setLocale("ar");
      moment.locale("ar");
    } else {
      setLocale("en");
      moment.locale("en");
    }

    setDateAndTime(moment().format("dddd D MMMM YYYY - hh:mm a"));
  }

  // ==== EVENT HANDLERS ====

  useEffect(() => {
    // REDUX TRYING
    console.log("dispatchiing fetch weather");
    dispatch(fetchWeather());
    // === REDUX TRYING ===
    i18n.changeLanguage(locale);
  }, [i18n, locale, dispatch]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDateAndTime(moment().format("dddd D MMMM YYYY - hh:mm a"));

  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {/* CARD */}
            <div
              dir={locale == "en" ? "ltr" : "rtl"}
              style={{
                width: "100%",
                background: "rgb(28 52 91 / 36%)",
                color: "white",
                padding: "10px",
                borderRadius: "15px 0px",
                boxShadow: "0px 11px 1px rgba(0, 0, 0, 0.05)",
              }}
            >
              {/* CONTENT */}
              <div>
                {/* CITY AND TIME */}
                <div
                  dir={locale == "en" ? "ltr" : "rtl"}
                  style={{
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "start",
                    marginRight: "20px",
                    fontWeight: "600",
                  }}
                >
                  <Typography variant="h1">{t("city")}</Typography>
                  <Typography variant="h5" style={{ marginRight: "20px" }}>
                    {dateAndTime}
                  </Typography>
                </div>
                {/* ==CITY AND TIME== */}

                <hr />

                {/* CONTAINER OF DEGREE AND ICON */}
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  {/* DIGREE AND DETAILS */}
                  <div>
                    {/* TEMP */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {loader ? (
                        <CircularProgress
                          aria-label="Loading…"
                          style={{ color: "white" }}
                        />
                      ) : (
                        ""
                      )}
                      <Typography variant="h1">{temp.number}</Typography>
                      {/* TEMP IMAGE */}
                      {temp.icon && <img src={temp.icon} />}
                      {/* ==TEMP IMAGE== */}
                    </div>
                    {/* ==TEMP== */}

                    <Typography variant="h6" style={{ textAlign: "center" }}>
                      {t(temp.description)}
                    </Typography>

                    {/* MIN AND MAX */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}
                    >
                      <h5>
                        {t("min")}: {temp.min}
                      </h5>
                      <h5 style={{ margin: "0px 5px" }}>|</h5>
                      <h5>
                        {t("max")}: {temp.max}
                      </h5>
                    </div>
                    {/* ==MIN AND MAX== */}
                  </div>
                  {/* ==DIGREE AND DETAILS== */}
                  <CloudIcon style={{ fontSize: "200px", color: "white" }} />
                </div>
                {/* ==CONTAINER OF DEGREE AND ICON== */}
              </div>
              {/* ==CONTENT== */}
            </div>
            {/* ==CARD== */}
            {/* TRANSLATION */}
            <div
              dir="rtl"
              style={{
                display: "flex",
                justifyContent: "end",
                width: "100%",
                marginTop: "20px",
              }}
            >
              <Button
                variant="text"
                style={{ color: "white" }}
                onClick={handleLanguageChange}
              >
                {locale == "en" ? "Arabic" : "انجليزي"}
              </Button>
            </div>
            {/* ==TRANSLATION== */}
          </div>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
