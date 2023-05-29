import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const ProfileHeader = styled.div`
  display: flex;
  margin: auto;
  width: 800px;
  height: 1000px;
  margin-bottom: 10px;
  flex-direction: column;
  border: 2px solid black;
`;

const CategoryHeader = styled.div`
  width: 100%;
`;

const List = styled.li`
  width: 400px;
  height: 50px;
  padding-left: 5%;
  text-align: left;
  list-style-type: none;
`;

const categories = [
  "1. Name of the Student",
  "2. Name of the parent / guardian",
  "3. Nationality, Religion",
  "4. Community and Caste",
  "5. Date of Birth",
  "6. Gender",
  "7. Date of Admission",
  "8. Class in which the student was studying at the time of leaving",
  "9. Whether qualified for promotion to a higher studies",
  "10. Course of study details ",
  "11. Date of which the student actually left the Institution",
  "12. Reason for leaving",
  "13. Conduct & Character",
];

const answers = [
  "name",
  "parent",
  "nationality",
  "community",
  "dob",
  "gender",
  "admission",
  "class",
  "qualified",
  "majorSubject",
  "firstLanguage",
  "instructionMedium",
  "dateLeft",
  "reason",
  "conductCharacter",
];

const ListHeader = styled.div`
  display: flex;
`;

const TitleHeader = styled.div`
  display: flex;
  width: 100%;
  height: 23%;
`;

const NameHeader = styled.div`
  width: 70%;
`;

const ProfilePictureHeader = styled.img`
  height: 120px;
  width: 130px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

function ProfilePicture() {
  return <ProfilePictureHeader src={require("../assets/profile.jpg")} />;
}

function Profile({ profile }) {
  return (
    <ProfileHeader className="ProfileHeader">
      <TitleHeader>
        <Logo />
        <NameHeader>
          <h2>SUGUNA COLLEGE OF ARTS & SCIENCE</h2>
          <h3>(Affliated to Bharatiar University, Coimbatore)</h3>
          <h3>
            Civil Aerodrome Post, Nehru Nagar(W), kalapatti Road, Coimbatore -
            641014, Tamilnadu
          </h3>
        </NameHeader>
        <ProfilePicture />
      </TitleHeader>
      <CategoryHeader>
        {categories.map((el, indx) => (
          <ListHeader>
            <List>{el}</List>
            <List style={{ "padding-left": "30px" }}>
              {profile[answers[indx]]}
            </List>
          </ListHeader>
        ))}
      </CategoryHeader>
    </ProfileHeader>
  );
}

export default Profile;
