const fetchWeather = function(event){
  event.preventDefault();
  const input = $("#weather-input").val().toLowerCase();

  $.ajax(`http://api.openweathermap.org/data/2.5/forecast?q=${input}&units=metric&appid=c7a1e27e540b032aa648b4915be385aa`).done(function(data){
    $("#weather-result").text("Today's Weather: " + data.list[0].weather[0].description);
    $("#temp-min").text("Lowest temperature: " + data.list[0].main.temp_min + "°C");
    $("#temp-max").text("Highest temperature: " + data.list[0].main.temp_max + "°C");
    $("#humidity").text("Humidity: " + data.list[0].main.humidity + "%");
  });
};

$("#weather").on("submit", fetchWeather);

const fetchApod = function(event){
  event.preventDefault();

  $.ajax("https://api.nasa.gov/planetary/apod?api_key=QEBH3y67sugkR09XQ9YIssErGLss2ow49tcNYiSe").done(function(data){
    $("#apod-title").text(data.title);
    $("#apod-result").attr("src", data.url);

  });
};

$("#apod").on("submit", fetchApod);

const countries = {
    "BD": "Bangladesh",
    "BE": "Belgium",
    "BF": "Burkina Faso",
    "BG": "Bulgaria",
    "BA": "Bosnia and Herzegovina",
    "BB": "Barbados",
    "WF": "Wallis and Futuna",
    "BL": "Saint Barthelemy",
    "BM": "Bermuda",
    "BN": "Brunei",
    "BO": "Bolivia",
    "BH": "Bahrain",
    "BI": "Burundi",
    "BJ": "Benin",
    "BT": "Bhutan",
    "JM": "Jamaica",
    "BV": "Bouvet Island",
    "BW": "Botswana",
    "WS": "Samoa",
    "BQ": "Bonaire, Saint Eustatius and Saba ",
    "BR": "Brazil",
    "BS": "Bahamas",
    "JE": "Jersey",
    "BY": "Belarus",
    "BZ": "Belize",
    "RU": "Russia",
    "RW": "Rwanda",
    "RS": "Serbia",
    "TL": "East Timor",
    "RE": "Reunion",
    "TM": "Turkmenistan",
    "TJ": "Tajikistan",
    "RO": "Romania",
    "TK": "Tokelau",
    "GW": "Guinea-Bissau",
    "GU": "Guam",
    "GT": "Guatemala",
    "GS": "South Georgia and the South Sandwich Islands",
    "GR": "Greece",
    "GQ": "Equatorial Guinea",
    "GP": "Guadeloupe",
    "JP": "Japan",
    "GY": "Guyana",
    "GG": "Guernsey",
    "GF": "French Guiana",
    "GE": "Georgia",
    "GD": "Grenada",
    "GB": "United Kingdom",
    "GA": "Gabon",
    "SV": "El Salvador",
    "GN": "Guinea",
    "GM": "Gambia",
    "GL": "Greenland",
    "GI": "Gibraltar",
    "GH": "Ghana",
    "OM": "Oman",
    "TN": "Tunisia",
    "JO": "Jordan",
    "HR": "Croatia",
    "HT": "Haiti",
    "HU": "Hungary",
    "HK": "Hong Kong",
    "HN": "Honduras",
    "HM": "Heard Island and McDonald Islands",
    "VE": "Venezuela",
    "PR": "Puerto Rico",
    "PS": "Palestinian Territory",
    "PW": "Palau",
    "PT": "Portugal",
    "SJ": "Svalbard and Jan Mayen",
    "PY": "Paraguay",
    "IQ": "Iraq",
    "PA": "Panama",
    "PF": "French Polynesia",
    "PG": "Papua New Guinea",
    "PE": "Peru",
    "PK": "Pakistan",
    "PH": "Philippines",
    "PN": "Pitcairn",
    "PL": "Poland",
    "PM": "Saint Pierre and Miquelon",
    "ZM": "Zambia",
    "EH": "Western Sahara",
    "EE": "Estonia",
    "EG": "Egypt",
    "ZA": "South Africa",
    "EC": "Ecuador",
    "IT": "Italy",
    "VN": "Vietnam",
    "SB": "Solomon Islands",
    "ET": "Ethiopia",
    "SO": "Somalia",
    "ZW": "Zimbabwe",
    "SA": "Saudi Arabia",
    "ES": "Spain",
    "ER": "Eritrea",
    "ME": "Montenegro",
    "MD": "Moldova",
    "MG": "Madagascar",
    "MF": "Saint Martin",
    "MA": "Morocco",
    "MC": "Monaco",
    "UZ": "Uzbekistan",
    "MM": "Myanmar",
    "ML": "Mali",
    "MO": "Macao",
    "MN": "Mongolia",
    "MH": "Marshall Islands",
    "MK": "Macedonia",
    "MU": "Mauritius",
    "MT": "Malta",
    "MW": "Malawi",
    "MV": "Maldives",
    "MQ": "Martinique",
    "MP": "Northern Mariana Islands",
    "MS": "Montserrat",
    "MR": "Mauritania",
    "IM": "Isle of Man",
    "UG": "Uganda",
    "TZ": "Tanzania",
    "MY": "Malaysia",
    "MX": "Mexico",
    "IL": "Israel",
    "FR": "France",
    "IO": "British Indian Ocean Territory",
    "SH": "Saint Helena",
    "FI": "Finland",
    "FJ": "Fiji",
    "FK": "Falkland Islands",
    "FM": "Micronesia",
    "FO": "Faroe Islands",
    "NI": "Nicaragua",
    "NL": "Netherlands",
    "NO": "Norway",
    "NA": "Namibia",
    "VU": "Vanuatu",
    "NC": "New Caledonia",
    "NE": "Niger",
    "NF": "Norfolk Island",
    "NG": "Nigeria",
    "NZ": "New Zealand",
    "NP": "Nepal",
    "NR": "Nauru",
    "NU": "Niue",
    "CK": "Cook Islands",
    "XK": "Kosovo",
    "CI": "Ivory Coast",
    "CH": "Switzerland",
    "CO": "Colombia",
    "CN": "China",
    "CM": "Cameroon",
    "CL": "Chile",
    "CC": "Cocos Islands",
    "CA": "Canada",
    "CG": "Republic of the Congo",
    "CF": "Central African Republic",
    "CD": "Democratic Republic of the Congo",
    "CZ": "Czech Republic",
    "CY": "Cyprus",
    "CX": "Christmas Island",
    "CR": "Costa Rica",
    "CW": "Curacao",
    "CV": "Cape Verde",
    "CU": "Cuba",
    "SZ": "Swaziland",
    "SY": "Syria",
    "SX": "Sint Maarten",
    "KG": "Kyrgyzstan",
    "KE": "Kenya",
    "SS": "South Sudan",
    "SR": "Suriname",
    "KI": "Kiribati",
    "KH": "Cambodia",
    "KN": "Saint Kitts and Nevis",
    "KM": "Comoros",
    "ST": "Sao Tome and Principe",
    "SK": "Slovakia",
    "KR": "South Korea",
    "SI": "Slovenia",
    "KP": "North Korea",
    "KW": "Kuwait",
    "SN": "Senegal",
    "SM": "San Marino",
    "SL": "Sierra Leone",
    "SC": "Seychelles",
    "KZ": "Kazakhstan",
    "KY": "Cayman Islands",
    "SG": "Singapore",
    "SE": "Sweden",
    "SD": "Sudan",
    "DO": "Dominican Republic",
    "DM": "Dominica",
    "DJ": "Djibouti",
    "DK": "Denmark",
    "VG": "British Virgin Islands",
    "DE": "Germany",
    "YE": "Yemen",
    "DZ": "Algeria",
    "US": "United States",
    "UY": "Uruguay",
    "YT": "Mayotte",
    "UM": "United States Minor Outlying Islands",
    "LB": "Lebanon",
    "LC": "Saint Lucia",
    "LA": "Laos",
    "TV": "Tuvalu",
    "TW": "Taiwan",
    "TT": "Trinidad and Tobago",
    "TR": "Turkey",
    "LK": "Sri Lanka",
    "LI": "Liechtenstein",
    "LV": "Latvia",
    "TO": "Tonga",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "LR": "Liberia",
    "LS": "Lesotho",
    "TH": "Thailand",
    "TF": "French Southern Territories",
    "TG": "Togo",
    "TD": "Chad",
    "TC": "Turks and Caicos Islands",
    "LY": "Libya",
    "VA": "Vatican",
    "VC": "Saint Vincent and the Grenadines",
    "AE": "United Arab Emirates",
    "AD": "Andorra",
    "AG": "Antigua and Barbuda",
    "AF": "Afghanistan",
    "AI": "Anguilla",
    "VI": "U.S. Virgin Islands",
    "IS": "Iceland",
    "IR": "Iran",
    "AM": "Armenia",
    "AL": "Albania",
    "AO": "Angola",
    "AQ": "Antarctica",
    "AS": "American Samoa",
    "AR": "Argentina",
    "AU": "Australia",
    "AT": "Austria",
    "AW": "Aruba",
    "IN": "India",
    "AX": "Aland Islands",
    "AZ": "Azerbaijan",
    "IE": "Ireland",
    "ID": "Indonesia",
    "UA": "Ukraine",
    "QA": "Qatar",
    "MZ": "Mozambique"
};

