import React from "react";
import styled from "styled-components";
import bhim from "../assets/bhim(1).jpg";
import bhim1 from "../assets/bhim.jpg";

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Review Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            This is such a stylish flat, 2 big, very cosy beds and a sofa bed;
            all perfect for our family of 5. Lovely hot shower and shampoo and
            conditioner if needed.
          </p>
          <div className="info">
            <img src={bhim} alt="" />
            <div className="details">
              <h4>Bhim Charan Bhakta</h4>
              <span>Kolkata, West Bengal</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            A lovely & well presented good sized flat. The Location is
            absolutely brilliant. Everything you need for a short break or
            holiday is provided for you.
          </p>
          <div className="info">
            <img src={bhim} alt="" />
            <div className="details">
              <h4>Krishna Sali</h4>
              <span>Mumbai, Maharashtra</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Very clean, very cosy. Bars are within walking distance. The
            apartment has everything you’d need, from toiletries to utensils and
            extra blankets. asperiores eaque.
          </p>
          <div className="info">
            <img src={bhim1} alt="" />
            <div className="details">
              <h4>Priya Roy</h4>
              <span>Cennai, Tamil Nadu</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
