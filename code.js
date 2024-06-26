const countryList = {
    AED: { name: "United Arab Emirates Dirham", code: "AE" },
    AFN: { name: "Afghan Afghani", code: "AF" },
    XCD: { name: "East Caribbean Dollar", code: "AG" },
    ALL: { name: "Albanian Lek", code: "AL" },
    AMD: { name: "Armenian Dram", code: "AM" },
    ANG: { name: "Netherlands Antillean Guilder", code: "AN" },
    AOA: { name: "Angolan Kwanza", code: "AO" },
    AQD: { name: "Antarctic Dollar", code: "AQ" },
    ARS: { name: "Argentine Peso", code: "AR" },
    AUD: { name: "Australian Dollar", code: "AU" },
    AZN: { name: "Azerbaijani Manat", code: "AZ" },
    BAM: { name: "Bosnia-Herzegovina Convertible Mark", code: "BA" },
    BBD: { name: "Barbadian Dollar", code: "BB" },
    BDT: { name: "Bangladeshi Taka", code: "BD" },
    XOF: { name: "West African CFA Franc", code: "BE" },
    BGN: { name: "Bulgarian Lev", code: "BG" },
    BHD: { name: "Bahraini Dinar", code: "BH" },
    BIF: { name: "Burundian Franc", code: "BI" },
    BMD: { name: "Bermudian Dollar", code: "BM" },
    BND: { name: "Brunei Dollar", code: "BN" },
    BOB: { name: "Bolivian Boliviano", code: "BO" },
    BRL: { name: "Brazilian Real", code: "BR" },
    BSD: { name: "Bahamian Dollar", code: "BS" },
    NOK: { name: "Norwegian Krone", code: "BV" },
    BWP: { name: "Botswana Pula", code: "BW" },
    BYR: { name: "Belarusian Ruble", code: "BY" },
    BZD: { name: "Belize Dollar", code: "BZ" },
    CAD: { name: "Canadian Dollar", code: "CA" },
    CDF: { name: "Congolese Franc", code: "CD" },
    XAF: { name: "Central African CFA Franc", code: "CF" },
    CHF: { name: "Swiss Franc", code: "CH" },
    CLP: { name: "Chilean Peso", code: "CL" },
    CNY: { name: "Chinese Yuan", code: "CN" },
    COP: { name: "Colombian Peso", code: "CO" },
    CRC: { name: "Costa Rican Colón", code: "CR" },
    CUP: { name: "Cuban Peso", code: "CU" },
    CVE: { name: "Cape Verdean Escudo", code: "CV" },
    CYP: { name: "Cypriot Pound", code: "CY" },
    CZK: { name: "Czech Koruna", code: "CZ" },
    DJF: { name: "Djiboutian Franc", code: "DJ" },
    DKK: { name: "Danish Krone", code: "DK" },
    DOP: { name: "Dominican Peso", code: "DO" },
    DZD: { name: "Algerian Dinar", code: "DZ" },
    ECS: { name: "Ecuadorian Sucre", code: "EC" },
    EEK: { name: "Estonian Kroon", code: "EE" },
    EGP: { name: "Egyptian Pound", code: "EG" },
    ETB: { name: "Ethiopian Birr", code: "ET" },
    EUR: { name: "Euro", code: "FR" },
    FJD: { name: "Fijian Dollar", code: "FJ" },
    FKP: { name: "Falkland Islands Pound", code: "FK" },
    GBP: { name: "British Pound Sterling", code: "GB" },
    GEL: { name: "Georgian Lari", code: "GE" },
    GGP: { name: "Guernsey Pound", code: "GG" },
    GHS: { name: "Ghanaian Cedi", code: "GH" },
    GIP: { name: "Gibraltar Pound", code: "GI" },
    GMD: { name: "Gambian Dalasi", code: "GM" },
    GNF: { name: "Guinean Franc", code: "GN" },
    GTQ: { name: "Guatemalan Quetzal", code: "GT" },
    GYD: { name: "Guyanaese Dollar", code: "GY" },
    HKD: { name: "Hong Kong Dollar", code: "HK" },
    HNL: { name: "Honduran Lempira", code: "HN" },
    HRK: { name: "Croatian Kuna", code: "HR" },
    HTG: { name: "Haitian Gourde", code: "HT" },
    HUF: { name: "Hungarian Forint", code: "HU" },
    IDR: { name: "Indonesian Rupiah", code: "ID" },
    ILS: { name: "Israeli New Sheqel", code: "IL" },
    INR: { name: "Indian Rupee", code: "IN" },
    IQD: { name: "Iraqi Dinar", code: "IQ" },
    IRR: { name: "Iranian Rial", code: "IR" },
    ISK: { name: "Icelandic Króna", code: "IS" },
    JMD: { name: "Jamaican Dollar", code: "JM" },
    JOD: { name: "Jordanian Dinar", code: "JO" },
    JPY: { name: "Japanese Yen", code: "JP" },
    KES: { name: "Kenyan Shilling", code: "KE" },
    KGS: { name: "Kyrgystani Som", code: "KG" },
    KHR: { name: "Cambodian Riel", code: "KH" },
    KMF: { name: "Comorian Franc", code: "KM" },
    KPW: { name: "North Korean Won", code:"KP"},
    KRW: { name: "South Korean Won", code: "KR" },
    KWD: { name: "Kuwaiti Dinar", code: "KW" },
    KYD: { name: "Cayman Islands Dollar", code: "KY" },
    KZT: { name: "Kazakhstani Tenge", code: "KZ" },
    LAK: { name: "Laotian Kip", code: "LA" },
    LBP: { name: "Lebanese Pound", code: "LB" },
    LKR: { name: "Sri Lankan Rupee", code: "LK" },
    LRD: { name: "Liberian Dollar", code: "LR" },
    LSL: { name: "Lesotho Loti", code: "LS" },
    LTL: { name: "Lithuanian Litas", code: "LT" },
    LVL: { name: "Latvian Lats", code: "LV" },
    LYD: { name: "Libyan Dinar", code: "LY" },
    MAD: { name: "Moroccan Dirham", code: "MA" },
    MDL: { name: "Moldovan Leu", code: "MD" },
    MGA: { name: "Malagasy Ariary", code: "MG" },
    MKD: { name: "Macedonian Denar", code: "MK" },
    MMK: { name: "Myanmar Kyat", code: "MM" },
    MNT: { name: "Mongolian Tugrik", code: "MN" },
    MOP: { name: "Macanese Pataca", code: "MO" },
    MRO: { name: "Mauritanian Ouguiya", code: "MR" },
    MTL: { name: "Maltese Lira", code: "MT" },
    MUR: { name: "Mauritian Rupee", code: "MU" },
    MVR: { name: "Maldivian Rufiyaa", code: "MV" },
    MWK: { name: "Malawian Kwacha", code: "MW" },
    MXN: { name: "Mexican Peso", code: "MX" },
    MYR: { name: "Malaysian Ringgit", code: "MY" },
    MZN: { name: "Mozambican Metical", code: "MZ" },
    NAD: { name: "Namibian Dollar", code: "NA" },
    XPF: { name: "CFP Franc", code: "NC" },
    NGN: { name: "Nigerian Naira", code: "NG" },
    NIO: { name: "Nicaraguan Córdoba", code: "NI" },
    NPR: { name: "Nepalese Rupee", code: "NP" },
    NZD: { name: "New Zealand Dollar", code: "NZ" },
    OMR: { name: "Omani Rial", code: "OM" },
    PAB: { name: "Panamanian Balboa", code: "PA" },
    PEN: { name: "Peruvian Nuevo Sol", code: "PE" },
    PGK: { name: "Papua New Guinean Kina", code: "PG" },
    PHP: { name: "Philippine Peso", code: "PH" },
    PKR: { name: "Pakistani Rupee", code: "PK" },
    PLN: { name: "Polish Zloty", code: "PL" },
    PYG: { name: "Paraguayan Guarani", code: "PY" },
    QAR: { name: "Qatari Rial", code: "QA" },
    RON: { name: "Romanian Leu", code: "RO" },
    RSD: { name: "Serbian Dinar", code: "RS" },
    RUB: { name: "Russian Ruble", code: "RU" },
    RWF: { name: "Rwandan Franc", code: "RW" },
    SAR: { name: "Saudi Riyal", code: "SA" },
    SBD: { name: "Solomon Islands Dollar", code: "SB" },
    SCR: { name: "Seychellois Rupee", code: "SC" },
    SDG: { name: "Sudanese Pound", code: "SD" },
    SEK: { name: "Swedish Krona", code: "SE" },
    SGD: { name: "Singapore Dollar", code: "SG" },
    SKK: { name: "Slovak Koruna", code: "SK" },
    SLL: { name: "Sierra Leonean Leone", code: "SL" },
    SOS: { name: "Somali Shilling", code: "SO" },
    SRD: { name: "Surinamese Dollar", code: "SR" },
    STD: { name: "São Tomé and Príncipe Dobra", code: "ST" },
    SVC: { name: "Salvadoran Colón", code: "SV" },
    SYP: { name: "Syrian Pound", code: "SY" },
    SZL: { name: "Swazi Lilangeni", code: "SZ" },
    THB: { name: "Thai Baht", code: "TH" },
    TJS: { name: "Tajikistani Somoni", code: "TJ" },
    TMT: { name: "Turkmenistani Manat", code: "TM" },
    TND: { name: "Tunisian Dinar", code: "TN" },
    TOP: { name: "Tongan Paʻanga", code: "TO" },
    TRY: { name: "Turkish Lira", code: "TR" },
    TTD: { name: "Trinidad and Tobago Dollar", code: "TT" },
    TWD: { name: "New Taiwan Dollar", code: "TW" },
    TZS: { name: "Tanzanian Shilling", code: "TZ" },
    UAH: { name: "Ukrainian Hryvnia", code: "UA" },
    UGX: { name: "Ugandan Shilling", code: "UG" },
    USD: { name: "United States Dollar", code: "US" },
    UYU: { name: "Uruguayan Peso", code: "UY" },
    UZS: { name: "Uzbekistan Som", code: "UZ" },
    VEF: { name: "Venezuelan Bolívar", code: "VE" },
    VND: { name: "Vietnamese Dong", code: "VN" },
    VUV: { name: "Vanuatu Vatu", code: "VU" },
    YER: { name: "Yemeni Rial", code: "YE" },
    ZAR: { name: "South African Rand", code: "ZA" },
    ZMK: { name: "Zambian Kwacha", code: "ZM" },
    ZWD: { name: "Zimbabwean Dollar", code: "ZW" }
};


