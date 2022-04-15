import React from 'react';
import ReactDOM from 'react-dom/client';

const CarData = {
    "B": "Police vehicles",
    "EC": "Eastern Western Cape",
    "FS": "Free State (formerly Free State) province",
    "G": "Government vehicles (?)",
    "GP": "Gauteng province",
    "L": "Limpopo (Northern) province",
    "M": "Military vehicles",
    "MG": "Mpumalanga province governmental vehicles",
    "MP": "Mpumalanga province",
    "N": "(formerly used for) Limpopo (Northern) province",
    "NC": "Northern Western Cape",
    "NW": "North West province",
    "T": "Transvaal province",
    "WP": "Western Cape (only private license plates)",
    "ZN": "KwaZulu Natal province (only private license plates)",
    "BT": "Bantu Trust vehicles",
    "CA": "Cape Town, Western Cape",
    "CAA": "Cape Town, Western Cape",
    "CAB": "Aberdeen, Western Cape",
    "CAC": "Burgersdorp, Western Cape",
    "CAD": "Alexandria & Paterson, Western Cape",
    "CAE": "Aliwal North, Western Cape",
    "CAF": "Barkly East, Western Cape",
    "CAG": "Barkly West, Western Cape",
    "CAH": "Port Alfred & Bathurst, Western Cape",
    "CAJ": "Bedford, Western Cape",
    "CAL": "Britstown, Western Cape",
    "CAM": "Caledon & Kleinmond, Western Cape",
    "CAN": "Calvinia, Brandvlei & Loeriesfontein, Western Cape",
    "CAO": "Carnarvon, Western Cape",
    "CAP": "Cathcart, Western Cape",
    "CAR": "Clanwilliam & Lambert's Bay, Western Cape",
    "CAS": "Colesberg, Western Cape",
    "CAT": "Cradock, Western Cape",
    "CAU": "Fort Beaufort, Western Cape",
    "CAV": "Fraserburg, Western Cape",
    "CAW": "George, Western Cape",
    "CAY": "Upington, Western Cape",
    "CAZ": "Graaf",
    "CB": "Port Elizabeth, Western Cape",
    "CBA": "Hanover, Western Cape",
    "CBB": "Griquatown, Western Cape",
    "CBC": "Douglas, Western Cape",
    "CBE": "Hopetown & Strydenburg, Western Cape",
    "CBF": "Humansdorp & Jeffreys Bay, Western Cape",
    "CBG": "Jansenville, Western Cape",
    "CBH": "Kenhardt, Western Cape",
    "CBJ": "Komga, Western Cape",
    "CBK": "Kuruman, Western Cape",
    "CBL": "Ladismith, Western Cape",
    "CBM": "Laingsburg, Western Cape",
    "CBN": "Mafikeng, Western Cape",
    "CBO": "Hofmeyr, Western Cape",
    "CBP": "Middelburg, Western Cape",
    "CBR": "Montagu, Western Cape",
    "CBS": "Mossel Bay & Hartenbos, Western Cape",
    "CBT": "Murraysburg, Western Cape",
    "CBU": "Springbok, Western Cape",
    "CBV": "Pearston, Western Cape",
    "CBW": "Peddie, Western Cape",
    "CBX": "Philipstown, Petrusville & Vanderkloof, Western Cape",
    "CBY": "Piketberg, Western Cape",
    "CBZ": "Prieska, Western Cape",
    "CC": "Kimberley, Western Cape",
    "CCA": "Prince Albert, Western Cape",
    "CCB": "Richmond, Western Cape",
    "CCC": "Riverdale & Still Bay, Western Cape",
    "CCD": "Robertson & McGregor, Western Cape",
    "CCE": "Somerset East, Western Cape",
    "CCF": "Steynsburg, Western Cape",
    "CCG": "Steytlerville, Western Cape",
    "CCH": "Seymour, Western Cape",
    "CCJ": "Sutherland, Western Cape",
    "CCK": "Swellendam & Barrydale, Western Cape",
    "CCL": "Tarkastad, Western Cape",
    "CCM": "Tulbagh, Western Cape",
    "CCN": "Uitenhage & Despatch, Western Cape",
    "CCO": "Uniondale, Western Cape",
    "CCP": "Vanrhynsdorp & Klawer, Western Cape",
    "CCR": "Victoria West, Loxton & Vosburg, Western Cape",
    "CCS": "Vryburg & Reivilo, Western Cape",
    "CCT": "Willowmore, Western Cape",
    "CCU": "Dordrecht, Western Cape",
    "CCV": "Butterworth (aka Gcuwa), Western Cape (formerly Transkei)",
    "CCW": "Kokstad, Western Cape",
    "CCX": "Matatiele, Western Cape",
    "CD": "King William's Town, Western Cape",
    "CDA": "Elliot, Western Cape",
    "CDL": "Maclear, Western Cape",
    "CDX": "Middledrift, Western Cape",
    "CDZ": "Venderstad, Western Cape",
    "CE": "East London & Gonubie, Western Cape",
    "CEA": "Moorresburg, Western Cape",
    "CEB": "Kirkwood, Western Cape",
    "CEC": "Garies, Western Cape",
    "CED": "Hankey, Western Cape",
    "CEE": "Warrenton, Western Cape",
    "CEF": "Whittlesea, Western Cape",
    "CEG": "Heidelberg, Western Cape",
    "CEH": "Jamestown, Western Cape",
    "CEJ": "Lady Grey, Western Cape",
    "CEK": "Pofadder, Western Cape",
    "CEL": "Noupoort, Western Cape",
    "CEM": "Hermanus, Gans Bay, Onrus River & Stanford, Western Cape",
    "CEN": "Indwa, Western Cape",
    "CEO": "Grabouw, Western Cape",
    "CEP": "Strekstroom, Western Cape",
    "CER": "Bonnievale, Western Cape",
    "CES": "Albertinia, Western Cape",
    "CET": "Joubertine, Western Cape",
    "CEU": "Hartswater & Jan Kempdorf, Western Cape",
    "CEV": "Postmasburg & DaniÃ«lskuil, Western Cape",
    "CEW": "Olifantshoek, Sishen & Kathu, Western Cape",
    "CEX": "Porterville, Western Cape",
    "CEY": "Strand & Gordon's Bay, Western Cape",
    "CEZ": "Williston, Western Cape",
    "CF": "Grahamstown, Western Cape",
    "CFA": "Wolseley, Western Cape",
    "CFB": "Molteno, Western Cape",
    "CFC": "Stutterheim, Western Cape",
    "CFD": "Alice, Western Cape",
    "CFG": "Vredenburg & St Helena Bay, Western Cape",
    "CFH": "Kokamas, Western Cape",
    "CFK": "Keiskammahoek, Western Cape",
    "CFM": "Somerset West, Western Cape",
    "CFO": "Keimoes, Western Cape",
    "CFP": "Velddrif (formerly used for Laaiplek), Western Cape",
    "CFR": "Kuilsrivier & Brackensfel, Western Cape",
    "CFS": "Groblershoop, Western Cape",
    "CG": "Oudtshoorn, Western Cape",
    "CH": "Queenstown, Western Cape",
    "CJ": "Paarl & Franschhoek, Western Cape",
    "CK": "Malmesbury & Darling, Western Cape",
    "CL": "Stellenbosch, Western Cape",
    "CM": "De Aar, Western Cape",
    "CN": "Wellington, Western Cape",
    "CO": "Calitzdorp, Western Cape",
    "CR": "Hopefield & Langebaan, Western Cape",
    "CS": "Bredasdorp & Napier, Western Cape",
    "CT": "Ceres, Western Cape",
    "CU": "Port Nolloth, Western Cape",
    "CV": "Vredendal, Western Cape",
    "CW": "Worcester, De Doorns & Touwsrivier, Western Cape",
    "CWB": "Walvis Bay, Western Cape",
    "CX": "Knyana, Sedgefield & Plettenberg Bay, Western Cape",
    "CY": "Bellville, Durbanville & Kraaifontein, Western Cape",
    "CZ": "Beaufort West, Western Cape",
    "DK": "Rural Foundation vehicles",
    "DW": "Department of Water Affairs vehicles",
    "GAZ": "Gazankulu (formerly Ciskei) government vehicles",
    "GC": "Ciskei government vehicles",
    "GCA": "Alice, Western Cape (formerly Ciskei)",
    "GCB": "Hewu & Whittlesea, Western Cape (formerly Ciskei)",
    "GCC": "Keiskammahoek, Western Cape (formerly Ciskei)",
    "GCD": "Middledrift, Western Cape (formerly Ciskei)",
    "GCE": "Mdantsane, Western Cape (formerly Ciskei)",
    "GCF": "Peddie, Western Cape (formerly Ciskei)",
    "GCH": "Mpofu & Seymour, Western Cape (formerly Ciskei)",
    "GCJ": "Zwelitsha, Western Cape (formerly Ciskei)",
    "GCP": "Ciskei police vehicles",
    "GN": "Mhala, Limpopo? (formerly Gazankulu)",
    "GL": "Lulekani, Limpopo (formerly Gazankulu)",
    "GM": "Malamulele, Limpopo (formerly Gazankulu)",
    "GR": "Kitavi, Limpopo? (formerly Gazankulu)",
    "GY": "Giyani, Limpopo (formerly Gazankulu)",
    "KB": "Muwati, KaNgwane",
    "KC": "Nkomati, KaNgwane",
    "KD": "Nsikazi, KaNgwane",
    "KG": "KaNgwane government vehicles",
    "KNA": "Mdutjana, KwaNdebele",
    "KNB": "Mkobola, KwaNdebele",
    "KNE": "Ekangala, KwaNdebele",
    "KNF": "Vaalbank, KwaNdebele",
    "KNG": "KwaNdebele government vehicles",
    "KNK": "Kwa",
    "KNP": "KwaNdebele police vehicles",
    "KNT": "KwaNdebele Traffic Department vehicles",
    "KZN": "KwaZulu Natal council vehicles",
    "LEB": "1 ",
    "LG": "Lebowa Government",
    "LP": "Lebowa Police",
    "MD": "Department of Mining vehicles",
    "nan": "Alfred, KwaZulu Natal",
    "NB": "Bergville, KwaZulu Natal",
    "NBA": "Babanango, KwaZulu Natal",
    "NBB": "KwaZulu Natal Administration Boards vehicles",
    "NCO": "Colenso, KwaZulu Natal",
    "NCV": "Butterworth, KwaZulu Natal",
    "NCW": "Kokstad, KwaZulu Natal",
    "NCX": "Matatiele, KwaZulu Natal",
    "ND": "Durban, KwaZulu Natal",
    "NDC": "Durban council, KwaZulu Natal",
    "NDE": "Dundee, KwaZulu Natal",
    "NDH": "Dannhauser, KwaZulu Natal",
    "NDW": "Ndwedwe, KwaZulu Natal",
    "NE": "Estcourt, KwaZulu Natal",
    "NES": "Eschowe, KwaZulu Natal",
    "NF": "Msinga, KwaZulu Natal",
    "NGL": "Glencoe, KwaZulu Natal",
    "NH": "New Hanover, KwaZulu Natal",
    "NHL": "Hlabisa, KwaZulu Natal",
    "NIM": "Impendle, KwaZulu Natal",
    "NIN": "Ingwavuma, KwaZulu Natal",
    "NIP": "Polela, KwaZulu Natal",
    "NIX": "Ixopo, KwaZulu Natal",
    "NJ": "Inanda, KwaZulu Natal",
    "NK": "Richmond, KwaZulu Natal",
    "NKA": "Nkandla, KwaZulu Natal",
    "NKK": "Kranskop, KwaZulu Natal",
    "NKR": "Klip River, KwaZulu Natal",
    "NM": "Mapumulo, KwaZulu Natal",
    "NMA": "Mahlabatini, KwaZulu Natal",
    "NMG": "Magudu, KwaZulu Natal",
    "NMR": "Mooi River, KwaZulu Natal",
    "NN": "Newcastle, KwaZulu Natal",
    "NND": "Nongoma, KwaZulu Natal",
    "NO": "Mtonjaneni, KwaZulu Natal",
    "NP": "Pietermaritzburg, KwaZulu Natal",
    "NPA": "Natal Provincial Administration vehicles",
    "NPB": "Natal Parks Board vehicles",
    "NPC": "Pietermaritzburg city council, KwaZulu Natal",
    "NPN": "Pinetown, KwaZulu Natal",
    "NPNC": "Pinetown city council, KwaZulu Natal",
    "NPP": "Paulpietersburg, KwaZulu Natal",
    "NPS": "Lower Umzimkulu, KwaZulu Natal",
    "NR": "Lions River, KwaZulu Natal",
    "NRB": "Richards Bay, KwaZulu Natal",
    "NS": "Ngotshe, KwaZulu Natal",
    "NT": "Lower Tugela, KwaZulu Natal",
    "NTU": "Nqutu, KwaZulu Natal",
    "NU": "New Germany / Hillcrest, KwaZulu Natal",
    "NUB": "Ubombo, KwaZulu Natal",
    "NUD": "Underberg, KwaZulu Natal",
    "NUF": "Lower Umfolosi, KwaZulu Natal",
    "NUL": "Umbumbulu, KwaZulu Natal",
    "NUM": "Greytown, KwaZulu Natal",
    "NUR": "Umhlanga Rocks, KwaZulu Natal",
    "NUT": "Utrecht, KwaZulu Natal",
    "NUZ": "Umlazi, KwaZulu Natal",
    "NV": "Vryheid, KwaZulu Natal",
    "NX": "Scottburg (formerly Alexandria), KwaZulu Natal",
    "NZ": "Mtunzini, KwaZulu Natal",
    "OA": "Bethlehem, Free State",
    "OAB": "Reitz, Free State",
    "OAF": "Kestell, Free State",
    "OB": "Bloemfontein, Free State",
    "OBB": "Brandfort, Free State",
    "OBD": "Dewetsdorp, Free State",
    "OBG": "Reddersburg, Free State",
    "OBT": "Botshabele, Free State",
    "OBW": "Phuthadistjhaba, Free State",
    "OC": "Bethulie, Free State",
    "OCC": "Springfontein, Free State",
    "OD": "Boshoff, Free State",
    "ODB": "Hertzogville, Free State",
    "ODD": "Deslesville, Free State",
    "OE": "Edenburg, Free State",
    "OEB": "Trompsburg, Free State",
    "OF": "Fauresmith, Free State",
    "OFB": "Jagersfontein, Free State",
    "OFD": "Koffiefontein, Free State",
    "OFH": "Petrusburg, Free State",
    "OG": "Picksburg, Free State",
    "OGB": "Fouriesburg, Free State",
    "OH": "Frankfort, Free State",
    "OHB": "Villiers, Free State",
    "OHS": "Harrismith, Free State",
    "OIC": "Warden, Free State",
    "OIL": "Sasolburg, Free State",
    "OJ": "Heilbron, Free State",
    "OK": "Hoopstad, Free State",
    "OKB": "Bultfontein, Free State",
    "OKC": "Odendaalsrus, Free State",
    "OKD": "Wesselsbron, Free State",
    "OKE": "Welkom, Free State",
    "OL": "Jacobsdal, Free State",
    "OM": "Kroonstad, Free State",
    "OMB": "Bothaville, Free State",
    "OMF": "Viljoenskroon, Free State",
    "OMG": "Edenville, Free State",
    "ON": "Ladybrand, Free State",
    "ONB": "Hobhouse, Free State",
    "OND": "Clocolan, Free State",
    "OO": "Lindley, Free State",
    "OOD": "Steynsrus, Free State",
    "OOE": "Petrus Steyn, Free State",
    "OP": "Philippolis, Free State",
    "OR": "Senekal, Free State",
    "ORD": "Marquard, Free State",
    "ORE": "Paul Roux, Free State",
    "ORX": "Rouxville, Free State",
    "OS": "Smithfield, Free State",
    "OU": "Vrede, Free State",
    "OUB": "Memel, Free State",
    "OV": "Parys, Free State",
    "OVB": "Vredefort, Free State",
    "OVE": "Koppies, Free State",
    "OW": "Wepener, Free State",
    "OX": "Winburg, Free State",
    "OXD": "Theunissen, Free State",
    "OXF": "Ventersburg, Free State",
    "OXG": "Excelsior, Free State",
    "OXH": "Hennenman, Free State",
    "OXV": "Virginia, Free State",
    "OZ": "Zastron, Free State",
    "PA": "Roadworks vehicles (Padarbeid), not Cape Provincial Administration?",
    "PAO or OPA ?": "Free State Provincial Administration",
    "TA": "Benoni, Transvaal",
    "TAA": "Barberton, Transvaal",
    "TAB": "Bethal, Transvaal",
    "TAC": "Christania, Transvaal",
    "TAD": "Lichtenburg, Transvaal",
    "TAE": "Lydenburg, Transvaal",
    "TAF": "Zeerust, Transvaal",
    "TAG": "Piet Retief, Transvaal",
    "TAH": "Nylstroom, Transvaal",
    "TAI": "Wolmaranstad, Transvaal",
    "TAJ": "Louis Trichardt, Transvaal",
    "TAK": "Wolmaransad district, Transvaal",
    "TAL": "Pietersburg, Transvaal",
    "TAM": "Wakkerstroom, Transvaal",
    "TAN": "Potgietersrust, Transvaal",
    "TAO": "Ottosdal, Transvaal",
    "TAP": "Graskop, Transvaal",
    "TAQ": "Balfour, Transvaal",
    "TAR": "Messina, Transvaal",
    "TAS": "Delmas, Transvaal",
    "TAT": "Greylingstad, Transvaal",
    "TAU": "Fochville, Transvaal",
    "TAV": "Hercules, Transvaal [this was later incorporated with Pretoria]",
    "TAW": "Bronkhorstspruit, Transvaal",
    "TAX": "Rodeon, Zwartruggens, Transvaal",
    "TAY": "Randfontein, Transvaal",
    "TAZ": "Britz, Transvaal",
    "TB": "Boksburg, Transvaal",
    "TBA": "Dullstroom, Transvaal",
    "TBB": "Leeudoornstad, Transvaal",
    "TBC": "Tzaneen, Transvaal",
    "TBD": "Duivelskloof, Transvaal",
    "TBE": "Delareyville, Transvaal",
    "TBF": "Hendrina, Transvaal",
    "TBG": "Charl Cilliers, Transvaal",
    "TBH": "Nelspruit, Transvaal",
    "TBI": "Koster, Transvaal",
    "TBJ": "Trichard, Transvaal",
    "TBK": "Morgenzon, Transvaal",
    "TBL": "Machadodorp, Transvaal",
    "TBM": "Breyton, Transvaal",
    "TBS": "Sabie, Transvaal",
    "TBZ": "Thabazimbi, Transvaal",
    "TC": "Carolina, Transvaal",
    "TCA": "Groblersdaal, Transvaal",
    "TCB": "Belfast, Transvaal",
    "TCC": "Coligny, Transvaal",
    "TCD": "Kempton Park, Transvaal",
    "TCE": "Venterspost, Transvaal",
    "TCX": "Maquassi, Transvaal",
    "TDD": "Pilgrims Rest, Transvaal",
    "TDG": "Nigel, Transvaal",
    "TDH": "Witrivier, Transvaal",
    "TDJ": "Leslie, Transvaal",
    "TDK": "Alberton, Transvaal",
    "TDL": "Edenvale, Transvaal",
    "TE": "Ermelo, Transvaal",
    "TEA": "Amsterdam, Transvaal",
    "TF": "Amersfoort, Transvaal",
    "TG": "Germiston, Transvaal",
    "TH": "Heidelberg, Transvaal",
    "TI": "Rustenburg, Transvaal",
    "TJ": "Johannesburg, Transvaal",
    "TK": "Krugersdorp, Transvaal",
    "TL": "Bloemhof, Transvaal",
    "TM": "Middleburg, Transvaal",
    "TN": "Ventersdorp, Transvaal",
    "TNS": "Naboomspruit, Transvaal",
    "TO": "Brakpan, Transvaal",
    "TP": "Pretoria, Transvaal",
    "TQ": "Standerton, Transvaal",
    "TR": "Schweizer",
    "TS": "Springs, Transvaal",
    "TSN": "Sandton, Transvaal",
    "TT": "Volksrust, Transvaal",
    "TU": "Roodepoort",
    "TV": "Vereeniging, Transvaal",
    "TVB": "Van Der Bijl Park, Transvaal",
    "TW": "Witbank, Transvaal",
    "TWB": "Warmbaths, Transvaal",
    "TX": "Potchefstroom, Transvaal",
    "TY": "Klerksdorp, Transvaal",
    "TZ": "Klerksdorp district, Transvaal",
    "V": "D ",
    "VDF": "Venda Defence Force vehicles",
    "VM": "Venda government vehicles",
    "VP": "Venda Police",
    "VTA": "Venda Traffic Administration vehicles",
    "VV": "Dzanani, Mutale, Sibasa & Vuwani, Venda",
    "WR": "Qwaqwa Government vehicles",
    "XA": "Umtata, Western Cape (formerly Transkei)",
    "XAA": "Nqamake, Western Cape (formerly Transkei)",
    "XAB": "Tabankulu, Western Cape (formerly Transkei)",
    "XAC": "Tsomo, Western Cape (formerly Transkei)",
    "XAD": "Xhora, Western Cape (formerly Transkei)",
    "XAE": "Mqanduli, Western Cape (formerly Transkei)",
    "XAF": "Bizana, Western Cape (formerly Transkei)",
    "XAG": "Gatyana, Western Cape (formerly Transkei)",
    "XAH": "Siphaqeni, Western Cape (formerly Transkei)",
    "XB": "Gcuwa (aka Butterworth), Western Cape (formerly Transkei)",
    "XC": "Lusikisiki, Western Cape (formerly Transkei)",
    "XD": "Cofimvaba, Western Cape (formerly Transkei)",
    "XE": "Engcobo, Western Cape (formerly Transkei)",
    "XF": "Umzimvubu, Western Cape (formerly Transkei)",
    "XG": "Transkei government vehicles",
    "XGA": "Agriculture & Forestry Dept vehicles",
    "XGC": "Commerce, Industry & Tourism Dept vehicles",
    "XGH": "Health & Welfare Dept vehicles",
    "XGL": "Local Government & Land Tenure Dept vehicles",
    "XGW": "Works & Energy Dept vehicles",
    "XH": "Umzimkulu, Western Cape (formerly Transkei)",
    "XJ": "Maxesibeni, Western Cape (formerly Transkei)",
    "XK": "Kwabhaca, Western Cape (formerly Transkei)",
    "XL": "Matatiele, Western Cape (formerly Transkei)",
    "XM": "Transkei Army vehicles",
    "XN": "Idutywa, Western Cape (formerly Transkei)",
    "XO": "Tsolo, Western Cape (formerly Transkei)",
    "XP": "Transkei police vehicles",
    "XPT": "Transkei Traffic Police vehicles",
    "XR": "Cacadu, Western Cape (formerly Transkei)",
    "XRT": "Transkei Road Transport Services vehicles",
    "XS": "Xalanga, Western Cape (formerly Transkei)",
    "XT": "Herschel, Western Cape (formerly Transkei)",
    "XU": "Libode, Western Cape (formerly Transkei)",
    "XV": "Qumbu, Western Cape (formerly Transkei)",
    "XW": "Mt Fletcher, Western Cape (formerly Transkei)",
    "XY": "Centane, Western Cape (formerly Transkei)",
    "XZ": "Ngqeleni, Western Cape (formerly Transkei)",
    "YB": "Bophuthatswana government vehicles",
    "YBA": "Molopo, formerly Bophuthatswana",
    "YBB": "Odi, formerly Bophuthatswana",
    "YBC": "Moretele, formerly Bophuthatswana",
    "YBD": "Hafekeng & Tlhabane, formerly Bophuthatswana",
    "YBE": "Ditsobotla, formerly Bophuthatswana",
    "YBG": "Lehurutshe, formerly Bophuthatswana",
    "YBH": "Tlhaping",
    "YBJ": "Madikwe, formerly Bophuthatswana",
    "YBK": "Thaba 'Nchu, formerly Bophuthatswana",
    "YBL": "Mankwe, formerly Bophuthatswana",
    "YBM": "Ganyesa, formerly Bophuthatswana",
    "YBN": "Taung, formerly Bophuthatswana",
    "YBP": "Bophuthatswana police vehicles",
    "YBX": "Mabopane, formerly Bophuthatswana",
    "ZG": "Kwazulu (formerly Zululand) government vehicles",
    "ZK": "Kwazulu (formerly Zululand) Paramount Chief vehicles",
    "ZP": "Kwazulu (formerly Zululand) police vehicles",
    "Z_": "Kwazulu (formerly Zululand)"
};
 


 
class RegCodes extends React.Component {
    render() {
        return (
            <datalist id="RegCodes">

                <option value="B">

                </option><option value="EC">

                </option><option value="FS">

                </option><option value="G">

                </option><option value="GP">

                </option><option value="L">

                </option><option value="M">

                </option><option value="MG">

                </option><option value="MP">

                </option><option value="N">

                </option><option value="NC">

                </option><option value="NW">

                </option><option value="T">

                </option><option value="WP">

                </option><option value="ZN">

                </option><option value="BT">

                </option><option value="CA">

                </option><option value="CAA">

                </option><option value="CAB">

                </option><option value="CAC">

                </option><option value="CAD">

                </option><option value="CAE">

                </option><option value="CAF">

                </option><option value="CAG">

                </option><option value="CAH">

                </option><option value="CAJ">

                </option><option value="CAL">

                </option><option value="CAM">

                </option><option value="CAN">

                </option><option value="CAO">

                </option><option value="CAP">

                </option><option value="CAR">

                </option><option value="CAS">

                </option><option value="CAT">

                </option><option value="CAU">

                </option><option value="CAV">

                </option><option value="CAW">

                </option><option value="CAY">

                </option><option value="CAZ">

                </option><option value="CB">

                </option><option value="CBA">

                </option><option value="CBB">

                </option><option value="CBC">

                </option><option value="CBE">

                </option><option value="CBF">

                </option><option value="CBG">

                </option><option value="CBH">

                </option><option value="CBJ">

                </option><option value="CBK">

                </option><option value="CBL">

                </option><option value="CBM">

                </option><option value="CBN">

                </option><option value="CBO">

                </option><option value="CBP">

                </option><option value="CBR">

                </option><option value="CBS">

                </option><option value="CBT">

                </option><option value="CBU">

                </option><option value="CBV">

                </option><option value="CBW">

                </option><option value="CBX">

                </option><option value="CBY">

                </option><option value="CBZ">

                </option><option value="CC">

                </option><option value="CCA">

                </option><option value="CCB">

                </option><option value="CCC">

                </option><option value="CCD">

                </option><option value="CCE">

                </option><option value="CCF">

                </option><option value="CCG">

                </option><option value="CCH">

                </option><option value="CCJ">

                </option><option value="CCK">

                </option><option value="CCL">

                </option><option value="CCM">

                </option><option value="CCN">

                </option><option value="CCO">

                </option><option value="CCP">

                </option><option value="CCR">

                </option><option value="CCS">

                </option><option value="CCT">

                </option><option value="CCU">

                </option><option value="CCV">

                </option><option value="CCW">

                </option><option value="CCX">

                </option><option value="CD">

                </option><option value="CDA">

                </option><option value="CDL">

                </option><option value="CDX">

                </option><option value="CDZ">

                </option><option value="CE">

                </option><option value="CEA">

                </option><option value="CEB">

                </option><option value="CEC">

                </option><option value="CED">

                </option><option value="CEE">

                </option><option value="CEF">

                </option><option value="CEG">

                </option><option value="CEH">

                </option><option value="CEJ">

                </option><option value="CEK">

                </option><option value="CEL">

                </option><option value="CEM">

                </option><option value="CEN">

                </option><option value="CEO">

                </option><option value="CEP">

                </option><option value="CER">

                </option><option value="CES">

                </option><option value="CET">

                </option><option value="CEU">

                </option><option value="CEV">

                </option><option value="CEW">

                </option><option value="CEX">

                </option><option value="CEY">

                </option><option value="CEZ">

                </option><option value="CF">

                </option><option value="CFA">

                </option><option value="CFB">

                </option><option value="CFC">

                </option><option value="CFD">

                </option><option value="CFG">

                </option><option value="CFH">

                </option><option value="CFG">

                </option><option value="CFK">

                </option><option value="CFM">

                </option><option value="CFO">

                </option><option value="CFP">

                </option><option value="CFR">

                </option><option value="CFS">

                </option><option value="CG">

                </option><option value="CH">

                </option><option value="CJ">

                </option><option value="CK">

                </option><option value="CL">

                </option><option value="CM">

                </option><option value="CN">

                </option><option value="CO">

                </option><option value="CR">

                </option><option value="CS">

                </option><option value="CT">

                </option><option value="CU">

                </option><option value="CV">

                </option><option value="CW">

                </option><option value="CWB">

                </option><option value="CX">

                </option><option value="CY">

                </option><option value="CZ">

                </option><option value="DK">

                </option><option value="DW">

                </option><option value="GAZ">

                </option><option value="GC">

                </option><option value="GCA">

                </option><option value="GCB">

                </option><option value="GCC">

                </option><option value="GCD">

                </option><option value="GCE">

                </option><option value="GCF">

                </option><option value="GCH">

                </option><option value="GCJ">

                </option><option value="GCP">

                </option><option value="GC">

                </option><option value="GN">

                </option><option value="GL">

                </option><option value="GM">

                </option><option value="GP">

                </option><option value="GR">

                </option><option value="GY">

                </option><option value="KB">

                </option><option value="KC">

                </option><option value="KD">

                </option><option value="KG">

                </option><option value="KNA">

                </option><option value="KNB">

                </option><option value="KNE">

                </option><option value="KNF">

                </option><option value="KNG">

                </option><option value="KNK">

                </option><option value="KNP">

                </option><option value="KNT">

                </option><option value="KZN">

                </option><option value="LEB">

                </option><option value="LEB">

                </option><option value="LEB">

                </option><option value="LEB">

                </option><option value="LEB">

                </option><option value="LEB">

                </option><option value="LEB">

                </option><option value="LEB">

                </option><option value="LEB">

                </option><option value="LEB">

                </option><option value="LEB">

                </option><option value="LEB">

                </option><option value="LEB">

                </option><option value="LG">

                </option><option value="LP">

                </option><option value="MD">

                </option><option value="nan">

                </option><option value="NB">

                </option><option value="NBA">

                </option><option value="NBB">

                </option><option value="NC">

                </option><option value="NCO">

                </option><option value="NCV">

                </option><option value="NCW">

                </option><option value="NCX">

                </option><option value="ND">

                </option><option value="NDC">

                </option><option value="NDE">

                </option><option value="NDH">

                </option><option value="NDW">

                </option><option value="NE">

                </option><option value="NES">

                </option><option value="NF">

                </option><option value="NGL">

                </option><option value="NH">

                </option><option value="NHL">

                </option><option value="NIM">

                </option><option value="NIN">

                </option><option value="NIP">

                </option><option value="NIX">

                </option><option value="NJ">

                </option><option value="NK">

                </option><option value="NKA">

                </option><option value="NKK">

                </option><option value="NKR">

                </option><option value="NM">

                </option><option value="NMA">

                </option><option value="NMG">

                </option><option value="NMR">

                </option><option value="NN">

                </option><option value="NND">

                </option><option value="NO">

                </option><option value="NP">

                </option><option value="NPA">

                </option><option value="NPB">

                </option><option value="NPC">

                </option><option value="NPN">

                </option><option value="NPNC">

                </option><option value="NPP">

                </option><option value="NPS">

                </option><option value="NR">

                </option><option value="NRB">

                </option><option value="NS">

                </option><option value="NT">

                </option><option value="NTU">

                </option><option value="NU">

                </option><option value="NUB">

                </option><option value="NUD">

                </option><option value="NUF">

                </option><option value="NUL">

                </option><option value="NUM">

                </option><option value="NUR">

                </option><option value="NUT">

                </option><option value="NUZ">

                </option><option value="NV">

                </option><option value="NW">

                </option><option value="NX">

                </option><option value="NZ">

                </option><option value="OA">

                </option><option value="OAB">

                </option><option value="OAF">

                </option><option value="OB">

                </option><option value="OBB">

                </option><option value="OBD">

                </option><option value="OBG">

                </option><option value="OBT">

                </option><option value="OBW">

                </option><option value="OC">

                </option><option value="OCC">

                </option><option value="OD">

                </option><option value="ODB">

                </option><option value="ODD">

                </option><option value="OE">

                </option><option value="OEB">

                </option><option value="OF">

                </option><option value="OFB">

                </option><option value="OFD">

                </option><option value="OFH">

                </option><option value="OG">

                </option><option value="OGB">

                </option><option value="OH">

                </option><option value="OHB">

                </option><option value="OHS">

                </option><option value="OIC">

                </option><option value="OIL">

                </option><option value="OJ">

                </option><option value="OK">

                </option><option value="OKB">

                </option><option value="OKC">

                </option><option value="OKD">

                </option><option value="OKE">

                </option><option value="OL">

                </option><option value="OM">

                </option><option value="OMB">

                </option><option value="OMF">

                </option><option value="OMG">

                </option><option value="ON">

                </option><option value="ONB">

                </option><option value="OND">

                </option><option value="OO">

                </option><option value="OOD">

                </option><option value="OOE">

                </option><option value="OP">

                </option><option value="OR">

                </option><option value="ORD">

                </option><option value="ORE">

                </option><option value="ORX">

                </option><option value="OS">

                </option><option value="OU">

                </option><option value="OUB">

                </option><option value="OV">

                </option><option value="OVB">

                </option><option value="OVE">

                </option><option value="OW">

                </option><option value="OX">

                </option><option value="OXD">

                </option><option value="OXF">

                </option><option value="OXG">

                </option><option value="OXH">

                </option><option value="OXV">

                </option><option value="OZ">

                </option><option value="PA">

                </option><option value="PAO or OPA ?">

                </option><option value="T">

                </option><option value="TA">

                </option><option value="TAA">

                </option><option value="TAB">

                </option><option value="TAC">

                </option><option value="TAD">

                </option><option value="TAE">

                </option><option value="TAF">

                </option><option value="TAG">

                </option><option value="TAH">

                </option><option value="TAI">

                </option><option value="TAJ">

                </option><option value="TAK">

                </option><option value="TAL">

                </option><option value="TAM">

                </option><option value="TAN">

                </option><option value="TAO">

                </option><option value="TAP">

                </option><option value="TAQ">

                </option><option value="TAR">

                </option><option value="TAS">

                </option><option value="TAT">

                </option><option value="TAU">

                </option><option value="TAV">

                </option><option value="TAW">

                </option><option value="TAX">

                </option><option value="TAY">

                </option><option value="TAZ">

                </option><option value="TB">

                </option><option value="TBA">

                </option><option value="TBB">

                </option><option value="TBC">

                </option><option value="TBD">

                </option><option value="TBE">

                </option><option value="TBF">

                </option><option value="TBG">

                </option><option value="TBH">

                </option><option value="TBI">

                </option><option value="TBJ">

                </option><option value="TBK">

                </option><option value="TBL">

                </option><option value="TBM">

                </option><option value="TBS">

                </option><option value="TBZ">

                </option><option value="TC">

                </option><option value="TCA">

                </option><option value="TCB">

                </option><option value="TCC">

                </option><option value="TCD">

                </option><option value="TCE">

                </option><option value="TCX">

                </option><option value="TDD">

                </option><option value="TDG">

                </option><option value="TDH">

                </option><option value="TDJ">

                </option><option value="TDK">

                </option><option value="TDL">

                </option><option value="TE">

                </option><option value="TEA">

                </option><option value="TF">

                </option><option value="TG">

                </option><option value="TH">

                </option><option value="TI">

                </option><option value="TJ">

                </option><option value="TK">

                </option><option value="TL">

                </option><option value="TM">

                </option><option value="TN">

                </option><option value="TNS">

                </option><option value="TO">

                </option><option value="TP">

                </option><option value="TQ">

                </option><option value="TR">

                </option><option value="TS">

                </option><option value="TSN">

                </option><option value="TT">

                </option><option value="TU">

                </option><option value="TV">

                </option><option value="TVB">

                </option><option value="TW">

                </option><option value="TWB">

                </option><option value="TX">

                </option><option value="TY">

                </option><option value="TZ">

                </option><option value="V">

                </option><option value="VDF">

                </option><option value="VM">

                </option><option value="V">

                </option><option value="VP">

                </option><option value="V">

                </option><option value="V">

                </option><option value="V">

                </option><option value="VTA">

                </option><option value="VV">

                </option><option value="V">

                </option><option value="WR">

                </option><option value="WR">

                </option><option value="XA">

                </option><option value="XAA">

                </option><option value="XAB">

                </option><option value="XAC">

                </option><option value="XAD">

                </option><option value="XAE">

                </option><option value="XAF">

                </option><option value="XAG">

                </option><option value="XAH">

                </option><option value="XB">

                </option><option value="XC">

                </option><option value="XD">

                </option><option value="XE">

                </option><option value="XF">

                </option><option value="XG">

                </option><option value="XGA">

                </option><option value="XGC">

                </option><option value="XGH">

                </option><option value="XGL">

                </option><option value="XGW">

                </option><option value="XH">

                </option><option value="XJ">

                </option><option value="XK">

                </option><option value="XL">

                </option><option value="XM">

                </option><option value="XN">

                </option><option value="XO">

                </option><option value="XP">

                </option><option value="XPT">

                </option><option value="XR">

                </option><option value="XRT">

                </option><option value="XS">

                </option><option value="XT">

                </option><option value="XU">

                </option><option value="XV">

                </option><option value="XW">

                </option><option value="XY">

                </option><option value="XZ">

                </option><option value="YB">

                </option><option value="YBA">

                </option><option value="YBB">

                </option><option value="YBC">

                </option><option value="YBD">

                </option><option value="YBE">

                </option><option value="YBG">

                </option><option value="YBH">

                </option><option value="YBJ">

                </option><option value="YBK">

                </option><option value="YBL">

                </option><option value="YBM">

                </option><option value="YBN">

                </option><option value="YBP">

                </option><option value="YBX">

                </option><option value="ZG">

                </option><option value="ZK">

                </option><option value="ZP">

                </option><option value="Z_">
                </option></datalist>
        );
    }
}


export {CarData,RegCodes};