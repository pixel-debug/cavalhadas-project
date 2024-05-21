// import { Request, Response } from "express";
// import { AdminUseCase } from "../../domain/useCases/adminUseCase";
// import { AdminController } from "../../controllers/adminController";
// import adminData from "../mockedData/admin";
// import { HttpMessages, HttpStatus } from "../../utils/httpResponse";

// jest.mock("../../domain/useCases/adminUseCase");

// const AdminUseCaseMock = AdminUseCase as jest.Mock<AdminUseCase>;

// describe("Admin useCase tests", () => {
//   let adminUseCaseMock: jest.Mocked<AdminUseCase>;
//   let adminController: AdminController;

//   beforeEach(() => {
//     adminUseCaseMock = new AdminUseCaseMock() as jest.Mocked<AdminUseCase>;
//     adminController = new AdminController(adminUseCaseMock);
//   });

//   describe("Get tests", () => {
//     test("Should return a list of admins", async () => {
//       const mockJson = jest.fn();
//       const mockStatus = jest.fn().mockReturnValue({ json: mockJson });
//       const mockRes = { status: mockStatus };

//       adminUseCaseMock.getAll.mockResolvedValue(adminData.adminData);
//       await adminController.getAll(
//         {} as Request,
//         mockRes as unknown as Response
//       );

//       expect(mockStatus).toHaveBeenCalledWith(HttpStatus.OK);
//       expect(mockJson).toHaveBeenCalledWith(adminData.adminData);
//     });

//     test("Should handle internal server error during getAll", async () => {
//       const mockJson = jest.fn();
//       const mockStatus = jest.fn().mockReturnValue({ json: mockJson });
//       const mockRes = { status: mockStatus };

//       // Mock adminUseCase behavior to throw error
//       adminUseCaseMock.getAll.mockRejectedValue(
//         new Error(HttpMessages.INTERNAL_SERVER_ERROR)
//       );

//       await adminController.getAll(
//         {} as Request,
//         mockRes as unknown as Response
//       );

//       expect(mockStatus).toHaveBeenCalledWith(HttpStatus.INTERNAL_SERVER_ERROR);
//       expect(mockJson).toHaveBeenCalledWith({
//         error: HttpMessages.INTERNAL_SERVER_ERROR,
//       });
//     });

//     test("Should return a certain admin", async () => {
//       const adminId = "1";
//       const admin = adminData.adminData.find(
//         (a) => a.id === adminData.admin1.id
//       );
//       const mockJson = jest.fn();
//       const mockStatus = jest.fn().mockReturnValue({ json: mockJson });
//       const mockRes = { status: mockStatus };

//       adminUseCaseMock.get.mockResolvedValue(admin);
//       await adminController.get(
//         { params: { id: adminId } } as unknown as Request,
//         mockRes as unknown as Response
//       );

//       expect(mockStatus).toHaveBeenCalledWith(HttpStatus.OK);
//       expect(mockJson).toHaveBeenCalledWith(admin);
//     });

//     test("Should handle internal server error during get", async () => {
//       const adminId = "1";
//       const mockJson = jest.fn();
//       const mockStatus = jest.fn().mockReturnValue({ json: mockJson });
//       const mockRes = { status: mockStatus };

//       adminUseCaseMock.get.mockRejectedValue(
//         new Error(HttpMessages.INTERNAL_SERVER_ERROR)
//       );

//       await adminController.get(
//         { params: { id: adminId } } as unknown as Request,
//         mockRes as unknown as Response
//       );

//       expect(mockStatus).toHaveBeenCalledWith(HttpStatus.INTERNAL_SERVER_ERROR);
//       expect(mockJson).toHaveBeenCalledWith({
//         error: HttpMessages.INTERNAL_SERVER_ERROR,
//       });
//     });
//   });

//   describe("Create tests", () => {
//     test("Should create a new admin", async () => {
//       const createdAdmin = { ...adminData.admin1 };

//       const mockJson = jest.fn();
//       const mockStatus = jest.fn().mockReturnValue({ json: mockJson });
//       const mockRes = { status: mockStatus };

//       adminUseCaseMock.create.mockResolvedValue(createdAdmin);

//       const mockReq = {
//         body: createdAdmin,
//       } as Request;

//       await adminController.create(mockReq, mockRes as unknown as Response);

//       expect(mockStatus).toHaveBeenCalledWith(HttpStatus.CREATED);
//       expect(mockJson).toHaveBeenCalledWith(createdAdmin);
//     });

