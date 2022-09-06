/** @format */

import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { useLocation } from "react-router";

import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBRadio,
  MDBBtn,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";

// Product
// Qty product
// Shipping cost
// total

export default function Checkout() {
  const [cart, setCart] = useContext(CartContext);

  const data = useLocation();

  console.log(data);

  const shipping = 20;
  // const [details, setDetails] = useState({
  //   firstName: "",
  // lastName: '',
  // });
  // Personal details
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Card details
  const [cardNumber, setCardNumber] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardExpiration, setCardExpiration] = useState("");
  const [cardSecret, setCardSecret] = useState("");

  const [disable, setDisable] = useState(true);

  return (
    <div>
      <header>
        <p>Logo</p>
        <p>
          <Link to='/cart'>Return To Cart</Link>
        </p>
      </header>

      <MDBContainer className='py-5'>
        <MDBRow>
          <MDBCol md='8' className='mb-4'>
            <form id='checkout-form'>
              <MDBCard className='mb-4'>
                <MDBCardHeader className='py-3'>
                  <h5 className='mb-0'>Biling details</h5>
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBRow className='mb-4'>
                    <MDBCol>
                      <MDBInput
                        label='First name'
                        id='form1'
                        type='text'
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </MDBCol>

                    <MDBCol>
                      <MDBInput
                        label='Last name'
                        id='form2'
                        type='text'
                        required
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                    wrapperClass='mb-4'
                    label='Address'
                    id='form3'
                    type='text'
                    required
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <MDBInput
                    wrapperClass='mb-4'
                    label='Email'
                    id='form4'
                    type='email'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <MDBInput
                    wrapperClass='mb-4'
                    label='Phone'
                    id='form5'
                    type='number'
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <hr className='my-4' />

                  {/* <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="checkoutForm1"
                  label="Shipping address is the same as my billing address"
                />
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="checkoutForm2"
                  label=" Save this information for next time"
                  defaultChecked
                /> */}

                  {/* <hr className="my-4" /> */}

                  <h5 className='mb-4'>Payment</h5>

                  {/* <MDBRadio
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  label="Credit card"
                  checked
                />
                <MDBRadio
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  label="Debit card"
                />
                <MDBRadio
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  label="Paypal"
                  wrapperClass="mb-4"
                />  */}

                  <MDBRow>
                    <MDBCol>
                      <MDBInput
                        label='Name on card'
                        id='form6'
                        type='text'
                        wrapperClass='mb-4'
                        required
                        // onChange={(e) => handleInputs(e.target.value)}
                        onChange={(e) => setNameOnCard(e.target.value)}
                      />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput
                        label='Credit card number'
                        id='form7'
                        type='text'
                        wrapperClass='mb-4'
                        required
                        // onChange={(e) => handleInputs(e.target.value)}
                        onChange={(e) => setCardNumber(e.target.value)}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md='3'>
                      <MDBInput
                        label='Expiration'
                        id='form8'
                        type='text'
                        wrapperClass='mb-4'
                        required
                        onChange={(e) => setCardExpiration(e.target.value)}
                      />
                    </MDBCol>
                    <MDBCol md='3'>
                      <MDBInput
                        label='CVV'
                        id='form8'
                        type='text'
                        wrapperClass='mb-4'
                        required
                        onChange={(e) => setCardSecret(e.target.value)}
                      />
                    </MDBCol>
                  </MDBRow>

                  {/* <MDBBtn size="lg" block>
                  Continue to checkout
                </MDBBtn> */}
                </MDBCardBody>
              </MDBCard>
            </form>
          </MDBCol>

          <MDBCol md='4' className='mb-4'>
            <MDBCard className='mb-4'>
              <MDBCardHeader className='py-3'>
                <h5 className='mb-0'>Summary</h5>
              </MDBCardHeader>

              <MDBCardBody>
                <MDBListGroup flush>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-center border-0 px-0 pb-0'>
                    Products
                    <span>$53.98</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-center border-0 px-0 pb-0'>
                    Shipping
                    <span>${shipping}</span>
                  </MDBListGroupItem>
                  <hr className='my-2'></hr>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-center border-0 px-0 pb-0'>
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className='mb-0'>(including VAT)</p>
                      </strong>
                    </div>
                    <span>
                      <strong>$53.98</strong>
                    </span>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>

              <button
                form='checkout-form'
                // When all of the inputs are not empty, we change the setDisable to false.
                disabled={
                  firstName &&
                  lastName &&
                  address &&
                  email &&
                  phone &&
                  nameOnCard &&
                  cardExpiration &&
                  cardSecret
                    ? !disable
                    : disable
                }>
                Place Order
              </button>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
