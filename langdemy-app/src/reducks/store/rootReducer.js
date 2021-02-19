import { usersReducer as users } from "../users/reducers";
import express from "../lessonReady/expressReducer";
import schedule from "../schedule/schedule.module";

export default {
  users,
  express,
  schedule,
};
