import React, { Component } from "react";
import PaymentService from "./PaymentService";
 import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

/**To Show Add Toastify Text */
const notify = () => {
  toast.success("Registered Successfully!!", {
    position: "top-center",
    autoClose: 3000,
  });
};

export default class PaymentOpen extends Component {
  state = {
    amount: "",
  };

  onHandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }

  onSubmit = (e) => {
    e.preventDefault();
    let orderDetail = { amount: this.state.amount };

    PaymentService.createOrder(orderDetail).then((res) => {
      console.log("PAYMENT ORDER RESPONSE", res);
      var options = {
        key: "rzp_test_XvFLBvwKXKETgn", // Enter the Key ID generated from the Dashboard
        amount: res.data.amount,
        currency: "INR",
        name: "Ocean Heaven Hotel",
        //description: "Seat Reservation",
        // "image": "https://example.com/your_logo",
        order_id: res.data.id,
        handler: function (response) {
          console.log(response);
          alert("Payment Successfull !!!");
          window.location.href = "/";
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        notes: {
          address: "Ocean Heaven Hotel",
        },
        theme: {
          color: "#26a69a",
        },
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
    });
  };

  render() {
    return (
      <div style={{backgroundImage: "url(https://img.freepik.com/free-vector/rupee-symbol-digital-technology-background_1017-36810.jpg?size=626&ext=jpg&ga=GA1.2.1985736688.1660553069)",
      backgroundRepeat:"no-repeat",height:"800px",float:"left",marginRight:"700px",backgroundSize:"cover"}}>
        <form
          style={{
            backgroundColor: "#488AC7",
            width: "500px",
            height: "400px",
            marginLeft: "750px",
            marginTop: "150px",
            backgroundImage: "url(https://www.alacriti.com/wp-content/uploads/2020/07/How-is-COVID-19-Accelerating-Digital-Adoption-in-Payments.jpg)",
            
          }}
        >
          <br />
          <br />
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example1">
              <b>Enter Amount</b>
            </label>
            <input
              type="text"
              id="form2Example1"
              className="form-control"
              placeholder="In Rupees"
              name="amount"
              value={this.state.amount}
              onChange={this.onHandleChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-success btn-block mb-4"
            onClick={this.onSubmit}
          >
            Procced To Pay
          </button>
        </form>
      </div>
    );
  }
}
