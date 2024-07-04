export class DocumentResponse {
  id: number;
  fileName: string;
  downloadPath: string;
  postId: number;
  createdAt: Date;
  updatedAt: Date;
  deleteAt: Date | null;
}
