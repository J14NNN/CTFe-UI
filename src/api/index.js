//index.js
import axios from "../utils/request";
import path from "./path";

const api = {
  getCookies() {
    return axios.get(path.baseUrl + path.GetCookies);
  },
  queryAllUsers() {
    return axios.get(path.baseUrl + path.QueryAllUsers);
  },
  queryUsersByKeyword(keyword) {
    return axios.get(path.baseUrl + path.QueryUserskeyword, {
      params: { keyword },
    });
  },
  userRegister(userData) {
    return axios.post(path.baseUrl + path.UserRegister, userData);
  },
  userLogin(credentials) {
    return axios.post(path.baseUrl + path.UserLogin, credentials);
  },
  userLogout() {
    return axios.post(path.baseUrl + path.UserLogout);
  },
  deleteUser(userId) {
    return axios.delete(path.baseUrl + path.DeleteUser + `/${userId}`);
  },
  updateUser(userId, userData) {
    return axios.put(path.baseUrl + path.UpdateUser + `/${userId}`, userData);
  },
  queryAllGroups() {
    return axios.get(path.baseUrl + path.QueryAllGroups);
  },
  queryGroup(groupId) {
    return axios.get(path.baseUrl + path.QueryGroup + `/${groupId}`);
  },
  addGroup(groupData) {
    return axios.post(path.baseUrl + path.AddGroup, groupData);
  },
  deleteGroup(groupId) {
    return axios.delete(path.baseUrl + path.DeleteGroup + `/${groupId}`);
  },
  updateGroup(groupId, groupData) {
    return axios.put(path.baseUrl + path.UpdateGroup + `/${groupId}`, groupData);
  },
  queryAllChallenges() {
    return axios.get(path.baseUrl + path.QueryAllChallenges);
  },
  queryChallenge(challengeId) {
    return axios.get(path.baseUrl + path.QueryChallenge + `/${challengeId}`);
  },
  addChallenge(challengeData) {
    return axios.post(path.baseUrl + path.AddChallenge, challengeData);
  },
  deleteChallenges(challengeId) {
    return axios.delete(path.baseUrl + path.DeleteChallenges + `/${challengeId}`);
  },
  updateChallenge(challengeId, challengeData) {
    return axios.put(
      path.baseUrl + path.UpdateChallenge + `/${challengeId}`,
      challengeData
    );
  },
};

export default api;