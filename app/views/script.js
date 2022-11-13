let inksChoice = 4;
let sheetsChoice;
let qty = 99999; //will need to be parsed via JSON.parse or parseInt
let qtyChoice;
let flag1 = 0; //flag to check if sheetsSel has been used

let menu = {
    25: {
      "name": "25-कालदर्शिका",
      6: {
        250: {
          "baseRate": 22,
          "extraRate": 5.75
        },
        500: {
          "baseRate": 19.25,
          "extraRate": 3.25
        },
        1000: {
          "baseRate": 17.75,
          "extraRate": 2
        }
      }
    },
    31: {
      "name": "31-उमंग",
      6: {
        250: {
          "baseRate": 22,
          "extraRate": 5.75
        },
        500: {
          "baseRate": 19.25,
          "extraRate": 3.25
        },
        1000: {
          "baseRate": 17.75,
          "extraRate": 2
        }
      }
    },
    35: {
      "name": "35-Tarang",
      6: {
        250: {
          "baseRate": 23,
          "extraRate": 5.75
        },
        500: {
          "baseRate": 20.25,
          "extraRate": 3.25
        },
        1000: {
          "baseRate": 18.75,
          "extraRate": 2
        }
      }
    },
    37: {
      "name": "37-Sarang",
      6: {
        250: {
          "baseRate": 23,
          "extraRate": 5.75
        },
        500: {
          "baseRate": 20.25,
          "extraRate": 3.25
        },
        1000: {
          "baseRate": 18.75,
          "extraRate": 2
        }
      }
    },
    51: {
      "name": "51-नवनिर्णय",
      6: {
        250: {
          "baseRate": 22,
          "extraRate": 6.5
        },
        500: {
          "baseRate": 26.25,
          "extraRate": 3.75
        },
        1000: {
          "baseRate": 25,
          "extraRate": 2.65
        }
      }
    },
    55: {
      "name": "55-Stride",
      6: {
        250: {
          "baseRate": 29,
          "extraRate": 6.5
        },
        500: {
          "baseRate": 26.25,
          "extraRate": 3.75
        },
        1000: {
          "baseRate": 25,
          "extraRate": 2.65
        }
      }
    },
    111: {
      "name": "111-Grace",
      12: {
        100: {
          "baseRate": 46.5,
          "extraRate": 13.5
        },
        250: {
          "baseRate": 39,
          "extraRate": 6.5
        },
        500: {
          "baseRate": 36.25,
          "extraRate": 3.75
        },
        1000: {
          "baseRate": 35,
          "extraRate": 2.6
        }
      }
    },
    141: {
      "name": "141-Bright",
      12: {
        100: {
          "baseRate": 46.5,
          "extraRate": 13.5
        },
        250: {
          "baseRate": 39,
          "extraRate": 6.5
        },
        500: {
          "baseRate": 36.25,
          "extraRate": 3.75
        },
        1000: {
          "baseRate": 35,
          "extraRate": 2.6
        }
      }
    },
    161: {
      "name": "161-Smash",
      6: {
        250: {
          "baseRate": 38,
          "extraRate": 7.5
        },
        500: {
          "baseRate": 35.75,
          "extraRate": 5.5
        },
        1000: {
          "baseRate": 34,
          "extraRate": 3.6
        }
      },
      12: {
        250: {
          "baseRate": 51.5,
          "extraRate": 7.25
        },
        500: {
          "baseRate": 49.25,
          "extraRate": 5.25
        },
        1000: {
          "baseRate": 47.5,
          "extraRate": 3.6
        }
      }
    },
    81: {
      "name": "81-Spark",
      6: {
        250: {
          "baseRate": 28,
          "extraRate": 6.5
        },
        500: {
          "baseRate": 25,
          "extraRate": 3.75
        },
        1000: {
          "baseRate": 24,
          "extraRate": 2.6
        }
      }
    },
    171: {
      "name": "171-Majestic",
      6: {
        250: {
          "baseRate": 48,
          "extraRate": 7.5
        },
        500: {
          "baseRate": 45.75,
          "extraRate": 5.5
        },
        1000: {
          "baseRate": 44,
          "extraRate": 3.6
        }
      },
      12: {
        100: {
          "baseRate": 72.5,
          "extraRate": 13.5
        },
        250: {
          "baseRate": 66,
          "extraRate": 7.25
        },
        500: {
          "baseRate": 63.75,
          "extraRate": 5.25
        },
        1000: {
          "baseRate": 62,
          "extraRate": 3.6
        }
      }
    },
    181: {
      "name": "181-Classic",
      6: {
        250: {
          "baseRate": 57,
          "extraRate": 7.5
        },
        500: {
          "baseRate": 54.75,
          "extraRate": 5.5
        },
        1000: {
          "baseRate": 53,
          "extraRate": 3.6
        }
      },
      12: {
        100: {
          "baseRate": 81.5,
          "extraRate": 13.5
        },
        250: {
          "baseRate": 75,
          "extraRate": 7.25
        },
        500: {
          "baseRate": 72.75,
          "extraRate": 5.25
        },
        1000: {
          "baseRate": 71,
          "extraRate": 3.6
        }
      }
    },
    131: {
      "name": "131-Serene",
      6: {
        100: {
          "baseRate": 46.5,
          "extraRate": 13.5
        },
        250: {
          "baseRate": 39,
          "extraRate": 6.5
        },
        500: {
          "baseRate": 36,
          "extraRate": 3.75
        },
        1000: {
          "baseRate": 35,
          "extraRate": 2.6
        }
      }
    },
    91: {
      "name": "91-Glimpse",
      4: {
        250: {
          "baseRate": 31.75,
          "extraRate": 5.5
        },
        500: {
          "baseRate": 29.25,
          "extraRate": 3.25
        },
        1000: {
          "baseRate": 28.25,
          "extraRate": 2.25
        }
      }
    },
    27: {
      "name": "27-जीवन अमृत",
      6: {
        150: {
          "baseRate": 27,
          "extraRate": 10
        },
        250: {
          "baseRate": 23,
          "extraRate": 5.75
        },
        500: {
          "baseRate": 20.25,
          "extraRate": 3.25
        },
        1000: {
          "baseRate": 18.75,
          "extraRate": 2
        }
      }
    },
    17: {
      "name": "17-Seasons",
      6: {
        500: {
          "baseRate": 12,
          "extraRate": 2.8
        },
        1000: {
          "baseRate": 10.5,
          "extraRate": 1.4
        }
      }
    }
  };