const fetchHoliday = function(event){
  event.preventDefault();

  let countryId;

  const country = $("#holiday-country").val();
  for (var key in countries) {
    if (countries[key] === country) {
      countryId = key;
    }
  }
  const year = + $("#year").val();

  $.ajax(`https://calendarific.com/api/v2/holidays?api_key=db0675eca89ac3e0a53b44305e1b1d98c2bc8446&country=${countryId}&year=${year}`).done(function(data){
    const holidays = data.response.holidays;

    // for(var key in holidays){
    //   $("#name").text("Holiday Name: " + holidays[key].name);
    //   $("#description").text("Description: " + holidays[key].description);
    //   $("#date").text("Date: " + holidays[key].date.iso);
    //   $("#type").text("Holiday Type: " + holidays[key].type[0]);
    //   $("#locations").text("Locations: " + holidays[key].locations);
    // }
    Object.keys(holidays).forEach(function(key){
      $("#work").append(
        `<div>
        <p>Holiday Name: ${holidays[key].name}</p>
        <p>Description: ${holidays[key].description}</p>
        <p>Date: ${holidays[key].date.iso}</p>
        <p>Holiday Type: ${holidays[key].type[0]}</p>
        <p>Locations: ${holidays[key].locations}</p>
        -------------------
        </div>`);

    });
  });


};

$("#holiday").on("submit", fetchHoliday);

const fetchAdvice = function(event){
  event.preventDefault();

  $.ajax("https://api.adviceslip.com/advice").done(function(data){
    const text = JSON.parse(data);
    $("#advice-content").text(text.slip.advice);

  });
};

$("#advice").on("submit", fetchAdvice);
