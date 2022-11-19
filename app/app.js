let express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const Razorpay = require("razorpay");

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
  res.render("calendar",{
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

app.listen("3000", () => {
  console.log("server started");
});