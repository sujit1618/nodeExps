let calMenu = {
    25: {
        "name": "25-कालदर्शिका",
        "description": "6 Sheets | 11 inch x 18 inch",
        "fromprice": "20.95",
        "fromqty": "1000",
        "toprice": "46.32",
        "toqty": "250"
    },
    31: {
        "name": "31-उमंग",
        "description": "6 Sheets | 11 inch x 18 inch",
        "fromprice": "20.95",
        "fromqty": "1000",
        "toprice": "46.32",
        "toqty": "250"
    },
    35: {
        "name": "35-Tarang",
        "description": "6 Sheets | 11 inch x 18 inch",
        "fromprice": "22.13",
        "fromqty": "1000",
        "toprice": "47.50",
        "toqty": "250"
        
    },
    37: {
        "name": "37-Sarang",
        "description": "6 Sheets | 11 inch x 18 inch",
        "fromprice": "22.13",
        "fromqty": "1000",
        "toprice": "47.50",
        "toqty": "250"
    },
    51: {
        "name": "51-नवनिर्णय",
        "description": "6 Sheets | 14.5 inch x 19 inch",
        "fromprice": "29.50",
        "fromqty": "1000",
        "toprice": "48.97",
        "toqty": "250"
    },
    55: {
        "name": "55-Stride",
        "description": "6 Sheets | 14.5 inch x 19 inch",
        "fromprice": "29.50",
        "fromqty": "1000",
        "toprice": "57.23",
        "toqty": "250"
    },
    111: {
        "name": "111-Grace",
        "description": "12 Sheets | 14.5 inch x 19 inch",
        "fromprice": "41.30",
        "fromqty": "1000",
        "toprice": "102.66",
        "toqty": "100"
    },
    141: {
        "name": "141-Bright",
        "description": "12 Sheets | 14.5 inch x 19 inch",
        "fromprice": "41.30",
        "fromqty": "1000",
        "toprice": "102.66",
        "toqty": "100",
    },
    161: {
        "name": "161-Smash",
        "description": "6 Sheets & 12 Sheets | 17.5 inch x 22.5 inch",
        "fromprice": "40.12",
        "fromqty": "(6 Sheets) 1000",
        "toprice": "86.44",
        "toqty": "(12 Sheets) 250"
    },
    81: {
        "name": "81-Spark",
        "description": "6 Sheets | 14.5 inch x 19 inch",
        "fromprice": "28.32",
        "fromqty": "1000",
        "toprice": "56.05",
        "toqty": "250",
    },
    171: {
        "name": "171-Majestic",
        "description": "6 Sheets & 12 Sheets | 19 inch x 29 inch",
        "fromprice": "51.92",
        "fromqty": "(6 Sheets) 1000",
        "toprice": "133.34",
        "toqty": "(12 Sheets) 100"
    },
    181: {
        "name": "181-Classic",
        "description": "6 Sheets & 12 Sheets | 19 inch x 29 inch",
        "fromprice": "62.54",
        "fromqty": "(6 Sheets) 1000",
        "toprice": "143.96",
        "toqty": "(12 Sheets) 100",
    },
    131: {
        "name": "131-Serene",
        "description": "6 Sheets | 19 inch x 29 inch",
        "fromprice": "41.30",
        "fromqty": "1000",
        "toprice": "102.66",
        "toqty": "100"
    },
    91: {
        "name": "91-Glimpse",
        "description": "4 Sheets | 19 inch x 29 inch",
        "fromprice": "33.34",
        "fromqty": "1000",
        "toprice": "56.94",
        "toqty": "250"
    },
    27: {
        "name": "27-जीवन अमृत",
        "description": "6 Sheets | 11 inch x 18 inch",
        "fromprice": "33.34",
        "fromqty": "1000",
        "toprice": "67.26",
        "toqty": "150"
    },
    17: {
        "name": "17-Seasons",
        "description": "6 Sheets | 5 inch x 10 inch",
        "fromprice": "12.39",
        "fromqty": "1000",
        "toprice": "24.07",
        "toqty": "500"
    }
};

window.onload = function popCals() {
    const calsList = document.getElementsByClassName('calendar-option');
    for (let i = 0; i < calsList.length; i++) {
        let calID = JSON.parse(calsList[i].id);
        console.log(calID);
        calsList[i].querySelector('.calendar-name').innerHTML = calMenu[calID].name;
        calsList[i].querySelector('.calendar-details').innerHTML = calMenu[calID].description;

        calsList[i].getElementsByClassName('cal-img-container')[0].getElementsByClassName('cal-img')[0].setAttribute('src','/image/calendarpngfiles/'+calID+'.png');
        calsList[i].getElementsByClassName('calendar-price-container')[0].getElementsByClassName('fromrange')[0].getElementsByClassName('price')[0].innerHTML= "Rs. " + calMenu[calID].fromprice + " / copy";
        calsList[i].getElementsByClassName('calendar-price-container')[0].getElementsByClassName('fromrange')[0].getElementsByClassName('qty')[0].innerHTML=calMenu[calID].fromqty + "+ copies <br> Single colour printing";
        calsList[i].getElementsByClassName('calendar-price-container')[0].getElementsByClassName('torange')[0].getElementsByClassName('price')[0].innerHTML= "Rs. " + calMenu[calID].toprice + " / copy";
        calsList[i].getElementsByClassName('calendar-price-container')[0].getElementsByClassName('torange')[0].getElementsByClassName('qty')[0].innerHTML= calMenu[calID].toqty + "+ copies <br> Four colour printing";
   
   
    }

};