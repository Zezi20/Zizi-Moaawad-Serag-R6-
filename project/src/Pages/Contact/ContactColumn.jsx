import { Button, TextArea, Heading, Input } from "../../components"; // Fixed typo in TextArea import
import UserAddressProfile from "../../components/UserAddressProfile";
import React from "react";

const data = [
  {
    linkedinImage: "images/img_linkedin.svg",
    addressTitle: "Address",
    fullAddress: "236 5th SE Avenue, New York, NY 1000, United States",
  },
  {
    linkedinImage: "images/img_phone.svg", // Adjusted key for phone image
    addressTitle: "Phone",
    fullAddress: (
      <>
        Mobile: +(84) 546-6789
        <br />
        Hotline: +(84) 456-6789
      </>
    ),
  },
  {
    linkedinImage: "images/img_clock.svg",
    addressTitle: "Working Time",
    fullAddress: (
      <>
        Monday-Friday: 9:00 - 22:00
        <br />
        Saturday-Sunday: 9:00 - 21:00
      </>
    ),
  },
];

const UserProfile = () => {
  return (
    <div>
      <Heading size="heading2">User Profile</Heading>
      {data.map((item, index) => (
        <UserAddressProfile key={index} {...item} />
      ))}
      <Button variant="primary">Edit Profile</Button>
    </div>
  );
};

export default UserProfile;
