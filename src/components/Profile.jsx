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
  "2. Father's Name",
  "3. Nationality",
  "4. Religion & Caste",
  "5. Community",
  "6. Date of Birth ( as entered in the &nsbp; Admission Register in Figures and Words )",
  "7. (a) Couse to which the student was admitted & duration of the Course.",
  "(b) Date of admission to the Course.",
  "(c) Semester / year the student was studying at the time of leaving the institution",
  "8. Whether qualified for promotion to the next higher class",
  "9. Whether the student has paid all the fees due to the institution and cleared the dues",
  "10. Whether the student was in receipt of any fee concession or scholarship, if so the nature of such concession or scholarship",
  "11. Date of which the student actually left the Institution",
  "12. Date of application for Transfer Certificate",
  "13. Extra - Curricular activities in which the student took part and proficiency therein",
  "14. Character and Conduct",
];

const answers = [
  "name",
  "parent",
  "nationality",
  "Religion & Caste",
  "Community",
  "Date of Birth",
  "admission",
  "Date of Admission",
  "Semester",
  "qualified",
  "fees paid",
  "scholarship",
  "dateLeft",
  "dateOfTcApplied",
  "extraCirricular",
  "conductCharacter",
];

const ListHeader = styled.div`
  display: flex;
`;

const TitleHeader = styled.div`
  display: flex;
  width: 100%;
  height: 16%;
`;

const NameHeader = styled.div`
  width: 70%;
`;

const ProfileContent = styled.div`
  font-weight: 600;
  font-size: 1.5em;
  color: darkblue;
  font-family: serif;
`;

const ProfileSubContent = styled(ProfileContent)`
  font-size: 0.9em;
  font-family: sans-serif;
`;

const ProfilePictureHeader = styled.img`
  height: 120px;
  width: 130px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

function ProfilePicture({ pic }) {
  return <ProfilePictureHeader src={pic} />;
}

function Profile({ profile }) {
  return (
    <ProfileHeader className="ProfileHeader">
      <TitleHeader>
        <Logo />
        <NameHeader>
          <ProfileContent>SUGUNA COLLEGE OF ARTS & SCIENCE</ProfileContent>
          <br></br>
          <ProfileSubContent>
            (Approved by Department of Higher Education, <br></br>Govt. of
            Tamilnadu)
          </ProfileSubContent>
          <br></br>
          <ProfileSubContent>
            (Affliated to Bharathiar University, Coimbatore)<br></br>Civil
            Aerodrome Post, Nehru Nagar, kalapatti Road, Coimbatore - 641014.
          </ProfileSubContent>
        </NameHeader>
        <ProfilePicture pic={profile.profilePic} />
      </TitleHeader>
      <ProfileSubContent>T.C. No.</ProfileSubContent>
      <ProfileSubContent>Registration No.</ProfileSubContent>
      <CategoryHeader>
        {categories.map((el, indx) => (
          <ListHeader>
            <List>
              <ProfileSubContent>{el}</ProfileSubContent>
            </List>
            <List style={{ "padding-left": "30px" }}>
              <ProfileSubContent>{profile[answers[indx]]}</ProfileSubContent>
            </List>
          </ListHeader>
        ))}
      </CategoryHeader>
    </ProfileHeader>
  );
}

export default Profile;
