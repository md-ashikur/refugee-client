import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // navbar===========
          refugee: "Refugee Accomodation",
          addAccomodation: "Add Accomodation",
          language: "Language",
          profile: "Profile",
          editListings: "Edit Listings",

          logout: "Logout",
          login: "Login",
          // button===============
          cancle: "CANCLE",
          add: "ADD",
          delete: "DELETE",
          edit: "EDIT",
          //accomodation ===============
          numberOfPeople: "Number of People",
          availableRooms: "Available Rooms",
          city: "City",
          from: "From",
          to: "To",
          email: "Email",
          phone: "Phone",

          // login page============
          forgotPass: "Forgot Password?",
          dontHaveAccount: "Don't have an account yet?",
          register: "Register",
          
          //Regidter page============
          createAccount: "Create Account",
          alreadyHaveAccount: "Already have an account?",

          // form validation
        },
      },
      uk: {
        translation: {
          refugee: "Приміщення для біженців",
          addAccomodation: "Додати житло",
          language: "Мову",
          profile: "Профіль",
          editListings: "Редагувати списки",

          logout: "Вийти",
          login: "Логін",

          cancle: "СКАСУВАТИ",
          add: "ДОДАТИ",
          delete: "ВИДАЛИТИ",
          edit: "РЕДАГУВАТИ",

          numberOfPeople: "Кількість людей",
          availableRooms: "Вільні кімнати",
          city: "місто",
          from: "Від",
          to: "до",
          email: "Електронна пошта",
          phone: "Телефон",

          // login page============
          forgotPass: "Забули пароль?",
          dontHaveAccount: "У вас ще немає облікового запису?",
          register: "зареєструватися",

          //Regidter page============
          createAccount: "Створити акаунт",
          alreadyHaveAccount: "Вже є аккаунт?",
        },
      },
      de: {
        translation: {
          refugee: "Flüchtlingsunterkunft",
          addAccomodation: "Unterkunft hinzufügen",
          language: "Sprache",
          profile: "Profil",
          editListings: "Listen bearbeiten",

          logout: "Ausloggen",
          login: "Anmeldung",

          cancle: "ABBRECHEN",
          add: "HINZUFÜGEN",
          delete: "LÖSCHEN",
          edit: "BEARBEITEN",

          numberOfPeople: "Anzahl der Personen",
          availableRooms: "Verfügbare Zimmer",
          city: "Stadt",
          from: "Aus",
          to: "Zu",
          email: "Email",
          phone: "Telefon",

          // login page============
          forgotPass: "Passwort vergessen?",
          dontHaveAccount: "Sie haben noch kein Konto?",
          register: "Registrieren",

          //Regidter page============
          createAccount: "Konto anlegen",
          alreadyHaveAccount: "Sie haben bereits ein Konto?",
        },
      },
    },
    lng: localStorage.getItem("lng") || "en",
  });

export default i18next;
