let express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const Razorpay = require("razorpay");
let backDue;
let orderDeets;
let sheetsChoice;
let calNum;
let qty;
let inksChoice;

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
  },
};

dotenv.config();
let app = express();
const instance = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
});
//Middlewares
app.use(cors());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.set("view engine", "ejs");

//Routes
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/shop", (req, res) => {
  res.render("shop");
});
app.get("/calendar", (req, res) => {
  res.render("calendar", {
    key: process.env.KEY_ID
  });
});

app.get("/payments", (req, res) => {
  res.render("payment", {
    key: process.env.KEY_ID
  });
});
app.use(express.static(__dirname + '/public'));

//PAYMENTS EJS
//Create order backend
app.post("/api/payment/order", (req, res) => {
  params = req.body;
  instance.orders
    .create(params)
    .then((data) => {
      res.send({
        sub: data,
        status: "success"
      });
    })
    .catch((error) => {
      res.send({
        sub: error,
        status: "failed"
      });
    });
});

//Payment verification backend
app.post("/api/payment/verify", (req, res) => {
  body = req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;

  var expectedSignature = crypto
    .createHmac("sha256", process.env.KEY_SECRET)
    .update(body.toString())
    .digest("hex");
  console.log("sig" + req.body.razorpay_signature);
  console.log("sig" + expectedSignature);
  var response = {
    status: "failure"
  };
  if (expectedSignature === req.body.razorpay_signature)
    response = {
      status: "success"
    };
  res.send(response);
});

//CAL EJS
//Create order backend
app.post("/api/calendar/order", (req, res) => {
  // let sheetsChoice = pageOptionsSel;
  // let calNum = calID;
  // let qty = q;
  // let inksChoice = inksSel;
  orderDeets = req.body;
  console.log(orderDeets);
  sheetsChoice = orderDeets.pagesOption;
  calNum = orderDeets.cal;
  qty = orderDeets.quantity;
  inksChoice = orderDeets.inks;
  calAdv();
  params = {
    amount: backDue,
    currency: "INR",
    receipt: "345678",
    payment_capture: '1',
  };
  instance.orders
    .create(params)
    .then((data) => {
      console.log('Order generated');
      res.send({
        sub: data,
        status: "success"
      });
    })
    .catch((error) => {
      console.log('error creating order');
      console.log('params amount: ' + params.amount);
      // console.log('data: ' + data);
      res.send({
        sub: error,
        status: "failed"
      });
    });
});

//Payment verification backend
app.post("/api/calendar/verify", (req, res) => {
  body = req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;

  var expectedSignature = crypto
    .createHmac("sha256", process.env.KEY_SECRET)
    .update(body.toString())
    .digest("hex");
  console.log("sig" + req.body.razorpay_signature);
  console.log("sig" + expectedSignature);
  var response = {
    status: "failure"
  };
  if (expectedSignature === req.body.razorpay_signature)
    response = {
      status: "success"
    };
  res.send(response);
});

function calAdv() {

  if (qty > 99 && qty < 250 && menu[calNum][sheetsChoice][100] != null) {
    qtyChoice = 100;
  } else if (qty > 149 && qty < 250 && menu[calNum][sheetsChoice][150] != null) {
    qtyChoice = 150;
  } else if (qty > 249 && qty < 500 && menu[calNum][sheetsChoice][250] != null) {
    qtyChoice = 250;
  } else if (qty > 499 && qty < 1000 && menu[calNum][sheetsChoice][500] != null) {
    qtyChoice = 500;
  } else if (qty > 999 && menu[calNum][sheetsChoice][1000] != null) {
    qtyChoice = 1000;
  }



  let amount = qty * (menu[calNum][sheetsChoice][qtyChoice].baseRate + ((inksChoice - 1) * menu[calNum][sheetsChoice][qtyChoice].extraRate));
  let roundAmount = Math.round((amount + Number.EPSILON) * 100) / 100;
  let gst = roundAmount * 0.18;
  roundGst = Math.round((gst + Number.EPSILON) * 100) / 100;
  let totalAmount = (Math.round((roundAmount + roundGst + Number.EPSILON) * 100) / 100).toFixed(2);
  let advanceDue = (0.5 * totalAmount).toFixed(2);
  if (advanceDue < 5000) {
    advanceDue = 1;
  }
  backDue = (advanceDue * 100).toFixed(0);
  console.log('============== APP ============');
  console.log(menu[calNum].name + " " + sheetsChoice + " sheets | " + qty + " qty |  " + qtyChoice + " band | " + inksChoice + " inks printing");
  console.log(menu[calNum][sheetsChoice][qtyChoice]);
  console.log("");
  console.log("Total without GST: " + roundAmount);
  console.log("GST: " + roundGst);
  console.log("Total: " + totalAmount);
  console.log("Advance: " + advanceDue + " " + backDue);
  console.log('===============================');
}

app.listen("3000", () => {
  console.log("server started");
});