function sheetsSel(x) {  //add to sheets number choice button with this.id
    sheetsChoice = JSON.parse(x);
    flag1 = 1;
}

  function calcAdvance(calID) {
    let calNum = JSON.parse(calID);

    //sheets default selection
    if (flag1 == 0 && menu[calNum][4] != null) {
        sheetsChoice = 4;
    }
    else if (flag1 == 0 && menu[calNum][6] != null) {
        sheetsChoice = 6;
    }
    else if (flag1 == 0 && menu[calNum][12] != null) {
        sheetsChoice = 12;
    }

    //qty choice assignment
    if (qty > 99 && qty < 250 && menu[calNum][sheetsChoice][100] != null) {
        qtyChoice = 100;
    }
    else if(qty > 149 && qty < 250 && menu[calNum][sheetsChoice][150] != null){
        qtyChoice = 150;
    }
    else if (qty > 249 && qty < 500 && menu[calNum][sheetsChoice][250] != null){
        qtyChoice = 250;
    }
    else if (qty > 499 && qty < 1000 && menu[calNum][sheetsChoice][500] != null){
        qtyChoice = 500;
    }
    else if (qty > 999 && menu[calNum][sheetsChoice][1000] != null){
        qtyChoice = 1000;
    }
    
    console.log(menu[calNum][sheetsChoice][qtyChoice]);
    console.log(menu[calNum].name + " " + sheetsChoice + " " + qty + " " + qtyChoice + " " + inksChoice);

    let amount = qty* (menu[calNum][sheetsChoice][qtyChoice].baseRate + ((inksChoice-1)* menu[calNum][sheetsChoice][qtyChoice].extraRate));
    let roundAmount = Math.round((amount + Number.EPSILON) * 100) / 100;
    let gst = roundAmount * 0.18;
    roundGst = Math.round((gst + Number.EPSILON) * 100) / 100;
    let totalAmount = Math.round((roundAmount + roundGst + Number.EPSILON) * 100) / 100;
    let advanceDue = 0.5 * totalAmount;
    if(totalAmount < 5000){
        advanceDue = 5000;
    }
    console.log("Total without GST: " + roundAmount);
    console.log("GST: " + roundGst);
    console.log("Total: " + totalAmount);
    console.log("Advance: " + advanceDue);
  }