//     test("Should handle internal server error during creation", async () => {
//       const createdAdmin = { ...adminData.admin1 };

//       const mockJson = jest.fn();
//       const mockStatus = jest.fn().mockReturnValue({ json: mockJson });
//       const mockRes = { status: mockStatus };

//       adminUseCaseMock.create.mockRejectedValue(
//         new Error(HttpMessages.INTERNAL_SERVER_ERROR)
//       );

//       const mockReq = {
//         body: createdAdmin,
//       } as Request;

//       await adminController.create(mockReq, mockRes as unknown as Response);

//       expect(mockStatus).toHaveBeenCalledWith(HttpStatus.INTERNAL_SERVER_ERROR);
//       expect(mockJson).toHaveBeenCalledWith({
//         error: HttpMessages.INTERNAL_SERVER_ERROR,
//       });
//     });
//   });

//   describe("Update tests", () => {
//     test("Should update an existing admin", async () => {
//       const adminId = "1";
//       const mockReq = {
//         params: {
//           id: adminId,
//         },
//         body: {
//           ...adminData.admin1,
//         },
//       };

//       const mockJson = jest.fn();
//       const mockStatus = jest.fn().mockReturnValue({ json: mockJson });
//       const mockRes = { status: mockStatus };

//       adminUseCaseMock.update.mockResolvedValue();
//       await adminController.update(mockReq, mockRes);

//       expect(adminUseCaseMock.update).toHaveBeenCalledWith(
//         Number(adminId),
//         mockReq.body
//       );
//       expect(mockStatus).toHaveBeenCalledWith(HttpStatus.OK);
//       expect(mockJson).toHaveBeenCalled();
//     });

//     test("Should handle internal server error during update", async () => {
//       const adminId = "1";
//       const mockReq = {
//         params: {
//           id: adminId,
//         },
//         body: adminData.admin1,
//       };

//       const mockJson = jest.fn();
//       const mockStatus = jest.fn().mockReturnValue({ json: mockJson });
//       const mockRes = { status: mockStatus };

//       adminUseCaseMock.update.mockRejectedValue(
//         new Error(HttpMessages.INTERNAL_SERVER_ERROR)
//       );

//       await adminController.update(mockReq, mockRes);

//       expect(adminUseCaseMock.update).toHaveBeenCalledWith(
//         Number(adminId),
//         adminData.admin1
//       );
//       expect(mockStatus).toHaveBeenCalledWith(HttpStatus.INTERNAL_SERVER_ERROR);
//       expect(mockJson).toHaveBeenCalledWith({
//         error: HttpMessages.INTERNAL_SERVER_ERROR,
//       });
//     });
//   });

//   describe("Delete tests", () => {
//     test("Should delete an existing admin", async () => {
//       const adminId = "1";
//       const mockReq = {
//         params: {
//           id: adminId,
//         },
//       };

//       const mockJson = jest.fn();
//       const mockStatus = jest.fn().mockReturnValue({ json: mockJson });
//       const mockRes = { status: mockStatus };

//       adminUseCaseMock.delete.mockResolvedValue();
//       await adminController.delete(mockReq, mockRes);

//       expect(adminUseCaseMock.delete).toHaveBeenCalledWith(Number(adminId));
//       expect(mockStatus).toHaveBeenCalledWith(HttpStatus.OK);
//       expect(mockJson).toHaveBeenCalled();
//     });

//     test("Should handle internal server error during deletion", async () => {
//       const adminId = "1";
//       const mockReq = {
//         params: {
//           id: adminId,
//         },
//       };

//       const mockJson = jest.fn();
//       const mockStatus = jest.fn().mockReturnValue({ json: mockJson });
//       const mockRes = { status: mockStatus };

//       adminUseCaseMock.delete.mockRejectedValue(
//         new Error(HttpMessages.INTERNAL_SERVER_ERROR)
//       );
//       await adminController.delete(mockReq, mockRes);

//       expect(adminUseCaseMock.delete).toHaveBeenCalledWith(Number(adminId));
//       expect(mockStatus).toHaveBeenCalledWith(HttpStatus.INTERNAL_SERVER_ERROR);
//       expect(mockJson).toHaveBeenCalledWith({
//         error: HttpMessages.INTERNAL_SERVER_ERROR,
//       });
//     });
//   });
// });
