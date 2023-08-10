//path.js
const base = {
    baseUrl:"http://127.0.0.1:8080/",

    GetCookies:"/users/GetCookies",
    QueryAllUsers:"/users/QueryAllUsers",
    QueryUserskeyword:"/users/QueryUserskeyword",
    UserRegister:"/users/UserRegister",
    UserLogin:"/users/UserLogin",
    UserLogout:"/users/UserLogout",
    DeleteUser:"/users/DeleteUser",
    UpdateUser:"/users/UpdateUser",

    QueryAllGroups:"/groups/QueryAllGroups",
    QueryGroup:"/groups/QueryGroup",
    AddGroup:"/groups/AddGroup",
    DeleteGroup:"/groups/DeleteGroup",
    UpdateGroup:"/groups/UpdateGroup",

    QueryAllCompetitions:"/competitions/QueryAllCompetitions",
    QueryCompetition:"/competitions/QueryCompetition",
    AddCompetition:"/competitions/AddCompetition",
    DeleteCompetition:"/competitions/DeleteCompetition",
    UpdateCompetition:"/competitions/UpdateCompetition",

    QueryAllChallenges:"/challenges/QueryAllChallenges",
    QueryChallenge:"/challenges/QueryChallenge",
    AddChallenge:"/challenges/AddChallenge",
    DeleteChallenges:"/challenges/DeleteChallenges",
    UpdateChallenge:"/challenges/UpdateChallenge",


}

export default base;