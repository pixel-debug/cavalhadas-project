import { MemberUseCase } from "../../domain/useCases/memberUseCase";
import { MemberController } from "../memberController";
import mockedData from "./mockedData";

jest.mock("../../domain/useCases/memberUseCase");

const MemberUseCaseMock = MemberUseCase as jest.Mock<MemberUseCase>;

describe("Member UseCase tests", () => {
  let memberUseCaseMock: jest.Mocked<MemberUseCase>;
  let memberController: MemberController;

  beforeEach(() => {
    memberUseCaseMock = new MemberUseCaseMock() as jest.Mocked<MemberUseCase>;
    memberController = new MemberController(memberUseCaseMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("get", () => {
    it("should return a member by id", async () => {
      memberUseCaseMock.get.mockResolvedValue(mockedData.mockMember1);

      const mockRequest = { params: { id: "1" } } as any;
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as any;

      await memberController.get(mockRequest, mockResponse);

      expect(memberUseCaseMock.get).toHaveBeenCalledWith(1);
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockedData.mockMember1);
    });

    it("should handle errors", async () => {
      const errorMessage = "Internal Server Error";
      memberUseCaseMock.get.mockRejectedValue(new Error(errorMessage));

      const mockRequest = {} as any;
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as any;

      await memberController.get(mockRequest, mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: errorMessage });
    });

    it("should return all members", async () => {
      memberUseCaseMock.getAll.mockResolvedValue(mockedData.mockedMemberData);

      const mockRequest = {} as any;
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as any;

      await memberController.get(mockRequest, mockResponse);

      expect(memberUseCaseMock.getAll).toHaveBeenCalledWith(1);
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(
        mockedData.mockedMemberData
      );
    });

    it("should handle errors", async () => {
      const errorMessage = "Internal Server Error";
      memberUseCaseMock.getAll.mockRejectedValue(new Error(errorMessage));

      const mockRequest = {} as any;
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as any;

      await memberController.getAll(mockRequest, mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });

  describe("create", () => {
    it("should create a member", async () => {
      memberUseCaseMock.create.mockResolvedValue(mockedData.mockMember1);

      const mockRequest = { body: mockedData.mockedCreateMember } as any;
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as any;

      await memberController.create({ body: mockRequest }, mockResponse);

      expect(memberUseCaseMock.create).toHaveBeenCalledWith(1);
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockedData.mockMember1);
    });

    it("should handle errors", async () => {
      const errorMessage = "Internal Server Error";
      memberUseCaseMock.create.mockRejectedValue(new Error(errorMessage));

      const mockRequest = {} as any;
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as any;

      await memberController.create(mockRequest, mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });

  describe("update", () => {
    it("should update an existing member", async () => {
      const memberId = "1";
      const updatedMemberData = { name: "Updated Name" };

      memberUseCaseMock.update.mockResolvedValue();
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as any;

      await memberController.update(
        { params: { id: memberId }, body: updatedMemberData },
        mockResponse
      );

      expect(memberUseCaseMock.update).toHaveBeenCalledWith(
        memberId,
        updatedMemberData
      );
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockedData.mockMember1);
    });

    it("should handle errors", async () => {
      const errorMessage = "Internal Server Error";
      memberUseCaseMock.update.mockRejectedValue(new Error(errorMessage));

      const mockRequest = {} as any;
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as any;

      await memberController.update(mockRequest, mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });

  describe("delete", () => {
    it("should delete an existing member", async () => {
      const memberId = "1";
      memberUseCaseMock.delete.mockResolvedValue();
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as any;

      await memberController.delete({ params: { id: memberId } }, mockResponse);

      expect(memberUseCaseMock.delete).toHaveBeenCalledWith(memberId);
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockedData.mockMember1);
    });

    it("should handle errors", async () => {
      const errorMessage = "Internal Server Error";
      memberUseCaseMock.delete.mockRejectedValue(new Error(errorMessage));

      const mockRequest = {} as any;
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as any;

      await memberController.delete(mockRequest, mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });
});
