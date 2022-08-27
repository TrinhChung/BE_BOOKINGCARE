import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import doctorController from "../controllers/doctorController";
import patientController from "../controllers/patientController";
import specialtyController from "../controllers/specialtyController";
import clinicController from "../controllers/clinicController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/crud", homeController.getCRUD);

  router.post("/post-crud", homeController.postCRUD);
  router.get("/get-crud", homeController.getUsers);

  router.get("/edit-crud", homeController.getEditCRUD);

  router.post("/put-crud", homeController.putCRUD);
  router.get("/delete-crud", homeController.deleteCRUD);

  router.post("/api/login", userController.handleLogin);
  router.get("/api/get-all-users", userController.handleGetAllUsers);
  router.get("/api/get-user-by-id", userController.handleGetUserById);
  router.post("/api/create-new-user", userController.handleCreateNewUser);
  router.put("/api/edit-user", userController.handleEditUser);
  router.delete("/api/delete-user", userController.handleDeleteUser);

  router.get("/api/allcode", userController.getAllCode);
  router.get("/api/top-doctor-home", doctorController.getTopDoctorHome);

  router.get("/api/top-doctor-home", doctorController.getTopDoctorHome);
  router.get("/api/get-all-doctor", doctorController.getAllDoctors);
  router.post("/api/save-info-doctor", doctorController.postInfoDoctor);

  router.get(
    "/api/get-detail-doctor-by-id",
    doctorController.getDetailDoctorById
  );

  router.post("/api/bulk-create-schedule", doctorController.bulkCreateSchedule);

  router.get(
    "/api/get-schedule-doctor-by-date",
    doctorController.getScheduleDoctorByDate
  );

  router.get(
    "/api/get-extra-doctor-info-by-id",
    doctorController.getExtraInfoDoctorById
  );
  router.get(
    "/api/get-profile-doctor-by-id",
    doctorController.getProfileDoctorById
  );

  router.post(
    "/api/patient-book-appointment",
    patientController.postBookAppointment
  );

  router.get(
    `/api/verify-book-appointment`,
    patientController.postVerifyBookAppointment
  );

  router.post(
    "/api/patient-book-doctor-accept",
    patientController.postBookDoctorAccept
  );

  router.post(
    `/api/create-new-specialty`,
    specialtyController.createNewSpecialty
  );

  router.get("/api/get-specialty", specialtyController.getSpecialty);

  router.get(
    "/api/get-detail-specialty",
    specialtyController.getDetailSpecialty
  );

  router.post(`/api/create-new-clinic`, clinicController.createNewClinic);

  router.get("/api/get-clinic", clinicController.getClinic);

  router.get("/api/get-detail-clinic", clinicController.getDetailClinic);

  router.get(
    "/api/get-list-patient-for-doctor",
    doctorController.getListPatientForDoctor
  );

  router.post(`/api/create-new-handbook`, doctorController.createNewHandleBook);

  router.get(`/api/get-handbooks`, doctorController.getHandBook);

  router.get(`/api/get-detail-handbooks`, doctorController.getDetailHandBook);

  return app.use("/", router);
};

module.exports = initWebRoutes;
